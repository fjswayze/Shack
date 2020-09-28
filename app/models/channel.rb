class Channel < ApplicationRecord  
    validates :name, presence: true 
    
    has_many :channel_memberships,
        foreign_key: :channel_id, 
        class_name: :ChannelMembership 

    has_many :users, 
        through: :channel_memberships,
        source: :user 

    has_many :messages, as: :messageable 

end 