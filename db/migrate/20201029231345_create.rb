class Create < ActiveRecord::Migration[5.2]
  def change
     create_table :direct_messages do |t|
      t.timestamps 
    end
  end
end
