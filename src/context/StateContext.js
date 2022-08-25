import React, { createContext, useState, useEffect } from 'react';
import { data } from '../components/Data/data';

export const StateContext = createContext();

const StateProvider = (props) => {
    const [productItems, setProductItems] = useState(data.products);
    const initialData = JSON.parse(localStorage.getItem("cartitems")) || [];
    console.log(initialData);
    const [cartItems, setCartItems] = useState(initialData);
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        localStorage.setItem("cartitems", JSON.stringify(cartItems))

    }, [cartItems]);

    const addToCart = (product) => {
    console.log('product:', product);
    const cartItemExist = cartItems.find((cartItem) => cartItem.id === product.id);
    //console.log('cartItemExist:',cartItemExist);
    if (!cartItemExist) {
      console.log('cartItems does not exist:', cartItems);
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      console.log('cartItems added:', cartItems);
     
    } else {
       console.log('cartItems does exist:', cartItems);
       setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === productItems.id ? { ...cartItemExist, quantity: cartItemExist.quantity + 1 } : cartItem
        )
      );
      
    }
  };
  
 const increaseCartItem = (product) => {
    const cartItemExist = cartItems.find((cartItem) => cartItem.id === product.id);
   if (cartItemExist.quantity >= 1) {
     setCartItems(cartItems.map((cartItem)=>(cartItem.id === product.id ? {...cartItemExist, quantity: cartItemExist.quantity + 1} : cartItem)))      
            
    }
   
  }
  

  const removeFromCart = (product) => {
    const cartItemExist = cartItems.find((cartItem) => cartItem.id === product.id);
    if (cartItemExist.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => (cartItem.id !== product.id)));      
    }
    else {
      setCartItems(cartItems.map((cartItem)=>(cartItem.id === product.id ? {...cartItemExist, quantity: cartItemExist.quantity - 1} : cartItem)))
    }
  }
  const clearCart = () => {
    setCartItems([])
  }

    


    return (
        <StateContext.Provider value={{productItems, setProductItems, cartItems, addToCart, increaseCartItem, removeFromCart, clearCart, paidFor, setPaidFor, error, setError }}>
            {props.children}        
        </StateContext.Provider>
  )
}

export default StateProvider;