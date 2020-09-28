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
                        <div >
                            <ul
                                className="header-dropdown"
                                onClick={e => e.stopPropagation()}
                                style={{ position: 'absolute' }}
                            >
                                
                                <li><input 
                                type="text"
                                defaultValue="update your status"
                                ></input></li>
                                <li>{this.props.user.name}</li>
                                <li className="header-edit">Edit profile</li>
                                <li>View profile</li>
                                <li className="header-sign" onClick={() => this.props.logout()}>Sign Out</li>
                            </ul>
                        </div>
                    ) : null}
                </button>
            </div>
        )
    }

}

export default ProfileDropdown; 