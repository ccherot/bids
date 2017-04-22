import { CookieService } from 'angular2-cookie/services/cookies.service';
import { BidsService } from './main/bids.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './main/login/login.component';
import { BidsComponent } from './main/bids/bids.component';
import { ResultsComponent } from './main/results/results.component';

import { ProductViewComponent } from './main/bids/product-view/product-view.component';
import { ResultProductViewComponent } from './main/results/result-product-view/result-product-view.component';
import { BidSearchPipe } from './main/bids/product-view/bid-search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    BidsComponent,
    ResultsComponent,
    ProductViewComponent,
    ResultProductViewComponent,
    BidSearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BidsService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
