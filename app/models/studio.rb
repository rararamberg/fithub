class Studio < ApplicationRecord
  # reference alais method to identify studio to user that is studio_owner 
  # https://guides.rubyonrails.org/association_basics.html#bi-directional-associations
  belongs_to :studio_owner, class_name:'User', foreign_key: 'user_id'
  has_many :fit_classes
end
