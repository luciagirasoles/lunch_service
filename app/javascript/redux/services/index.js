const API_FETCH_SELECTED_MENU_URL = "/selected";
import {
  fetchDataBegin,
  fetchDataSuccess,
  fetchDataError
} from "../action/index";

async function createError(response) {
  const { errors } = await response.json();
  const error = new Error(errors.message);
  error.status = response.status;
  error.statusText = response.statusText;
  return error;
}

function defineInitialData(data = {}) {
  const menu = {
    starter1: { id: "", name: "" },
    starter2: { id: "", name: "" },
    mainCourse1: { id: "", name: "" },
    mainCourse2: { id: "", name: "" },
    beverage: { id: "", name: "" }
  };

  if (!!data.beverage.length) {
    menu.beverage.id = data.beverage[0].id;
    menu.beverage.name = data.beverage[0].name;
  }
  data.starters.forEach((starter, index) => {
    menu[`starter${index + 1}`].id = starter.id;
    menu[`starter${index + 1}`].name = starter.name;
  });
  data.main_courses.forEach((main_course, index) => {
    menu[`mainCourse${index + 1}`].id = main_course.id;
    menu[`mainCourse${index + 1}`].name = main_course.name;
  });
  return menu;
}

export default function fetchCurrentMenu() {
  return async dispatch => {
    try {
      dispatch(fetchDataBegin());
      let response = await fetch(API_FETCH_SELECTED_MENU_URL);
      if (!response.ok) throw await createError(response);
      const data = await response.json();
      const editedData = defineInitialData(data);
      dispatch(fetchDataSuccess(editedData));
    } catch (error) {
      console.log("error fetching initial data:  ", error);
      dispatch(fetchDataError(error));
    }
  };
}
