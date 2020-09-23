class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name
      t.string :description 
      t.boolean :private 
      t.integer :admin_id
      t.timestamps 
    end
    add_index :channels, :admin_id
  end
end
