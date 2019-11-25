import React, { useContext } from 'react';
import './App.css';
import NavBar from './layout/NavBar';
import ThemeContextProvider, { ThemeContext } from './context/ThemeContext';
import { BrowserRouter, Switch } from 'react-router-dom';
import { MuiThemeProvider, Container } from '@material-ui/core';
import { MemoryRouter, Route, Redirect } from 'react-router';
import Appointments from './screens/Appointments';
import Landing from './screens/Landing';
import Settings from './screens/Settings';
import UbiqumContextProvider from './context/UbiqumContext';
import AuthContextProvider, { AuthContext } from './context/AuthContext';
import Students from './screens/Students';
import SignIn from './layout/SignIn';




const RenderWebsite: React.FC = () => {
  const {
    theme,
  } = useContext(ThemeContext)
  const {
    isAuthenticated, userType
  } = useContext(AuthContext)
  console.log(isAuthenticated)
  return (
    <MuiThemeProvider theme={theme}>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Landing} />
        {isAuthenticated ?
          <React.Fragment>
            <Route path="/appointments" exact component={Appointments} />
            {userType !== 'student' &&
              <UbiqumContextProvider>
                <Route path="/students" exact component={Students} />
              </UbiqumContextProvider>

            }

          </React.Fragment>
          :
          <Redirect to={{ pathname: "/", }} />}




        <Route exact path='/settings' component={Settings} />
        <Route exact path='/signin' component={SignIn} />
      </Switch>

    </MuiThemeProvider>)
}

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <ThemeContextProvider>
          <AuthContextProvider>
            <RenderWebsite />
          </AuthContextProvider>
        </ThemeContextProvider>

      </div>
    </BrowserRouter>


  );
}

export default App;
