/* tslint:disable */
import { CategoryBudgetCatWrite } from './category-budget-cat-write';
export interface BudgetCatBudgetCatWrite {
  name?: string;
  budget?: string;
  amount?: number;
  frecuency?: string;
  startDate?: string;
  activeNotif?: boolean;
  category?: CategoryBudgetCatWrite;
  automatic?: boolean;
  endDate?: string;
}
