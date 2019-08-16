/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IncomeIncomeRead } from '../models/income-income-read';
import { IncomeIncomeWrite } from '../models/income-income-write';
@Injectable({
  providedIn: 'root',
})
class IncomeService extends __BaseService {
  static readonly getIncomeCollectionPath = '/api/incomes';
  static readonly postIncomeCollectionPath = '/api/incomes';
  static readonly getIncomeItemPath = '/api/incomes/{id}';
  static readonly putIncomeItemPath = '/api/incomes/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Income collection response
   */
  getIncomeCollectionResponse(): __Observable<__StrictHttpResponse<Array<IncomeIncomeRead>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/incomes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<IncomeIncomeRead>>;
      })
    );
  }
  /**
   * @return Income collection response
   */
  getIncomeCollection(): __Observable<Array<IncomeIncomeRead>> {
    return this.getIncomeCollectionResponse().pipe(
      __map(_r => _r.body as Array<IncomeIncomeRead>)
    );
  }

  /**
   * @param income The new Income resource
   * @return Income resource created
   */
  postIncomeCollectionResponse(income?: IncomeIncomeWrite): __Observable<__StrictHttpResponse<IncomeIncomeRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = income;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/incomes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IncomeIncomeRead>;
      })
    );
  }
  /**
   * @param income The new Income resource
   * @return Income resource created
   */
  postIncomeCollection(income?: IncomeIncomeWrite): __Observable<IncomeIncomeRead> {
    return this.postIncomeCollectionResponse(income).pipe(
      __map(_r => _r.body as IncomeIncomeRead)
    );
  }

  /**
   * @param id undefined
   * @return Income resource response
   */
  getIncomeItemResponse(id: string): __Observable<__StrictHttpResponse<IncomeIncomeRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/incomes/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IncomeIncomeRead>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Income resource response
   */
  getIncomeItem(id: string): __Observable<IncomeIncomeRead> {
    return this.getIncomeItemResponse(id).pipe(
      __map(_r => _r.body as IncomeIncomeRead)
    );
  }

  /**
   * @param params The `IncomeService.PutIncomeItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `income`: The updated Income resource
   *
   * @return Income resource updated
   */
  putIncomeItemResponse(params: IncomeService.PutIncomeItemParams): __Observable<__StrictHttpResponse<IncomeIncomeRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.income;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/incomes/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IncomeIncomeRead>;
      })
    );
  }
  /**
   * @param params The `IncomeService.PutIncomeItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `income`: The updated Income resource
   *
   * @return Income resource updated
   */
  putIncomeItem(params: IncomeService.PutIncomeItemParams): __Observable<IncomeIncomeRead> {
    return this.putIncomeItemResponse(params).pipe(
      __map(_r => _r.body as IncomeIncomeRead)
    );
  }
}

module IncomeService {

  /**
   * Parameters for putIncomeItem
   */
  export interface PutIncomeItemParams {
    id: string;

    /**
     * The updated Income resource
     */
    income?: IncomeIncomeWrite;
  }
}

export { IncomeService }
