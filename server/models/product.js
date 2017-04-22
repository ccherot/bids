console.log("models: product.js")
var mongoose = require('mongoose');

var Schema = mongoose.Schema

var ProductSchema = new mongoose.Schema({
 productName: {type: String, required: true, minlength: 4},
 bids: [{type: Schema.Types.ObjectId, ref: 'Bid'}]
}, { timestamps: true });

mongoose.model('Product', ProductSchema);
var Product = mongoose.model('Product');


