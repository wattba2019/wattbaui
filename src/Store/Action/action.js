import { Actions } from 'react-native-router-flux';

export function setUserCredentials(userCredentials, routeInsideApp) {
    return dispatch => {
        dispatch({ type: "SAVE_USER", payload: userCredentials })
        routeInsideApp != true ? Actions.Allowaccesslocation() : null
    }
}

export function setUserCurrentLocation(location, ) {
    return dispatch => {
        dispatch({ type: "USER_CURRENT_LOCATION_ACTION", payload: location })
        Actions.AppContainer()
    }
}










