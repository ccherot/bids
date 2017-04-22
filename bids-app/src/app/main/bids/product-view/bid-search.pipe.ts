import { Bid } from './../../bid';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bidSearch'
})
export class BidSearchPipe implements PipeTransform {

  transform(bids: Bid[], search: string): any {
    console.log("bid-search.pipe: bids is ", bids)
    console.log("bid-search.pipe: search is ", search)
     if (search == "") { return bids }
    
    let result: Bid[] = []
    
    for (let i = 0; i < bids.length; i++)
    {
      console.log("bid-search.pipe: " + bids[i].bidderName)
      if ( bids[i].bidderName.indexOf(search) != -1 )
      {
        result.push(bids[i])
      }
    }
    
    return result
  }

}

