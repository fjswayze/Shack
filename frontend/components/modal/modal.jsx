import React from 'react'; 
import CreateChannelContainer from '../main_window/channel_forms/create_channel_container'; 
import UsersIndex from './users_index/users_index'; 
import ChannelMembersIndex from './users_index/channel_members_index'; 
import ChannelForm from '../main_window/channel_forms/channel_form'; 
import DMForm from './create_dm/DM_Form'; 

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
        case 'create-DM':
            component= <DMForm
                createDirectMessage={props.createDirectMessage}
                createDMMembership={props.createDMMembership}
                fetchUsers={props.fetchUsers}
                closeModal={props.closeModal}
                user={props.user}
                users={props.users}
             />; 
        break; 
        case 'users index': 
            component = <UsersIndex 
                        channel={props.channel}
                        fetchUsers={props.fetchUsers}
                        fetchChannel={props.fetchChannel}
                        users={props.users}
                        user={props.user}
                        createChannelMembership={props.createChannelMembership}
                        />; 
        break; 
        case 'channel members':
            component = <ChannelMembersIndex
                        channel={props.channel}
                        users={props.users}
                        fetchUsers={props.fetchUsers}
                        fetchChannel={props.fetchChannel}
                        openModal={props.openAddModal}
                        user={props.user}
                        deleteChannelMembership={props.deleteChannelMembership}
                        fetchChannel={props.fetchChannel}
                        closeModal={props.closeModal}
                        />; 
        break; 
        case 'edit channel':
            component = <ChannelForm 
                        channel={props.channel}
    
                        /> 
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