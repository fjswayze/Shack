export const fetchDMMemberships = () => {
    return $.ajax({
        url: 'api/dm_memberships'
    })
}



export const createDMMembership = dm_membership => {
    return $.ajax({
        url: 'api/dm_memberships',
        method: 'POST',
        data: { dm_membership }
    })
}

export const deleteDMMembership = (dmId, userId) => {
    return $.ajax({
        url: `/api/dm_memberships/${dmId}/${userId}`
    })
}