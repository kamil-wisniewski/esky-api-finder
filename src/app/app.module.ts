import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import {SearchService} from './search.service';
import {SearchCacheService} from './services/search-cache.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CachePricesComponent } from './cache-prices/cache-prices.component';
import { LivePricesComponent } from './live-prices/live-prices.component';
import {Server} from './server';
import {HelpersService} from './services/helpers.service';
import { CachePricesSecondComponent } from './cache-prices-second/cache-prices-second.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CachePricesComponent,
    LivePricesComponent,
    CachePricesSecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule
  ],
  providers: [SearchService,SearchCacheService,Server,HelpersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
