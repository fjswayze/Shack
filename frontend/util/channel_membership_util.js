export const createChannelMembership = channel_membership => {
    return $.ajax({
        url: 'api/channel_memberships',
        method: 'POST',
        data: { channel_membership }
    })
}

export const deleteChannelMembership = channel_membership => {
    return $.ajax({
        url: 'api/channel_memberships/:id',
        method: 'DELETE'
    })
}