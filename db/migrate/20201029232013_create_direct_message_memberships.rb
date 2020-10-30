class CreateDirectMessageMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :DM_memberships do |t|
      t.integer :user_id
      t.integer :DM_id 
      t.timestamps 
    end
    add_index :DM_memberships, [:user_id, :DM_id], unique: true
  end
end
