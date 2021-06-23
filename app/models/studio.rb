class Studio < ApplicationRecord
  belongs_to :user


  has_many :fit_classes
end
