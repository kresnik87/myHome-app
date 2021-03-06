/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { NotificationUserNotification } from '../models/notification-user-notification';
@Injectable({
  providedIn: 'root',
})
class NotificationUserService extends __BaseService {
  static readonly getNotificationUserCollectionPath = '/api/notification-users';
  static readonly getNotificationUserItemPath = '/api/notification-users/{id}';
  static readonly putNotificationUserItemPath = '/api/notification-users/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return NotificationUser collection response
   */
  getNotificationUserCollectionResponse(): __Observable<__StrictHttpResponse<Array<NotificationUserNotification>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/notification-users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<NotificationUserNotification>>;
      })
    );
  }
  /**
   * @return NotificationUser collection response
   */
  getNotificationUserCollection(): __Observable<Array<NotificationUserNotification>> {
    return this.getNotificationUserCollectionResponse().pipe(
      __map(_r => _r.body as Array<NotificationUserNotification>)
    );
  }

  /**
   * @param id undefined
   * @return NotificationUser resource response
   */
  getNotificationUserItemResponse(id: string): __Observable<__StrictHttpResponse<NotificationUserNotification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/notification-users/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<NotificationUserNotification>;
      })
    );
  }
  /**
   * @param id undefined
   * @return NotificationUser resource response
   */
  getNotificationUserItem(id: string): __Observable<NotificationUserNotification> {
    return this.getNotificationUserItemResponse(id).pipe(
      __map(_r => _r.body as NotificationUserNotification)
    );
  }

  /**
   * @param params The `NotificationUserService.PutNotificationUserItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `notificationUser`: The updated NotificationUser resource
   *
   * @return NotificationUser resource updated
   */
  putNotificationUserItemResponse(params: NotificationUserService.PutNotificationUserItemParams): __Observable<__StrictHttpResponse<NotificationUserNotification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.notificationUser;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/notification-users/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<NotificationUserNotification>;
      })
    );
  }
  /**
   * @param params The `NotificationUserService.PutNotificationUserItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `notificationUser`: The updated NotificationUser resource
   *
   * @return NotificationUser resource updated
   */
  putNotificationUserItem(params: NotificationUserService.PutNotificationUserItemParams): __Observable<NotificationUserNotification> {
    return this.putNotificationUserItemResponse(params).pipe(
      __map(_r => _r.body as NotificationUserNotification)
    );
  }
}

module NotificationUserService {

  /**
   * Parameters for putNotificationUserItem
   */
  export interface PutNotificationUserItemParams {
    id: string;

    /**
     * The updated NotificationUser resource
     */
    notificationUser?: NotificationUserNotification;
  }
}

export { NotificationUserService }
