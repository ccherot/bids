console.log('bids controller');

var mongoose = require('mongoose')
var Products = mongoose.model("Product")
var Bids = mongoose.model("Bid")
module.exports = {

    getProducts: function(req, res) {
        // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
        Products.find({}).populate('bids').exec(function (err, products){
            if (err)
            {
                console.log("ERROR: Error retrieving products from database")
            }
            else
            {
                if (products && products.length != 0)
                {
                    console.log(products.length + " products were retrieved from the database")
                }
                res.json(products);
            }
        })
    },

    addProducts: function (req, res) {
        console.log("addProducts POST DATA", req.body);
        // create a new Post with the name and age corresponding to those from req.body
        var product = new Products({productName: req.body.productName });
        // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
        product.save(function(err) {
            // if there is an error console.log that something went wrong!
            if(err) {
                console.log('something went wrong while saving a new product');
            } 
            else { // else console.log that we did well and then redirect to the root route
                console.log('successfully added a new product!');
                res.json({status: "ok"});
            }
        })
    },
    
    //try just updating the bid.
    //Leaving this here as an experiment so see how one might go about 
    //updating an embedded document.  Maybeits just like updating any other document? 
    //
    updateBid2: function(req,res){
        console.log("controllers/bids.js > update > req.body is ", req.body);
        bids.update({_id: req.body._id}, req.body, function(err){
            if (err){
                console.log('ERROR: controllers/bids.js > update > there was an error updating bid: ' + req.body._id)
            }
            else{
                console.log('controllers/cocktails.js > update > successfully updated friend: ' + req.body._id)
                res.json({status: 'ok'})
            }
        })    
    },

    //technically, for this application, updating bids is not needed
    //bids don't ever need to be updated or deleted.  This is not something
    //I realized when I started building this.  I am leaving this here
    //because it would be good to figure out how to update embedded documents 
    updateBid: function (req, res) {
        console.log("updateBid: POST DATA", req.body);
                //find the product that the comment is attached to
        Products.findOne({_id: req.body._product}, function (err, product){
            //loop through bids and change one that we want to update
            var bid 
            for (i = 0; i < product.bids.length; i++)
            {
                if (product.bids[i]._id == req.body._id)
                {
                    bid = product.bids[i]
                }
            }
            //if we found a matching bid, update it 
            if (bid)
            {
                bid.value = req.body.value
                bid.save(function(err) {
                    if (err)
                    {
                        console.log("Error saving bid: " + err)
                    }
                    else{
                        //now save the product
                        product.save(function(err){
                            if (err)
                            {
                                console.log("Error saving product after adding new bid")
                            }
                            else{
                                //if the product is saved successfully then return a status of ok
                                console.log("Product with new bid saved successfully")
                                res.json({status: ok});
                            }
                        })
                    }
                })
            }
        })
    },

    addBid: function(req, res) {
        console.log("addBid: POST DATA", req.body);

        //find the product that the comment is attached to
        Products.findOne({_id: req.body._product}, function (err, product){

            // create a new bid with the bidder name and bid value corresponding to those from req.body
            var bid = new Bids(req.body);
            //bid._product = post._id
            console.log("bid is " + bid)
            //Have to do nested saves here...one for the comment and one for the post
            bid.save(function(err) {
                if (err)
                {
                    console.log("Error saving bid: " + err)
                }
                
                //push the new bid into the bids array of the product
                product.bids.push(bid)
                //then save the post!
                product.save(function(err){
                    if (err)
                    {
                        console.log("Error saving product after adding new bid")
                        res.json({status: err})
                    }
                    else{
                        //if the product is saved successfully then return a status of ok
                        console.log("Product with new bid saved successfully")
                        res.json({status: "ok"});
                    }
                })
            })        
        })
    },

    deleteProduct: function(req,res){
        console.log("controllers: bids.js > delete > req.params.id is ", req.params.id)
        Products.remove({_id: req.params.id}, function (err){
            if (err) {
                var errStr = "There was an error deleting product " + req.params.id + " from the database"
                console.log(errStr)
                res.json({error: errStr})
            }
            else{
                console.log("successfully deleted product " + req.params.id + " from the database")
                res.json({status: "ok"})
            }
        })
    },

}