import { RECEIVE_DM_MEMBERSHIP, REMOVE_DM_MEMBERSHIP, RECEIVE_DM_MEMBERSHIPS} from '../actions/dm_membership_actions';

const DMMembershipsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_DM_MEMBERSHIP:
            return Object.assign(newState, action.dmMembership);
        case REMOVE_DM_MEMBERSHIP:
            let array = Object.entries(newState);
            let hash = {}
            for (let i = 0; i < array.length; i++) {
                if (array[i][1].user_id != action.user_id && newState[i][1].action_id != action.channel_id) hash[array[i]] = array[i][1];
            }
            return hash;
        case RECEIVE_DM_MEMBERSHIPS:
            return action.dmMemberships;
        default:
            return state;
    }
}

export default DMMembershipsReducer; 