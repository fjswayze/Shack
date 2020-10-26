import React from 'react';
import { Switch } from 'react-router-dom';
import {ChannelRoute} from '../../util/route_util'
import EditChannelContainer from './channel_forms/edit_channel_container'
import ChannelIndexContainer from './channel_index/channel_index_container'; 
import ChatRoomContainer from './chat/chat_room_container';

const MainWindow = () => (
    <div className="main-window">
        
        <Switch>
            <ChannelRoute exact path='/channels/index/' component={ChannelIndexContainer} />
            <ChannelRoute path={`/channels/:channelId/edit`} component={EditChannelContainer} /> 
            <ChannelRoute exact path={`/channels/:channelId`} component={ChatRoomContainer}/> 
        </Switch>
       
    </div>
)

export default MainWindow