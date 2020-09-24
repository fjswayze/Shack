import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom'; 
import React from 'react';


const mSTP = state => { 
    let defaultValue; 
    if(state.entities.users[state.session.id]){
        defaultValue = state.entities.users[state.session.id].channel_ids[0];
    } else{
       defaultValue = 1; 
    }
    return {
    loggedIn: Boolean(state.session.id),
    defaultChannel: defaultValue
}} 

const Auth = ({defaultChannel, loggedIn, path, component: Component}) => (
    <Route
    exact path={path}
    render={props => (
        loggedIn ? <Redirect to={`/channels/${defaultChannel}`}/> : <Component {...props}/>
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