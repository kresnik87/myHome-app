/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UserUserRead } from '../models/user-user-read';
import { UserUserWrite } from '../models/user-user-write';
@Injectable({
  providedIn: 'root',
})
class UserService extends __BaseService {
  static readonly loginUserItemPath = '/api/login';
  static readonly logoutUserItemPath = '/api/logout';
  static readonly meUserItemPath = '/api/me';
  static readonly meputUserItemPath = '/api/me';
  static readonly imageUserCollectionPath = '/api/me/image';
  static readonly registerUserCollectionPath = '/api/register';
  static readonly getUserCollectionPath = '/api/users';
  static readonly postUserCollectionPath = '/api/users';
  static readonly getUserItemPath = '/api/users/{id}';
  static readonly putUserItemPath = '/api/users/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `UserService.LoginUserItemParams` containing the following parameters:
   *
   * - `username`:
   *
   * - `password`:
   *
   * - `grant_type`:
   *
   * - `client_secret`:
   *
   * - `client_id`:
   *
   * @return User resource created
   */
  loginUserItemResponse(params: UserService.LoginUserItemParams): __Observable<__StrictHttpResponse<UserUserRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;





    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/login`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserUserRead>;
      })
    );
  }
  /**
   * @param params The `UserService.LoginUserItemParams` containing the following parameters:
   *
   * - `username`:
   *
   * - `password`:
   *
   * - `grant_type`:
   *
   * - `client_secret`:
   *
   * - `client_id`:
   *
   * @return User resource created
   */
  loginUserItem(params: UserService.LoginUserItemParams): __Observable<UserUserRead> {
    return this.loginUserItemResponse(params).pipe(
      __map(_r => _r.body as UserUserRead)
    );
  }

  /**
   * @param params The `UserService.LogoutUserItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `user`: The new User resource
   *
   * @return User resource created
   */
  logoutUserItemResponse(params: UserService.LogoutUserItemParams): __Observable<__StrictHttpResponse<UserUserRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.user;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/logout`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserUserRead>;
      })
    );
  }
  /**
   * @param params The `UserService.LogoutUserItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `user`: The new User resource
   *
   * @return User resource created
   */
  logoutUserItem(params: UserService.LogoutUserItemParams): __Observable<UserUserRead> {
    return this.logoutUserItemResponse(params).pipe(
      __map(_r => _r.body as UserUserRead)
    );
  }

