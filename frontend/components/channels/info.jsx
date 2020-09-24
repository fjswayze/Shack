import React from 'react'; 


class Info extends React.Component{
    componentDidMount(){
        this.props.fetchUserChannels(this.props.user.id);
    }
    render(){

        return(
            <div>
            <div className="info-div">
                <div className="left-info">
                    <p className="workspace-name">App Academy</p>
                        <img className="pencil" src={window.pencil_iconURL} />
                </div>
                <div className="right-info">
                    <h3 className="channel-name">Channel Name</h3> 
                    <div className='sub-right-info'>
                        <p>picture here</p>
                        <p className="counter">59</p>
                            <i class="fas fa-user-plus"></i>
                            <i class="fas fa-info-circle"></i>




                        {/* <img className="add" src={window.add_iconURL} />
                        <img className="info-img" src={window.info_iconURL} /> */}
                      
                    </div>
                </div>
            </div>
                <button onClick={() => this.props.logout()}>Log Out</button>
            </div>
        )
   
    }
}

export default Info; 