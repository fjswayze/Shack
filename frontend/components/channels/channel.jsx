import InfoContainer from "./info_bar/info_container"; 
import DMInfoContainer from './info_bar/dm_info_container'; 
import Header from './header/header';
import React from 'react'; 
import { Switch } from "react-router-dom";
import {ChannelRoute} from "../../util/route_util"; 

const Channel = () => (
    <div>
        <Header/>
        <Switch>
            <ChannelRoute path='/channels/' component={InfoContainer}></ChannelRoute>
            <ChannelRoute path='/dms/' component={DMInfoContainer}></ChannelRoute>
        </Switch>
        
    </div>
)

export default Channel; 