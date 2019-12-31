const API_POST_ORDER_URL = "/orders";

async function createError(response) {
  const { errors } = await response.json();
  const error = new Error(errors.message);
  error.status = response.status;
  error.statusText = response.statusText;
  return error;
}

export default async function sendNewOrder(
  order = { beverage: 0, mainCourse: 0, starter: 0 }
) {
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
        "X-CSRF-Token": document.querySelector("meta[name=csrf-token]").content,
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) throw await createError(response);
  } catch (error) {
    console.log("error saving Order data:  ", order, " ,error: ", error);
  }
}
