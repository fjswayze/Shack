import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    handleSubmit(e) {
        e.preventDefault(); 
        this.props.processForm(this.state); 
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render(){
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
                <h1>Shack</h1>
                {signinOrSignout}
                <form>
                    <label>Email adress
                        <input 
                        type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        />
                    </label>
                    <label>Password
                        <input
                        type="text"
                        value={this.state.password}
                        onChange={this.update('password')}
                        />
                        <button type="submit">{this.props.formType}</button>
                    </label>
                </form>
                <p>{this.props.errors}</p>
            </div>
        )
    }
}

export default SessionForm;