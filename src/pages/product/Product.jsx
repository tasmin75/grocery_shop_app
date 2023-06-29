import React from 'react'
import style from './Product.module.css';
import HeroSection2 from '../../commonUI/herosection2/HeroSection2';

const Product = () => {
  return (
    <div className={style.product_section}>
      <HeroSection2 title="products"/>
    </div>
  )
}

export default Product