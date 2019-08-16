/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FinanceStatusFinanceRead } from '../models/finance-status-finance-read';
import { FinanceStatusFinanceWrite } from '../models/finance-status-finance-write';
@Injectable({
  providedIn: 'root',
})
class FinanceStatusService extends __BaseService {
  static readonly getFinanceStatusCollectionPath = '/api/finance-statuses';
  static readonly postFinanceStatusCollectionPath = '/api/finance-statuses';
  static readonly getFinanceStatusItemPath = '/api/finance-statuses/{id}';
  static readonly putFinanceStatusItemPath = '/api/finance-statuses/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return FinanceStatus collection response
   */
  getFinanceStatusCollectionResponse(): __Observable<__StrictHttpResponse<Array<FinanceStatusFinanceRead>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/finance-statuses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FinanceStatusFinanceRead>>;
      })
    );
  }
  /**
   * @return FinanceStatus collection response
   */
  getFinanceStatusCollection(): __Observable<Array<FinanceStatusFinanceRead>> {
    return this.getFinanceStatusCollectionResponse().pipe(
      __map(_r => _r.body as Array<FinanceStatusFinanceRead>)
    );
  }

  /**
   * @param financeStatus The new FinanceStatus resource
   * @return FinanceStatus resource created
   */
  postFinanceStatusCollectionResponse(financeStatus?: FinanceStatusFinanceWrite): __Observable<__StrictHttpResponse<FinanceStatusFinanceRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = financeStatus;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/finance-statuses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FinanceStatusFinanceRead>;
      })
    );
  }
  /**
   * @param financeStatus The new FinanceStatus resource
   * @return FinanceStatus resource created
   */
  postFinanceStatusCollection(financeStatus?: FinanceStatusFinanceWrite): __Observable<FinanceStatusFinanceRead> {
    return this.postFinanceStatusCollectionResponse(financeStatus).pipe(
      __map(_r => _r.body as FinanceStatusFinanceRead)
    );
  }

  /**
   * @param id undefined
   * @return FinanceStatus resource response
   */
  getFinanceStatusItemResponse(id: string): __Observable<__StrictHttpResponse<FinanceStatusFinanceRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/finance-statuses/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FinanceStatusFinanceRead>;
      })
    );
  }
  /**
   * @param id undefined
   * @return FinanceStatus resource response
   */
  getFinanceStatusItem(id: string): __Observable<FinanceStatusFinanceRead> {
    return this.getFinanceStatusItemResponse(id).pipe(
      __map(_r => _r.body as FinanceStatusFinanceRead)
    );
  }

  /**
   * @param params The `FinanceStatusService.PutFinanceStatusItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `financeStatus`: The updated FinanceStatus resource
   *
   * @return FinanceStatus resource updated
   */
  putFinanceStatusItemResponse(params: FinanceStatusService.PutFinanceStatusItemParams): __Observable<__StrictHttpResponse<FinanceStatusFinanceRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.financeStatus;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/finance-statuses/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FinanceStatusFinanceRead>;
      })
    );
  }
  /**
   * @param params The `FinanceStatusService.PutFinanceStatusItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `financeStatus`: The updated FinanceStatus resource
   *
   * @return FinanceStatus resource updated
   */
  putFinanceStatusItem(params: FinanceStatusService.PutFinanceStatusItemParams): __Observable<FinanceStatusFinanceRead> {
    return this.putFinanceStatusItemResponse(params).pipe(
      __map(_r => _r.body as FinanceStatusFinanceRead)
    );
  }
}

module FinanceStatusService {

  /**
   * Parameters for putFinanceStatusItem
   */
  export interface PutFinanceStatusItemParams {
    id: string;

    /**
     * The updated FinanceStatus resource
     */
    financeStatus?: FinanceStatusFinanceWrite;
  }
}

export { FinanceStatusService }
