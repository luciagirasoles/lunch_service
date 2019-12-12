class OrdersController < ApplicationController

    def index
        render json: Order.in_process.to_json(only: [:id,:starter_id,:mainCourse_id,:beverage_id, :status], include: { beverage: { only: :name } ,mainCourse: { only: :name}, starter: {only: :name} }), status: :ok
    end

    def create
    Order.create(create_orders_params)
    render json: Order.in_process.to_json(only: [:id,:starter_id,:mainCourse_id,:beverage_id, :status], include: { beverage: { only: :name } ,mainCourse: { only: :name}, starter: {only: :name} }), status: :ok
    end

    def show
    order = Order.find(params[:id])
    render json: order.to_json(only:[:id,:starter_id,:mainCourse_id,:beverage_id, :status])
        
    end

    def update
        order = Order.find(params[:id])
        order.update(update_orders_params)
        render json: Order.in_process.to_json(only: [:id,:starter_id,:mainCourse_id,:beverage_id, :status], include: { beverage: { only: :name } ,mainCourse: { only: :name}, starter: {only: :name} }), status: :ok
    end

    rescue_from ActiveRecord::RecordNotFound do |e|
        render json: { message: e.message }, status: :not_found
      end

    private
    def create_orders_params
        params.require(:order).permit( :starter_id, :mainCourse_id, :beverage_id)
    end
    def update_orders_params
        params.require(:order).permit( :status)
    end

end
