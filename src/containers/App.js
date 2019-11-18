import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogInPage from './LogInPage/LogInPage';
import HomePage from './HomePage/HomePage';
import ProductListingPage from './ProductListingPage/ProductListingPage';
import SearchResultPage from './SearchResultPage/SearchResultPage';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import './App.scss';

const navigationLinks = [
  {
    navLink: '/home',
    navName: 'Home'
  },
  {
    navLink: '/login',
    navName: 'LogIn'
  },
  {
    navLink: '/productListingPage',
    navName: 'Products'
  },
  {
    navLink: '/SearchResultPage',
    navName: 'Search Product'
  }
];

const app = () => {
  return (
    <Router>
      <NavigationBar navigationLinks={navigationLinks} />
      <Route exact path="/home" component={HomePage} />
      <Route path="/login" component={LogInPage} />
      <Route path="/productListingPage" component={ProductListingPage} />
      <Route path="/SearchResultPage" component={SearchResultPage} />
    </Router>
  );
};
export default app;
