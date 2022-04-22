import { store } from "../store";
import { GET_TEACHERS_DATA, GET_TEACHERS_DATA_ERROR, GET_TEACHERS_DATA_LOADING,GET_TEACHERS_DATA_ONE } from "./action";

const initialState = {
  loading: false,
  error: false,
  teacher_data: [],
  teacher_data_one:{},
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
    case GET_TEACHERS_DATA_ONE:
      return { ...store, teacher_data_one: { ...payload }, error: false, loading: false, success: true };
    default:
      return store;
  }
};




