import * as DMMembershipUtil from '../util/dm_membership_api_util';

export const RECEIVE_DM_MEMBERSHIP = 'RECEIVE_DM_MEMBERSHIP';
export const REMOVE_DM_MEMBERSHIP = 'REMOVE_DM_MEMBERSHIP';
export const RECEIVE_DM_MEMBERSHIPS = 'RECEIVE_DM_MEMBERSHIPS';

const receiveDMMemberships = dmMemberships => ({
    type: RECEIVE_DM_MEMBERSHIPS,
    dmMemberships
})

const receiveDMMembership = dmMembership => ({
    type: RECEIVE_DM_MEMBERSHIP,
    dmMembership
})

const removeDMMembership = (dmId, userId) => ({
    type: REMOVE_DM_MEMBERSHIP,
    dmMembership: {
        dmId: dmId,
        userId: userId
    }
})

export const fetchDMlMemberships = () => dispatch => {
    return DMMembershipUtil.fetchDMMemberships()
        .then(channelMemberships => dispatch(receiveDMMemberships(channelMemberships)))
}


export const createDMMembership = dmMembership => dispatch => {
    return DMMembershipUtil.createDMMembership(dmMembership)
        .then(dmMembership => dispatch(receiveDMMembership(dmMembership)))
}

export const deleteDMlMembership = (dmId, userId) => dispatch => (
    DMMembershipUtil.deleteDMMembership(dmId, userId)
        .then(() => dispatch(removeDMMembership(dmId, userId)))
)