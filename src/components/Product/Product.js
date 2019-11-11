import React from 'react';
import './Product.css';


const product = (props)=>{
    return (
        <div className="card">
            <div className="productImage">
                <img src={props.product.compositeProducts[0].EProductMedia.smallURI} alt=""/>
            </div>
            <div className="productName">
                <h3>{props.product.sfdcName}</h3>
            </div>
            <div className="productPrice">
                <span>{props.product.compositeProducts[0].priceEntry.listPrice}</span> 
            </div>
            <button className="button">Add to Quote</button>
        </div>
    );
}
export default product;