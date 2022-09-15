import { useState } from "react";

const initialState = {
  isLogin: false,
  user: [],
  startDate: null,
  endDate: null,
  search: null,
  nameSearch: [],
  categoryList: null,
  booking: null,
  carId: null,
  bookingList: null,
  bookingListDate: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const setLoginTrue = () => {
    setState({
      ...state,
      isLogin: true,
    });
  };

  const setCarId = (payload) => {
    setState({
      ...state,
      carId: payload,
    });
  };

  const setLoginFalse = () => {
    setState({
      ...state,
      isLogin: false,
    });
  };

  const userLogin = (payload) => {
    state.user.shift();
    setState({
      ...state,
      user: state.user.push(payload),
    });
  };

  const setEndDate = (payload) => {
    setState({
      ...state,
      endDate: payload,
    });
  };

  const setStartDate = (payload) => {
    setState({
      ...state,
      startDate: payload,
    });
  };

  const setSearch = (payload) => {
    setState({
      ...state,
      search: payload,
    });
  };

  const setNameSearch = (payload) => {
    state.user.shift();
    setState({
      ...state,
      nameSearch: state.nameSearch.push(payload),
    });
  };

  const setCategoryList = (payload) => {
    setState({
      ...state,
      categoryList: payload,
    });
  };

  const setUser = () => {
    state.user.shift();
  };

  const setBooking = (payload) => {
    setState({
      ...state,
      booking: payload,
    });
  };

  const setBookingList = (payload) => {
    setState({
      ...state,
      bookingList: payload
    })
  }

  const setBookingListDate = (payload) => {
    setState({
      ...state,
      bookingListDate: state.bookingListDate.push(payload)
    })
  }

 

  return {
    state,
    setNameSearch,
    setLoginFalse,
    setLoginTrue,
    userLogin,
    setStartDate,
    setEndDate,
    setSearch,
    setCategoryList,
    setUser,
    setBooking,
    setCarId,
    setBookingList
  };
};

export default useInitialState;
