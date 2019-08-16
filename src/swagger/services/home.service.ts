/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { HomeHomeRead } from '../models/home-home-read';
import { HomeHomeWrite } from '../models/home-home-write';
@Injectable({
  providedIn: 'root',
})
class HomeService extends __BaseService {
  static readonly addMembersHomeCollectionPath = '/api/home/add_members';
  static readonly getHomeCollectionPath = '/api/homes';
  static readonly postHomeCollectionPath = '/api/homes';
  static readonly getHomeItemPath = '/api/homes/{id}';
  static readonly putHomeItemPath = '/api/homes/{id}';
  static readonly deleteHomeItemPath = '/api/homes/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param home The new Home resource
   * @return Home resource created
   */
  addMembersHomeCollectionResponse(home?: HomeHomeWrite): __Observable<__StrictHttpResponse<HomeHomeRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = home;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/home/add_members`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<HomeHomeRead>;
      })
    );
  }
  /**
   * @param home The new Home resource
   * @return Home resource created
   */
  addMembersHomeCollection(home?: HomeHomeWrite): __Observable<HomeHomeRead> {
    return this.addMembersHomeCollectionResponse(home).pipe(
      __map(_r => _r.body as HomeHomeRead)
    );
  }

  /**
   * @return Home collection response
   */
  getHomeCollectionResponse(): __Observable<__StrictHttpResponse<Array<HomeHomeRead>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/homes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<HomeHomeRead>>;
      })
    );
  }
  /**
   * @return Home collection response
   */
  getHomeCollection(): __Observable<Array<HomeHomeRead>> {
    return this.getHomeCollectionResponse().pipe(
      __map(_r => _r.body as Array<HomeHomeRead>)
    );
  }

  /**
   * @param home The new Home resource
   * @return Home resource created
   */
  postHomeCollectionResponse(home?: HomeHomeWrite): __Observable<__StrictHttpResponse<HomeHomeRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = home;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/homes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<HomeHomeRead>;
      })
    );
  }
  /**
   * @param home The new Home resource
   * @return Home resource created
   */
  postHomeCollection(home?: HomeHomeWrite): __Observable<HomeHomeRead> {
    return this.postHomeCollectionResponse(home).pipe(
      __map(_r => _r.body as HomeHomeRead)
    );
  }

  /**
   * @param id undefined
   * @return Home resource response
   */
  getHomeItemResponse(id: string): __Observable<__StrictHttpResponse<HomeHomeRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/homes/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<HomeHomeRead>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Home resource response
   */
  getHomeItem(id: string): __Observable<HomeHomeRead> {
    return this.getHomeItemResponse(id).pipe(
      __map(_r => _r.body as HomeHomeRead)
    );
  }

  /**
   * @param params The `HomeService.PutHomeItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `home`: The updated Home resource
   *
   * @return Home resource updated
   */
  putHomeItemResponse(params: HomeService.PutHomeItemParams): __Observable<__StrictHttpResponse<HomeHomeRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.home;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/homes/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<HomeHomeRead>;
      })
    );
  }
  /**
   * @param params The `HomeService.PutHomeItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `home`: The updated Home resource
   *
   * @return Home resource updated
   */
  putHomeItem(params: HomeService.PutHomeItemParams): __Observable<HomeHomeRead> {
    return this.putHomeItemResponse(params).pipe(
      __map(_r => _r.body as HomeHomeRead)
    );
  }

  /**
   * @param id undefined
   */
  deleteHomeItemResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/homes/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id undefined
   */
  deleteHomeItem(id: string): __Observable<null> {
    return this.deleteHomeItemResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module HomeService {

  /**
   * Parameters for putHomeItem
   */
  export interface PutHomeItemParams {
    id: string;

    /**
     * The updated Home resource
     */
    home?: HomeHomeWrite;
  }
}

export { HomeService }
