require 'rails_helper'

RSpec.describe BeveragesController, type: :controller do
    describe 'GET index' do
        it 'returns http status ok' do
          get :index
          expect(response).to have_http_status(:ok)
        end
        it 'render json with all beverages' do
            Beverage.create(name: "Agua de Manzana")
            get :index
            beverages = JSON.parse(response.body)
            expect(beverages.size).to eq 1
        end
    end

    describe 'PATCH update selected' do
        it "returns http status ok" do
            beverage = Beverage.create(name: "Agua de Manzana")
            patch :update, params: { id: beverage.id,beverage: { selected: true } }
            expect(response).to have_http_status(:ok)
          end
          it "returns beverage selected true" do
            beverage = Beverage.create(name: "Agua de Manzana")
            patch :update, params:  { id: beverage.id, beverage: { selected: true } }
            expected_beverage = JSON.parse(response.body)
            expect(expected_beverage["selected"]).to eq(true)
          end
          it "returns beverage unselected" do
            beverage = Beverage.create(name: "Agua de Manzana", selected: true)
            patch :update, params:  { id: beverage.id, beverage: { selected: false } }
            expected_beverage = JSON.parse(response.body)
            expect(expected_beverage["selected"]).to eq(false)
          end
    
    end

end
