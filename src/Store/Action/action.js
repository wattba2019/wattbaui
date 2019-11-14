import ActionTypes from '../Constant/constant';

export function setUserCredentials(userCredentials) {
    console.log(userCredentials, "userCredentials")
    return dispatch => {
        dispatch({ type: ActionTypes.USERCREDENTIALS, payload: userCredentials })
    }
}











