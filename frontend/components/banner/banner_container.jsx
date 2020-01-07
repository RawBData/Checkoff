import { connect } from 'react-redux';

import Banner from './banner';
import {
  logout, login
} from '../../actions/session_actions';

let msp = (state) => {
    let currentUser = state.entities.users[state.session.id];
    return ({
      currentUser
    })
  }
  
  let mdp = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
        demoLogin: (user) => dispatch(login(user)),
    })
  }
  
  export default connect(msp,mdp)(Banner);