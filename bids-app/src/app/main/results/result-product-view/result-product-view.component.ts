import { Product } from './../../product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result-product-view',
  templateUrl: './result-product-view.component.html',
  styleUrls: ['./result-product-view.component.css']
})
export class ResultProductViewComponent implements OnInit {

  @Input() product: Product

  highestBidderValue: number = 0
  highestBiderName: string = ""


  constructor() { }

  ngOnInit() {
    console.log("result-product-view: product.bids is ", this.product.bids)
    //find the highest bidder per product
    for (let i = 0; i < this.product.bids.length; i++)
    {
      if  (this.product.bids[i].bidValue > this.highestBidderValue)
      {
        this.highestBidderValue = this.product.bids[i].bidValue
        this.highestBiderName = this.product.bids[i].bidderName
      }
    }
  }

}
