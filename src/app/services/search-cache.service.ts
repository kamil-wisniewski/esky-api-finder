import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Server } from './../server';


@Injectable()
export class SearchCacheService {
  private api_Key = 'wi545398427247474642836326894171';
  private api_endPoint = 'http://partners.api.skyscanner.net/apiservices/xd/';

  constructor(private jsonp: Jsonp, private server: Server) { }
  /*
  curl "http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/{country}/{currency}/{locale}/
    {originPlace}/
    {destinationPlace}/
    {outboundPartialDate}/
    {inboundPartialDate}?
    apiKey={apiKey}"
    -X GET
    -H "Accept: application/json"
  */

  private endApi = 'http://partners.api.skyscanner.net/apiservices/xd/autosuggest/v1.0/GB/GBP/en-GB?'
  serach() {
    let params = new URLSearchParams();
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    let url = 'http://partners.api.skyscanner.net/apiservices/xd/autosuggest/v1.0/GB/GBP/en-GB?query=rome&apiKey=your_api_key';
    console.log(this, url);
    return this.jsonp
      .get(url, { search: params })
      .map(res => res.json());
  }


  /*
    GET /browsequotes/v1.0/{country}/{currency}/{locale}/{originPlace}/{destinationPlace}/{outboundPartialDate}/{inboundPartialDate}
  */
  serach2(originPlace:string,destinationPlace:string) {
    let params = new URLSearchParams();
    params.set('dataType', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    let url = this.server.getApiEndPoint() +'browsequotes/'+this.server.getCode()+ originPlace+'/'+destinationPlace+'/anytime/anytime?apiKey=' + this.server.getKey();
    return this.jsonp
      .get(url, { search: params })
      .map(res => res.json());
  }

  /*
  GET /browseroutes/v1.0/{country}/{currency}/{locale}/{originPlace}/{destinationPlace}/{outboundPartialDate}/{inboundPartialDate}
  */

  /*
  GET /browsedates/v1.0/{country}/{currency}/{locale}/{originPlace}/{destinationPlace}/{outboundPartialDate}/{inboundPartialDate}
  */


/*
GET /browsegrid/v1.0/{country}/{currency}/{locale}/{originPlace}/{destinationPlace}/{outboundPartialDate}/{inboundPartialDate}
*/

}
