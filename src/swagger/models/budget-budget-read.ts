/* tslint:disable */
import { HomeBudgetRead } from './home-budget-read';
export interface BudgetBudgetRead {
  id?: number;
  dateCreated?: string;
  dateUpdated?: string;
  status?: string;
  coef?: number;
  category?: Array<string>;
  home?: HomeBudgetRead;
}
