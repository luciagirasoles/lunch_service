class BeveragesController < ApplicationController
    def index
        render json: Beverage.all.to_json(only: [:id, :name, :selected]), status: :ok
    end

    def update
        beverage = Beverage.find(params[:id])
        beverage.update(beverage_params)
        render json: beverage.to_json(only: [:id, :name, :selected])
    end

    rescue_from ActiveRecord::RecordNotFound do |e|
        render json: { message: e.message }, status: :not_found
      end

    private
    def beverage_params
        params.require(:beverage).permit(:selected)
    end
end
