import React, {Component} from 'react';
import './Login.css';

class Login extends Component{
    constructor(props){
        super(props);
    }
    logInHandler = ()=>{ 
        this.props.validation(this.inputUsername.value, this.inputPassword.value);
    }

    render(){
        return(
            <div className="loginForm">
                <h2>Login</h2>
                <label>Email</label>
                <input type="text" ref={ref => this.inputUsername = ref} />
                <label>password</label>
                <input type="password" ref={ref => this.inputPassword = ref} />
                <input type="submit" value="LogIn" onClick={this.logInHandler}/>
            </div> 
        );
    }
   
}

export default Login;
