import React,{Component} from 'react';
import Login from '../../components/Login/Login';
import ToastMessage from '../../components/ToastMessage/ToastMessage';
import axios from 'axios';
import './LogInPage.css'

class LogInPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            LogInMessage: "",
            show : false
        }
    }

    toastMessageHandler = (message)=>{
        console.log(message,"intoast");
        const self = this;
        this.setState({...this.state, show:false});
        setTimeout(function(){
            self.setState({...self.state,LogInMessage: message, show: true});
        },500);
        
    }


    validation = (username, password)=>{
        if(username === "" || password === ""){
            this.toastMessageHandler("all field required");
        }
         else{
             let regExUser = /^\S*$/.test(username);
             let regExPass = /^\S*$/.test(password);
            if(regExUser && regExPass){
                this.logInAPI(username, password);
             }
            else{
                let field = '';
                if(!regExUser)
                 field = "username ";
                 if(!regExPass)
                 field = field+"password ";
                this.toastMessageHandler(field+ "Invalid. space not allow"); 
            }
        }
        
    }  

    logInAPI = (username, password)=>{
        const self = this;
        let bearer = "Bearer YWRtaW46YWRtaW4=";
        let contentType = 'application/json';
        axios({
            method: 'post',
            url: 'https://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/oauth/login',
            data: {
                "username":username,//"trupti.kashid@objectedge.com",
                "password":password//"Objectedge$10"
            },
            headers: {
                "Authorization":bearer,
                'Content-Type': contentType
            }}).then(function (response) {
                //handle success
                console.log("handle success",response);
               self.toastMessageHandler("Login Success");
            }).catch(function (response) {
                //handle error
                console.log(response);
                self.toastMessageHandler("Login Failed Please try again");
        });
    }

    render(){
        return(
            <div className="logInPage">
                {this.state.show ? <ToastMessage message = {this.state.LogInMessage}/>: null}
                <Login validation = {(username, password)=>{ this.validation(username, password)}}/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo4kdHSVd5HhGRolR5Jn92_rFENn53ZWWb0oYAn6bPQsbQRPXghg&s" className="backgroundImage" alt=""/>
            </div>
        );
    }
}

export default LogInPage;