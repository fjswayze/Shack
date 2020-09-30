import * as ChannelMembershipUtil from '../util/channel_membership_util'; 

export const RECEIVE_CHANNEL_MEMBERSHIP = 'RECEIVE_CHANNEL_MEMBERSHIP'; 
export const REMOVE_CHANNEL_MEMBERSHIP = 'REMOVE_CHANNEL_MEMBERSHIP'; 
export const RECEIVE_CHANNEL_MEMBERSHIPS = 'RECEIVE_CHANNEL_MEMBERSHIPS'; 

const receiveChannelMemberships = channelMemberships => ({
    type: REMOVE_CHANNEL_MEMBERSHIPS, 
    channelMemberships
}) 

const receiveChannelMembership = channelMembership => ({
    type: RECEIVE_CHANNEL_MEMBERSHIP, 
    channelMembership
})

const removeChannelMembership = (channelId, userId) => ({
    type: REMOVE_CHANNEL_MEMBERSHIP,
    channelMembership: {
        channelId: channelId, 
        userId: userId
    }
})

export const fetchChannelMemberships = () => dispatch => {
    return ChannelMembershipUtil.fetchChannelMemberships()
        .then(channelMemberships => dispatch(receiveChannelMemberships(channelMemberships)))
}


export const createChannelMembership = channelMembership => dispatch => {
    return ChannelMembershipUtil.createChannelMembership(channelMembership)
        .then(channelMembership => dispatch(receiveChannelMembership(channelMembership)))
}

export const deleteChannelMembership = (channelId, userId) => dispatch => (
    ChannelMembershipUtil.deleteChannelMembership(channelId, userId)
        .then(() => dispatch(removeChannelMembership(channelId, userId)))
)