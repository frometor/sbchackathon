import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class TrainoverviewService {

  constructor(public http: Http) { }




  getAllTrains() {
    var queryUrl = "https://api.graph.cool/simple/v1/cizv5becrdcul0154jx2wr7ub";
    var body = '{ "query": "{ allTransports { departureTime, deliverTime, client { name, customerId, cargoType, specialRequirements } }}" }';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return Observable.interval(7000)
      .switchMap(() => this.http.post(queryUrl, body, {headers}).map(res => res.json()));

    /*return this.http.post(queryUrl, body, {headers})
      .map(res => res.json())*/
  }
}
