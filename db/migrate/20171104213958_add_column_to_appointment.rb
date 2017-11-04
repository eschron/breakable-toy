class AddColumnToAppointment < ActiveRecord::Migration[5.1]
  def change
    add_reference :appointments, :physicianswithappointment
  end
end
