import React from 'react'; 
import InfoClickDropDown from './info_click_dropdown'; 


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
            <button onClick={this.props.openAddModal} className="users-index-btn">+ Add</button>
        ) : (<div></div>)

        const membersCount = (this.props.channel.user_ids) ? (<p onClick={this.props.openUsersModal} className="members-count">{this.props.channel.user_ids.length}</p>) : (
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

                           <InfoClickDropDown
                                deleteChannel={this.props.deleteChannel}
                                channel={this.props.channel} 
                                openModal={this.props.openEditModal}
                                />
                            
                    </div>
                </div>
            </div>
            </div>
        )
   
    }
}

export default Info; 