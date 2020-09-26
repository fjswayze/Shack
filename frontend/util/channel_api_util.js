
export const fetchChannels = () => {
    return $.ajax({
        url: 'api/channels'
    })
}

export const fetchUserChannels = (userId) => {
    return $.ajax({
        url: `api/users/${userId}/channels`
    })
}

export const fetchChannel = channelId => {
    return $.ajax({
        url: `api/channels/${channelId}`
    })
}

export const createChannel = channel => {
    return $.ajax({
        url: 'api/channels',
        method: 'POST',
        data: { channel }
    })
}

export const deleteChannel = channelId => {
    return $.ajax({
        url: `api/channels/${channelId}`,
        method: 'DELETE'
    })
}

export const updateChannel = channel => {
    return $.ajax({
        url: `api/channels/${channel.id}`,
        method: 'PATCH',
        data: {channel}
    })
}


