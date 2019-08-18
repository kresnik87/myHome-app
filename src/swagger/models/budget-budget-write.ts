/* tslint:disable */
import { BudgetCatBudgetWrite } from './budget-cat-budget-write';
import { HomeBudgetWrite } from './home-budget-write';
export interface BudgetBudgetWrite {
  dateUpdated?: string;
  status?: string;
  coef?: number;
  category?: Array<BudgetCatBudgetWrite>;
  home?: HomeBudgetWrite;
}
