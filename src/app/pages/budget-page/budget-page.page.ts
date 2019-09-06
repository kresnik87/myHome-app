import {Component, OnInit} from '@angular/core';
import {UserUserRead} from '../../../swagger/models/user-user-read';
import {HomeHomeRead} from '../../../swagger/models/home-home-read';
import {UserCustomService} from '../../../services/user-custom.service';
import {BudgetBudgetRead} from '../../../swagger/models/budget-budget-read';
import {BudgetService} from '../../../swagger/services/budget.service';

@Component({
    selector: 'app-budget-page',
    templateUrl: './budget-page.page.html',
    styleUrls: ['./budget-page.page.scss'],
})
export class BudgetPagePage implements OnInit {
    public userLogged: UserUserRead;
    public home: HomeHomeRead;
    public budgetList: BudgetBudgetRead[] = [];
    public loading: boolean = false;
    public today: Date = new Date();
    public params: BudgetService.GetBudgetCollectionParams;

    constructor(
        public userCustomService: UserCustomService,
        public budgetService: BudgetService
    ) {
        this.params = <BudgetService.GetBudgetCollectionParams>{};

    }

    ngOnInit() {
        this.loading = true;
        this.userCustomService.getLocalUser().then((user) => {
            this.userLogged = user;
            this.home = this.userLogged.home;
            if (this.home != null) {
                this.loadAllBudgets(this.home.id).then((result: BudgetBudgetRead[]) => {
                    this.loading = false;
                    this.budgetList = result;
                });
            } else {
                this.loading = false;
                console.log('User dont have home');
            }

        }).catch(reason => {
            console.log(reason);
        });

    }

    loadAllBudgets(homeId: number) {
        this.params.homeId = homeId;
        return new Promise((resolve, reject) => {
            this.budgetService.getBudgetCollection(this.params).subscribe(resp => {
                resolve(resp['hydra:member']);
            }, error1 => {
                console.log(error1);
                reject(error1);
            });
        });
    }
}
