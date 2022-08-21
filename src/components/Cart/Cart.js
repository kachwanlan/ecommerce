import React, { useContext } from 'react';
import { StateContext } from '../../context/StateContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, increaseCartItem, removeFromCart, clearCart } = useContext(StateContext);
    return (
      <>
        <div className='cart-items'>
        <h2 className='cart-items-header'>Cart Items</h2>

        <div className='clear-cart'>
        {cartItems.length >= 1 && <button className='clear-cart-button' onClick={() => clearCart()}>Clear</button>}
        </div>

        {cartItems.length === 0 && <div className='cart-items-empty'> No Item Added </div>}
        {console.log(cartItems)}

        <div>
        {cartItems.map((cartitem) => (
        <div className='cart-items-list' key={cartitem.id}>
        <img className='cart-items-image' src={cartitem.image} alt={cartitem.name} />
        <div className='cart-items-name'>
        {cartitem.name}
        </div>

        <div className='cart-items-function'>
        <button className='cart-items-add' onClick={()=>increaseCartItem(cartitem)}>+</button>
        <button className='cart-items-remove' onClick={()=>removeFromCart(cartitem)}>-</button> 
        </div>
        <div className='cart-items-price'>
        {cartitem.quantity} * ${cartitem.price}
        </div>

        </div>
        ))}
        </div>
        <div className='cart-items-total-price-name'>
        Total Price: 
        <div className='cart-items-total-price'>
        {/* ${totalPrice} */}
        </div>
        </div>
        </div>     
    
    </>
  )
}

export default Cart