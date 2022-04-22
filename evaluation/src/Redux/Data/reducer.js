import { store } from "../store";
import { GET_TEACHERS_DATA, GET_TEACHERS_DATA_ERROR, GET_TEACHERS_DATA_LOADING } from "./action";

const initialState = {
  loading: false,
  error: false,
  teacher_data: [],
  success: false

};

export const datareducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case GET_TEACHERS_DATA:
      return { ...store, teacher_data: [...payload], error: false, loading: false , success: true};
    case GET_TEACHERS_DATA_LOADING:
      return { ...store, loading: true, error: false,success: false };
    case GET_TEACHERS_DATA_ERROR:
      return { ...store, loading: false, error: true, success: false };
    default:
      return store;
  }
};




