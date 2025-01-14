import React from 'react';
import '../styles/merchan.css';

// Componente ProductItem que recibe un producto y una función para agregar al carrito como props
const ProductItem = ({ product, addToCart }) => {
  return (
    <div className='product-section'>
      {/* Título del producto */}
      <h2 className='product-title'>{product.name}</h2>
      {/* Precio del producto */}
      <p>{product.price} € </p>
      {/* Imagen del producto */}
      <div className='image-style'>
        <img className='product-image' src={product.foto} alt="" /> 
      </div>
      {/* Botón para agregar el producto al carrito */}
      <button className='product-button' onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
};

export default ProductItem;