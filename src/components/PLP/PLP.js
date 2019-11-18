import React from 'react';
import Product from '../Product/Product';
import './PLP.scss';

const addToQuote = product => {
  console.log(product);
};

const createProducts = products => {
  return products.map(product => {
    return (
      <Product
        addToQuote={() => addToQuote(product)}
        key={product.sfid}
        product={product}
      />
    );
  });
};

const plp = props => {
  const { products } = props;
  const tempProducts = createProducts(products);
  return <div className="container">{tempProducts}</div>;
};

export default plp;
