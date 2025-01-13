import React, { useState } from 'react';
import '../styles/merchan.css';

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price, 0);
  const groupedItems = cartItems.reduce((acc, item) => {
    const foundItem = acc.find((i) => i.id === item.id);

    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  return (
    <div className="cart-container">
      <button onClick={() => setIsCartOpen(!isCartOpen)} className="toggle-cart-btn">
        {isCartOpen ? 'Cerrar Carrito' : `Abrir Carrito (${cartItems.length})`}
      </button>

      {isCartOpen && (
        <div className="cart">
          <h2 className='nombreCarrito'>Total {cartItems.length} elementos {totalPrice.toFixed(2)}€</h2>
          {groupedItems.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <div className={`cart-items ${groupedItems.length > 3 ? 'scrollable' : ''}`}>
              {groupedItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <h4>{item.name} (x{item.quantity})</h4>
                  <p>{(item.price * item.quantity).toFixed(2)} €</p>
                  <button onClick={() => removeFromCart(item.id)}>Eliminar uno</button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;