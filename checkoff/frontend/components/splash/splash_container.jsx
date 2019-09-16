import React from 'react'
import {connect} from 'react-redux';
import Splash from './splash';
import { login } from '../../actions/session_actions';

const MSP = (state) => {
    let currentUser = state.entities.users[state.session.id];
    return ({
      currentUser
    })
}

const MDP = (dispatch) => {
    return (
        {
            
        }

    )
}

export default connect(MSP, MDP)(Splash)


//currentUser: state.entities.users[state.session.id],