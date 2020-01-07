class CreateListTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :list_tasks do |t|
      t.integer :author_id, null: false, presence: true
      t.integer :list_id, null: false, presence: true
      t.timestamps
    end

    add_index :list_tasks, :author_id
    add_index :list_tasks, :list_id
  end
end
