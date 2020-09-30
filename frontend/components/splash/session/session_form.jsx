import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    this.handleSubmit = this.handleSubmit.bind(this); 
    }

    

    componentWillUnmount(){
        this.props.clearErrors()
    }

    handleSubmit(e) { 
        e.preventDefault(); 
        this.props.processForm(this.state)
    }

   
    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render(){
        
        const headerCommand = this.props.formType === 'Sign Up' ?
                <h1>Sign up for Shack</h1> 
            :
                <h1>Sign in to Shack</h1>

        const signinOrSignout = this.props.formType === 'Sign Up' ? 
        <div className="signin-or-signout-div">
            <p className="signin-or-signout">Already have an account?</p>
                <br></br>
                <Link className="signin-or-signout-link" to="/signin">Sign in instead</Link>
        </div> 
        : 
        <div className="signin-or-signout-div">
                <p className="signin-or-signout">Don't have an account yet?</p>
                <br></br>
                <Link className="signin-or-signout-link" to="/signup">Create an account</Link>
        </div>


        return(
            <div>
                <div className="session-form-header">
                    <div></div>
                    <Link className="shack-title-link" to="/">
                    <img className="shack-title-session" src={window.shack_titleURL} />
                    </Link>
                    {signinOrSignout}
                </div>
            <div className="session-form">
                {headerCommand}
                <form onSubmit={this.handleSubmit}>
                    <label>Email address
                        <br></br>
                        <input 
                        type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        />
                    </label>
                        <br></br>
                    <label>Password
                         <br></br>
                        <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        />
                            <br></br>
                            <ul>
                                
                                {this.props.errors[0].map(error => (
        
                                    <li className="errors">{error}</li>
                                 
                            ))}
                            </ul>
                        <button id="submit-button" type="submit">{this.props.formType}</button>
                    </label>
                </form>
                
            </div>
            </div>
        )
    }
}

export default SessionForm;