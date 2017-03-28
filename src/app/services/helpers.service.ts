import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Server } from './../server';


@Injectable()
export class HelpersService {
  
    constructor(private jsonp: Jsonp, private server: Server) { }

    /*
    GET "http://partners.api.skyscanner.net/apiservices/
        autosuggest/v1.0/{country}/{currency}/{locale}?
        query={query}&
        apiKey={apiKey}"
    */

    serach(query:string) {
        let params = new URLSearchParams();
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        let url =this.server.getApiEndPoint()+'autosuggest/'+this.server.getCode()+'?query='+query+'&apiKey='+this.server.getKey();
        console.log(this, url);
        return this.jsonp
            .get(url, { search: params })
            .map(res => res.json());
    }




}
