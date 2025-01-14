import React from 'react';
import ProductItem from './ProductItem';

// Componente ProductList que recibe una lista de productos y una función para agregar al carrito como props
const ProductList = ({ products, addToCart }) => {
  return (
    <>
      {/* Contenedor de productos con estilo flex */}
      <div className='product-flex'>
        {/* Mapeando la lista de productos y renderizando un ProductItem para cada uno */}
        {products.map(product => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
