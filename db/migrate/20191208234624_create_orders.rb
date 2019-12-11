class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.references :starter
      t.references :mainCourse
      t.references :beverage
      t.integer :status, default: 0

      t.timestamps
    end
  end
end
