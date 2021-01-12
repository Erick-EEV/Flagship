class CreateBuds < ActiveRecord::Migration[6.1]
  def change
    create_table :buds do |t|
      t.integer :budder_id
      t.integer :buddie_id

      t.timestamps
    end
  end
end
