import React, { Component } from 'react';
import Product from '../Product/Product';
import './Carousel.scss';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.left = 0;
  }

  shouldComponentUpdate(nextProps) {
    this.list.style.width = `${nextProps.products.length * 278}px`;
    return true;
  }

  rightShift = () => {
    if (this.left > -1668) this.left = this.left - 278;
    this.list.style.left = `${this.left}px`;
  };

  leftShift = () => {
    if (this.left < 0) this.left = this.left + 278;
    this.list.style.left = `${this.left}px`;
  };

  addToQuote = product => {
    console.log(product);
  };

  createProducts() {
    let tempProduct = [];
    const { products } = this.props;
    tempProduct = products.map(product => {
      return (
        <Product
          addToQuote={itam => this.addToQuote(itam)}
          key={product.sfid}
          product={product}
        />
      );
    });
    return tempProduct;
  }

  render() {
    const products = this.createProducts();
    return (
      <div className="carousel">
        <div className="btn left" onClick={this.leftShift}>
          {' '}
          &#10094;{' '}
        </div>
        <div className="btn right" onClick={this.rightShift}>
          &#10095;
        </div>
        <div className="carouselContainer">
          <div
            className="list"
            ref={ref => {
              this.list = ref;
            }}
          >
            {products}
          </div>
        </div>
      </div>
    );
  }
}
export default Carousel;
