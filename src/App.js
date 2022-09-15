import Layout from "./components/Layout/Layout";
import { Theme } from "./Theme";
import { ThemeProvider } from "styled-components";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AppContext from "./context/AppContext";
import useInitialState from "./hooks/useInitialState";
import SignUp from "./pages/signup/SignUp";
import Vehiculo from "./pages/vehiculo/Vehiculo";
import Booking from "./pages/booking/Booking";
import PrivateRoutes from "./util/PrivateRoutes";
import Administrator from "./pages/administrator/Administrator";
import Reservation from "./pages/reservation/Reservation";

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/vehiculo/:carId" element={<Vehiculo />} />
              <Route path="/administracion" element={<Administrator />} />
              <Route path="/reservas" element={<Reservation />} />
              <Route element={<PrivateRoutes />}>
                <Route path="/booking" element={<Booking/>} />
              </Route>
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
