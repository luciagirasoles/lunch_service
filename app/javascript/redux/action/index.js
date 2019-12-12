function reset() {
  return { type: "RESET" };
}

function fetchDataBegin() {
  return {
    type: "FETCH_DATA_BEGIN"
  };
}

function fetchDataError(error) {
  return {
    type: "FETCH_DATA_ERROR",
    payload: { error }
  };
}

function fetchDataMenuSuccess(dataFetch) {
  return {
    type: "FETCH_DATA_MENU_SUCCESS",
    payload: { dataFetch }
  };
}

function fetchDataOrdersSuccess(dataFetch) {
  return {
    type: "FETCH_DATA_ORDERS_SUCCESS",
    payload: { dataFetch }
  };
}

function saveOrder(updatedOrders) {
  return {
    type: "SAVE_ORDER",
    payload: { updatedOrders }
  };
}

function updateMenu(newMenu) {
  return {
    type: "UPDATE_MENU",
    payload: { newMenu }
  };
}
function updateOrder(orders) {
  return {
    type: "UPDATE_ORDER",
    payload: { orders }
  };
}

export {
  reset,
  fetchDataBegin,
  fetchDataMenuSuccess,
  fetchDataOrdersSuccess,
  fetchDataError,
  saveOrder,
  updateMenu,
  updateOrder
};
