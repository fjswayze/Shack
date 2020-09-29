
import {openModal} from '../../../actions/modal_actions'; 
import {connect} from 'react-redux'; 
import React from 'react'; 

const ChannelIndexInfo = props => (


     <div>
            <div className="info-div">
                <div className="left-info">
                    <p className="workspace-name">Shack</p>
                        
                        <img className="pencil" src={window.pencil_iconURL} />
                </div>
             
                    
                    <div className="channels-index-info">
                        <div>Channel browser</div>
                        <button onClick={() => props.openModal()}>Create Channel</button>
                    </div>
               
  
           </div>
    </div>



)



const mSTP = (state) => ({

})

const mDTP = dispatch => ({
    openModal: () => dispatch(openModal('create'))
})

export default connect(mSTP, mDTP)(ChannelIndexInfo)