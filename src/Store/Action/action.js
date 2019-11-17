import { Actions } from 'react-native-router-flux';
// import ActionTypes from '../constant/constant';

export function setUserCredentials(userCredentials) {
    return dispatch => {
        dispatch({ type: "SAVE_USER", payload: userCredentials })
    }
}


export function setUserCurrentLocation(location) {
    return dispatch => {
        dispatch({ type: "USER_CURRENT_LOCATION_ACTION", payload: location })
        Actions.AppContainer()
    }
}











