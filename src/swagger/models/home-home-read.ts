/* tslint:disable */
import { UserHomeRead } from './user-home-read';
import { NotificationUserHomeRead } from './notification-user-home-read';
import { BudgetHomeRead } from './budget-home-read';
export interface HomeHomeRead {
  lng?: number;
  id?: number;
  bills?: Array<string>;
  createDate?: string;
  updatedDate?: string;
  address?: string;
  lat?: number;
  members?: Array<UserHomeRead>;
  telephone?: string;
  name?: string;
  owner?: UserHomeRead;
  requestNotif?: Array<NotificationUserHomeRead>;
  budgets?: Array<BudgetHomeRead>;
  homeIncome?: number;
  homeExpense?: number;
}
