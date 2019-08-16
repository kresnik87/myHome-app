/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ExpensesExpensesRead } from '../models/expenses-expenses-read';
import { ExpensesExpensesWrite } from '../models/expenses-expenses-write';
@Injectable({
  providedIn: 'root',
})
class ExpensesService extends __BaseService {
  static readonly getExpensesCollectionPath = '/api/expenses';
  static readonly postExpensesCollectionPath = '/api/expenses';
  static readonly getExpensesItemPath = '/api/expenses/{id}';
  static readonly putExpensesItemPath = '/api/expenses/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Expenses collection response
   */
  getExpensesCollectionResponse(): __Observable<__StrictHttpResponse<Array<ExpensesExpensesRead>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/expenses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ExpensesExpensesRead>>;
      })
    );
  }
  /**
   * @return Expenses collection response
   */
  getExpensesCollection(): __Observable<Array<ExpensesExpensesRead>> {
    return this.getExpensesCollectionResponse().pipe(
      __map(_r => _r.body as Array<ExpensesExpensesRead>)
    );
  }

  /**
   * @param expenses The new Expenses resource
   * @return Expenses resource created
   */
  postExpensesCollectionResponse(expenses?: ExpensesExpensesWrite): __Observable<__StrictHttpResponse<ExpensesExpensesRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = expenses;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/expenses`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ExpensesExpensesRead>;
      })
    );
  }
  /**
   * @param expenses The new Expenses resource
   * @return Expenses resource created
   */
  postExpensesCollection(expenses?: ExpensesExpensesWrite): __Observable<ExpensesExpensesRead> {
    return this.postExpensesCollectionResponse(expenses).pipe(
      __map(_r => _r.body as ExpensesExpensesRead)
    );
  }

  /**
   * @param id undefined
   * @return Expenses resource response
   */
  getExpensesItemResponse(id: string): __Observable<__StrictHttpResponse<ExpensesExpensesRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/expenses/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ExpensesExpensesRead>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Expenses resource response
   */
  getExpensesItem(id: string): __Observable<ExpensesExpensesRead> {
    return this.getExpensesItemResponse(id).pipe(
      __map(_r => _r.body as ExpensesExpensesRead)
    );
  }

  /**
   * @param params The `ExpensesService.PutExpensesItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `expenses`: The updated Expenses resource
   *
   * @return Expenses resource updated
   */
  putExpensesItemResponse(params: ExpensesService.PutExpensesItemParams): __Observable<__StrictHttpResponse<ExpensesExpensesRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.expenses;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/expenses/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ExpensesExpensesRead>;
      })
    );
  }
  /**
   * @param params The `ExpensesService.PutExpensesItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `expenses`: The updated Expenses resource
   *
   * @return Expenses resource updated
   */
  putExpensesItem(params: ExpensesService.PutExpensesItemParams): __Observable<ExpensesExpensesRead> {
    return this.putExpensesItemResponse(params).pipe(
      __map(_r => _r.body as ExpensesExpensesRead)
    );
  }
}

module ExpensesService {

  /**
   * Parameters for putExpensesItem
   */
  export interface PutExpensesItemParams {
    id: string;

    /**
     * The updated Expenses resource
     */
    expenses?: ExpensesExpensesWrite;
  }
}

export { ExpensesService }
