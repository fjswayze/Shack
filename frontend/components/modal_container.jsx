import { connect } from 'react-redux';
import { closeModal } from '../actions/modal_actions'; 
import Modal from './modal'; 

const mSTP = (state) => ({
    modal: state.ui.modal
})

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(Modal); 