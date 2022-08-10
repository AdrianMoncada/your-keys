import React, { useState } from "react";

const initialState = {
  isLogin: false,
  user: [],
  startDate: null,
  endDate: null,
  search: null
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
    state.user.shift()
    setState({
        ...state,
        user: state.user.push(payload)
    })
  }

  const setEndDate = (payload) => {
    setState({
      ...state,
      endDate: payload
    })
  }

  const setStartDate = (payload) => {
    setState({
      ...state,
      startDate: payload
    })
  }
  
  const setSearch = (payload) => {
    setState({
      ...state,
      search: payload
    })
  }
  
  return {
    state,
    setLoginFalse,
    setLoginTrue,
    userLogin,
    setStartDate,
    setEndDate,
    setSearch
  };
};

export default useInitialState;
