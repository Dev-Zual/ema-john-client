import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';

import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart(products);
  // count data
  const [pages, setPages] = useState(0);
  const [clickPage, setClickpage] = useState(0);
  const [size, setSize] = useState(10);
  // load page dinamic

  useEffect(() => {
    fetch(`http://localhost:5000/product?clickPage=${clickPage}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [clickPage, size]);

  useEffect(() => {
    fetch('http://localhost:5000/productcount')
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPages(pages);
      });
  }, []);

  const addToCart = (selectProduct) => {
    // console.log(product);
    let newCart = [];
    const exists = cart.find((pd) => pd._id === selectProduct._id);
    if (!exists) {
      selectProduct.quantity = 1;
      newCart = [...cart, selectProduct];
    } else {
      const rest = cart.filter((product) => product._id !== selectProduct._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectProduct._id);
  };
  return (
    <div className="product-container">
      <div>
        <div className="shop-container">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              addToCart={addToCart}
            ></Product>
          ))}
        </div>
        <div className="pagination-container">
          {[...Array(pages).keys()].map((number) => (
            <button
              className={clickPage === number ? 'selected' : ''}
              onClick={() => setClickpage(number)}
            >
              {number + 1}
            </button>
          ))}
          {/* {size} */}
          <select onChange={(e) => setSize(e.target.value)}>
            <option value="5">5</option>
            <option value="10" selected>
              10
            </option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      <div className="order-summery">
        <Cart cart={cart}>
          <Link to="/orders">
            <button>Review Orders</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
