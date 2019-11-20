import React, { useContext } from 'react';
import logo from './assets/ubiqum-manager-logo-nobg.png'
import './App.css';
import NavBar from './layout/NavBar';
import ThemeContextProvider, { ThemeContext } from './context/ThemeContext';
import { MuiThemeProvider } from '@material-ui/core';

const spinningLogo = (<header className="App-header">
  <div className="zoom">
    <img src={logo} className="App-logo" alt="logo" />
  </div>
  <h1>Ubiqum Manager</h1>
</header>)

const RenderWebsite: React.FC = () => {
  const {
    theme,
  } = useContext(ThemeContext)

  return (
    <MuiThemeProvider theme={theme}>
      <NavBar />
      {spinningLogo}
    </MuiThemeProvider>)
}


const App: React.FC = () => {

  return (
    <div className="App">
      <ThemeContextProvider>
        <RenderWebsite />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
