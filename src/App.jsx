import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import '../styles/merchan.css';

function App() {
  const [products] = useState([
    { id: 1, name: 'Gorra Aston Martin', price: 60, foto: 'https://images.footballfanatics.com/aston-martin/aston-martin-aramco-f1-2024-fernando-alonso-team-cap-green_ss5_p-200838293+u-da7blf4xqauwccba9i5n+v-s5ffffg4cijzbyc73wob.jpg?_hv=2&w=340' }, 
    { id: 2, name: 'Polo RedBull', price: 40, foto: 'https://images.footballfanatics.com/red-bull-racing/red-bull-racing-2024-team-set-up-t-shirt_ss5_p-201084100+u-hpvemdztorwx9uhncv3g+v-ifxvmbsdxnptyrjnoxbw.jpg?_hv=2&w=340' },
    { id: 3, name: 'Camiseta Fernando Alonso', price: 33, foto: 'https://images.footballfanatics.com/aston-martin/aston-martin-aramco-f1-2024-fernando-alonso-team-driver-t-shirt_ss5_p-200838295+u-eb2zpsl0diucnfritdfg+v-t1ng2tgliblq5gyvbrtm.jpg?_hv=2&w=340' },
    { id: 4, name: 'Sudadera Mercedes', price: 150, foto: 'https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-f1-stealth-hooded-sweat-unisex_ss5_p-201164018+u-gk4r0nxsqsbcgb4wimmg+v-8xenzndkuoqmi0efuxz0.jpg?_hv=2&w=340' },
    { id: 4, name: 'Gorra Mercedes', price: 150, foto: 'https://images.footballfanatics.com/mercedes-amg-petronas-f1-team/mercedes-amg-petronas-f1-2024-team-cap-black_ss5_p-201163842+u-nvtbc8f1e6jkhbmzo9pt+v-ky1rhggxt1ye35ykegcj.jpg?_hv=2&w=340' },
    { id: 4, name: 'Polo Williams', price: 80, foto: 'https://images.footballfanatics.com/williams-racing/williams-racing-2023-team-media-polo-blue_ss4_p-13347547+u-1b6lmuhc2e89i5fhfjs0+v-096a471b74df47b89f6a6c0b4cd7c947.jpg?_hv=2&w=340' },
  ]);

  const [cart, setCart] = useState([]);

  // Añadir un producto al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Eliminar un producto por ID
  const removeFromCart = (productId) => {
    const productIndex = cart.findIndex((item) => item.id === productId);
    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(productIndex, 1); // Elimina el primer match encontrado
      setCart(updatedCart);
    }
  };

  // Vaciar carrito (opcional)
  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <div className='cart'>
        <Cart cartItems={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
      </div>
      <div className='product-flex'>
        <Navbar className='product-description' cartCount={cart.length} />
        <ProductList className='product-section' products={products} addToCart={addToCart} />
      </div>
    </>
  );
}

export default App;
