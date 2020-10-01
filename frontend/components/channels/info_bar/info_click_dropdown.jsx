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
  
        return(
            <div>
                <div
                className="revised-outer-div"
                style={{position: 'relative'}}
                onBlur={this.handleBlur}
                onClick={this.handleClick}
                >
                    <i className="fas fa-info-circle"></i>
                {this.state.show ? (
                <div  >
                    <ul
                    className='revised-info-click-dropdown'
                    onClick={e => e.stopPropagation()}
                    style={{ position: 'absolute', top: '100%'}}
                    >
                            <div><Link className='revised-info-click-dropdown-link' to={`/channels/${this.props.channel.id}/edit`}>Edit Channel</Link></div>
                                
                                <div className='revised-info-click-dropdown-inner-div' onClick={() => this.props.deleteChannel(this.props.channel.id)}>Delete Channel</div>
                    </ul>
                </div>
                ): null}
                </div>
            </div>
        )
    }

}

export default InfoClickDropdown; 
