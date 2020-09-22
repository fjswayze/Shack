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
    handleSubmit(e) { 
        e.preventDefault(); 
        this.props.processForm(this.state); 
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
        <div>
            <p>Already have an account?</p>
            <Link to="/signin">Sign in instead</Link>
        </div> 
        : 
        <div>
                <p>Don't have an account yet?</p>
                <Link to="/signup">Create an account</Link>
        </div>


        return(
            <div>
                <div className="session-form-header">
                    <img className="shack-title" src={window.shack_titleURL} />
                    {signinOrSignout}
                </div>
            <div className="session-form">
                {headerCommand}
                <form onSubmit={this.handleSubmit}>
                    <label>Email adress
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
                        type="text"
                        value={this.state.password}
                        onChange={this.update('password')}
                        />
                            <br></br>
                        <button type="submit">{this.props.formType}</button>
                    </label>
                </form>
            </div>
            </div>
        )
    }
}

export default SessionForm;