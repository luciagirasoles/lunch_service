require 'rails_helper'

RSpec.describe MainCoursesController, type: :controller do
    describe 'GET index' do
        it 'returns http status ok' do
          get :index
          expect(response).to have_http_status(:ok)
        end
        it 'render json with all main Courses' do
            MainCourse.create(name: "Tallarines al Pesto con Bisteck")
            get :index
            mainCourses = JSON.parse(response.body)
            expect(mainCourses.size).to eq 1
        end
    end

    describe 'PATCH update selected' do
        it "returns http status ok" do
            mainCourse = MainCourse.create(name: "Tallarines al Pesto con Bisteck")
            patch :update, params: { id: mainCourse.id, mainCourse: { selected: true } }
            expect(response).to have_http_status(:ok)
          end
          it "returns main Course selected" do
            mainCourse = MainCourse.create(name: "Tallarines al Pesto con Bisteck")
            patch :update, params:  { id: mainCourse.id, mainCourse: { selected: true } }
            expected_mainCourse = JSON.parse(response.body)
            expect(expected_mainCourse["selected"]).to eq(true)
          end
          it "returns main Course unselected" do
            mainCourse = MainCourse.create(name: "Tallarines al Pesto con Bisteck", selected: true)
            patch :update, params:  { id: mainCourse.id, mainCourse: { selected: false } }
            expected_mainCourse = JSON.parse(response.body)
            expect(expected_mainCourse["selected"]).to eq(false)
          end
    
    end

end
