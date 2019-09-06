import {Component, Input, OnInit} from '@angular/core';
import {BudgetCatBudgetCatRead} from '../../../swagger/models/budget-cat-budget-cat-read';

@Component({
    selector: 'app-budget-cmp',
    templateUrl: './budget-cmp.component.html',
    styleUrls: ['./budget-cmp.component.scss']
})
export class BudgetCmpComponent implements OnInit {
    @Input() cat: BudgetCatBudgetCatRead;
    @Input() bills: number;
    public valuePercentage:number;
    public color:string;

    constructor() {
    }

    ngOnInit() {
        this.calculatePercentage();
    }

    calculatePercentage(){
        this.valuePercentage=((this.bills*100)/this.cat.amount)/100;
        if(this.valuePercentage<=0.5){
            this.color="sucess";
        }else if(this.valuePercentage>0.5&&this.valuePercentage<0.7){
            this.color="warning";
        }else{
            this.color="danger"
        }
    }
}
