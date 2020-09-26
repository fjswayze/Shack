import React from 'react'; 
import {connect} from 'react-redux'; 
import {closeModal} from '../actions/modal_actions'; 
import CreateChannelContainer from './main_window/channel_forms/create_channel_container'; 
import EditChannelContainer from './main_window/channel_forms/edit_channel_container'; 


function Modal({modal, closeModal}){
    if(!modal){
        return null; 
    }
    let component; 
    switch(modal){
        case 'create': 
        component = <CreateChannelContainer/>; 
        break; 
        // case 'edit': 
        // component = <EditChannelContainer/>; 
        // break; 
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