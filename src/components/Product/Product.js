import React from 'react';
import "./Product.css";

const Product = (props) => {
  const { name, value, desc } = props;
  return (
    <div className='prodcut'>
      <h2 className='name'>{name}</h2>
      <p>{value}</p>
      <p>{desc}</p>
    </div>
  )
}

export default Product