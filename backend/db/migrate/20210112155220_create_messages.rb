class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.integer :chatroom_id
      t.integer :user_id
      t.string :owner
      t.text :text

      t.timestamps
    end
  end
end
