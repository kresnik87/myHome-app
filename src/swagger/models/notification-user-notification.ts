/* tslint:disable */
import { NotificationNotification } from './notification-notification';
export interface NotificationUserNotification {
  id?: number;
  notification?: NotificationNotification;
  user?: string;
  readed?: boolean;
  deleted?: boolean;
  acepted?: boolean;
  createdDate?: string;
}
