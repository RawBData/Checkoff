class ChangeTasksNotesToArrayAgain < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :notes, :string, array: true, default: []
  end
end
