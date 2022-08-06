import React, { useState } from "react";

const initialState = {
  isLogin: false,
  user: []
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const setLoginTrue = () => {
    setState({
        ...state,
        isLogin: true
    })
  }

  const setLoginFalse = () => {
    setState({
        ...state,
        isLogin: false
    })
  }

  const userLogin = (payload) => {
    setState({
        ...state,
        user: state.user.push(payload)
    })
  }
  return {
    state,
    setLoginFalse,
    setLoginTrue,
    userLogin,
  };
};

export default useInitialState;
