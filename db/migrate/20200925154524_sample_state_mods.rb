class SampleStateMods < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :user_ids, :integer,  array: true, default: []
    add_column :channels, :message_ids, :integer,  array: true, default: []
  end
end
