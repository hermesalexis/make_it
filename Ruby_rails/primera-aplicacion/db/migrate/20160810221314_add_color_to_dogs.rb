class AddColorToDogs < ActiveRecord::Migration
  def change
    add_column :dogs, :color, :string
  end
end
