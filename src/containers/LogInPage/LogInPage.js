import axios from 'axios';
import React, { Component } from 'react';
import Login from '../../components/Login/Login';
import ToastMessage from '../../components/ToastMessage/ToastMessage';
import './LogInPage.scss';

class LogInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LogInMessage: '',
      show: false
    };
  }

  toastMessageHandler = message => {
    this.setState({ show: false });
    setTimeout(() => {
      this.setState({ LogInMessage: message, show: true });
    }, 500);
  };

  validation = (username, password) => {
    if (username === '' || password === '') {
      this.toastMessageHandler('all field required');
    } else {
      const regExUser = /^\S*$/.test(username);
      const regExPass = /^\S*$/.test(password);
      if (regExUser && regExPass) {
        this.logInAPI(username, password);
      } else {
        let field = '';
        if (!regExUser) field = 'username ';
        if (!regExPass) field += 'password ';
        this.toastMessageHandler(`${field} Invalid. space not allow`);
      }
    }
  };

  logInAPI = (userName, passWord) => {
    const bearer = 'Bearer YWRtaW46YWRtaW4=';
    const contentType = 'application/json';
    axios({
      method: 'post',
      url:
        'https://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/oauth/login',
      data: {
        username: userName, // "trupti.kashid@objectedge.com",
        password: passWord // "Objectedge$10"
      },
      headers: {
        Authorization: bearer,
        'Content-Type': contentType
      }
    })
      .then(() => {
        this.toastMessageHandler('Login Success');
      })
      .catch(() => {
        this.toastMessageHandler('Login Failed Please try again');
      });
  };

  render() {
    const { show } = this.state;
    const { LogInMessage } = this.state;
    return (
      <div className="logInPage">
        {show ? <ToastMessage message={LogInMessage} /> : null}
        <Login
          validation={(username, password) => {
            this.validation(username, password);
          }}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo4kdHSVd5HhGRolR5Jn92_rFENn53ZWWb0oYAn6bPQsbQRPXghg&s"
          className="backgroundImage"
          alt=""
        />
      </div>
    );
  }
}

export default LogInPage;
