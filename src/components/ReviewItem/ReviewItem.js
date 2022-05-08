import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';
const ReviewItem = ({ product, handleDeleteItem }) => {
  const { name, img, price, shipping, quantity } = product;
  //   console.log(product);
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-item-text">
        <div className="review-item-detail">
          <h4 title={name}>
            {name.length > 20 ? name.slice(0, 20) + '...' : name}
          </h4>
          <h5>Price: {price}</h5>
          <p>shipping: {shipping}</p>
          <p>quantity: {quantity}</p>
        </div>
        <div className="delete-icon">
          <button onClick={() => handleDeleteItem(product)}>
            <FontAwesomeIcon
              className="review-delete"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
