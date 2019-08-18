import {RouterModule, Routes} from '@angular/router';
import {TabPage} from './tab.page';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {
        path: 'tab',
        component: TabPage,
        children:
            [
                {
                    path: 'home',
                    children:
                        [
                            {
                                path: '',
                                loadChildren: '../home-results/home-results.module#HomeResultsPageModule'
                            }
                        ]
                },
                {
                    path: 'settings',
                    children:
                        [
                            {
                                path: '',
                                loadChildren: '../settings/settings.module#SettingsPageModule'
                            }
                        ]
                },
                {
                    path: 'about',
                    children:
                        [
                            {
                                path: '',
                                loadChildren: '../about/about.module#AboutPageModule'
                            }
                        ]
                },
                {
                    path: '',
                    redirectTo: '/tab/home',
                    pathMatch: 'full'
                }
            ]
    },
    {
        path: '',
        redirectTo: '/tab/home',
        pathMatch: 'full'
    }
];
@NgModule({
    imports:
        [
            RouterModule.forChild(routes)
        ],
    exports:
        [
            RouterModule
        ]
})
export class TabsPageRoutingModule {}
