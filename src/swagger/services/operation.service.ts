/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { OperationOperationRead } from '../models/operation-operation-read';
import { OperationOperationWrite } from '../models/operation-operation-write';
@Injectable({
  providedIn: 'root',
})
class OperationService extends __BaseService {
  static readonly getOperationCollectionPath = '/api/operations';
  static readonly postOperationCollectionPath = '/api/operations';
  static readonly getOperationItemPath = '/api/operations/{id}';
  static readonly putOperationItemPath = '/api/operations/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Operation collection response
   */
  getOperationCollectionResponse(): __Observable<__StrictHttpResponse<Array<OperationOperationRead>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/operations`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<OperationOperationRead>>;
      })
    );
  }
  /**
   * @return Operation collection response
   */
  getOperationCollection(): __Observable<Array<OperationOperationRead>> {
    return this.getOperationCollectionResponse().pipe(
      __map(_r => _r.body as Array<OperationOperationRead>)
    );
  }

  /**
   * @param operation The new Operation resource
   * @return Operation resource created
   */
  postOperationCollectionResponse(operation?: OperationOperationWrite): __Observable<__StrictHttpResponse<OperationOperationRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = operation;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/operations`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OperationOperationRead>;
      })
    );
  }
  /**
   * @param operation The new Operation resource
   * @return Operation resource created
   */
  postOperationCollection(operation?: OperationOperationWrite): __Observable<OperationOperationRead> {
    return this.postOperationCollectionResponse(operation).pipe(
      __map(_r => _r.body as OperationOperationRead)
    );
  }

  /**
   * @param id undefined
   * @return Operation resource response
   */
  getOperationItemResponse(id: string): __Observable<__StrictHttpResponse<OperationOperationRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/operations/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OperationOperationRead>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Operation resource response
   */
  getOperationItem(id: string): __Observable<OperationOperationRead> {
    return this.getOperationItemResponse(id).pipe(
      __map(_r => _r.body as OperationOperationRead)
    );
  }

  /**
   * @param params The `OperationService.PutOperationItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `operation`: The updated Operation resource
   *
   * @return Operation resource updated
   */
  putOperationItemResponse(params: OperationService.PutOperationItemParams): __Observable<__StrictHttpResponse<OperationOperationRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.operation;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/operations/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OperationOperationRead>;
      })
    );
  }
  /**
   * @param params The `OperationService.PutOperationItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `operation`: The updated Operation resource
   *
   * @return Operation resource updated
   */
  putOperationItem(params: OperationService.PutOperationItemParams): __Observable<OperationOperationRead> {
    return this.putOperationItemResponse(params).pipe(
      __map(_r => _r.body as OperationOperationRead)
    );
  }
}

module OperationService {

  /**
   * Parameters for putOperationItem
   */
  export interface PutOperationItemParams {
    id: string;

    /**
     * The updated Operation resource
     */
    operation?: OperationOperationWrite;
  }
}

export { OperationService }
