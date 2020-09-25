import React from 'react'; 
import { Route } from 'react-router-dom';
import SigninFormContainer from './splash/session/signin_form_container'; 
import SignupFormContainer from './splash/session/signup_form_container';
import Splash from "./splash/splash"; 
import { AuthRoute, ChannelRoute } from '../util/route_util'; 
import InfoContainer from './channels/info_bar/info_container';
import Header from './channels/header/header';
import UserChannelsIndexContainer from './channels/user_channel_index/user_channels_index_container'

const App = () => (
    <div>
        <AuthRoute exact path="/signin" component={SigninFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route path='/channels' component={Header}/>
        <ChannelRoute path={`/channels/:channelId`} component={InfoContainer} />
        <ChannelRoute path='/channels' component={UserChannelsIndexContainer}/> 
        <Route exact path="/" component={Splash} />
    </div>
); 

export default App; 