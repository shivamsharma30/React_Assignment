import React from 'react';
import './Product.css';


const product = (props)=>{
    return (
        <div className="card">
            <div className="productImage">
                <img src={props.product.compositeProducts[0].EProductMedia.smallURI} alt=""/>
            </div>
            <span className="productName">{props.product.sfdcName}</span>
            <span className="productPrice">{props.product.compositeProducts[0].priceEntry.listPrice}</span> 
            <button></button>
        </div>
    );
}
export default product;