class RemoveTextFromJobs < ActiveRecord::Migration[5.2]
  def change
    remove_column :jobs, :text, :string
  end
end
