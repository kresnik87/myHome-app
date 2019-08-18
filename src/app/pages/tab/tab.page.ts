import {Component, OnInit} from '@angular/core';
import {UserCustomService} from '../../../services/user-custom.service';
import {UserService} from '../../../swagger/services';
import {UserUserRead} from '../../../swagger/models/user-user-read';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.page.html',
    styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {
    public countNotif: number;
    public userLogged:UserUserRead;

    constructor(
        public userCustomService:UserCustomService,
        public userService:UserService
    ) {
    }

    ngOnInit() {
        this.loaderAllData();
    }

    loaderAllData(){
        this.userCustomService.getCountNotification().then((result)=>{
            if(result){
                this.countNotif=result;
            }
        });
        this.userCustomService.getProfile().then((profile)=>{
            if(profile){
                this.userLogged=profile;
                console.log(this.userLogged);
            }
        })
    }
}
