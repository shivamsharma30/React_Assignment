/* eslint-disable camelcase */
import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      const regSp = /^\S*$/;
      const regExUser = regSp.test(username);
      const regExPass = regSp.test(password);
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

  getUserProfile = (aToken, id) => {
    const bearer = `Bearer ${aToken}`;
    const contentType = 'application/json';
    axios({
      method: 'get',
      url: `https://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/profiles/current?profileId=${id}`,
      headers: {
        Authorization: bearer,
        'Content-Type': contentType
      }
    }).then(response => {
      const { profile_user } = response.data;
      const { setUserInStore } = this.props;
      setUserInStore({
        user: profile_user,
        accessToken: aToken,
        profileId: id
      });
      this.toastMessageHandler('Login Success');
    });
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
      .then(response => {
        if (response.status === 200) {
          const { access_token, id } = response.data;
          this.toastMessageHandler('Login Success');
          this.getUserProfile(access_token, id);
        }
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
const mapDispatchToProps = dispatch => {
  return {
    setUserInStore: data => {
      dispatch({ type: 'ADD_ACCESS_TOKEN_AND_USER', payload: data });
    }
  };
};
export default connect(null, mapDispatchToProps)(LogInPage);
