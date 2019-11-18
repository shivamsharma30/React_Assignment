import React from 'react';
import './Product.scss';

const card = props => {
  const { product, addToQuote } = props;
  return (
    <div className="card">
      <div className="productImage">
        <img src={product.compositeProducts[0].EProductMedia.smallURI} alt="" />
      </div>
      <div className="productName">
        <h3>{product.sfdcName}</h3>
      </div>
      <div className="productPrice">
        <span>{product.compositeProducts[0].priceEntry.listPrice}</span>
      </div>
      <button
        onClick={() => {
          addToQuote(product);
        }}
        className="button"
      >
        Add to Quote
      </button>
    </div>
  );
};
export default card;
