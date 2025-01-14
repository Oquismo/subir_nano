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

  // Renderizando el componente del carrito de compras
  return (
    <div className="cart-container">
      {/* Botón para abrir o cerrar el carrito */}
      <button onClick={() => setIsCartOpen(!isCartOpen)} className="toggle-cart-btn">
        {isCartOpen ? 'Cerrar Carrito' : `Abrir Carrito (${cartItems.length})`}
      </button>

      {/* Mostrando el contenido del carrito si está abierto */}
      {isCartOpen && (
        <div className="cart">
          {/* Título del carrito con el total de elementos y el precio total */}
          <h2 className='nombreCarrito'>Total {cartItems.length} elementos {totalPrice.toFixed(2)}€</h2>
          
          {/* Mensaje si el carrito está vacío */}
          {groupedItems.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            // Lista de elementos en el carrito
            <div className={`cart-items ${groupedItems.length > 3 ? 'scrollable' : ''}`}>
              {groupedItems.map((item) => (
                <div key={item.id} className="cart-item">
                  {/* Nombre del producto y cantidad */}
                  <h4>{item.name} (x{item.quantity})</h4>
                  {/* Precio total del producto */}
                  <p>{(item.price * item.quantity).toFixed(2)} €</p>
                  {/* Botón para eliminar una unidad del producto */}
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