class AddNotesColumnToAppointments < ActiveRecord::Migration[5.1]
  def change
    add_column :appointments, :notes, :string
  end
end