  /**
   * @return User resource response
   */
  meUserItemResponse(): __Observable<__StrictHttpResponse<UserUserRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/me`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserUserRead>;
      })
    );
  }
  /**
   * @return User resource response
   */
  meUserItem(): __Observable<UserUserRead> {
    return this.meUserItemResponse().pipe(
      __map(_r => _r.body as UserUserRead)
    );
  }

  /**
   * @param params The `UserService.MeputUserItemParams` containing the following parameters:
   *
   * - `username`:
   *
   * - `surnames`:
   *
   * - `plainPassword`:
   *
   * - `phone`:
   *
   * - `name`:
   *
   * - `email`:
   *
   * - `dni`:
   *
   * - `address`:
   *
   * - `user`: The updated User resource
   *
   * @return User resource updated
   */
  meputUserItemResponse(params: UserService.MeputUserItemParams): __Observable<__StrictHttpResponse<UserUserRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;








    __body = params.user;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/me`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserUserRead>;
      })
    );
  }
  /**
   * @param params The `UserService.MeputUserItemParams` containing the following parameters:
   *
   * - `username`:
   *
   * - `surnames`:
   *
   * - `plainPassword`:
   *
   * - `phone`:
   *
   * - `name`:
   *
   * - `email`:
   *
   * - `dni`:
   *
   * - `address`:
   *
   * - `user`: The updated User resource
   *
   * @return User resource updated
   */
  meputUserItem(params: UserService.MeputUserItemParams): __Observable<UserUserRead> {
    return this.meputUserItemResponse(params).pipe(
      __map(_r => _r.body as UserUserRead)
    );
  }

  /**
   * @param user The new User resource
   * @return User resource created
   */
  imageUserCollectionResponse(user?: UserUserWrite): __Observable<__StrictHttpResponse<UserUserRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/me/image`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserUserRead>;
      })
    );
  }
  /**
   * @param user The new User resource
   * @return User resource created
   */
  imageUserCollection(user?: UserUserWrite): __Observable<UserUserRead> {
    return this.imageUserCollectionResponse(user).pipe(
      __map(_r => _r.body as UserUserRead)
    );
  }

  /**
   * @param user The new User resource
   * @return User resource created
   */
  registerUserCollectionResponse(user?: UserUserWrite): __Observable<__StrictHttpResponse<UserUserRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserUserRead>;
      })
    );
  }
  /**
   * @param user The new User resource
   * @return User resource created
   */
  registerUserCollection(user?: UserUserWrite): __Observable<UserUserRead> {
    return this.registerUserCollectionResponse(user).pipe(
      __map(_r => _r.body as UserUserRead)
    );
  }

  /**
   * @return User collection response
   */
  getUserCollectionResponse(): __Observable<__StrictHttpResponse<Array<UserUserRead>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserUserRead>>;
      })
    );
  }
  /**
   * @return User collection response
   */
  getUserCollection(): __Observable<Array<UserUserRead>> {
    return this.getUserCollectionResponse().pipe(
      __map(_r => _r.body as Array<UserUserRead>)
    );
  }

  /**
   * @param user The new User resource
   * @return User resource created
   */
  postUserCollectionResponse(user?: UserUserWrite): __Observable<__StrictHttpResponse<UserUserRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserUserRead>;
      })
    );
  }
  /**
   * @param user The new User resource
   * @return User resource created
   */
  postUserCollection(user?: UserUserWrite): __Observable<UserUserRead> {
    return this.postUserCollectionResponse(user).pipe(
      __map(_r => _r.body as UserUserRead)
    );
  }

  /**
   * @param id undefined
   * @return User resource response
   */
  getUserItemResponse(id: string): __Observable<__StrictHttpResponse<UserUserRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/users/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserUserRead>;
      })
    );
  }
  /**
   * @param id undefined
   * @return User resource response
   */
  getUserItem(id: string): __Observable<UserUserRead> {
    return this.getUserItemResponse(id).pipe(
      __map(_r => _r.body as UserUserRead)
    );
  }

  /**
   * @param params The `UserService.PutUserItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `user`: The updated User resource
   *
   * @return User resource updated
   */
  putUserItemResponse(params: UserService.PutUserItemParams): __Observable<__StrictHttpResponse<UserUserRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.user;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/users/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserUserRead>;
      })
    );
  }
  /**
   * @param params The `UserService.PutUserItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `user`: The updated User resource
   *
   * @return User resource updated
   */
  putUserItem(params: UserService.PutUserItemParams): __Observable<UserUserRead> {
    return this.putUserItemResponse(params).pipe(
      __map(_r => _r.body as UserUserRead)
    );
  }
}

module UserService {

  /**
   * Parameters for loginUserItem
   */
  export interface LoginUserItemParams {
    username: string;
    password: string;
    grantType: string;
    clientSecret: string;
    clientId: string;
  }

  /**
   * Parameters for logoutUserItem
   */
  export interface LogoutUserItemParams {
    id: string;

    /**
     * The new User resource
     */
    user?: UserUserWrite;
  }

  /**
   * Parameters for meputUserItem
   */
  export interface MeputUserItemParams {
    username: string;
    surnames: string;
    plainPassword: string;
    phone: string;
    name: string;
    email: string;
    dni: string;
    address: string;

    /**
     * The updated User resource
     */
    user?: UserUserWrite;
  }

  /**
   * Parameters for putUserItem
   */
  export interface PutUserItemParams {
    id: string;

    /**
     * The updated User resource
     */
    user?: UserUserWrite;
  }
}

export { UserService }
