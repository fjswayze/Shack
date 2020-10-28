export const fetchUsers = () => {
    return $.ajax({
        url: 'api/users'
    })
}

export const updateUser = (user) => {
    return $.ajax({
        url: `api/users/${user.id}`,
        method: 'PATCH',
        data: {user: user}
    })
}

export const fetchChannelUsers = (channelId) => {
    return $.ajax({
        url: `api/channels/${channelId}/users`
    })
}

