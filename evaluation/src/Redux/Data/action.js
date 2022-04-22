export const GET_TEACHERS_DATA = 'GET_DATA';
export const GET_TEACHERS_DATA_LOADING = 'GET_DATA_LOADING';
export const GET_TEACHERS_DATA_ERROR = 'GET_DATA_ERROR';
export const GET_TEACHERS_DATA_ONE = 'GET_DATA_ONE';
import axios from 'axios';

export const getDat = (payload) => ({
    type: GET_TEACHERS_DATA,
    payload
});

export const getDatLoading = () => ({
    type: GET_TEACHERS_DATA_LOADING,
});

export const getDatError = (err) => ({
    type: GET_TEACHERS_DATA_ERROR,
    err
});
export const getoneteacher =(payload)=>({
    type:GET_TEACHERS_DATA_ONE,
    payload
})


export const getdata = () => (dispatch) => {
    dispatch(getDatLoading());
     fetch('https://scholmybackend.herokuapp.com/teachers')
        .then(res => res.json())
        .then(res => dispatch(getDat(res)))
        .catch(error => dispatch(getDatError(error)));
}

export const getTeacher = (id) => (dispatch) => {
    dispatch(getDatLoading());
    return axios.get(`https://scholmybackend.herokuapp.com/teachers/${id}`).
    then(response=>{
        console.log(response.data)
        dispatch(getoneteacher(response.data))
    }).catch((err) => {
        {dispatch(getDatError(err));
        }});
}




// export const FETCH_TEACHERS_DATA = 'FETCH_TEACHERS_DATA';
// export const FETCH_TEACHERS_DATA_FAILURE = 'FETCH_TEACHERS_DATA_FAILURE';
// export const LOAD_TEACHERS_DATA = 'LOAD_TEACHERS_DATA';
// import axios from 'axios';

// export const fetchTeachersData = (payload) => {
//     return {
//         type: FETCH_TEACHERS_DATA,
//          payload
//     }
// }

// export const fetchTeachersDataFailure = (payload) => {
//     return {
//         type: FETCH_TEACHERS_DATA_FAILURE,
//         payload: payload
//     }
// }
// export const loadTeachersData = () => {
//     return {
//         type: LOAD_TEACHERS_DATA,
//     }
// }


// export const getTeachersData = () => (dispatch) => {
//     dispatch(loadTeachersData());
//     return axios.get('https://my-app-deep.herokuapp.com/teachers').
//     then(response=>{
//         // console.log(response.data);
//         dispatch(fetchTeachersData(response.data))
//     }).catch((err) => {
//         dispatch(fetchTeachersDataFailure(err.message));
//     });
// }


// export const addTeacher = (payload) => (dispatch) => {
//     dispatch(loadTeachersData());
//     fetch('https://my-app-deep.herokuapp.com/teachers', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             "Authorization": "Bearer " + payload.token
//         }
//         , body: JSON.stringify({
//             name: payload.name,
//             email: payload.email,
//             gender: payload.gender,
//             age: payload.age,
//             class: payload.class
//         })
//     }).then((res) => {
//         res.json()
//     }).then((data) => {
//         dispatch(fetchTeachersData(data))
//     })
//     .catch((err) => {
//         dispatch(fetchTeachersDataFailure());
//     })
// }