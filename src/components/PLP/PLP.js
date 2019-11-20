import React from 'react';
import Product from '../Product/Product';
import './PLP.scss';

const createProducts = products => {
  return products.map(product => {
    return <Product key={product.sfid} product={product} />;
  });
};

const plp = props => {
  const { products } = props;
  const tempProducts = createProducts(products);
  return <div className="container">{tempProducts}</div>;
};

export default plp;
