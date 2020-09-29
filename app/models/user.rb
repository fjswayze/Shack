class User < ApplicationRecord 
    attr_reader :password
    validates :email, presence: true, uniqueness: true 
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :profile_picture_id, presence: true 
    validates :session_token, presence: true, uniqueness: true 
    after_initialize :ensure_session_token, :ensure_profile_picture, :ensure_user_name, :ensure_channel_id

    has_many :channel_memberships,
        foreign_key: :user_id, 
        class_name: :ChannelMembership 

    has_many :channels, 
        through: :channel_memberships,
        source: :channel 



    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.find_by_credentials(email, password) 
         
        user = User.find_by(email: email)
        return nil unless user 
        user.is_password?(password) ? user : nil 
    end

 
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token 
        self.session_token ||= SecureRandom.base64(64)
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||=   SecureRandom.base64(64)
    end

    def ensure_channel_id
        @channel = Channel.find_by(name: 'shacks')
        ChannelMembership.new(user_id: self.id, channel_id: @channel.id)
        self.channel_ids.push(@channel.id)
    end
   
    def ensure_profile_picture
        self.profile_picture_id ||= 1 
    end

     def ensure_user_name 
        self.username ||= self.email.split("@")[0]
    end

end