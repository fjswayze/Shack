import {OPEN_MODAL, CLOSE_MODAL} from '../actions/modal_actions'; 

const ModalsReducer = (state=null, action) => {
    debugger
    Object.freeze(state); 
    switch (action.type) {
        case OPEN_MODAL:
            return action.modal; 
        case CLOSE_MODAL:
            return null; 
        default:
            return state;
    }
}

export default ModalsReducer; 