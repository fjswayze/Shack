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
                </div>
                <div className="right-info">
                    {/* <h3 className="channel-name">{channels[0].name}</h3> */}
                    <div className='sub-right-info'>
                        <p>picture here</p>
                        <p>59</p>
                        <img className="add" src={window.add_iconURL} />
                        <img className="info-img" src={window.info_iconURL} />
                      
                    </div>
                </div>
            </div>
                <button onClick={() => this.props.logout()}>Log Out</button>
            </div>
        )
   
    }
}

export default Info; 