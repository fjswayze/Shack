import React from 'react';
import { Switch } from 'react-router-dom';
import { ChannelRoute } from '../../util/route_util'
import UserChannelIndexContainer from './user_channel_index/user_channels_index_container'; 

const Sidebar = () => (
    <div className="sidebar">
        <Switch>

            <ChannelRoute exact path="/channels/:channelId" component={UserChannelIndexContainer} /> 
            <ChannelRoute exact path="/channels/:channelId/edit" component={UserChannelIndexContainer} /> 
            <ChannelRoute exact path="/channels/index" component={UserChannelIndexContainer} /> 
            <ChannelRoute path="/" component={UserChannelIndexContainer} /> 


        </Switch>
    </div>
)

export default Sidebar; 