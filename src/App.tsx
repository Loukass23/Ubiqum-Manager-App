import React, { useContext } from 'react';
import './App.css';
import NavBar from './layout/NavBar';
import ThemeContextProvider, { ThemeContext } from './context/ThemeContext';
import { BrowserRouter, Switch } from 'react-router-dom';
import { MuiThemeProvider, } from '@material-ui/core';
import { Route, Redirect } from 'react-router';
import Appointments from './screens/Appointments';
import Landing from './screens/Landing';
import Settings from './screens/Settings';
import UbiqumContextProvider from './context/UbiqumContext';
import AuthContextProvider, { AuthContext } from './context/AuthContext';
import Students from './screens/Students';
import SignIn from './layout/SignIn';
import SpinningLogo from './components/SpinningLogo';
import UserProfile from './components/UserProfile';
import Profile from './screens/Profile';
import Ressources from './screens/Ressources';
import Allumni from './screens/Allumni';
import Dashboard from './screens/Dashboard';



const RenderStaffOnly: React.FC = () => (<SpinningLogo msg="Staff Only!" />)
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
        <Route exact path='/dashboard' component={Dashboard} />

        <Route exact path='/settings' component={Settings} />


        {isAuthenticated ?
          <React.Fragment>
            <Route path="/profile/:id" exact component={Profile} />
            <Route path="/appointments" exact component={Appointments} />
            <Route path="/ressources" exact component={Ressources} />
            <Route path="/allumni" exact component={Allumni} />

            {userType !== 'student' ?
              <UbiqumContextProvider>
                <Route path="/students" exact component={Students} />
              </UbiqumContextProvider> :
              <Route path="/students" exact component={RenderStaffOnly} />

            }


          </React.Fragment>
          :
          <Redirect to={{ pathname: "/", }} />}




        {/* <Route exact path='/signin' component={SignIn} /> */}
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
