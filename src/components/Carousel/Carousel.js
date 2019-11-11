import React, {Component} from "react";
import Product from '../Product/Product';
import './Carousel.css'
import { create } from "istanbul-reports";
class Carousel extends Component {
   constructor(props){
       super(props);
   }

   createProducts(){
       let products = [];
        products = this.props.products.map((ele, ind) => {
            return  <Product key={ind} product = {ele}/>
        });
        return products;
   }

   leftShift = ()=>{
        let left = this.list.style.left;
        left = left - 100;
        this.list.style.left = left +'px';
   }

   rightShift = ()=>{
        let left = this.list.style.left;
        if(left == 0)
        left = left + 100
        this.list.style.left = left +'px'
        console.log(left)  
    }

    render(){
        let products = this.createProducts();   
        return (
            <div className="carouselContainer">
                <div onClick={this.leftShift}> prev </div>
                <div className="list" ref = {(ref)=>{this.list = ref}}>
                    {products}
                </div>
                <div onClick={this.rightShift}> next </div>
            </div>
        );
    }
}
export default Carousel;
