import { CookieService } from 'angular2-cookie/services/cookies.service';

import { BidsService } from './bids.service';
import { Bid } from './bid';
import { Product } from './product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  userKey: string = "loggedInUser"
  currentUserName:string

  isLoggedIn: Boolean = false

  resultsVisible: Boolean = false
  bidsVisible: Boolean = false 

  //hard coded products
  product1 = new Product("Product One")
  product2 = new Product("Product Two")
  product3 = new Product("Product Three")

  seedProducts: Product[] 

  products: Product[]

  constructor( private _cookieService: CookieService, private _bidsService: BidsService) { } 

  ngOnInit() {

    this.seedProducts = [this.product1, this.product2, this.product3]

    //temporarilly remove a cookie by uncommenting this code
    //this._cookieService.removeAll();

    this.currentUserName = this.getCookie(this.userKey)

    console.log("main.component: ngOnInit: currentUserName is ", this.currentUserName)
    
    //get the products...if they do not exist yet they will be created
    this.getProducts()

    if ( this.currentUserName != "" && this.currentUserName != undefined)
    {
      this.isLoggedIn = true;
      this.bidsVisible = true;
      this.resultsVisible = false

    

    }
  }

  getCookie(key:string)
  {
    return this._cookieService.get(key)
  }

  onLogoutEvent()
  {
    console.log("main.component: onLoggedOut called")
    
    //since we have server connectivity, we can actually delete the local user
    //but not the cookie...we want to test if the user 
    this.currentUserName = ""
    this.isLoggedIn = false
    this.resultsVisible = false
    this.bidsVisible = false
    
    this._cookieService.remove(this.userKey)
    
  }

  onLoginEvent(username:string)
  {
    console.log("main-component: onLoggedInCalled > this.currentUser is ", this.currentUserName)
    this.currentUserName = username
    this.isLoggedIn = true;
    this._cookieService.put(this.userKey, this.currentUserName)
    
    //set visibility
    this.resultsVisible = false;
    this.bidsVisible = true

    //get the products
    this.getProducts()
    
  }

  addProducts()
  {
    console.log("main.component: addProducts")
    //put the seed products in the db
    for (let i = 0; i <this.seedProducts.length; i++)
    {
      this._bidsService.createProduct(this.seedProducts[i]).toPromise()
        .then(response => {
          console.log("main.component creating seed product > response is ", response)
        })
        .catch (error => {
          console.log("main.component: error creating seed product > error is ", error)
       })
    }
  }

  onUpdateProducts()
  {
    this.getProducts()
  }

  getProducts()
  {
    console.log("main.component: getProducts called ")
    
    this._bidsService.getProducts().toPromise()
      .then( products => {
        console.log("main.component.ts: getProducts > success > products are " + products)
        console.log("main.component.ts: getProducts > success > there are " + products.length + " products")
        //if there are products in the db already then great 
        if (products.length >= 3) {
          this.products = products
        }else {
          //otherwise we need to add our seed products
          this.addProducts()
        }
      })
      .catch(err => console.log("products.component.ts: getProducts > ERROR retrieving products") )
  }

  onEndBidEvent()
  {
    console.log("main.component: endBidEvent called")
    this.bidsVisible = false
    this.resultsVisible = true
  }

  onStartBidEvent()
  {
    this.bidsVisible = true
    this.resultsVisible = false
  }

}
