/* tslint:disable */
import { CategoryHomeRead } from './category-home-read';
export interface BudgetCatHomeRead {
  id?: number;
  name?: string;
  amount?: number;
  frecuency?: string;
  startDate?: string;
  category?: CategoryHomeRead;
  endDate?: string;
}
