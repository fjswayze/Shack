class DirectMessage < ApplicationRecord
     
    has_many :dm_memberships, 
        foreign_key: :DM_id, 
        class_name: :DMMembership 

    has_many :users, 
        through: :dm_memberships, 
        source: :user 

    has_many :messages, as: :messageable 
end