import React from "react";
// import { Route } from 'react-router-dom';
// import LoginFormContainer from './login_signup_form/login_form_container';
// import SignupFormContainer from './login_signup_form/signup_form_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import BannerContainer from './banner/banner_container';



    class CheckoffApp extends React.Component {
        constructor(props){
          super(props)
        }
      
        render(){
          const currentUser = this.props.currentUser;
          console.log("in advertisment")
      
          const display = (
              <div style={{backgroundColor: 'green'}}>
                <h1>welcome home</h1>
              </div>
          );
      
          return (
      
            <main>
             {display}
            </main>
          );
        }
      }
      
      export default CheckoffApp;