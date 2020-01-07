class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string "name", null: false
      t.integer "author_id", null: false
      t.index ["author_id"], name: "index_lists_on_author_id"
      t.index ["name"], name: "index_lists_on_title"
      t.timestamps
    end
  end
end
