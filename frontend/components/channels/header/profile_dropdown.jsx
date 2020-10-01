import React from 'react'; 

class ProfileDropdown extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            show: false
        }

        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    handleBlur(e) {
        this.setState({show:false})
    }

    handleClick() {
        this.setState({show: !this.state.show})
    }

    render() {
        return (
            <div>
                <button
                    style={{ position: 'relative' }}
                    onBlur={this.handleBlur}
                    onClick={this.handleClick}
                >
                   
                    <img className="profile" src={window.profileURL} />
                    {this.state.show ? (
                       
                            <ul
                                className="header-dropdown"
                                onClick={e => e.stopPropagation()}
                                style={{ position: 'absolute' }}
                            >
                        <div className="header-dropdown-div">
                                <div className="header-dropdown-profile-username">
                                    <img className="dropdown-profile" src={window.profileURL} />
                                    <div className="username">{this.props.user.username}</div>
                                    
                                </div>
                                <div>
                                
                                <li className="header-sign" onClick={() => this.props.logout()}>Sign Out</li>
                            </div>
                            </div>
                            </ul>
                        
                      ) : null}  
                </button>
            </div>
        )
    }

}

export default ProfileDropdown; 