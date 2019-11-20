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
    id: 'n1',
    navLink: '/home',
    navName: 'Home'
  },
  {
    id: 'n2',
    navLink: '/login',
    navName: 'LogIn'
  },
  {
    id: 'n3',
    navLink: '/productListingPage',
    navName: 'Products'
  },
  {
    id: 'n4',
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
