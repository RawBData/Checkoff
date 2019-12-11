class Task < ApplicationRecord
    validates :title, :author_id, presence: true
    validates :complete, inclusion: { in: [ true , false ] }

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

end
