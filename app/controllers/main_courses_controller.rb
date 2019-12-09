class MainCoursesController < ApplicationController
    def index
        render json: MainCourse.all.to_json(only: [:id, :name, :selected]), status: :ok
    end

    def update
        mainCourse = MainCourse.find(params[:id])
        mainCourse.update(mainCourse_params)
        render json: mainCourse.to_json(only: [:id, :name, :selected])
    end

    rescue_from ActiveRecord::RecordNotFound do |e|
        render json: { message: e.message }, status: :not_found
      end

    private
    def mainCourse_params
        params.require(:mainCourse).permit(:selected)
    end

end
