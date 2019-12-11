class Task < ApplicationRecord
<<<<<<< HEAD
=======
    serialize :notes, Array
>>>>>>> 241e2e361686c302b605e8e0484da50fb764acde
    validates :title, :author_id, presence: true
    validates :complete, inclusion: { in: [ true , false ] }

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

<<<<<<< HEAD
=======
    has_many :taggings
    has_many :tags, through: :taggings, source: :tag
    
    def tag_names=(tag_names)
        p tag_names
        self.tags = tag_names.map do |tag_name|
            Tag.find_or_create_by(title: tag_name)
        end
    end

>>>>>>> 241e2e361686c302b605e8e0484da50fb764acde
end
