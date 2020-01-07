class ListTask < ApplicationRecord
    belongs_to :task
    belongs_to :list
end
