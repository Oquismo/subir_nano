import React from 'react';


const MerchandisingPage = () => {
  const products = [
    { id: 1, name: 'Camiseta de F1', price: 25, image: 'camiseta-f1.jpg' },
    { id: 2, name: 'Poster de Escuderías', price: 15, image: 'poster-escuderias.jpg' },
    { id: 3, name: 'Mochila de Piloto', price: 30, image: 'mochila-piloto.jpg' },
    
  ];

  const addToCart = (productId) => {
    console.log(`Agregando producto ${productId} al carrito`);
  };

  return (
    <div className="merchandising-page">
      <h1>Nuestros Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product.id)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MerchandisingPage;