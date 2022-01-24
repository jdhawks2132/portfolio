class Api::ProjectsController < ApplicationController
before_action :set_project, only: [:show]

  def index
    render json: Project.all, status: :ok
  end

  def show
    render json: @project, status: :ok
  end

  private

  def set_project
		@project = Project.find(params[:id])
	end
end
