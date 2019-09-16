import React from 'react'
import {connect} from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';

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
            clearErrors: ()=> dispatch(clearErrors())
        }

    )
}

export default connect(MSP, MDP)(SessionForm)


//currentUser: state.entities.users[state.session.id],