import { LOGIN_FAILURE,LOGIN_SUCCESS,LOGIN_LOADING } from "./action";

const initialState = {
    loading: false,
    error: false,
    isAuthenticated: false,
    token:"",
    username:"",
    roles:''
};

export const loginReducer = (store=initialState, {type,payload}) => {
    switch (type) {
        case LOGIN_LOADING:
            return {
                ...store,
                loading: true,
                error: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...store,
                loading: false,
                isAuthenticated: true,
                token: payload.token,
                username: payload.username,
                roles: payload.roles,
            };
        case LOGIN_FAILURE:
            return {
                ...store,
                loading: false,
                error: true,
                isAuthenticated: false,
                token: "",
                username: "",
                roles: ""
            };
        case "LOGOUT":
            return {...initialState}
        default:
            return store;
    }
}