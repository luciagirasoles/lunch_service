class CreateBeverages < ActiveRecord::Migration[6.0]
  def change
    create_table :beverages do |t|
      t.string :name
      t.boolean :selected, default: false

      t.timestamps
    end
  end
end
