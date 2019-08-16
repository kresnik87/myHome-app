import {Injectable} from '@angular/core';
import {BaseCustomService} from './base-custom.service';
import {UserModel} from '../custom-models/user.model';
import {HttpHeaders} from '@angular/common/http';

export const STORAGE_KEY_USER = "current_user";
import {ApiProvider} from '../providers/api.provider';
import {AuthService} from './auth.service';
import {ContactModel} from "../custom-models/contact.model";
import {UserUserWrite} from "../../swagger/models/user-user-write";
import {UserUserRead} from "../../swagger/models/user-user-read";


@Injectable({
  providedIn: 'root'
})
export class UserCustomService extends BaseCustomService {


  constructor(
    private api: ApiProvider,
    private auth_service: AuthService
  ) {
    super();
  }


  getLocalUser(force = false) {
    let lthis = this;
    return new Promise<UserModel>(function (resolve, reject) {
      if (lthis.auth_service.isGranted()) {
        if (force) {
          lthis.getProfile().then(
            (res) => {
              resolve(res);
            },
            (err) => {
              reject(err);
            }
          );
        } else {
          let data = lthis.getLocal(STORAGE_KEY_USER);
          if (data) {
            let obj: UserModel = new UserModel();
            obj.initialize(data);
            //                            lthis.setLocalUser(obj);
            resolve(obj);
          } else {
            lthis.getProfile().then(
              (res) => {
                resolve(res);
              },
              (err) => {
                reject(err);
              }
            );
          }

        }
      } else {
        reject(null);
      }
    });

  }

  getProfile() {
    let lthis = this;
    let config = {headers: new HttpHeaders().set("Accept", 'application/json')};

    return new Promise<UserModel>(function (resolve, reject) {
      lthis.api.get('api/me', null, config).subscribe(
        (res: any) => {
          let obj: UserModel = new UserModel();
          obj.initialize(res);
          lthis.setLocalUser(obj);
          resolve(obj);
        },
        (err) => {
          reject(err);
        });
    });
  }

  setUser(user: any) {
    let lthis = this;
    let config = {headers: new HttpHeaders().set("Accept", 'application/json')};

    return new Promise<UserModel>(function (resolve, reject) {
      lthis.api.put('api/me', JSON.stringify(user), config).subscribe(
        (res: any) => {
          let obj: UserModel = new UserModel();
          obj.initialize(res);
          lthis.setLocalUser(obj);
          resolve(obj);
        },
        (err) => {
          reject(err);
        });
    });
  }

  setLocalUser(user: UserModel) {
    //        this.events.publish(USER_EVENT_CHANGE);
    return this.setLocal(STORAGE_KEY_USER, user);
  }


  setNotToken(token: string) {
    let lthis = this;
    let config = {headers: new HttpHeaders().set("Accept", 'application/json')};

    return new Promise(function (resolve, reject) {
      lthis.api.get('api/me/token', null, config).subscribe(
        (res: any) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        });
    });
  }


  remember(email: string) {
    let lthis = this;
    return new Promise(function (resolve, reject) {
      lthis.api.post('api/reset-password', {'email': email}).subscribe(
        (resp: any) => {
          resolve(resp);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  sendContact(id: number, contactModel:ContactModel) {
    let lthis = this;
    return new Promise(function (resolve, reject) {
      lthis.api.post('api/contact/'+id, JSON.stringify(contactModel)).subscribe(
        (resp: any) => {
          resolve(resp);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  login(username: string, password: string) {
    let lthis = this;
    return new Promise<UserModel>(function (resolve, reject) {
      lthis.auth_service.login(username, password).then(
        (res) => {
          lthis.getProfile().then(
            (res) => {
              resolve(res);
            },
            (err) => {
              reject(err);
            }
          );
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
  register(user: UserUserWrite) {
    let lthis = this;
    let config = {headers: new HttpHeaders().set("Content-Type", 'application/json')};
    return new Promise<UserUserRead>(function (resolve, reject) {
      lthis.api.post('api/register', JSON.stringify(user),config).subscribe(
        (res: any) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        });
    });
  }
}
