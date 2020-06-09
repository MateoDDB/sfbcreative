class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :email
      t.string :location
      t.string :phone
      t.string :offers
      t.string :subject
      t.text :project

      t.timestamps
    end
  end
end
