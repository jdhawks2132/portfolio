class Project < ApplicationRecord
  has_many :videos
  has_many :images
  has_many :skills
  has_many :urls
end
