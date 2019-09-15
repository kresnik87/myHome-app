/* tslint:disable */
import { UserNotificationRead } from './user-notification-read';
export interface NotificationUserNotificationRead {
  id?: number;
  notification?: string;
  user?: UserNotificationRead;
  readed?: boolean;
  deleted?: boolean;
  acepted?: boolean;
  createdDate?: string;
}
