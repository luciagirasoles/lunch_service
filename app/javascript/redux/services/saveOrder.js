const API_POST_ORDER_URL = "/orders";

import { saveOrder } from "../action/actions";

async function createError(response) {
  const { errors } = await response.json();
  const error = new Error(errors.message);
  error.status = response.status;
  error.statusText = response.statusText;
  return error;
}

function defineInitialData(orders = []) {
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

export default function sendNewOrder(
  order = { beverage: 0, mainCourse: 0, starter: 0 }
) {
  return async dispatch => {
    try {
      let response = await fetch(API_POST_ORDER_URL, {
        method: "POST",
        body: JSON.stringify({
          order: {
            starter_id: order.starter,
            mainCourse_id: order.mainCourse,
            beverage_id: order.beverage
          }
        }),
        headers: {
          "X-CSRF-Token": document.querySelector("meta[name=csrf-token]")
            .content,
          "Content-Type": "application/json"
        }
      });
      if (!response.ok) throw await createError(response);
      const data = await response.json();
      const editedData = defineInitialData(data);
      dispatch(saveOrder(editedData));
    } catch (error) {
      console.log("error saving Order data:  ", order, " ,error: ", error);
    }
  };
}
