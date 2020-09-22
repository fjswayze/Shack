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

const Channel = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Component {...props}/> : <Redirect to="/" />
        )} />
)

export const AuthRoute = withRouter(connect(mSTP)(Auth)); 
export const ChannelRoute = withRouter(connect(mSTP)(Channel)); 