/* tslint:disable */
import { UserHomeWrite } from './user-home-write';
import { NotificationUserHomeWrite } from './notification-user-home-write';
export interface HomeHomeWrite {
  address?: string;
  lat?: number;
  lng?: number;
  telephone?: string;
  name?: string;
  owner?: UserHomeWrite;
  requestNotif?: Array<NotificationUserHomeWrite>;
}
