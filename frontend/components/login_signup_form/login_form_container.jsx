import React from 'react'
import {connect} from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const MSP = (state, ownProps) => {
    return (
        {
            errors : state.errors.session,
            formType: 'login'
        }

    )
}

const MDP = (dispatch) => {
    return (
        {
            processForm: (user) => dispatch(login(user)),
        }

    )
}

export default connect(MSP, MDP)(SessionForm)


//currentUser: state.entities.users[state.session.id],