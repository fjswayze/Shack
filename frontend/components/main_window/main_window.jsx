import React from 'react';
import {ChannelRoute} from '../../util/route_util'
import EditChannelContainer from './channel_forms/edit_channel_container'
import ChannelIndexContainer from './channel_index/channel_index_container'; 


const MainWindow = () => (
    <div className="main-window">
        <ChannelRoute path={`/channels/:channelId/edit`} component={EditChannelContainer} /> 
        <ChannelRoute exact path='/channels/index/' component={ChannelIndexContainer} />
    </div>
)

export default MainWindow; 