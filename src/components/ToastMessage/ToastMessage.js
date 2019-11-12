import React from 'react';
import "./ToastMessage.css";

const toastMessage = (props)=> {
    const {message} = props;
    return(
        <div className= "tost">
            {message}
        </div>
    );
};

export default toastMessage;