import React from 'react'; 
import { Route } from 'react-router-dom';
import SigninFormContainer from './splash/session/signin_form_container'; 
import SignupFormContainer from './splash/session/signup_form_container';
import PlaceholderContainer from './channels/placeholder_container'; 
import Splash from "./splash/splash"; 
import { AuthRoute, ChannelRoute } from '../util/route_util'; 

const App = () => (
    <div>
        <AuthRoute path="/signin" component={SigninFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ChannelRoute path="/placeholder" component={PlaceholderContainer} />
        <AuthRoute exact path="/" component={Splash} />
    </div>
); 

export default App; 