import React from 'react'; 

class Info extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            show: false, 
            users: this.props.channel.user_ids
        }
        this.handleInfoClick = this.handleInfoClick.bind(this); 
        this.handleClick = this.handleClick.bind(this); 
        this.handleBlur = this.handleBlur.bind(this); 
        
    }

    handleClick(){
        this.props.open
    }

    componentDidMount(){   
        this.props.fetchChannel(this.props.match.params.channelId); 
        
    }

    // componentDidUpdate(){
    //     this.props.fetchChannel(this.props.match.params.channelId); 
    // }

    handleDelete() {
        let redirect = this.props.user.channel_ids[0];
        if (redirect = this.props.channel.id) redirect = this.props.user.channel_ids[1];
        
        this.props.deleteChannel(this.props.channel.id).then(this.props.history.push(`/channels/${redirect}`))
    }

    handleEditClick(channelId){
        this.props.history.push(`/channels/${channelId}/edit`)
    }

    handleBlur(e) {
        this.setState({ show: false })
    }

    handleInfoClick() {
        
        this.setState({ show: !this.state.show })
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
                    <div className='name-description-container'>
                         <div className="channel-name">{this.props.channel.name}</div> 
                        <div className="channel-description">{this.props.channel.description}</div>
                    </div>
                    <div className='sub-right-info'>
                            {membersCount}
                           { UsersIndex}


                           
                                <button
                                    className="revised-outer-div"
                                    style={{ position: 'relative' }}
                                    onBlur={this.handleBlur}
                                    onClick={this.handleInfoClick}
                                >
                                <i id='become-transparent' className="fas fa-info-circle"></i>
                                    {this.state.show ? (
                                        <div>
                                            <ul
                                                className='revised-info-click-dropdown'
                                                onClick={e => e.stopPropagation()}
                                                style={{ position: 'absolute', top: '100%' }}
                                            >
                                                <div className='revised-info-click-dropdown-link' onClick={() => this.handleEditClick(this.props.channel.id)}>Edit Channel</div>

                                                <div className='revised-info-click-dropdown-inner-div' onClick={() => this.handleDelete(this.props.channel.id)}>Delete Channel</div>
                                            </ul>
                                        </div>
                                    ) : null}
                                </button>
                           
                            
                    </div>
                </div>
            </div>
            </div>
        )
   
    }
}

export default Info; 