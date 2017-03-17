class CreateOranges < ActiveRecord::Migration
  def change
    create_table :oranges do |t|
      t.integer :size
      t.integer :tree_id
      t.timestamps null: false
    end
  end
end
