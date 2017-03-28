import { Component, OnInit } from '@angular/core';
import { SearchCacheService } from './../services/search-cache.service';
import { HelpersService } from './../services/helpers.service';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cache-prices',
  templateUrl: './cache-prices.component.html',
  styleUrls: ['./cache-prices.component.css']
})
export class CachePricesComponent implements OnInit {
  items: any;

  selectedOrigin: string;
  selectedDestination: string;
    originPlace: any;
  destinationPlace: any;
  search1Form: FormGroup;

  constructor(private searchService: SearchCacheService, private helpersService: HelpersService, private fb: FormBuilder) {
    this.createSearchForm();
  }


  createSearchForm() {
    this.search1Form = this.fb.group({
      originBox:['',Validators.required],
      destinationBox:['',Validators.required],
    });
  }

 

  getOrigin(query: string) {
    this.helpersService.serach(query)
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(data => {
        this.originPlace = data.Places, console.log(data), console.log(this.originPlace);
      })
  }

    getDestination(query: string) {
    this.helpersService.serach(query)
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(data => {
        this.destinationPlace = data.Places, console.log(data), console.log(this.destinationPlace);
      })
  }

  confirmSearch1(originPlace:string,destinationPlace:string){
    console.log("Podales takie chujowe dane");
    console.log(this.search1Form.value);
  }

confirmSearch2(originPlace:string,destinationPlace:string){
    this.searchService.serach2(originPlace,destinationPlace)
      .subscribe(data => {
        this.items = data.Routes, console.log(data), console.log(this.items);
      });
  }
  

  setOrigin(origin: any) {
   this.selectedOrigin=origin;
  
    console.log("Twoje lotnisko to "+origin.PlaceName);
  }

setDestination(destination: any) {
   this.selectedDestination=destination;
    console.log("Twoje lotnisko to "+destination.PlaceName);
  }
  ngOnInit() {
    //this.search();

    //this.getPlaces('polska');
  }


}
