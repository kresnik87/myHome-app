/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { BillService } from './services/bill.service';
import { BudgetCatService } from './services/budget-cat.service';
import { BudgetService } from './services/budget.service';
import { DeviceService } from './services/device.service';
import { ExpensesService } from './services/expenses.service';
import { FinanceStatusService } from './services/finance-status.service';
import { HomeService } from './services/home.service';
import { IncomeService } from './services/income.service';
import { UserService } from './services/user.service';
import { NotificationUserService } from './services/notification-user.service';
import { NotificationService } from './services/notification.service';
import { ProductService } from './services/product.service';
import { ShoppingListService } from './services/shopping-list.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    BillService,
    BudgetCatService,
    BudgetService,
    DeviceService,
    ExpensesService,
    FinanceStatusService,
    HomeService,
    IncomeService,
    UserService,
    NotificationUserService,
    NotificationService,
    ProductService,
    ShoppingListService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
