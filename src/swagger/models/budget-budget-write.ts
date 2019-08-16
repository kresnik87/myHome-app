/* tslint:disable */
import { HomeBudgetWrite } from './home-budget-write';
export interface BudgetBudgetWrite {
  dateUpdated?: string;
  status?: string;
  coef?: number;
  category?: Array<string>;
  home?: HomeBudgetWrite;
}
