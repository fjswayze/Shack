class AddAdmin < ActiveRecord::Migration[5.2]
  def change
    add_column :direct_messages, :admin_id, :integer 
  end
end
