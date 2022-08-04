import "./App.css";
import Layout from './components/Layout/Layout';
import SearchSection from './components/SearchBar/SearchSection';
import {Theme} from './Theme';
import { ThemeProvider } from 'styled-components';

import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme} >
        <Layout>
            <SearchSection />
          </Layout>
      </ThemeProvider>
      <Login />
    </div>
  );
}

export default App;
