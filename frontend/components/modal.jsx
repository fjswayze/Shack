import React from 'react'; 
import CreateChannelContainer from './main_window/channel_forms/create_channel_container'; 
import UsersIndex from './main_window/users_index/users_index'; 

function Modal(props){
    if(!props.modal){
        return null; 
    }
    if(!props.channel){
        return null
    }
    let component; 
    switch(props.modal){
        case 'create': 
        component = <CreateChannelContainer/>; 
        break; 
        case 'users index': 
            component = <UsersIndex 
                        channel={props.channel}
                        fetchUsers={props.fetchUsers}
                        fetchChannel={props.fetchChannel}
                        />; 
        break; 
    default:
        return null; 
    }
    return(
        <div className="modal-background" onClick={props.closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    ); 
}


export default Modal; 