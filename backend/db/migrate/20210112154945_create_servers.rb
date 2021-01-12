class CreateServers < ActiveRecord::Migration[6.1]
  def change
    create_table :servers do |t|
      t.string :name
      t.integer :user_id
      t.boolean :joined

      t.timestamps
    end
  end
end
