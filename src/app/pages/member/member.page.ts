import {Component, OnInit} from '@angular/core';
import {HomeHomeRead} from '../../../swagger/models/home-home-read';
import {HomeService} from '../../../swagger/services';
import {ToastProvider} from '../../../providers/toast.provider';
import {ActivatedRoute, Router} from '@angular/router';
import {UserHomeRead} from '../../../swagger/models/user-home-read';
import {forEach} from '@angular-devkit/schematics';

@Component({
    selector: 'app-member',
    templateUrl: './member.page.html',
    styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {
    public home: HomeHomeRead;
    public memberList:UserHomeRead[]=[];

    constructor(public homeService: HomeService, public toastProvider: ToastProvider, private route: ActivatedRoute, private router: Router) {
        this.route.queryParams.subscribe(params=>{
            if(this.router.getCurrentNavigation().extras.state){
                this.home=this.router.getCurrentNavigation().extras.state.home;
                console.log(this.home);
            }
        })
    }

    ngOnInit() {
    }
    public getMemberListofHome() {
        this.memberList = this.home.members;
    }
}
