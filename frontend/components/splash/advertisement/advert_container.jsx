import React from 'react'
import {connect} from 'react-redux';
import Advert from './advert';
// import { signUp } from '../../actions/session_actions';

const MSP = (state) => {
    let currentUser = null;
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

export default connect(MSP, MDP)(Advert)


//currentUser: state.entities.users[state.session.id],