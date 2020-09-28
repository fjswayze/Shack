import * as ChannelMembershipUtil from '../util/channel_membership_util'; 

export const RECEIVE_CHANNEL_MEMBERSHIP = 'RECEIVE_MEMBERSHIP'; 
export const REMOVE_CHANNEL_MEMBERSHIP = 'REMOVE_MEMBERSHIP'; 

const receiveChannelMembership = channelMembership => ({
    type: RECEIVE_CHANNEL_MEMBERSHIP, 
    channelMembership
})

const removeChannelMembership = channelMembershipId => ({
    type: REMOVE_CHANNEL_MEMBERSHIP,
    channelMembershipId
})


export const createChannelMembership = channelMembership => dispatch => {
    return ChannelMembershipUtil.createChannelMembership(channelMembership)
        .then(channelMembership => dispatch(receiveChannelMembership(channelMembership)))
}

export const deleteChannelMembership = channelMembershipId => dispatch => (
    ChannelMembershipUtil.deleteChannelMembership(channelMembershipId)
        .then(() => dispatch(removeChannelMembership(channelMembershipId)))
)