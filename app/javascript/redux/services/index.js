const API_FETCH_SELECTED_MENU_URL = "/selected";
const API_FETCH_ORDERS_URL = "/orders";
import {
  fetchDataBegin,
  fetchDataMenuSuccess,
  fetchDataOrdersSuccess,
  fetchDataError
} from "../action/actions";

async function createError(response) {
  const { errors } = await response.json();
  const error = new Error(errors.message);
  error.status = response.status;
  error.statusText = response.statusText;
  return error;
}

function defineInitialMenuData(data = {}) {
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

export function fetchCurrentMenu() {
  return async dispatch => {
    try {
      dispatch(fetchDataBegin());
      let response = await fetch(API_FETCH_SELECTED_MENU_URL);
      if (!response.ok) throw await createError(response);
      const data = await response.json();
      const editedData = defineInitialMenuData(data);
      dispatch(fetchDataMenuSuccess(editedData));
    } catch (error) {
      console.log("error fetching Menu initial data:  ", error);
      dispatch(fetchDataError(error));
    }
  };
}

function defineInitialOrderData(orders = []) {
  const formattedOrders = {};
  //   1: {id: 2, starter_id: 2, mainCourse_id: 1, beverage_id: 2, status: "received"}
  orders.forEach(order => {
    formattedOrders[order.id] = {
      id: order.id,
      starter: { id: order.starter_id, name: order.starter.name },
      mainCourse: { id: order.mainCourse_id, name: order.mainCourse.name },
      beverage: { id: order.beverage_id, name: order.beverage.name },
      status: order.status
    };
  });

  return formattedOrders;
}

export function fetchCurrentOrders() {
  return async dispatch => {
    try {
      dispatch(fetchDataBegin());
      let response = await fetch(API_FETCH_ORDERS_URL);
      if (!response.ok) throw await createError(response);
      const data = await response.json();
      const editedData = defineInitialOrderData(data);
      dispatch(fetchDataOrdersSuccess(editedData));
    } catch (error) {
      console.log("error fetching Orders initial data:  ", error);
      dispatch(fetchDataError(error));
    }
  };
}
