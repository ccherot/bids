import { BidsService } from './../bids.service';
import { Bid } from './../bid';
import { Product } from './../product';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {

  @Input() products:Product[]

  @Input() currentUserName: string

  @Output() updateProductsEvent = new EventEmitter()
  @Output() endBidEvent = new EventEmitter()

  constructor(private _bidsService: BidsService) { }

  ngOnInit() {
  }

  onUpdateBidEvent(bidObj)
  {
    console.log("bids.component: onUpdateBidEvent bidObj is ", bidObj)
    console.log("bids.component: onUpdateBidEvent this.currentuserName is ", this.currentUserName)
    let bid = new Bid(bidObj.val, this.currentUserName, bidObj.prodId)
    console.log("bids.component: onUpdateBidEvent bid is ", bid)
    this._bidsService.createBid(bid).toPromise()
      .then( status => {
        console.log("successfully added bid, status is ", status )
        if (status.status && status.status == "ok")
        {
          console.log("successfully added bid")
          this.updateProductsEvent.emit()
        }
      })
      .catch( error => console.log("bids.compoenent: there was an error creating new bid for item: ", bidObj.prodId))
  }

  onClickEndBid()
  {
    console.log("bid.component: onClickEndBid")
    //update again before leaving this view so that 
    //we can see if some other user bid on something
    this.updateProductsEvent.emit()
    this.endBidEvent.emit()
  }
}
