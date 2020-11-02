import React from 'react'; 
import { Route, Switch } from 'react-router-dom';
import SigninFormContainer from './splash/session/signin_form_container'; 
import SignupFormContainer from './splash/session/signup_form_container';
import Splash from "./splash/splash"; 
import { AuthRoute, ChannelRoute } from '../util/route_util'; 
import InfoContainer from './channels/info_bar/info_container';
import Header from './channels/header/header';
import Window from './window'; 
import ModalContainer from './modal/modal_container'; 
import UsersIndexModalContainer from './modal/users_index_modal_container'; 
import ChannelIndexInfoContainer from './main_window/channel_index/channel_index_info'; 
import DMInfoContainer from './channels/info_bar/dm_info_container';
import DMInfo from './channels/info_bar/dm_info';

const App = () => (
    <div>
        <ModalContainer/> 
        <Route path='/dms/:dmId' component={UsersIndexModalContainer} /> 
        <Route path='/channels/:channelId' component={UsersIndexModalContainer}/> 
        <AuthRoute exact path="/signin" component={SigninFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route path='/channels' component={Header}/>
        <Route path='/dms' component={Header} />
        <Switch>
            <ChannelRoute exact path='/channels/index/' component={ChannelIndexInfoContainer}/> 
            <ChannelRoute  path={`/channels/:channelId`} component={InfoContainer} />
            <ChannelRoute path={`/dms/:dmId`} component={DMInfoContainer} />
        </Switch>
        <ChannelRoute path="/dms" component={Window} /> 
        <ChannelRoute path="/channels" component={Window}/> 
        <Route exact path="/" component={Splash} />
    </div>
); 

export default App; 