import { store } from "../store";
import { GET_DATA, GET_DATA_ERROR, GET_DATA_LOADING } from "./action";

const initialState = {
  loading: false,
  error: false,
  todos: [],
};

export const datareducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return { ...store, todos: [...payload], error: false, loading: false };
    case GET_DATA_LOADING:
      return { ...store, loading: true, error: false };
    case GET_DATA_ERROR:
      return { ...store, loading: false, error: true };
    default:
      return store;
  }
};
