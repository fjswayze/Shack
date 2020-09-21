import React from 'react'; 
import { Route } from 'react-router-dom';
import SigninFormContainer from './splash/session/signin_form_container'; 
import SignupFormContainer from './splash/session/signup_form_container';
import Placeholder from './channels/placeholder'; 
import { AuthRoute } from '../util/route_util'; 

const App = () => (
    <div>
        <h1>Shack</h1>
        <AuthRoute path="/signin" component={SigninFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route path="/placeholder" component={Placeholder} />
    </div>
); 

export default App; 