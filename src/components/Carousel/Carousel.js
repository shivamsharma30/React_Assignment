/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/sort-comp */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {Component} from "react";
import Product from '../Product/Product';
import './Carousel.css';

class Carousel extends Component {
    constructor(props){
        super(props);
        this.left = 0;
    }
     
    rightShift = ()=>{
        if(this.left > -1656 )
       this.left = this.left - 276;
        this.list.style.left = `${this.left}px`;
   }

   leftShift = ()=>{
    if(this.left < 0)
     this.left = this.left + 276;
     this.list.style.left = `${this.left}px`;
    }

   createProducts(){
        let tempProduct = [];
        const {products} = this.props;
        tempProduct = products.map((product) => {
            return  <Product key={product.sfid} product = {product}/> ;
        });
        return tempProduct;
   }

 
   componentWillReceiveProps(props){
       this.list.style.width = `${props.products.length * 278}px` ;
    }

    render(){
        const products = this.createProducts();    
        return (
            <div className="carousel">
                <div className="btn left" onClick={this.leftShift}> &#10094; </div>
                <div className="btn right" onClick={this.rightShift}>&#10095;</div>
                <div className="carouselContainer">
                    <div className="list" ref = {(ref)=>{this.list = ref;}}>
                        {products}
                    </div>
                </div>
            </div>
        );
    }
}
export default Carousel;

