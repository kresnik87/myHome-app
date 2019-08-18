import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Pages } from './interfaces/pages';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public appPages: Array<Pages>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private translate: TranslateService,
    private statusBar: StatusBar,
    public navCtrl: NavController
  ) {


    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initializeTranslate();
    }).catch(() => {});
  }



  initializeTranslate()
  {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang(environment.lang);// Set your language here
    //change this for select browse lang
    if (this.translate.getBrowserLang() !== undefined)
    {
      this.translate.use(this.translate.getBrowserLang());
    } else
    {
      this.translate.use(this.translate.getDefaultLang());
    }
  }
}
