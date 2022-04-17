export const GET_DATA = 'GET_DATA';
export const GET_DATA_LOADING = 'GET_DATA_LOADING';
export const GET_DATA_ERROR = 'GET_DATA_ERROR';

export const getDat = (payload) => ({
    type: GET_DATA,
    payload
});

export const getDatLoading = () => ({
    type: GET_DATA_LOADING,
});

export const getDatError = (err) => ({
    type: GET_DATA_ERROR,
    err
});


export const getdata = () => (dispatch) => {
    dispatch(getDatLoading());
     fetch('https://schooldata1.herokuapp.com/teachers')
        .then(res => res.json())
        .then(res => dispatch(getDat(res)))
        .catch(error => dispatch(getDatError(error)));
}