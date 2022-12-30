let initialData = {
  data: "",
};

const getData = (state = { initialData }, action) => {
  switch (action.type) {
    case "SETDATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
export default getData;
