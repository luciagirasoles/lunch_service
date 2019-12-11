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

export { useMenu };
