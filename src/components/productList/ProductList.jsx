import React from 'react';
import "./ProductList.css";
import Product from "../product/Product.jsx";
import { products } from '../../data.js';

const ProductList = () => {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className='pl-title'>Education</h1>
        <p className='pl-desc'>
          Graduate in Mechanical Engineering from Saveetha Institute of Medical & Technical Sciences in 2018.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product 
            key={item.id} 
            link={item.link} 
            img={item.img} 
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList
