class StartersController < ApplicationController
    def index
        render json: Starter.all.to_json(only: [:id, :name, :selected]), status: :ok
    end

    def update
        starter = Starter.find(params[:id])
        starter.update(starter_params)
        render json: starter.to_json(only: [:id, :name, :selected])
    end

    rescue_from ActiveRecord::RecordNotFound do |e|
        render json: { message: e.message }, status: :not_found
      end

    private
    def starter_params
        params.require(:starter).permit(:selected)
    end
end
