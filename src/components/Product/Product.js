import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
const Product = ({ addToCart, product }) => {
  // console.log(props);
  // const { addTocart, product } = props;
  const { name, ratings, img, price, category, seller } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h6>{name}</h6>
      <p>Price: $ {price}</p>
      <p>
        <small>Manufacturer: {seller}</small>
      </p>
      <p>
        <small>Rating: {ratings} star</small>
      </p>
      <button onClick={() => addToCart(product)} className="cart-btn">
        Add To Cart <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </div>
  );
};

export default Product;
