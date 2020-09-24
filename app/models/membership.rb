class Membership < ActiveRecord::Base 
    belongs_to :membership, polymorphic: true 


end