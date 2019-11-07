import React, {Component} from 'react';
import "./ToastMessage.css"
const toastMessage = (props)=> {
    console.log("in toast component", props.message);
    return(
        <div className= "tost">
            {props.message}
        </div>
    )
}

export default toastMessage;