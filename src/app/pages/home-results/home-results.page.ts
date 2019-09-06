import {Component, OnInit} from '@angular/core';
import {
    NavController,
    MenuController
} from '@ionic/angular';

import {UserCustomService} from '../../../services/user-custom.service';
import {UserUserRead} from '../../../swagger/models/user-user-read';
import {HomeService} from '../../../swagger/services';
import {HomeHomeRead} from '../../../swagger/models/home-home-read';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home-results',
    templateUrl: './home-results.page.html',
    styleUrls: ['./home-results.page.scss']
})
export class HomeResultsPage implements OnInit {
    public userLogged: UserUserRead;
    public home: HomeHomeRead;
    public date: any = new Date();
    public loading: boolean = false;

    constructor(
        public navCtrl: NavController,
        public menuCtrl: MenuController,
        public userCustomService: UserCustomService,
        public homeService: HomeService,
        public router: Router
    ) {

    }


    ngOnInit(): void {
        this.menuCtrl.enable(true);
        this.loading = true;
        this.userCustomService.getLocalUser().then((user) => {
            this.userLogged = user;
            if (this.userLogged.home) {
                this.loadHome(this.userLogged.home.id).then(data => {
                    this.loading = false;
                    this.home = data;
                    console.log(this.home);
                }).catch(error => {
                    console.log(error);
                });
            }
        });
    }

    settings() {
        this.navCtrl.navigateForward('settings');
    }


    goEditHome(edit: boolean) {
        let params: any;
        if (edit) {
            this.router.navigate(['/home', this.home.id]).then((resp) => {
                if (resp) {
                    console.log('Navigation success: ' + this.home.id);
                } else {
                    console.log('Navigation failed!');
                }
            });
        } else {
            this.router.navigate(['/home']).then((resp) => {
                if (resp) {
                    console.log('Navigation success');
                } else {
                    console.log('Navigation failed!');
                }
            });
        }

    }

    loadHome(id: any) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.homeService.getHomeItem(id).subscribe(resp => {
                    if (resp) {
                        resolve(resp);
                    }
                }, error1 => {
                    reject(error1);
                });
            }, 5000);
        });
    }
}
