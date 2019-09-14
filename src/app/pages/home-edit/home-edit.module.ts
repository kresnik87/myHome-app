import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {HomeEditPage} from './home-edit.page';
import {TranslateModule} from '@ngx-translate/core';
import {GmapsLibModule} from '@kresnik87/ng-gmaps-lib';
import {MatFormFieldModule, MatInputModule} from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: HomeEditPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GmapsLibModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        TranslateModule.forChild(),
        RouterModule.forChild(routes)
    ],
    declarations: [HomeEditPage]
})
export class HomeEditPageModule {
}
