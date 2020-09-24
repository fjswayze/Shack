class AddArrays < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :channel_ids, :integer 
  end
end
