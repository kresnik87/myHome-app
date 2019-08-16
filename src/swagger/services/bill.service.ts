/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { BillBillRead } from '../models/bill-bill-read';
import { BillBillWrite } from '../models/bill-bill-write';
@Injectable({
  providedIn: 'root',
})
class BillService extends __BaseService {
  static readonly getBillCollectionPath = '/api/bills';
  static readonly postBillCollectionPath = '/api/bills';
  static readonly getBillItemPath = '/api/bills/{id}';
  static readonly putBillItemPath = '/api/bills/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Bill collection response
   */
  getBillCollectionResponse(): __Observable<__StrictHttpResponse<Array<BillBillRead>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/bills`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<BillBillRead>>;
      })
    );
  }
  /**
   * @return Bill collection response
   */
  getBillCollection(): __Observable<Array<BillBillRead>> {
    return this.getBillCollectionResponse().pipe(
      __map(_r => _r.body as Array<BillBillRead>)
    );
  }

  /**
   * @param bill The new Bill resource
   * @return Bill resource created
   */
  postBillCollectionResponse(bill?: BillBillWrite): __Observable<__StrictHttpResponse<BillBillRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = bill;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/bills`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BillBillRead>;
      })
    );
  }
  /**
   * @param bill The new Bill resource
   * @return Bill resource created
   */
  postBillCollection(bill?: BillBillWrite): __Observable<BillBillRead> {
    return this.postBillCollectionResponse(bill).pipe(
      __map(_r => _r.body as BillBillRead)
    );
  }

  /**
   * @param id undefined
   * @return Bill resource response
   */
  getBillItemResponse(id: string): __Observable<__StrictHttpResponse<BillBillRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/bills/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BillBillRead>;
      })
    );
  }
  /**
   * @param id undefined
   * @return Bill resource response
   */
  getBillItem(id: string): __Observable<BillBillRead> {
    return this.getBillItemResponse(id).pipe(
      __map(_r => _r.body as BillBillRead)
    );
  }

  /**
   * @param params The `BillService.PutBillItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `bill`: The updated Bill resource
   *
   * @return Bill resource updated
   */
  putBillItemResponse(params: BillService.PutBillItemParams): __Observable<__StrictHttpResponse<BillBillRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.bill;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/bills/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<BillBillRead>;
      })
    );
  }
  /**
   * @param params The `BillService.PutBillItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `bill`: The updated Bill resource
   *
   * @return Bill resource updated
   */
  putBillItem(params: BillService.PutBillItemParams): __Observable<BillBillRead> {
    return this.putBillItemResponse(params).pipe(
      __map(_r => _r.body as BillBillRead)
    );
  }
}

module BillService {

  /**
   * Parameters for putBillItem
   */
  export interface PutBillItemParams {
    id: string;

    /**
     * The updated Bill resource
     */
    bill?: BillBillWrite;
  }
}

export { BillService }
