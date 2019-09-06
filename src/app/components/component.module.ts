import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {BudgetCmpComponent} from './budget-cmp/budget-cmp.component';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations:
    [
        BudgetCmpComponent
    ],
  imports:
    [
      CommonModule,
        TranslateModule.forChild(),
        IonicModule,
      RouterModule,
    ],
  exports:
    [
        BudgetCmpComponent
    ],
})
export class ComponentModule
{
}
