import React from 'react'; 
import {connect} from 'react-redux'; 
import {closeModal} from '../actions/modal_actions'; 
import CreateChannelContainer from './main_window/channel_forms/create_channel_container'; 
import UsersIndexContainer from './main_window/users_index/users_index_container'

function Modal({modal, closeModal}){
    if(!modal){
        return null; 
    }
    let component; 
    switch(modal){
        case 'create': 
        component = <CreateChannelContainer/>; 
        break; 
        case 'users index': 
        component = <UsersIndexContainer/>; 
        break; 
    default:
        return null; 
    }
    return(
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    ); 
}

const mSTP = state => ({
    modal: state.ui.modal 
})

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(Modal); 