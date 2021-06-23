class User < ApplicationRecord
  # === associations ===
  has_one :studio

  has_and_belongs_to_many :fit_classes

  
  # === authentication and validations ===
  # ensure provided password, hash set to digest
  has_secure_password
  # ensure username and email are unique
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  # check for proper email format
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  # ensure character length for password
  validates :password, length: { minimum: 6 }
end
