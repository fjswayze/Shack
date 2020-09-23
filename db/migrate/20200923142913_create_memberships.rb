class CreateMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :memberships do |t|
      t.integer :user_id 
      t.integer :memberable_id 
      t.string :memberable_type
      t.timestamps 
    end
    add_index :memberships, :user_id
    add_index :memberships, :memberable_id
    add_index :memberships, [:memberable_id, :memberable_type], unique: true 
  end
end
