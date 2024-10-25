import React from 'react'
import '../styles/merchan.css'
import producto from '../img/historia.jpg'
import prodcuto2 from '../img/formula1.jpg'

function Merchan() {
  return (
    <div className="merchan-page">
      <div className="construction-message animate__animated animate__flash">
        En construcción
      </div>

      <div className="products">
        <div className="product">
          <img src={producto} alt="" />
        </div>
        <div className="product">
          <img src={prodcuto2} alt="Product 2" />
        </div>
        {/* Add more products as needed */}
      </div>
    </div>
  )
}

export default Merchan