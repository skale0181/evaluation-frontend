
///type of action
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//action creator
export const loginLoading = () => ({
    type: LOGIN_LOADING
});

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload: payload
}); 

export const loginFailure = () => ({
    type: LOGIN_FAILURE
});

export const logout = () => ({
    type: "LOGOUT"
});


export const login =({name,email,password})=> (dispatch) => {
    
    dispatch(loginLoading())
    fetch('https://scholmybackend.herokuapp.com/login', {
        method: 'POST',
        body: JSON.stringify({name,email,password}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then((res) => {dispatch(loginSuccess({token:res.token,roles:res.user.roles}))
    console.log(res)
    })
        .catch(err => dispatch(loginFailure(err)))
}

