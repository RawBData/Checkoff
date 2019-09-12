import * as UTIL from '../util/session_api_util';

export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const ERRORS = 'ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

//receiveCurrentUser(currentUser)(regular action creator)
export const receiveCurrentUser = user => {
  return ({
  type: LOGIN_USER,
  user
})};


//logoutCurrentUser()(regular action creator)
export const logoutCurrentUser = () => 
{
  //debugger
  return({
  type: LOGOUT_USER
});};


//login(user)(thunk action creator)
export const login = (user) => (dispatch) => UTIL.login(user)
  .then((response) => {
    dispatch(receiveCurrentUser(response)); 
    dispatch(clearErrors()
  )},
    err => dispatch(receiveErrors(err.responseJSON))
  );


//logout()(thunk action creator)
export const logout = () => (dispatch) => UTIL.logout()
  .then(() => {dispatch(logoutCurrentUser());},
    err => dispatch(receiveErrors(err.responseJSON))
  );


//signup(user)(thunk action creator)
export const signUp = (user) => (dispatch) => UTIL.signUp(user)
  .then((user) => {dispatch(receiveCurrentUser(user));},
  err => dispatch(receiveErrors(err.responseJSON))
  );

//receiveErrors(errors)(regular action creator)
export const receiveErrors = errors => ({
  type: ERRORS,
  errors
});

export const clearErrors = () => {
  //debugger;
  return(
    {
      type:CLEAR_ERRORS
    }
  )
  };