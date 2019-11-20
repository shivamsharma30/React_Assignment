const iState = {
  user: null,
  accessToken: '',
  profileId: ''
};

const reducer = (state = iState, action) => {
  if (action.type === 'ADD_ACCESS_TOKEN_AND_USER') {
    const { accessToken, profileId, user } = action.payload;
    return {
      ...state,
      user,
      accessToken,
      profileId
    };
  }
  if (action.type === 'LOGOUT') {
    return {
      user: null,
      accessToken: '',
      profileId: ''
    };
  }
  return state;
};

export default reducer;
