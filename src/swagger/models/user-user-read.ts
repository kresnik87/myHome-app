/* tslint:disable */
import { HomeUserRead } from './home-user-read';
import { NotificationUserUserRead } from './notification-user-user-read';
import { FinanceStatusUserRead } from './finance-status-user-read';
export interface UserUserRead {
  home?: HomeUserRead;
  id?: number;
  surnames?: string;
  image?: string;
  phone?: string;
  address?: string;
  notifications?: Array<NotificationUserUserRead>;
  name?: string;
  financeStatus?: FinanceStatusUserRead;
  username?: string;
  email?: string;
  enabled?: boolean;
  lastLogin?: string;
  notificationsTypeRequest?: string;
  countNotification?: number;
}
