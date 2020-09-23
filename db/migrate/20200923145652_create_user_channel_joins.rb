class CreateUserChannelJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :user_channel_joins do |t|
      t.integer :user_id 
      t.integer :channel_id
      t.timestamps 
    end
    add_index :user_channel_joins, :user_id 
    add_index :user_channel_joins, :channel_id
    add_index :user_channel_joins, [:user_id, :channel_id], unique: true 
  end
end
