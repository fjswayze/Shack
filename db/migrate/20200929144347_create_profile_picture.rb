class CreateProfilePicture < ActiveRecord::Migration[5.2]
  def change
    create_table :profile_pictures do |t|
      t.string :url
      t.integer :user_id 
    end
  end
end
