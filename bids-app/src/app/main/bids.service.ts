import { Bid } from './bid';
import { Product } from './product';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import 'rxjs'

@Injectable()
export class BidsService {

  //this is the master friends list 
  products: Product[]

  product1: Product = new Product("Product 1")
  product2: Product = new Product( "Product 2")
  product3: Product = new Product( "Product 3")

  constructor(private _http:Http) { console.log("bids-service: constructor") }

  ngOnInit(){
    console.log('bids-service: ngOnInit')
  }

  generateNewProducts()
  {
    //TODO: loop through array of hard coded products and create them on the server
    //in the db
  }

  getProducts()
  {
    return this._http.get('/products')
      .map( (response: Response) => response.json() )
  }

  createProduct(product: Product){
    console.log("bids-service: create > product is ", product)
  	const headers = new Headers({ "Content-Type": "application/json" })
  	const options = new RequestOptions({ headers: headers })

  	return this._http.post("/products", product, options)
      .map( (response: Response) => response.json() )
      
  }

  createBid(bid: Bid){
    console.log("bids-service: createBid > bid is ", bid)
  	const headers = new Headers({ "Content-Type": "application/json" })
  	const options = new RequestOptions({ headers: headers })

  	return this._http.post("/bids", bid, options)
      .map( (response: Response) => response.json() )


  }

  delete(id: string){
    
    //const headers = new Headers({ "Content-Type": "application/json" })
  	//const options = new RequestOptions({ headers: headers, body: {id: id}})

  	return this._http.delete("/products/" + id) // options
      .map( (response: Response) => response.json() ) 
  		
  }

  updateBid(bid: Bid)
  {
    console.log("bids-service: update ", bid)
    
    const headers = new Headers({ "Content-Type": "application/json" })
  	const options = new RequestOptions({ headers: headers })

    return this._http.patch ('/bids', bid, options)
      .map ( (response: Response) => response.json() )
      
  }
}
  



