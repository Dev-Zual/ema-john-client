import React from 'react';
import './Cart.css';
const Cart = ({ cart, children }) => {
  //   console.log(cart);

  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = (total * 0.1).toFixed(2);
  const grandTotal = total + shipping + parseFloat(tax);

  // conditional rendering
  // 1.if else function
  // 2. ternery operatior
  // 3. && operator condition true hole dukbe
  // 4. || condition false hole dukbe
  let command;
  if (cart.length === 0) {
    command = <p>kinos na ken?</p>;
  } else if (cart.length < 4) {
    command = <p>add more item.</p>;
  } else {
    command = <p>thanks for buing.</p>;
  }
  return (
    <div className="cart">
      <h4>this is summery</h4>
      <p>selected items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
      <p>{children}</p>
      {command}
      {cart.length < 3 ? <p>oi beta add one more.</p> : <p>thik ase.</p>}
      {cart.length === 5 && <p>you chose high.</p>}

      {cart.length === 0 || <p>your are bying.</p>}
    </div>
  );
};

export default Cart;
