class User < ApplicationRecord
  # === associations ===
  has_one :studio

  has_and_belongs_to_many :fit_classes

  # === authentication and validations ===
  # ensure provided password, hash set to digest
  has_secure_password

  # ensure username and password are unique
  # check for proper email format
  # ensure character length for password
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
end
