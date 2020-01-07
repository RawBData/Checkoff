import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginFormContainer from './login_signup_form/login_form_container';
import SignupFormContainer from './login_signup_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BannerContainer from './banner/banner_container';
//import MainContainer from './main/main_container';
import CheckOffAppContainer from './checkoffapp/checkoff_app_container';
import SplashContainer from './splash/splash_container';


const App = () => (
  <div>
    {/* <div>
      <BannerContainer className="banner"/>
    </div> */}
    
    {/* <Route path='/main' component/> */}
    <Switch>
      <AuthRoute path='/login' component={LoginFormContainer}/>
      <AuthRoute path='/signup' component={SignupFormContainer}/>
      <ProtectedRoute path='/main' component={CheckOffAppContainer} />
      <AuthRoute path='/' component={SplashContainer} />
      <Redirect to='/' component={SplashContainer}/>
    </Switch>
    {/* <Route exact path="/" component={SearchContainer} /> */}

  </div>
);

export default App;