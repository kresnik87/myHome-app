/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { DeviceDeviceRead } from '../models/device-device-read';
import { DeviceDeviceWrite } from '../models/device-device-write';
@Injectable({
  providedIn: 'root',
})
class DeviceService extends __BaseService {
  static readonly createDeviceCollectionPath = '/api/devices';
  static readonly getDeviceItemPath = '/api/devices/{id}';
  static readonly updateDeviceItemPath = '/api/devices/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param device The new Device resource
   * @return Device resource created
   */
  createDeviceCollectionResponse(device?: DeviceDeviceWrite): __Observable<__StrictHttpResponse<DeviceDeviceRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = device;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/devices`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeviceDeviceRead>;
      })
    );
  }
  /**
   * @param device The new Device resource
   * @return Device resource created
   */
  createDeviceCollection(device?: DeviceDeviceWrite): __Observable<DeviceDeviceRead> {
    return this.createDeviceCollectionResponse(device).pipe(
      __map(_r => _r.body as DeviceDeviceRead)
    );
  }

  /**
   * @param id undefined
   * @return Device resource response
   */
  getDeviceItemResponse(id: string): __Observable<__StrictHttpResponse<DeviceDeviceRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/devices/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeviceDeviceRead>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Device resource response
   */
  getDeviceItem(id: string): __Observable<DeviceDeviceRead> {
    return this.getDeviceItemResponse(id).pipe(
      __map(_r => _r.body as DeviceDeviceRead)
    );
  }

  /**
   * @param params The `DeviceService.UpdateDeviceItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `device`: The updated Device resource
   *
   * @return Device resource updated
   */
  updateDeviceItemResponse(params: DeviceService.UpdateDeviceItemParams): __Observable<__StrictHttpResponse<DeviceDeviceRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.device;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/devices/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DeviceDeviceRead>;
      })
    );
  }
  /**
   * @param params The `DeviceService.UpdateDeviceItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `device`: The updated Device resource
   *
   * @return Device resource updated
   */
  updateDeviceItem(params: DeviceService.UpdateDeviceItemParams): __Observable<DeviceDeviceRead> {
    return this.updateDeviceItemResponse(params).pipe(
      __map(_r => _r.body as DeviceDeviceRead)
    );
  }
}

module DeviceService {

  /**
   * Parameters for updateDeviceItem
   */
  export interface UpdateDeviceItemParams {
    id: string;

    /**
     * The updated Device resource
     */
    device?: DeviceDeviceWrite;
  }
}

export { DeviceService }
