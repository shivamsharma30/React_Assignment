import React from 'react';
import {Link} from 'react-router-dom';
import './NavigationBar.css';

const navBar = (props)=>{
    const {navigationLinks} = props; 
    return (
        <div className="navBar">
            {
                navigationLinks.map((nav)=>{
                   return <Link to={nav.navLink} className="navigationLink">{nav.navName}</Link> ;
                })
            }
        </div>
    );
};

export default navBar;