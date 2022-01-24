class ProjectDetailSerializer < ActiveModel::Serializer
	attributes :id, :name, :desc, :details

	has_many :skills
	has_many :urls
	has_many :videos
end
