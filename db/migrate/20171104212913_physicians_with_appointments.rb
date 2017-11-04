class PhysiciansWithAppointments < ActiveRecord::Migration[5.1]
  def change
    create_table :physicianswithappointments do |t|
      t.belongs_to :user
      t.belongs_to :physician

      t.timestamps
    end
  end
end
