import React from 'react';
import useCart from '../../hooks/useCart';

import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
const Orders = () => {
  const [cart, setCart] = useCart();

  const handleDeleteItem = (product) => {
    const rest = cart.filter((pd) => pd._id !== product._id);
    setCart(rest);
    removeFromDb(product._id);
  };

  return (
    <div className="product-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handleDeleteItem={handleDeleteItem}
          ></ReviewItem>
        ))}
      </div>
      <div className="order-summery">
        <Cart cart={cart}>
          <h4>inside orders.</h4>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
