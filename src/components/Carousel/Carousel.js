import React, {Component} from "react";
import Product from '../Product/Product';
import './Carousel.css'
class Carousel extends Component {
    constructor(props){
        super(props);
        this.left = 0;
    }
     
   createProducts(){
       let products = [];
        products = this.props.products.map((ele, ind) => {
            return  <Product key={ind} product = {ele}/>
        });
        return products;
   }

   rightShift = ()=>{
        if(this.left > -1656 )
       this.left = this.left - 276;
        this.list.style.left = this.left +'px';
   }

   leftShift = ()=>{
       if(this.left < 0)
        this.left = this.left + 276;
        this.list.style.left = this.left +'px'
    }

    render(){
        let products = this.createProducts();    
        return (
            <div className="carousel">
                <div className="btn left" onClick={this.leftShift}> &#10094; </div>
                <div className="btn right" onClick={this.rightShift}>&#10095;</div>
                <div className="carouselContainer">
                    <div className="list" ref = {(ref)=>{this.list = ref}}>
                        {products}
                    </div>
                </div>
            </div>
        );
    }
 
    componentWillReceiveProps(props){
        this.list.style.width = `${props.products.length * 278}px` ;
    }
}
export default Carousel;

