import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom'; 
import React from 'react';

const mSTP = state => ({
    loggedIn: Boolean(state.session.id)
})

const Auth = ({loggedIn, path, component: Component}) => (
    <Route
    path={path}
    render={props => (
        loggedIn ? <Redirect to ="/placeholder" /> : <Component {...props}/>
    )}/> 
)

export const AuthRoute = withRouter(connect(mSTP)(Auth)); 