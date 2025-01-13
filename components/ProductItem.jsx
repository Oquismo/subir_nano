import React from 'react';
import '../styles/merchan.css';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className='product-section'>
      <h2 className='product-title'>{product.name}</h2>
      <p>{product.price} € </p>
      <div className='image-style'>
        <img className='product-image' src={product.foto} alt="" /> 
      </div>
      <button className='product-button' onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
};

export default ProductItem;