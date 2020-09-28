import {Link} from 'react-router-dom'; 
import React from 'react'; 

class InfoClickDropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false 
        }

        this.handleBlur = this.handleBlur.bind(this); 
        this.handleClick = this.handleClick.bind(this); 
    }   

  


    handleBlur(e){
        this.setState({show:false})
    }

    handleClick(){
        this.setState({show: !this.state.show})
    }

    render(){



        const dropdownButton = this.props.dropdownType === 'Sign out' ? (
            <i className="fas fa-caret-down"></i>
        ) : (
                <i className="fas fa-info-circle"></i>
        )
        const dropdownContent = this.props.dropdownType === 'Sign out' ? (
            <div>
              <li onClick={() => this.props.logout()}>App Academy</li>
              <li onClick={() => this.props.logout()}>Sign Out</li>
            </div>
        ) : (
            <div className="edit-channel-div">
                    <Link to={`/channels/${this.props.channel.id}/edit`}>Edit Channel</Link>
                    <a onClick={() => this.props.deleteChannel(this.props.channel.id)}>Delete Channel</a>
                   
            </div>
          
        ); 

        return(
            <div>
                <div
                className="info-click-dropdown-button"
                style={{position: 'relative'}}
                onBlur={this.handleBlur}
                onClick={this.handleClick}
                >
                   {dropdownButton}
                {this.state.show ? (
                <div className="dropdown-div" >
                    <ul
                    className="dropdown"
                    onClick={e => e.stopPropagation()}
                    style={{ position: 'absolute', top: '100%'}}
                    >
                        {dropdownContent}
                    </ul>
                </div>
                ): null}
                </div>
            </div>
        )
    }

}

export default InfoClickDropdown; 
