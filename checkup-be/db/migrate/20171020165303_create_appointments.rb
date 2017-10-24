class CreateAppointments < ActiveRecord::Migration[5.1]
  def change
    create_table :appointments do |t|
      t.integer :user_id
      t.integer :doctor_id, null: false
      t.text :reason
      # t.string :city
      # t.string :state
      # t.string :zip

      t.timestamp :start_time, null: false
    end

    add_index :appointments, :user_id
    add_index :appointments, :doctor_id

  end
end
