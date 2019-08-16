/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { BudgetCatBudgetCatRead } from '../models/budget-cat-budget-cat-read';
import { BudgetCatBudgetCatWrite } from '../models/budget-cat-budget-cat-write';
@Injectable({
  providedIn: 'root',
})
class BudgetCatService extends __BaseService {
  static readonly getBudgetCatCollectionPath = '/api/budget-cats';
  static readonly postBudgetCatCollectionPath = '/api/budget-cats';
  static readonly getBudgetCatItemPath = '/api/budget-cats/{id}';
  static readonly putBudgetCatItemPath = '/api/budget-cats/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return BudgetCat collection response
   */
  getBudgetCatCollectionResponse(): __Observable<__StrictHttpResponse<Array<BudgetCatBudgetCatRead>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/budget-cats`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BudgetCatBudgetCatRead>>;
      })
    );
  }
  /**
   * @return BudgetCat collection response
   */
  getBudgetCatCollection(): __Observable<Array<BudgetCatBudgetCatRead>> {
    return this.getBudgetCatCollectionResponse().pipe(
      __map(_r => _r.body as Array<BudgetCatBudgetCatRead>)
    );
  }

  /**
   * @param budgetCat The new BudgetCat resource
   * @return BudgetCat resource created
   */
  postBudgetCatCollectionResponse(budgetCat?: BudgetCatBudgetCatWrite): __Observable<__StrictHttpResponse<BudgetCatBudgetCatRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = budgetCat;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/budget-cats`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BudgetCatBudgetCatRead>;
      })
    );
  }
  /**
   * @param budgetCat The new BudgetCat resource
   * @return BudgetCat resource created
   */
  postBudgetCatCollection(budgetCat?: BudgetCatBudgetCatWrite): __Observable<BudgetCatBudgetCatRead> {
    return this.postBudgetCatCollectionResponse(budgetCat).pipe(
      __map(_r => _r.body as BudgetCatBudgetCatRead)
    );
  }

  /**
   * @param id undefined
   * @return BudgetCat resource response
   */
  getBudgetCatItemResponse(id: string): __Observable<__StrictHttpResponse<BudgetCatBudgetCatRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/budget-cats/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BudgetCatBudgetCatRead>;
      })
    );
  }
  /**
   * @param id undefined
   * @return BudgetCat resource response
   */
  getBudgetCatItem(id: string): __Observable<BudgetCatBudgetCatRead> {
    return this.getBudgetCatItemResponse(id).pipe(
      __map(_r => _r.body as BudgetCatBudgetCatRead)
    );
  }

  /**
   * @param params The `BudgetCatService.PutBudgetCatItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `budgetCat`: The updated BudgetCat resource
   *
   * @return BudgetCat resource updated
   */
  putBudgetCatItemResponse(params: BudgetCatService.PutBudgetCatItemParams): __Observable<__StrictHttpResponse<BudgetCatBudgetCatRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.budgetCat;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/budget-cats/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BudgetCatBudgetCatRead>;
      })
    );
  }
  /**
   * @param params The `BudgetCatService.PutBudgetCatItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `budgetCat`: The updated BudgetCat resource
   *
   * @return BudgetCat resource updated
   */
  putBudgetCatItem(params: BudgetCatService.PutBudgetCatItemParams): __Observable<BudgetCatBudgetCatRead> {
    return this.putBudgetCatItemResponse(params).pipe(
      __map(_r => _r.body as BudgetCatBudgetCatRead)
    );
  }
}

module BudgetCatService {

  /**
   * Parameters for putBudgetCatItem
   */
  export interface PutBudgetCatItemParams {
    id: string;

    /**
     * The updated BudgetCat resource
     */
    budgetCat?: BudgetCatBudgetCatWrite;
  }
}

export { BudgetCatService }
