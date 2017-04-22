
import { Bid } from './bid'

export class Product {

    productName: string 
    bids: Bid[]
    _id: string


    constructor(productName = ""){

        this.productName = productName
    }
}
