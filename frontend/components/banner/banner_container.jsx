import { connect } from 'react-redux';

import Banner from './banner';
import {
  logout
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
    })
  }
  
  export default connect(msp,mdp)(Banner);