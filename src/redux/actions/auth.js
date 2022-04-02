const onLogin = (username, password) => {
  return dispatch => {
    dispatch({
      type: 'CLEAR_ERR',
    });
    if (username === 'users' && password === '1234') {
      dispatch({
        type: 'AUTH_LOGIN',
        payload: 'token1234',
      });
    } else {
      dispatch({
        type: 'AUTH_ERR',
        payload: 'Wrong username or password!',
      });
    }
  };
};

export default onLogin;
