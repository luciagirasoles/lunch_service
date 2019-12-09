class Beverage < ApplicationRecord
    has_many :orders
    scope :selected, -> { where(selected: true) }
    validates_uniqueness_of :selected, if: :selected, on: :update



end
