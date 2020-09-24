class Replacecolumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :channel_ids
    add_column :users, :channel_ids, :integer, array: true, default: []
  end
end
