/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { BudgetBudgetRead } from '../models/budget-budget-read';
import { BudgetBudgetWrite } from '../models/budget-budget-write';
@Injectable({
  providedIn: 'root',
})
class BudgetService extends __BaseService {
  static readonly getBudgetCollectionPath = '/api/budgets';
  static readonly postBudgetCollectionPath = '/api/budgets';
  static readonly getBudgetItemPath = '/api/budgets/{id}';
  static readonly putBudgetItemPath = '/api/budgets/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `BudgetService.GetBudgetCollectionParams` containing the following parameters:
   *
   * - `home.id[]`:
   *
   * - `home.id`:
   *
   * @return Budget collection response
   */
  getBudgetCollectionResponse(params: BudgetService.GetBudgetCollectionParams): __Observable<__StrictHttpResponse<Array<BudgetBudgetRead>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.homeId || []).forEach(val => {if (val != null) __params = __params.append('home.id[]', val.toString())});
    if (params.homeId != null) __params = __params.set('home.id', params.homeId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/budgets`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BudgetBudgetRead>>;
      })
    );
  }
  /**
   * @param params The `BudgetService.GetBudgetCollectionParams` containing the following parameters:
   *
   * - `home.id[]`:
   *
   * - `home.id`:
   *
   * @return Budget collection response
   */
  getBudgetCollection(params: BudgetService.GetBudgetCollectionParams): __Observable<Array<BudgetBudgetRead>> {
    return this.getBudgetCollectionResponse(params).pipe(
      __map(_r => _r.body as Array<BudgetBudgetRead>)
    );
  }

  /**
   * @param budget The new Budget resource
   * @return Budget resource created
   */
  postBudgetCollectionResponse(budget?: BudgetBudgetWrite): __Observable<__StrictHttpResponse<BudgetBudgetRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = budget;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/budgets`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BudgetBudgetRead>;
      })
    );
  }
  /**
   * @param budget The new Budget resource
   * @return Budget resource created
   */
  postBudgetCollection(budget?: BudgetBudgetWrite): __Observable<BudgetBudgetRead> {
    return this.postBudgetCollectionResponse(budget).pipe(
      __map(_r => _r.body as BudgetBudgetRead)
    );
  }

  /**
   * @param id undefined
   * @return Budget resource response
   */
  getBudgetItemResponse(id: string): __Observable<__StrictHttpResponse<BudgetBudgetRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/budgets/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BudgetBudgetRead>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Budget resource response
   */
  getBudgetItem(id: string): __Observable<BudgetBudgetRead> {
    return this.getBudgetItemResponse(id).pipe(
      __map(_r => _r.body as BudgetBudgetRead)
    );
  }

  /**
   * @param params The `BudgetService.PutBudgetItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `budget`: The updated Budget resource
   *
   * @return Budget resource updated
   */
  putBudgetItemResponse(params: BudgetService.PutBudgetItemParams): __Observable<__StrictHttpResponse<BudgetBudgetRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.budget;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/budgets/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BudgetBudgetRead>;
      })
    );
  }
  /**
   * @param params The `BudgetService.PutBudgetItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `budget`: The updated Budget resource
   *
   * @return Budget resource updated
   */
  putBudgetItem(params: BudgetService.PutBudgetItemParams): __Observable<BudgetBudgetRead> {
    return this.putBudgetItemResponse(params).pipe(
      __map(_r => _r.body as BudgetBudgetRead)
    );
  }
}

module BudgetService {

  /**
   * Parameters for getBudgetCollection
   */
  export interface GetBudgetCollectionParams {
    homeId?: Array<number>;
    homeId?: number;
  }

  /**
   * Parameters for putBudgetItem
   */
  export interface PutBudgetItemParams {
    id: string;

    /**
     * The updated Budget resource
     */
    budget?: BudgetBudgetWrite;
  }
}

export { BudgetService }
