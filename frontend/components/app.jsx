import React from 'react'; 
import { Route } from 'react-router-dom';
import SigninFormContainer from './splash/session/signin_form_container'; 

const App = () => (
    <div>
        <h1>Shack</h1>
        <Route path="/signin" component={SigninFormContainer}/>
    </div>
); 

export default App; 