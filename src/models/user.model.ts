import {BaseModel} from './base.model';
import {UserUserRead} from '../swagger/models/user-user-read';
import {HomeHomeRead} from '../swagger/models/home-home-read';
import {FinanceStatusFinanceRead} from '../swagger/models/finance-status-finance-read';



export class UserModel extends BaseModel implements UserUserRead
{
    id: number = null;
    name: string = null;
    surnames: string = null;
    address: string = null;
    home: HomeHomeRead= null;
    image: string = null;
    phone: string = null;
    financeStatus: FinanceStatusFinanceRead= null;
    username: string = null;
    email: string = null;
    countNotification: number = 0;

}
