class BeveragesController < ApplicationController
    def index
        render json: Beverage.all.to_json(only: [:id, :name, :selected]), status: :ok
    end

    def update
        Beverage.transaction do
        beverage = Beverage.lock.find(params[:id])
        beverage.update(beverage_params)
        render json: beverage.to_json(only: [:id, :name, :selected])
        end
    end

    def selected
        beverage= JSON.parse(Beverage.selected.to_json(only: [:id, :name]))
        main_courses= JSON.parse(MainCourse.selected.to_json(only: [:id, :name]))
        starters= JSON.parse(Starter.selected.to_json(only: [:id, :name]))
        render json: {beverage: beverage,main_courses: main_courses, starters: starters}

    end

    rescue_from ActiveRecord::RecordNotFound do |e|
        render json: { message: e.message }, status: :not_found
      end

    private
    def beverage_params
        params.require(:beverage).permit(:selected)
    end
end
