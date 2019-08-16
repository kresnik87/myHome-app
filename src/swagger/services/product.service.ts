/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProductProductRead } from '../models/product-product-read';
import { ProductProductWrite } from '../models/product-product-write';
@Injectable({
  providedIn: 'root',
})
class ProductService extends __BaseService {
  static readonly getProductCollectionPath = '/api/products';
  static readonly postProductCollectionPath = '/api/products';
  static readonly getProductItemPath = '/api/products/{id}';
  static readonly putProductItemPath = '/api/products/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Product collection response
   */
  getProductCollectionResponse(): __Observable<__StrictHttpResponse<Array<ProductProductRead>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/products`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProductProductRead>>;
      })
    );
  }
  /**
   * @return Product collection response
   */
  getProductCollection(): __Observable<Array<ProductProductRead>> {
    return this.getProductCollectionResponse().pipe(
      __map(_r => _r.body as Array<ProductProductRead>)
    );
  }

  /**
   * @param product The new Product resource
   * @return Product resource created
   */
  postProductCollectionResponse(product?: ProductProductWrite): __Observable<__StrictHttpResponse<ProductProductRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = product;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/products`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductProductRead>;
      })
    );
  }
  /**
   * @param product The new Product resource
   * @return Product resource created
   */
  postProductCollection(product?: ProductProductWrite): __Observable<ProductProductRead> {
    return this.postProductCollectionResponse(product).pipe(
      __map(_r => _r.body as ProductProductRead)
    );
  }

  /**
   * @param id undefined
   * @return Product resource response
   */
  getProductItemResponse(id: string): __Observable<__StrictHttpResponse<ProductProductRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/products/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductProductRead>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Product resource response
   */
  getProductItem(id: string): __Observable<ProductProductRead> {
    return this.getProductItemResponse(id).pipe(
      __map(_r => _r.body as ProductProductRead)
    );
  }

  /**
   * @param params The `ProductService.PutProductItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `product`: The updated Product resource
   *
   * @return Product resource updated
   */
  putProductItemResponse(params: ProductService.PutProductItemParams): __Observable<__StrictHttpResponse<ProductProductRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.product;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/products/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductProductRead>;
      })
    );
  }
  /**
   * @param params The `ProductService.PutProductItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `product`: The updated Product resource
   *
   * @return Product resource updated
   */
  putProductItem(params: ProductService.PutProductItemParams): __Observable<ProductProductRead> {
    return this.putProductItemResponse(params).pipe(
      __map(_r => _r.body as ProductProductRead)
    );
  }
}

module ProductService {

  /**
   * Parameters for putProductItem
   */
  export interface PutProductItemParams {
    id: string;

    /**
     * The updated Product resource
     */
    product?: ProductProductWrite;
  }
}

export { ProductService }
