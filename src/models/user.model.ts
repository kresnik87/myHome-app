import {BaseModel} from './base.model';



export class UserModel extends BaseModel
{
    id: number = null;
    name: string = null;
    surnames: string = null;
    address: string = null;
    nif: string = null;
    image: string = null;
    phone: string = null;
    country: string = null;
    state: string = null;
    postalCode: string = null;
    city: string = null;
    gender: string = null;
    birthDate: string = null;
    civilStatus: string = null;
    username: string = null;
    email: string = null;
    countNotification: number = 0;

}
