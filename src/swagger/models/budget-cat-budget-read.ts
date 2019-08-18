/* tslint:disable */
import { CategoryBudgetRead } from './category-budget-read';
export interface BudgetCatBudgetRead {
  id?: number;
  name?: string;
  amount?: number;
  frecuency?: string;
  startDate?: string;
  activeNotif?: boolean;
  category?: CategoryBudgetRead;
  automatic?: boolean;
  endDate?: string;
}
