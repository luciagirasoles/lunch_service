const initialState = {
  loading: false,
  error: null,
  menu: {
    starter1: { id: "", name: "" },
    starter2: { id: "", name: "" },
    mainCourse1: { id: "", name: "" },
    mainCourse2: { id: "", name: "" },
    beverage: { id: "", name: "" }
  },
  orders: {
    0: { id: 0, starter: "", mainCourse: "", beverage: "" }
  }
};
export default initialState;
