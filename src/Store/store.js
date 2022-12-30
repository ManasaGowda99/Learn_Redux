import { createStore } from "redux";
import getData from "../Reducer/reducer";

const ConfigureStore = () => {
  const initialData = {};
  const store = createStore(getData, initialData);
  return store;
};
export default ConfigureStore;
