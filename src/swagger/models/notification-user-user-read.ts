/* tslint:disable */
import { NotificationUserRead } from './notification-user-read';
export interface NotificationUserUserRead {
  id?: number;
  notification?: NotificationUserRead;
  readed?: boolean;
  deleted?: boolean;
  acepted?: boolean;
  createdDate?: string;
}
