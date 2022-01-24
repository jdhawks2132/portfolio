class Project < ApplicationRecord
  has_many :videos
  has_many :images
  has_many :skills
end
