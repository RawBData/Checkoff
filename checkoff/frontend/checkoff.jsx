import React from "react";
import ReactDOM from "react-dom";
import {signUp, login, logout} from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {

  //signing up and signing in
  window.signUp = signUp;
  window.login = login;
  window.logout = logout;


  //put the current user in state if logged in
  let preloadedState = {};

  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: {
        id: window.currentUser.id
      }
    };
  }

  const store = configureStore(preloadedState);

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;


  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} className="root"/>, root);
}); 