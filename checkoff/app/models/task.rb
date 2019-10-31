class Task < ApplicationRecord
    serialize :notes, Array
    validates :title, :author_id, presence: true
    validates :complete, inclusion: { in: [ true , false ] }

    belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

    has_many :taggings
    has_many :tags, through: :taggings, source: :tag
    
    def tag_names=(tag_names)
        p tag_names
        self.tags = tag_names.map do |tag_name|
            Tag.find_or_create_by(title: tag_name)
        end
    end

end
