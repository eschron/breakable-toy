class CreatePhysicians < ActiveRecord::Migration[5.1]
  def change
    create_table :physicians do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :office_name, null: false
      t.string :specialty, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :phone_number
    end
  end
end
