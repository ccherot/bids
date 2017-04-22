import { Product } from './../../product';
import { Bid } from './../../bid';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  @Input() product: Product

  bidValue: number

  bidFilterString = ""
  
  @Output() updateBidEvent = new EventEmitter()
  
  constructor() { }

  ngOnInit() {
  }

  onClickBid()
  {
    console.log("onClickBid called and this.bidValue is ", this.bidValue)
    if (this.bidValue <= 0)
    {
      alert("Sorry cheapskate! Bid value must be greater than $0")
    }
    else{
      let bidObj = {val: this.bidValue, prodId: this.product._id}
      console.log("onClickBid called, emitting bidObj is ", bidObj)
      this.updateBidEvent.emit(bidObj)
      
    }
    
  }

}
