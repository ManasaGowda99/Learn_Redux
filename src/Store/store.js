import setupData from "../Reducer/reducer";
import { createStore } from "redux";

const Configurestore = () => {
  const initialState = {};

  const store = createStore(setupData, initialState);
  return store;
};
export default Configurestore;
