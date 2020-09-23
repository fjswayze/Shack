class Channel < ApplicationRecord 
    validates :name, presence: true 
    
    has_many :user_channel_joins,
        foreign_key: :channel_id, 
        class_name: :UserChannelJoin

    has_many :users, 
        through: :user_channel_joins,
        source: :user 

end 