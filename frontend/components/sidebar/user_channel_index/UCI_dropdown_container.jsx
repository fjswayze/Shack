import {connect} from 'react-redux'; 
import {openModal} from '../../../actions/modal_actions'; 
import React from 'react'; 
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom'; 

class UCIDropdown extends React.Component{
    constructor(props){
        super(props); 
            this.state ={
                show: false
            }
            this.handleBlur = this.handleBlur.bind(this); 
            this.handleClick = this.handleClick.bind(this); 
            this.handleSpecialClick = this.handleSpecialClick.bind(this); 
            this.handleOtherSpecialClick = this.handleOtherSpecialClick.bind(this); 
        }

        handleBlur(e){
            
            this.setState({ show: false })
        }

        handleClick(){
            this.setState({ show: !this.state.show })
        }

        handleOtherSpecialClick(){
            this.setState({show: !this.state.show})
            this.props.history.push('/channels/index')
        }
    
        handleSpecialClick(){
            this.setState({ show: !this.state.show }); 
            this.props.openModal(); 
        }

        render(){
            return(
                <div >
                    <button
                    className='info-click-dropdown-button'
                    style={{position: 'relative'}}
                    onBlur={this.handleBlur}
                    onClick={this.handleClick}
                    >
                     + 
                    {this.state.show ? ( 
                      <div className="dropdown-div-UCI">
                            <ul 
                            className="dropdown-UCI"
                            onClick={e => e.stopPropagation()}
                            style={{position: "absolute", top: '100%'}}
                            >
                                   <div onClick={this.handleOtherSpecialClick} className="channel-browser-link" >Browse channels</div>
                                    <div className= "create-channel" onClick={this.handleSpecialClick}>Create a channel</div>
                            </ul>
                        </div> 
                       ): null}  

                    </button>
                </div>
            )
        }



    }






const mSTP = (state) => ({

})

const mDTP = dispatch =>  ({
    openModal: () => dispatch(openModal('create'))
})

export default withRouter(connect(mSTP, mDTP)(UCIDropdown)); 