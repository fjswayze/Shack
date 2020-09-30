@channel_memberships.each do |channel_membership| 
    json.set! channel_membership.id do 
        json.partial! 'channel_membership', channel_membership: channel_membership
    end
end