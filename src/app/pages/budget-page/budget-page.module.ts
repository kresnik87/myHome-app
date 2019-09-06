import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BudgetPagePage } from './budget-page.page';
import {TranslateModule} from '@ngx-translate/core';
import {ComponentModule} from '../../components/component.module';

const routes: Routes = [
  {
    path: '',
    component: BudgetPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    RouterModule.forChild(routes)
  ],
  declarations: [BudgetPagePage]
})
export class BudgetPagePageModule {}
