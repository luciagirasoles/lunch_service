import { useSelector, shallowEqual } from "react-redux";
function useMenu() {
  return useSelector(state => {
    if (state.menu) {
      return state.menu;
    } else {
      return {};
    }
  }, shallowEqual);
}
function useOrdersReceived() {
  return useSelector(state => {
    if (state.orders) {
      return Object.values(state.orders).filter(order => {
        return order.status === "received";
      });
    } else {
      return {};
    }
  }, shallowEqual);
}

function useOrdersReady() {
  return useSelector(state => {
    if (state.orders) {
      return Object.values(state.orders).filter(order => {
        return order.status === "ready";
      });
    } else {
      return {};
    }
  }, shallowEqual);
}
export { useMenu, useOrdersReceived, useOrdersReady };
