import React, { useState, useContext } from 'react';
import { StateContext } from '../../context/StateContext';
import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";

const PaypalCheckoutButton = () => {
    // const {product} = props;
    // const { paidFor, setPaidFor, error, setError } = useContext(StateContext);
    const {cartItems} = useContext(StateContext)

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);

    const handleApprove = (orderId) => {
        setPaidFor(true);
    }

    if(paidFor){
        alert("Thank You for purchasing from Eazy2Code");
    }

    if(error){
        alert(error);
    }

  return (
    <PayPalScriptProvider>
          <PayPalButtons 
              onClick={() => {
                  alert("Payment Successful")
              }}
            // onClick={(data, actions) => {
            //     const hasAlreadyBoughtCourse = false;
            //     if(hasAlreadyBoughtCourse){
            //         setError("You Already bought this course");
            //         return actions.reject();
            //     }else{
            //         return actions.resolve();
            //     }
            // }}
            // createOrder = {(data, actions) => {
            //     return actions.order.create({
            //         purchase_units: [
            //             {
            //                 description: "product description",
            //                 amount: {
            //                     value: "$100.00",
            //                 },
            //             },
            //         ],
            //     });
            // }}
            // onApprove = { async (data, action) => {
            //     const order = await action.order.capture();
            //     console.log("order", order);

            //     handleApprove(data.orderID);
            // }}
            // onCancel={() => {}}
            // onError={(err) => {
            //     setError(err);
            //     console.log("PayPal Checkout onError", err);
            // }}
        />
    </PayPalScriptProvider>
  )
}

export default PaypalCheckoutButton