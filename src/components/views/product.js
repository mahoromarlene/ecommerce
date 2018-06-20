import React, {Component} from "react";


class Product extends Component {
    constructor(props) {
        super(props);
    }


    render () {
        return (
            <div className="col-md-3 col-lg-3 col-ms-6 col-xs-6 productwrapper">
              <div className="product-image">
                 <img src={this.props.productimage}/> 
              </div>

              <div className="productDetails">
                <div className="product-name">{this.props.name}</div>
                <div className="product-price">
                   <span>RS</span>
                   <span>{this.props.price}</span>                
                </div>
                <div className="add-to-cart"><button>Add To Cart</button></div>

              </div>
            </div>
        );
    }
}

export default Product;