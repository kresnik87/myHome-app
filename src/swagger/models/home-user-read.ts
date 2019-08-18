/* tslint:disable */
import { BudgetUserRead } from './budget-user-read';
export interface HomeUserRead {
  id?: number;
  bills?: Array<string>;
  createDate?: string;
  updatedDate?: string;
  address?: string;
  name?: string;
  budgets?: Array<BudgetUserRead>;
  homeIncome?: number;
  homeExpense?: number;
}
