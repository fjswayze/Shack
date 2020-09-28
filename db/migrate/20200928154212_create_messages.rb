class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :user_id 
      t.string :body
      t.integer :messageable_id 
      t.string :messageable_type
      t.integer :parent_message_id
      t.timestamps 
    end
  end
end
