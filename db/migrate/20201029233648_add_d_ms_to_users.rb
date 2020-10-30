class AddDMsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :direct_messages_ids, :integer,  array: true, default: []
  end
end
