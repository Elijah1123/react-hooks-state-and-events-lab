import React, { useState } from 'react';

function Item({ name, price }) {
  const [isInCart, setIsInCart] = useState(false); // State to track if item is in cart

  const toggleCart = () => {
    setIsInCart(prevState => !prevState); // Toggle the item in/out of cart
  };

  return (
    <li className={isInCart ? 'in-cart' : ''}>
      <span>{name} - ${price}</span>
      <button onClick={toggleCart}>
        {isInCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
