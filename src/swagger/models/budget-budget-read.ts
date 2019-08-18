/* tslint:disable */
import { BudgetCatBudgetRead } from './budget-cat-budget-read';
import { HomeBudgetRead } from './home-budget-read';
export interface BudgetBudgetRead {
  id?: number;
  dateCreated?: string;
  dateUpdated?: string;
  status?: string;
  coef?: number;
  category?: Array<BudgetCatBudgetRead>;
  home?: HomeBudgetRead;
  coefStatus?: number;
}
