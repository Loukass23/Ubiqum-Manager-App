import React, { useContext } from 'react';
import './App.css';
import NavBar from './layout/NavBar';
import ThemeContextProvider, { ThemeContext } from './context/ThemeContext';
import { BrowserRouter, Switch } from 'react-router-dom';
import { MuiThemeProvider, Container } from '@material-ui/core';
import { MemoryRouter, Route } from 'react-router';
import Appointments from './screens/Appointments';
import Landing from './screens/Landing';




const RenderWebsite: React.FC = () => {
  const {
    theme,
  } = useContext(ThemeContext)

  return (
    <MuiThemeProvider theme={theme}>

      <NavBar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/appointments' component={Appointments} />
      </Switch>

    </MuiThemeProvider>)
}

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <ThemeContextProvider>
          <RenderWebsite />
        </ThemeContextProvider>

      </div>
    </BrowserRouter>


  );
}

export default App;
