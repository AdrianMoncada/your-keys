import { Navigate, Outlet } from "react-router";
import AppContext from "../context/AppContext";
import { useContext } from "react";

const PrivateRoutes = () => {
    const  {state} = useContext(AppContext)
  return (
    state.user.map(i => i.rol.idRol).toString() === "1" ? <Outlet /> : <Navigate to="/" />
  )
}

export default PrivateRoutes