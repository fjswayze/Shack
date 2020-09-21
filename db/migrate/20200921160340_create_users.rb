class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email 
      t.string :password_digest 
      t.string :session_token 
      t.integer :profile_picture_id 
      t.string :status
      t.string :title 
      t.timestamps 
    end
    add_index :users, :username
    add_index :users, :email
    add_index :users, :session_token
  end
end
