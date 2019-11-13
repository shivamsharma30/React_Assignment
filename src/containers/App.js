import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LogInPage from './LogInPage/LogInPage';
import HomePage from "./HomePage/HomePage";
import NavigationBar from '../components/NavigationBar/NavigationBar';
import './App.css';

  const navigationLinks = [
    {
      navLink: '/home',
      navName: 'Home'
    },
    {
      navLink: '/login',
      navName: 'LogIn'
    }
  ];

 const app=()=>{
    return (
      <Router> 
        <NavigationBar navigationLinks={navigationLinks}/>
        <Route exact path="/home" component={HomePage}/>
        <Route path="/login" component={LogInPage}/>
      </Router>
    );
};
export default app;
