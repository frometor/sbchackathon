import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class GraphqlIosAppService {

  constructor(public http: Http) {
  }

  getexactDateofArrival(ID) {
    var queryUrl = "https://api.graph.cool/simple/v1/cizv5becrdcul0154jx2wr7ub";
    var body = '{ "query": "{ allTransports(filter: {transportId: ' + ID + '}) { id,transportId, departureTime, deliverTime } }" }';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(queryUrl, body, {headers})
      .map(res => res.json())
  }

}
