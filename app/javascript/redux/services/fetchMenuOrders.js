const API_FETCH_SELECTED_MENU_URL = "/selected";
const API_FETCH_ORDERS_URL = "/orders";
const formatted_data = {};
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
function defineInitialOrderData(orders = []) {
  const formattedOrders = {};
  //   1: {id: 2, starter_id: 2, mainCourse_id: 1, beverage_id: 2, status: "received"}
  orders.forEach(order => {
    formattedOrders[order.id] = {
      starter: order.starter_id,
      mainCourse: order.mainCourse_id,
      beverage: order.beverage_id
    };
  });

  return formattedOrders;
}

function fetchMenu() {
  return async dispatch => {
    try {
      console.log("fetchMenu");
      let response = await fetch(API_FETCH_SELECTED_MENU_URL);
      if (!response.ok) throw await createError(response);
      const data = await response.json();
      formatted_data["menu"] = defineInitialMenuData(data);
    } catch (error) {
      console.log("error fetching Menu initial data:  ", error);
      dispatch(fetchDataError(error));
    }
  };
}

function fetchOrders() {
  return async dispatch => {
    try {
      console.log("fetchOrders");
      let response = await fetch(API_FETCH_ORDERS_URL);
      if (!response.ok) throw await createError(response);
      const data = await response.json();
      formatted_data["orders"] = defineInitialOrderData(data);
    } catch (error) {
      console.log("error fetching Orders initial data:  ", error);
      dispatch(fetchDataError(error));
    }
  };
}

// export default function fetchMenuOrders() {
//   return async dispatch => {
//     try {
//       dispatch(fetchDataBegin());
//       let response = await fetch(API_FETCH_SELECTED_MENU_URL);
//       if (!response.ok) throw await createError(response);
//       const data = await response.json();
//       const editedData = defineInitialData(data);
//       dispatch(fetchDataSuccess(editedData));
//     } catch (error) {
//       console.log("error fetching initial data:  ", error);
//       dispatch(fetchDataError(error));
//     }
//   };
// }
