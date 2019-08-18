/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CategoryCategoryRead } from '../models/category-category-read';
import { CategoryCategoryWrite } from '../models/category-category-write';
@Injectable({
  providedIn: 'root',
})
class CategoryService extends __BaseService {
  static readonly getCategoryCollectionPath = '/api/categories';
  static readonly postCategoryCollectionPath = '/api/categories';
  static readonly getCategoryItemPath = '/api/categories/{id}';
  static readonly putCategoryItemPath = '/api/categories/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Category collection response
   */
  getCategoryCollectionResponse(): __Observable<__StrictHttpResponse<Array<CategoryCategoryRead>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/categories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CategoryCategoryRead>>;
      })
    );
  }
  /**
   * @return Category collection response
   */
  getCategoryCollection(): __Observable<Array<CategoryCategoryRead>> {
    return this.getCategoryCollectionResponse().pipe(
      __map(_r => _r.body as Array<CategoryCategoryRead>)
    );
  }

  /**
   * @param category The new Category resource
   * @return Category resource created
   */
  postCategoryCollectionResponse(category?: CategoryCategoryWrite): __Observable<__StrictHttpResponse<CategoryCategoryRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = category;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/categories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryCategoryRead>;
      })
    );
  }
  /**
   * @param category The new Category resource
   * @return Category resource created
   */
  postCategoryCollection(category?: CategoryCategoryWrite): __Observable<CategoryCategoryRead> {
    return this.postCategoryCollectionResponse(category).pipe(
      __map(_r => _r.body as CategoryCategoryRead)
    );
  }

  /**
   * @param id undefined
   * @return Category resource response
   */
  getCategoryItemResponse(id: string): __Observable<__StrictHttpResponse<CategoryCategoryRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/categories/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryCategoryRead>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Category resource response
   */
  getCategoryItem(id: string): __Observable<CategoryCategoryRead> {
    return this.getCategoryItemResponse(id).pipe(
      __map(_r => _r.body as CategoryCategoryRead)
    );
  }

  /**
   * @param params The `CategoryService.PutCategoryItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `category`: The updated Category resource
   *
   * @return Category resource updated
   */
  putCategoryItemResponse(params: CategoryService.PutCategoryItemParams): __Observable<__StrictHttpResponse<CategoryCategoryRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.category;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/categories/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryCategoryRead>;
      })
    );
  }
  /**
   * @param params The `CategoryService.PutCategoryItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `category`: The updated Category resource
   *
   * @return Category resource updated
   */
  putCategoryItem(params: CategoryService.PutCategoryItemParams): __Observable<CategoryCategoryRead> {
    return this.putCategoryItemResponse(params).pipe(
      __map(_r => _r.body as CategoryCategoryRead)
    );
  }
}

module CategoryService {

  /**
   * Parameters for putCategoryItem
   */
  export interface PutCategoryItemParams {
    id: string;

    /**
     * The updated Category resource
     */
    category?: CategoryCategoryWrite;
  }
}

export { CategoryService }
