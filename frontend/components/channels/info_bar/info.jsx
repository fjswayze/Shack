import React from 'react'; 
import InfoClickDropDownContainer from './info_click_dropdown_container'; 

class Info extends React.Component{
    componentDidMount(){   
        this.props.fetchChannel(this.props.channelId); 
    }
    render(){
        debugger
        return(
            <div>
            <div className="info-div">
                <div className="left-info">
                    <p className="workspace-name">App Academy</p>
                        <InfoClickDropDownContainer/>
                        <img className="pencil" src={window.pencil_iconURL} />
                </div>
                <div className="right-info">
                        <p>{this.props.fetchChannel(this.props.channelId).name}</p>
                    <h3 className="channel-name">{this.props.user.username}</h3> 
                    <div className='sub-right-info'>
                        <p>picture here</p>
                        <p className="counter">59</p>
                            <i className="fas fa-user-plus"></i>
                            <i className="fas fa-info-circle"></i>
                      
                    </div>
                </div>
            </div>
            </div>
        )
   
    }
}

export default Info; 