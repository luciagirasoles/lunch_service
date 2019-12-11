class CreateStarters < ActiveRecord::Migration[6.0]
  def change
    create_table :starters do |t|
      t.string :name
      t.boolean :selected, default: false

      t.timestamps
    end
  end
end
