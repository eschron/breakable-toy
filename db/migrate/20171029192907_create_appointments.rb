class CreateAppointments < ActiveRecord::Migration[5.1]
  def change
    create_table :appointments do |t|
      t.string :reason
      t.datetime :time
      t.boolean :visited, default: false

      t.belongs_to :user
      t.belongs_to :physician

      t.timestamps
    end
  end
end
