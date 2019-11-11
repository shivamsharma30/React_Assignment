import React,{ Component } from 'react';
import LogInPage from './LogInPage/LogInPage';
import HomePage from "./HomePage/HomePage";
import './App.css';

class App extends Component  {
  constructor(props){
    super(props);
    console.log("IN APP Constructor");
  }
  render(){
    return (
      <div> 
      <LogInPage/>
      <HomePage/>
      </div>
    );
  }
}

export default App;
