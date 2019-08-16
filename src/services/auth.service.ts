import {Injectable} from '@angular/core';
import {BaseCustomService} from './base-custom.service';
import {AuthModel} from '../models/auth.model';
import {ApiProvider} from '../providers/api.provider';
import {ApiConfiguration} from "../swagger/api-configuration";

export const STORAGE_KEY_AUTH = "current_auth";
export const STORAGE_KEY_LOGIN = "current_login";

export const USER_EVENT_CHANGE = 'user:change';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseCustomService {
  private _config: ApiConfiguration;

  constructor(
    private api_provider: ApiProvider,
    protected config: ApiConfiguration
  ) {
    super();
    this._config = this.config
  }

  logout() {
    let lthis = this;
    return new Promise(function (resolve, reject) {
      lthis.api_provider.post('api/logout').subscribe(
        (resp: any) => {
          lthis.clearLocal();
          //                            lthis.events.publish(USER_EVENT_CHANGE);
          resolve(resp);
        },
        (err) => {
          lthis.clearLocal();
          //                    lthis.events.publish(USER_EVENT_CHANGE);
          reject(err);
        }
      );
    });
  }

  login(username: string, password: string) {
    var body = {
      "username": username,
      "password": password,
      "grant_type": this._config.grant_type,
      "client_id": this._config.client_id,
      "client_secret": this._config.client_secret
    };
    let lthis = this;
    return new Promise<AuthModel>(function (resolve, reject) {
      lthis.api_provider.form('api/login', body).subscribe(
        (resp: any) => {
          let auth = new AuthModel();
          auth.initialize(resp);
          lthis.setLocalAuth(auth);
          resolve(auth);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }


  storeLogin(username: string, password: string) {
    this.setLocal(STORAGE_KEY_LOGIN, {
      'username': username,
      'password': password,
    });
    //            lthis.events.publish(STORAGE_KEY_LOGIN);

  }

  getLogin() {
    return this.getLocal(STORAGE_KEY_LOGIN);
  }

  getLocalAuth(): AuthModel {
    let auth = this.getLocal(STORAGE_KEY_AUTH);

    let obj: AuthModel = new AuthModel();
    obj.initialize(auth);
    return obj;
  }

  setLocalAuth(auth: AuthModel) {
    this.setLocal(STORAGE_KEY_AUTH, auth);
    return this;
  }

  isGranted(): boolean {
    let auth = this.getLocalAuth();
    if (auth) {
      if (auth.getAccess_token() && !auth.tokenExpired()) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
