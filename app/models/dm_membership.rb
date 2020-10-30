class DMMembership < ActiveRecord::Base 
     
    belongs_to :user, 
        foreign_key: :user_id, 
        class_name: :User 

    belongs_to :direct_message, 
        foreign_key: :DM_id, 
        class_name: :DirectMessage 
        
end