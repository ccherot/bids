export class Bid {

    bidValue: number
    bidderName: string
    _id: string
    _product: string

    constructor (value = 0, bidderName = "", prodId = ""){

        this.bidValue = value
        this.bidderName = bidderName
        this._product = prodId

    }
}
