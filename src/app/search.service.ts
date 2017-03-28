import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import {Server} from './server';

@Injectable()
export class SearchService {
  private api_Key='wi545398427247474642836326894171';
  private api_endPoint='http://partners.api.skyscanner.net/apiservices/';

  constructor(private jsonp: Jsonp,private server:Server) { }

  serach() {
    let params = new URLSearchParams();
       params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
      
    let url = 'http://partners.api.skyscanner.net/apiservices/xd/autosuggest/v1.0/GB/GBP/en-GB?query=rome&apiKey=your_api_key';
    return this.jsonp
      .get(url,{search:params})
      .map(res =>res.json());
  }

  
}
