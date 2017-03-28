import { Component, OnInit } from '@angular/core';
import {SearchService} from './../search.service';
import { Observable }       from 'rxjs/Observable';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 items: any;
  constructor(private searchService: SearchService) { }

  search ()
  {
    this.searchService.serach()
    .subscribe(data => {this.items=data.Places,console.log(data),console.log(this.items);

    });
    
  }

  ngOnInit() {
  this.search();
  }

}
