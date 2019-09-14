import {Component, OnInit} from '@angular/core';
import {HomeHomeRead} from '../../../swagger/models/home-home-read';
import {HomeService} from '../../../swagger/services/home.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Location} from '@kresnik87/ng-gmaps-lib';
import PlaceResult = google.maps.places.PlaceResult;
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {NavController, Platform, ToastController} from '@ionic/angular';
import {HomeHomeWrite} from '../../../swagger/models/home-home-write';
import {TOAST_CLASS_ERROR, TOAST_CLASS_SUCCESS, ToastProvider} from '../../../providers/toast.provider';

@Component({
    selector: 'app-home-edit',
    templateUrl: './home-edit.page.html',
    styleUrls: ['./home-edit.page.scss'],
})
export class HomeEditPage implements OnInit {
    public home: HomeHomeRead;
    public loading: boolean = false;
    public homeForm: FormGroup;
    public zoom: number;
    public lat: number;
    public lng: number;
    public params:HomeService.PutHomeItemParams;

    constructor(
        public homeService: HomeService,
        public activeRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        public route: Router,
        public geolocation: Geolocation,
        public platform: Platform,
        public toastProvider:ToastProvider,
        public navCtrl:NavController
    ) {
        this.initForm();
        this.params=<HomeService.PutHomeItemParams>{};
    }

    ngOnInit() {
        if (this.route.url.split('/').reverse()[0]) {
            let id = this.route.url.split('/').reverse()[0];
            this.getHome(id);
        }

        this.setCurrentPosition();
    }

    getHome(id: string | number) {
        this.loading = true;
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (typeof (id) == 'number') {
                    id = id.toString();
                }
                this.homeService.getHomeItem(id).subscribe(resp => {
                    if (resp) {
                        this.home = resp;
                        console.log(this.home);
                        this.homeForm.get('name').setValue(this.home.name);
                        this.homeForm.get('telephone').setValue(this.home.telephone);
                        this.lat = this.home.lat;
                        this.lng = this.home.lng;
                        this.loading = false;
                    }
                }, error1 => {
                    reject(error1);
                });
            }, 100);
        });
    }

    public initForm() {
        this.homeForm = this.formBuilder.group({
            name: [null, Validators.nullValidator],
            telephone: [null, Validators.nullValidator]
        });

    }

    save()
    {
        this.toastProvider.loadingMsg();
        let home: HomeHomeWrite =
            {
                name: this.homeForm.get("name").value,
                telephone: this.homeForm.get("telephone").value,
                address:this.home.address,
                lat: this.lat,
                lng:this.lng
            };

        this.params.id=this.home.id.toString();
        this.params.home=home;
        setTimeout(()=>{
            this.homeService.putHomeItem(this.params).subscribe(
                (res:HomeHomeRead) =>
                {
                    this.toastProvider.loadingComplete();
                    this.toastProvider.toastMsgTrans("home.success_msg",TOAST_CLASS_SUCCESS).then((res)=>{
                        this.navCtrl.back();
                    });
                    console.log(res);
                },
                (err) =>
                {
                    this.toastProvider.loadingComplete();
                    this.toastProvider.transformError(err);
                    this.navCtrl.back();
                    console.error(err);
                }
            );
        },2000);

        this.toastProvider.loadingComplete();
    }
    onAutocompleteSelected(result: PlaceResult) {
        console.log('onAutocompleteSelected: ', result);
        this.home.address=result.formatted_address;
    }

    onLocationSelected(location: Location) {
        console.log('onLocationSelected: ', location);
        this.lat = location.latitude;
        this.lng = location.longitude;
        this.zoom=18;
    }

    private setCurrentPosition() {
        if (this.platform.is('cordova')) {
            this.geolocation.getCurrentPosition()
                .then(position => {
                    if (this.lat == null && this.lng == null) {
                        this.lat = position.coords.latitude;
                        this.lng = position.coords.longitude;
                    }
                    this.zoom = 12;
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    if (this.lat == null && this.lng == null) {
                        this.lat = position.coords.latitude;
                        this.lng = position.coords.longitude;
                    }
                    this.zoom = 12;
                });
            }
        }

    }
}
