/* tslint:disable */
import { BudgetCatHomeRead } from './budget-cat-home-read';
export interface BudgetHomeRead {
  id?: number;
  dateCreated?: string;
  status?: string;
  coef?: number;
  category?: Array<BudgetCatHomeRead>;
}
