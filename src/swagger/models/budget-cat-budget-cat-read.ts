/* tslint:disable */
import { CategoryBudgetCatRead } from './category-budget-cat-read';
export interface BudgetCatBudgetCatRead {
  id?: number;
  name?: string;
  budget?: string;
  amount?: number;
  frecuency?: string;
  startDate?: string;
  activeNotif?: boolean;
  category?: CategoryBudgetCatRead;
  automatic?: boolean;
  endDate?: string;
}
