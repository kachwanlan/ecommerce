import React from 'react';
import "./Checkout.css";
import PaypalCheckoutButton from "./PaypalCheckoutButton";

function Checkout() {
    // const product = {
    //     description: "Learn how to build a website with React JS",
    //     price: 29,
    // };
  return (
    <div className="checkout">
    
        {/* <img className="product-image" src={ProductImage} alt="Product Image" />  */}
        <div className="separator"></div>
        <div className="paypal">
            <p className="checkout-title">PAY WITH PAYPAL</p>
            <div className="paypal-button-container">
                <PaypalCheckoutButton  />
            </div>
        </div>
    </div>
  )
}

export default Checkout