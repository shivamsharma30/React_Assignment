/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {Component} from 'react';
import './Login.css';

class Login extends Component{
    logInHandler = ()=>{ 
        const {validation} = this.props;
        validation(this.inputUsername.value, this.inputPassword.value);
    }

    render(){
        return(
            <div className="loginForm">
                <h2>Login</h2>
                <label>Email</label>
                <input type="text" ref={(ref) => {this.inputUsername = ref;}} />
                <label>password</label>
                <input type="password" ref={(ref) => {this.inputPassword = ref;}} />
                <input type="submit" value="LogIn" onClick={this.logInHandler}/>
            </div> 
        );
    }
   
}

export default Login;
