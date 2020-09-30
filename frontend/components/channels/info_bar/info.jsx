import React from 'react'; 
import InfoClickDropDown from './info_click_dropdown'; 
import {Link} from 'react-router-dom'; 
class Info extends React.Component{
    constructor(props){
        super(props); 
        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick(){
        this.props.open
    }
    componentDidMount(){   
        
        this.props.fetchChannel(this.props.match.params.channelId); 
    }
    render(){
        const UsersIndex = (this.props.channel.id) ? ( 
            <button onClick={this.props.openModal} className="users-index-btn">+ Add</button>
        ) : (<div></div>)

        const membersCount = (this.props.channel.user_ids) ? (<p className="members-count">{this.props.channel.user_ids.length}</p>) : (
            <div></div>
        )
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
                            {membersCount}
                           { UsersIndex}
                            {/* <button className="delete-channel" onClick={() => this.props.deleteChannel(this.props.channel.id)}>Delete Channel</button> */}
                               <InfoClickDropDown channel={this.props.channel}/> 
                    </div>
                </div>
            </div>
            </div>
        )
   
    }
}

export default Info; 