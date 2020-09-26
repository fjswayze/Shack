import React from 'react'; 
import InfoClickDropDownContainer from './info_click_dropdown_container'; 
import InfoClickDropDown from './info_click_dropdown'; 

class Info extends React.Component{
    componentDidMount(){   
        
        this.props.fetchChannel(this.props.match.params.channelId); 
    }
    render(){
        
        return(
            <div>
            <div className="info-div">
                <div className="left-info">
                    <p className="workspace-name">App Academy</p>
                        <InfoClickDropDownContainer/>
                        <img className="pencil" src={window.pencil_iconURL} />
                </div>
                <div className="right-info">
                    <h3 className="channel-name">{this.props.channel.name}</h3> 
                    <div className='sub-right-info'>
                            <i className="fas fa-user-plus"></i>
                        
                               <InfoClickDropDown channel={this.props.channel}/> 
                    </div>
                </div>
            </div>
            </div>
        )
   
    }
}

export default Info; 