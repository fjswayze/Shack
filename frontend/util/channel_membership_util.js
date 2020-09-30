export const fetchChannelMemberships = () => {
    return $.ajax({
        url: 'api/channel_memberships'
    })
}



export const createChannelMembership = channel_membership => {
    return $.ajax({
        url: 'api/channel_memberships',
        method: 'POST',
        data: { channel_membership }
    })
}

export const deleteChannelMembership = (channelId, userId) => {
    return $.ajax({
        url: `/api/channel_memberships/${channelId}/${userId}`
    })
}