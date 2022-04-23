export const SIGNUP_LOADING = "SIGNUP_LOADING";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const signupLoading=()=>({
    type:SIGNUP_LOADING,
});

export const signupSuccess = (payload)=>({
    type:SIGNUP_SUCCESS,
    payload
});

export const signupFailure = ()=>({
    type:SIGNUP_FAILURE,
})

export const signup = ({name,email, password,roles})=>(dispatch)=>{
    dispatch(signupLoading())
        fetch(`https://scholmybackend.herokuapp.com/register`,{
          method:"post",
          body:JSON.stringify({
              name,
              email,
              password,
              roles
            }),
          headers:{
              "Content-Type":"application/json"
          }
        }).then(res=>res.json()).then((res)=>dispatch(signupSuccess({name,roles,email:email,token:res.token})))
        .catch(error=>dispatch(signupFailure()))
}



/////https://schooldata1.herokuapp.com/register