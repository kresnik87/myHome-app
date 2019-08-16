/* tslint:disable */
import { NotificationUserHomeRead } from './notification-user-home-read';
export interface HomeHomeRead {
  lng?: number;
  id?: number;
  bills?: Array<string>;
  createDate?: string;
  updatedDate?: string;
  address?: string;
  lat?: number;
  members?: Array<string>;
  telephone?: string;
  name?: string;
  owner?: string;
  requestNotif?: Array<NotificationUserHomeRead>;
  budgets?: Array<string>;
  homeIncome?: number;
}
