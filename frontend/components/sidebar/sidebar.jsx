import React from 'react';
import { ChannelRoute } from '../../util/route_util'
import UserChannelIndexContainer from './user_channel_index/user_channels_index_container'; 

const Sidebar = () => (
    <div className="sidebar">
  
        <ChannelRoute path="/" component={UserChannelIndexContainer}/> 
    </div>
)

export default Sidebar; 