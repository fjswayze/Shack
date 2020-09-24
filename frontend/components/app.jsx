import React from 'react'; 
import { Route } from 'react-router-dom';
import SigninFormContainer from './splash/session/signin_form_container'; 
import SignupFormContainer from './splash/session/signup_form_container';
import Splash from "./splash/splash"; 
import { AuthRoute, ChannelRoute } from '../util/route_util'; 
import info_container from './channels/info_container';

const App = () => (
    <div>
        <AuthRoute exact path="/signin" component={SigninFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ChannelRoute path={`/channels/:channelId`} component={info_container} />
        <AuthRoute exact path="/" component={Splash} />
    </div>
); 

export default App; 