class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :title, null: false, presence: true
      t.timestamps
    end
    add_index :tags, :title
  end
end
