import Layout from "./components/Layout/Layout";
import { Theme } from "./Theme";
import { ThemeProvider } from "styled-components";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AppContext from "./context/AppContext";
import useInitialState from "./hooks/useInitialState";
import SignUp from "./pages/signup/SignUp";
import Vehiculo from "./pages/vehiculo/Vehiculo";

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
              <Route path="/vehiculo/:car" element={<Vehiculo />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
