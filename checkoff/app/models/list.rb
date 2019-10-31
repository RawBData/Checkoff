class List < ApplicationRecord

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    has_many :tasks,
    foreign_key: :list_id,
    class_name: :Task

    # has_many :tasks, through: :list_tasks
    # has_many :tags, through: :taggings, source: :tag
end
