//we are going to need the following routes

//need path because of the last route that is handling the 
//case where the use types in a URL
var path = require('path')

//TODO: are their separate controllers for creating and updating and destroying
//products and bids???

var bids = require('../controllers/bids.js')
//var products = require("../controllers/products.js")



//var users = require('../controllers/users.js')
// this adds route listeners to products for 5 of the 7 RESTful routes, excluding new and edit.
module.exports = function(app){

    //this will get all the products
    app.get('/products', function(req, res) {
        bids.getProducts(req, res);
    });
    
    //this will post new products
    app.post('/products', function(req, res) {
        bids.addProducts(req, res);
    });

    //this will post new bids
    app.post('/bids', function(req, res) {
        bids.addBid(req, res);
    });

    //this will delete a product
    app.delete('/products', function(req, res) {
        bids.deleteProduct(req, res);
    });

    //this will update a bid
    app.patch('/bids', function(req, res) {
        bids.updateBid(req, res);
        bids.updateBid2(req, res)
    });

    //this will update a product but its not used I don't think
    app.patch('/products', function(req, res) {
        bids.update(req, res);
    });

    //catch all should route to the bids-app index.html page
    app.get('*', function (req, res) {
        res.sendFile(path.resolve('bids-app/dist/index.html'));
    })


}