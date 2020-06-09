class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.string :category
      t.string :location
      t.string :contract_type
      t.string :description, :text

      t.timestamps
    end
  end
end
