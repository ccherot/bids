console.log("models: bids.js")

var mongoose = require('mongoose');
var Schema = mongoose.Schema

//needs validation for > 0 ?
var BidSchema = new mongoose.Schema({
    _product: {type: Schema.Types.ObjectId, ref: 'Product'},
    bidderName: {type: String, required: true, minlength: 4}, 
    bidValue: {type:Number, required: true}
}, {timestamps: true})

mongoose.model('Bid', BidSchema);
var Bid = mongoose.model('Bid');
