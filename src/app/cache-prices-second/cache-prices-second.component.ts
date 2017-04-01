import { Component, OnInit, Input } from '@angular/core';
import { SearchCacheService } from './../services/search-cache.service';
import { HelpersService } from './../services/helpers.service';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Place } from './../domain/place';

@Component({
  selector: 'app-cache-prices-second',
  templateUrl: './cache-prices-second.component.html',
  styleUrls: ['./cache-prices-second.component.css']
})
export class CachePricesSecondComponent implements OnInit {
  
  showOrigin: boolean;
  showDestination: boolean;
  quotes: any;
  places: any;
  carriers: any;
  currencies: any;
  items: any;
  selectedOrigin: Place;
  selectedDestination: Place;
  originPlace: Place[];
  destinationPlace: Place[];
  search1Form: FormGroup;

  constructor(private searchService: SearchCacheService, private helpersService: HelpersService, private fb: FormBuilder) {
    this.createSearchForm();
  }


  createSearchForm() {
    this.search1Form = this.fb.group({
      originBox: ['', Validators.required],
      destinationBox: ['', Validators.required],
    });
  }



  getOrigin(query: string) {
    this.showOrigin = true;
    this.helpersService.serach(query)
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(data => {
        this.originPlace = data.Places, console.log(data), console.log(this.originPlace);
      })
  }

  getDestination(query: string) {
    this.showDestination = true;
    this.helpersService.serach(query)
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(data => {
        this.destinationPlace = data.Places, console.log(data), console.log(this.destinationPlace);
      })
  }

  confirmSearch1(originPlace: string, destinationPlace: string) {
    console.log("Podales takie chujowe dane");
    console.log(this.search1Form.value.originBox.PlaceName);
    this.searchService.serach2(this.search1Form.value.originBox.PlaceId, this.search1Form.value.destinationBox.PlaceId)
      .subscribe(data => {
        this.quotes = data.Quotes, console.log(data), console.log(this.quotes),
          this.places = data.Places,
          this.carriers = data.Carriers,
          this.currencies = data.Currencies;

      });

  }

  confirmSearch2(originPlace: string, destinationPlace: string) {
    this.searchService.serach2(originPlace, destinationPlace)
      .subscribe(data => {
        this.items = data.Routes, console.log(data), console.log(this.items);
      });
  }


  setOrigin(origin: Place) {
    this.selectedOrigin = origin;
    this.showOrigin = false;
    console.log("Twoje lotnisko to " + this.selectedOrigin.PlaceName);
      console.log(this.selectedOrigin);
  }

  setDestination(destination: any) {
    this.selectedDestination = destination;
    this.showDestination = false;
    console.log("Twoje lotnisko to " + destination.PlaceName);
  }
  ngOnInit() {
    //this.search();

    //this.getPlaces('polska');
  }


}
