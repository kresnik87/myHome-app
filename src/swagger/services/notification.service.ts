/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { NotificationNotification } from '../models/notification-notification';
@Injectable({
  providedIn: 'root',
})
class NotificationService extends __BaseService {
  static readonly getNotificationCollectionPath = '/api/notifications';
  static readonly getNotificationItemPath = '/api/notifications/{id}';
  static readonly putNotificationItemPath = '/api/notifications/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Notification collection response
   */
  getNotificationCollectionResponse(): __Observable<__StrictHttpResponse<Array<NotificationNotification>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/notifications`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<NotificationNotification>>;
      })
    );
  }
  /**
   * @return Notification collection response
   */
  getNotificationCollection(): __Observable<Array<NotificationNotification>> {
    return this.getNotificationCollectionResponse().pipe(
      __map(_r => _r.body as Array<NotificationNotification>)
    );
  }

  /**
   * @param id undefined
   * @return Notification resource response
   */
  getNotificationItemResponse(id: string): __Observable<__StrictHttpResponse<NotificationNotification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/notifications/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<NotificationNotification>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Notification resource response
   */
  getNotificationItem(id: string): __Observable<NotificationNotification> {
    return this.getNotificationItemResponse(id).pipe(
      __map(_r => _r.body as NotificationNotification)
    );
  }

  /**
   * @param params The `NotificationService.PutNotificationItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `notification`: The updated Notification resource
   *
   * @return Notification resource updated
   */
  putNotificationItemResponse(params: NotificationService.PutNotificationItemParams): __Observable<__StrictHttpResponse<NotificationNotification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.notification;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/notifications/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<NotificationNotification>;
      })
    );
  }
  /**
   * @param params The `NotificationService.PutNotificationItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `notification`: The updated Notification resource
   *
   * @return Notification resource updated
   */
  putNotificationItem(params: NotificationService.PutNotificationItemParams): __Observable<NotificationNotification> {
    return this.putNotificationItemResponse(params).pipe(
      __map(_r => _r.body as NotificationNotification)
    );
  }
}

module NotificationService {

  /**
   * Parameters for putNotificationItem
   */
  export interface PutNotificationItemParams {
    id: string;

    /**
     * The updated Notification resource
     */
    notification?: NotificationNotification;
  }
}

export { NotificationService }
