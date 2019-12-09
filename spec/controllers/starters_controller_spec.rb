require 'rails_helper'

RSpec.describe StartersController, type: :controller do
    describe 'GET index' do
        it 'returns http status ok' do
          get :index
          expect(response).to have_http_status(:ok)
        end
        it 'render json with all starters' do
            Starter.create(name: "Agua de Manzana")
            get :index
            starters = JSON.parse(response.body)
            expect(starters.size).to eq 1
        end
    end

    describe 'PATCH update selected' do
        it "returns http status ok" do
            starter = Starter.create(name: "Yuquitas con salsa de Rocoto")
            patch :update, params: { id: starter.id,starter: { selected: true } }
            expect(response).to have_http_status(:ok)
          end
          it "returns starter selected true" do
            starter = Starter.create(name: "Yuquitas con salsa de Rocoto")
            patch :update, params:  { id: starter.id, starter: { selected: true } }
            expected_starter = JSON.parse(response.body)
            expect(expected_starter["selected"]).to eq(true)
          end
          it "returns starter unselected" do
            starter = Starter.create(name: "Yuquitas con salsa de Rocoto", selected: true)
            patch :update, params:  { id: starter.id, starter: { selected: false } }
            expected_starter = JSON.parse(response.body)
            expect(expected_starter["selected"]).to eq(false)
          end
    
    end
end
