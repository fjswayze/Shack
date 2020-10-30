class EditDm < ActiveRecord::Migration[5.2]
  def change
     add_column :direct_messages, :user_ids, :integer,  array: true, default: []
      add_column :direct_messages, :message_ids, :integer,  array: true, default: []
  end
end
