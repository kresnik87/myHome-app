import {Component, OnInit} from '@angular/core';
import {HomeHomeRead} from '../../../swagger/models/home-home-read';
import {HomeService} from '../../../swagger/services/home.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Location} from '@kresnik87/ng-gmaps-lib';
import PlaceResult = google.maps.places.PlaceResult;
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {Platform} from '@ionic/angular';
@Component({
    selector: 'app-home-edit',
    templateUrl: './home-edit.page.html',
    styleUrls: ['./home-edit.page.scss'],
})
export class HomeEditPage implements OnInit {
    public home: HomeHomeRead;
    public loading:boolean=false;
    public homeForm: FormGroup;
    public zoom: number;
    public lat: number;
    public lng: number;
    constructor(
        public homeService: HomeService,
        public activeRoute:ActivatedRoute,
        private formBuilder: FormBuilder,
        public route:Router,
        public geolocation: Geolocation,
        public platform: Platform,
    ) {
    }

    ngOnInit() {
        if(this.route.url.split('/').reverse()[0]){
            let id=this.route.url.split('/').reverse()[0];
            this.getHome(id)
        }
        this.initForm();
        this.setCurrentPosition();
    }

    getHome(id: string | number) {
        this.loading=true;
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (typeof (id) == 'number') {
                    id = id.toString();
                }
                this.homeService.getHomeItem(id).subscribe(resp => {
                    if (resp) {
                        this.home = resp;
                        console.log(this.home);
                        this.loading=false;
                    }
                }, error1 => {
                    reject(error1);
                });
            }, 100);
        });
    }

    public initForm(){
        this.homeForm = this.formBuilder.group({
            name: [null, Validators.nullValidator],
            address: [null, Validators.nullValidator],
            telephone: [null, Validators.nullValidator],
            lat: [null, Validators.nullValidator],
            lng: [null, Validators.nullValidator]
        });
    }
    public save(){

    }

    onAutocompleteSelected(result: PlaceResult) {
        console.log('onAutocompleteSelected: ', result);
    }

    onLocationSelected(location: Location) {
        console.log('onLocationSelected: ', location);
        this.lat = location.latitude;
        this.lng = location.longitude;
    }

    private setCurrentPosition() {
        if(this.platform.is("cordova")){
            this.geolocation.getCurrentPosition()
                .then(position => {
                    this.lat = position.coords.latitude;
                    this.lng = position.coords.longitude;
                    this.zoom = 12;
                })
                .catch(error => {
                    console.log(error);
                })
        }else{
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition((position) => {
                    this.lat = position.coords.latitude;
                    this.lng = position.coords.longitude;
                    this.zoom = 12;
                });
            }
        }

    }
}
