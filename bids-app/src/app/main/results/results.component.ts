import { Product } from './../product';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() products: Product[]

  @Output() startBidEvent = new EventEmitter()
  @Output() logoutEvent = new EventEmitter()

  constructor() { }

  ngOnInit() {

  }

  onClickStartBid()
  {
    console.log("results-component: onClickStartBid called")
    this.startBidEvent.emit()
  }

  onClickLogout()
  {
    console.log("results-component: onClickLogout called")
    this.logoutEvent.emit()
  }

}
