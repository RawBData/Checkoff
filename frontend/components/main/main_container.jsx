import React from 'react'
import {connect} from 'react-redux';
import Main from './main';
import { login } from '../../actions/session_actions';

const MSP = (state) => {
    console.log(state);
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

export default connect(MSP, MDP)(Main)


//currentUser: state.entities.users[state.session.id],