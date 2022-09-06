import { Navigate, Outlet } from "react-router";
import AppContext from "../context/AppContext";
import { useContext } from "react";

const PrivateRoutes = () => {
    const  {state} = useContext(AppContext)
  return (
    state.isLogin ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoutes