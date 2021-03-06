class Order < ApplicationRecord
    belongs_to :beverage
    belongs_to :mainCourse
    belongs_to :starter
    enum status: { received: 0, ready: 1, delivered: 2 }
    scope :in_process, -> { where("status != 2") }
end
