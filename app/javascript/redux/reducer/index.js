import initialState from "./initialState";

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "FETCH_DATA_BEGIN":
      return {
        ...state,
        loading: true
      };
    case "FETCH_DATA_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case "FETCH_DATA_MENU_SUCCESS":
      return {
        ...state,
        loading: false,
        menu: action.payload.dataFetch
      };

    case "FETCH_DATA_ORDERS_SUCCESS":
      return {
        ...state,
        loading: false,
        orders: action.payload.dataFetch
      };

    case "SAVE_ORDER":
      return {
        ...state,
        orders: { ...action.payload.updatedOrders }
      };
    case "UPDATE_MENU":
      return { ...state, menu: action.payload.newMenu };
    default: {
      return state;
    }
  }
}
