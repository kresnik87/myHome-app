/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ShoppingListShoppingRead } from '../models/shopping-list-shopping-read';
import { ShoppingListShoppingWrite } from '../models/shopping-list-shopping-write';
@Injectable({
  providedIn: 'root',
})
class ShoppingListService extends __BaseService {
  static readonly getShoppingListCollectionPath = '/api/shopping-lists';
  static readonly postShoppingListCollectionPath = '/api/shopping-lists';
  static readonly getShoppingListItemPath = '/api/shopping-lists/{id}';
  static readonly putShoppingListItemPath = '/api/shopping-lists/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return ShoppingList collection response
   */
  getShoppingListCollectionResponse(): __Observable<__StrictHttpResponse<Array<ShoppingListShoppingRead>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/shopping-lists`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ShoppingListShoppingRead>>;
      })
    );
  }
  /**
   * @return ShoppingList collection response
   */
  getShoppingListCollection(): __Observable<Array<ShoppingListShoppingRead>> {
    return this.getShoppingListCollectionResponse().pipe(
      __map(_r => _r.body as Array<ShoppingListShoppingRead>)
    );
  }

  /**
   * @param shoppingList The new ShoppingList resource
   * @return ShoppingList resource created
   */
  postShoppingListCollectionResponse(shoppingList?: ShoppingListShoppingWrite): __Observable<__StrictHttpResponse<ShoppingListShoppingRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = shoppingList;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/shopping-lists`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShoppingListShoppingRead>;
      })
    );
  }
  /**
   * @param shoppingList The new ShoppingList resource
   * @return ShoppingList resource created
   */
  postShoppingListCollection(shoppingList?: ShoppingListShoppingWrite): __Observable<ShoppingListShoppingRead> {
    return this.postShoppingListCollectionResponse(shoppingList).pipe(
      __map(_r => _r.body as ShoppingListShoppingRead)
    );
  }

  /**
   * @param id undefined
   * @return ShoppingList resource response
   */
  getShoppingListItemResponse(id: string): __Observable<__StrictHttpResponse<ShoppingListShoppingRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/shopping-lists/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShoppingListShoppingRead>;
      })
    );
  }
  /**
   * @param id undefined
   * @return ShoppingList resource response
   */
  getShoppingListItem(id: string): __Observable<ShoppingListShoppingRead> {
    return this.getShoppingListItemResponse(id).pipe(
      __map(_r => _r.body as ShoppingListShoppingRead)
    );
  }

  /**
   * @param params The `ShoppingListService.PutShoppingListItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `shoppingList`: The updated ShoppingList resource
   *
   * @return ShoppingList resource updated
   */
  putShoppingListItemResponse(params: ShoppingListService.PutShoppingListItemParams): __Observable<__StrictHttpResponse<ShoppingListShoppingRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.shoppingList;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/shopping-lists/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ShoppingListShoppingRead>;
      })
    );
  }
  /**
   * @param params The `ShoppingListService.PutShoppingListItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `shoppingList`: The updated ShoppingList resource
   *
   * @return ShoppingList resource updated
   */
  putShoppingListItem(params: ShoppingListService.PutShoppingListItemParams): __Observable<ShoppingListShoppingRead> {
    return this.putShoppingListItemResponse(params).pipe(
      __map(_r => _r.body as ShoppingListShoppingRead)
    );
  }
}

module ShoppingListService {

  /**
   * Parameters for putShoppingListItem
   */
  export interface PutShoppingListItemParams {
    id: string;

    /**
     * The updated ShoppingList resource
     */
    shoppingList?: ShoppingListShoppingWrite;
  }
}

export { ShoppingListService }
