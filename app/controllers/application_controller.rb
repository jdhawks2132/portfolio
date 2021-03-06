class ApplicationController < ActionController::API
	include ActionController::Cookies
	rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
	rescue_from ActiveRecord::RecordInvalid, with: :invalid_record


	def hello_world
		session[:count] = (session[:count] || 0) + 1
		render json: { count: session[:count] }
	end

	private
	def record_not_found(errors)
		render json: errors.message, status: :not_found
	end

	def invalid_record(invalid)
		render json: invalid.record.errors, status: :unprocessable_entity
	end
end
