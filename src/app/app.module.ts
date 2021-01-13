import {APP_INITIALIZER, NgModule, Provider} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

// Modal Pages
import {ImagePageModule} from './pages/modal/image/image.module';
import {SearchFilterPageModule} from './pages/modal/search-filter/search-filter.module';

// Components
import {NotificationsComponent} from './components/notifications/notifications.component';
import {ApiProvider} from '../providers/api.provider';
import {environment} from '../environments/environment';
import {ApiConfiguration} from '../swagger/api-configuration';
import {AuthInterceptor} from '../helpers/AuthInterceptor';
import {TabPageModule} from './pages/tab/tab.module';
import {TabPage} from './pages/tab/tab.page';
import {BudgetCmpComponent} from './components/budget-cmp/budget-cmp.component';
import {ComponentModule} from './components/component.module';
//External Libs
import {GmapsLibModule} from '@kresnik87/ng-gmaps-lib';
//Native
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Vibration} from '@ionic-native/vibration/ngx';

//Providers
import {ToastProvider} from '../providers/toast.provider';
//Material
import {MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from '@angular/material';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/lang/', '.json');
}

export function initApiConfiguration(config: ApiConfiguration): Function {
    return () => {
        config.rootUrl = environment.apiUrl;
        config.client_id = environment.client_id;
        config.client_secret = environment.client_secret;
        config.grant_type = environment.grant_type;
    };
}

export const INIT_API_CONFIGURATION: Provider = {
    provide: APP_INITIALIZER,
    useFactory: initApiConfiguration,
    deps: [ApiConfiguration],
    multi: true
};

@NgModule({
    declarations: [AppComponent, NotificationsComponent],
    imports: [
        BrowserModule,
        GmapsLibModule.forRoot({
            apiKey: '',
            libraries: ['places']
        }),
        BrowserAnimationsModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        ComponentModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        TabPageModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        HttpClientModule,
        ImagePageModule,
        SearchFilterPageModule
    ],
    entryComponents: [NotificationsComponent, BudgetCmpComponent],
    providers: [
        StatusBar,
        SplashScreen,
        ApiProvider,
        Geolocation,
        Vibration,
        ToastProvider,
        INIT_API_CONFIGURATION,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
