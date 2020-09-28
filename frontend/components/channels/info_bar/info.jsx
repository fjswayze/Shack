import React from 'react'; 
import InfoClickDropDown from './info_click_dropdown'; 
import {Link} from 'react-router-dom'; 
class Info extends React.Component{
    componentDidMount(){   
        
        this.props.fetchChannel(this.props.match.params.channelId); 
    }
    render(){
        
        return(
            <div>
            <div className="info-div">
                <div className="left-info">
                    <p className="workspace-name">Shack</p>
                        
                        <img className="pencil" src={window.pencil_iconURL} />
                </div>
                <div className="right-info">
                    <h3 className="channel-name">{this.props.channel.name}</h3> 
                    <div className='sub-right-info'>
                            <Link to={`/channels/${this.props.channel.id}/users/index`}><i className="fas fa-user-plus"></i></Link>
                            <button className="delete-channel" onClick={() => this.props.deleteChannel(this.props.channel.id)}>Delete Channel</button>
                               <InfoClickDropDown channel={this.props.channel}/> 
                    </div>
                </div>
            </div>
            </div>
        )
   
    }
}

export default Info; 