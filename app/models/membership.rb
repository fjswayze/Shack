class Membership < ActiveRecodrd::Base 
    belongs_to :membership, polymorphic: true 


end