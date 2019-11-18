/* eslint-disable import/no-unresolved */
import React from 'react';
import './ToastMessage.scss';

const toastMessage = props => {
  const { message } = props;
  return <div className="tost">{message}</div>;
};

export default toastMessage;
