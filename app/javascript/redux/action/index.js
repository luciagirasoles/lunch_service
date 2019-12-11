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

function fetchDataSuccess(dataFetch) {
  return {
    type: "FETCH_DATA_SUCCESS",
    payload: { dataFetch }
  };
}

function updateMenu(newMenu) {
  return {
    type: "UPDATE_MENU",
    payload: { newMenu }
  };
}

export { reset, fetchDataBegin, fetchDataSuccess, fetchDataError, updateMenu };
