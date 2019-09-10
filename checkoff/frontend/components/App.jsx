import React from "react";
import { Route } from 'react-router-dom';
import LoginFormContainer from './login_signup_form/login_form_container';
import SignupFormContainer from './login_signup_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BannerContainer from './banner/banner_container';


const App = () => (
  <div>
    <div>
      <BannerContainer className="banner"/>
      <div className="logo">
      </div>
    </div>
    
    
    <AuthRoute path='/login' component={LoginFormContainer}/>
    <AuthRoute path='/signup' component={SignupFormContainer}/>
    {/* <Route exact path="/" component={SearchContainer} /> */}

  </div>
);

export default App;