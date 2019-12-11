class MainCourse < ApplicationRecord
    has_many :orders
    scope :selected, -> { where(selected: true) }
    validate :limit_2_selected

    def limit_2_selected
        return unless selected_changed?
        return if !self.selected
        errors.add(:selected, "only 2 main courses can be allowed") if MainCourse.selected.count >= 2
    end
end
