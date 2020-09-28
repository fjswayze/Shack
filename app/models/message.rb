class Message < ApplicationRecord  
    validates :body, presence: true 
    belongs_to :messageable, polymorphic: true 

  
end 