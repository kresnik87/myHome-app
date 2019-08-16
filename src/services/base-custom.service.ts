import {Injectable, EventEmitter} from '@angular/core';
import {Subscription, Observable, Subscriber} from 'rxjs';

/*
 * Angular Version off ionic baseService
 */
@Injectable({
    providedIn: 'root'
})
export class BaseCustomService
{


    constructor()
    {
    }


    getLocal(key: string)
    {
        let result = JSON.parse(localStorage.getItem(key));
        return result;
    }

    setLocal(key: string, item: any)
    {
        localStorage.setItem(key, JSON.stringify(item));
        return this;
    }

    clearLocal()
    {
        let returned: number = 0;
        let todelete = [
            "current_auth", "current_user"
        ];
        for (let item of todelete)
        {
            this.removeLocal(item);
            returned++;
            if (returned >= todelete.length)
            {
                return this;
            }

        }
    }

    removeLocal(key: string)
    {
        localStorage.removeItem(key);
        return this;
    }



}
