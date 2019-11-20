import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavigationBar.scss';

const getUserData = props => {
  const { user, logOutUser } = props;
  if (user) {
    return (
      <>
        <span className="name">
          ( {user.firstName} {user.lastName} )
        </span>
        <i className="fas fa-user profileIcon" />
        <button className="logOutButton" onClick={logOutUser}>
          LogOut
        </button>
      </>
    );
  }
  return null;
};

const navBar = props => {
  const { navigationLinks } = props;
  const User = getUserData(props);
  return (
    <div className="navBar">
      <div>
        {navigationLinks.map(nav => {
          return (
            <Link to={nav.navLink} key={nav.id} className="navigationLink">
              {nav.navName}
            </Link>
          );
        })}
      </div>
      <div>{User}</div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOutUser: () => {
      dispatch({ type: 'LOGOUT', payload: '' });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(navBar);
