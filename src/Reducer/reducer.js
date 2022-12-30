let initialData = {
  data: "",
};
const setupData = (state = { initialData }, action) => {
  switch (action.type) {
    case "RECEIVEDATA": {
      return { ...state, data: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default setupData;
