import {connect} from 'react-redux'; 
import {openModal} from '../../../actions/modal_actions'; 
import React from 'react'; 
import { Link } from 'react-router-dom';

class UCIDropdown extends React.Component{
    constructor(props){
        super(props); 
            this.state ={
                show: false
            }
            this.handleBlur = this.handleBlur.bind(this)
            this.handleClick = this.handleClick.bind(this)
        }

        handleBlur(e){
            this.setState({ show: false })
        }

        handleClick(){
            this.setState({ show: !this.state.show })
        }

        render(){
            return(
                <div>
                    <div
                    className='UCI-dropdown-button'
                    style={{position: 'relative'}}
                    onBlur={this.handleBlur}
                    onClick={this.handleClick}
                    >
                     + 
                    {this.state.show ? ( 
                      
                            <ul 
                            className="UCI-dropdown"
                            onClick={e => e.stopPropagation()}
                            style={{position: "absolute", top: '100%'}}
                            >
                                <Link className="channel-browser-link" to="/channels/index/">Browse channels</Link>
                                <button className= "create-channel" onClick={() => this.props.openModal()}>Create a channel</button>
                            </ul>
                    
                      ): null} 

                    </div>
                </div>
            )
        }



    }






const mSTP = (state) => ({

})

const mDTP = dispatch =>  ({
    openModal: () => dispatch(openModal('create'))
})

export default connect(mSTP, mDTP)(UCIDropdown); 