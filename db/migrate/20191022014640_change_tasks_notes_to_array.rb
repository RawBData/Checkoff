class ChangeTasksNotesToArray < ActiveRecord::Migration[5.2]
  def change
    remove_column :tasks, :notes
  end
end
