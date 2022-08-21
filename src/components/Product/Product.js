import React, { useContext } from 'react';
import { StateContext } from '../../context/StateContext';
import './Product.css';

const Product = () => {
  const { productItems, addToCart } = useContext(StateContext);
  return (
    <div className='product-background'>
      
    <div className='products'>
      
      {productItems.map((productItem) => (
        <div className='card' key={productItem.id }>
          <div>
            <img className='product-image' src={productItem.image} alt={productItem.name} key={productItem.id } />
          </div>

          <div>
            <h3 className='product-name' key={productItem.id }>{productItem.name}</h3> 
          </div>

          <div className='product-price' key={productItem.id }>
            ${productItem.price}
          </div>
          
          <div>
            <button className='product-add-button' key={productItem.id } onClick={()=>addToCart(productItem)} >Add To Cart</button>
          </div>
          
      </div>

      ))}
    </div>

    </div>
  )
}

export default Product