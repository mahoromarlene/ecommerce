import React from "react";
import Product from "./product";
import image1 from "../../../assets/images/Tshirt.jpg";

const Home = () => {
    return(
        <div className="row homewrapper">
        <div className="col-md-8 offset-md-2">
        <div className="row">
        <Product
           name='Potatoes'
           price='1000'
           productimage={image1}
           >
        </Product>

        <Product
           name='Potatoes'
           price='1000'
           productimage={image1}
           >
        </Product>

        <Product
           name='Potatoes'
           price='1000'
           productimage={image1}
           >
        </Product>

        <Product
           name='Potatoes'
           price='1000'
           productimage={image1}
           >
        </Product>

        <Product
           name='Potatoes'
           price='1000'
           productimage={image1}
           >
        </Product>
        <Product
           name='Potatoes'
           price='1000'
           productimage={image1}
           >
        </Product>
        </div>
        </div>
        </div>
    );
}

export default Home;