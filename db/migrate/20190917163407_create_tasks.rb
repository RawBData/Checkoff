class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title, null: false, presence: true
      t.text :notes
      t.date :start_date
      t.date :due_date
      t.integer :author_id, null: false, presence: true
      t.integer :performer_id
      t.integer :list_id
      t.integer :parent_id
      t.boolean :complete, default: false

      t.timestamps
    end

    add_index :tasks, :title
    add_index :tasks, :author_id
    add_index :tasks, :performer_id
    add_index :tasks, :list_id
    add_index :tasks, :parent_id


  end
end
