class ChangeTasksNotes03 < ActiveRecord::Migration[5.2]
  def change
    remove_column :tasks, :notes
    add_column :tasks, :notes, :text

  end
end
