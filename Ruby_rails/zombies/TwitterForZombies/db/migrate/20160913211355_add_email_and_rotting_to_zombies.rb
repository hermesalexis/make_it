class AddEmailAndRottingToZombies < ActiveRecord::Migration[5.0]
  def change
  	add_column :zombies, :email, :string
  	add_column :zombies, :rooting, :boolean, default: false
  end
end
