import React from 'react';
import { Switch } from 'react-router-dom';
import {ChannelRoute} from '../../util/route_util'
import EditChannelContainer from './channel_forms/edit_channel_container'
import ChannelIndexContainer from './channel_index/channel_index_container'; 
import ChatRoom from './chat/ChatRoom';
import UsersIndexContainer from './users_index/users_index_container'; 

const MainWindow = () => (
    <div className="main-window">
        <ChannelRoute path={`/channels/:channelId/edit`} component={EditChannelContainer} /> 
        <ChannelRoute exact path='/channels/index/' component={ChannelIndexContainer} />
        {/* <ChannelRoute exact path={`/channels/:channelId`} component={ChatRoom}/>  */}
       
    </div>
)

export default MainWindow