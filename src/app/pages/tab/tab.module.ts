import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TabPage } from './tab.page';
import {TabsPageRoutingModule} from './tabs-routing.module';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [TabPage]
})
export class TabPageModule {}
