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

export function setShopServices(services) {
    return dispatch => {
        dispatch({ type: "SET_SERVICES", payload: services })
    }
}

export function setStylists(stylists) {
    return dispatch => {
        dispatch({ type: "SET_STYLISTS", payload: stylists })
    }
}

export function setWorkingHour(workingHour) {
    return dispatch => {
        dispatch({ type: "SET_WORKINGHOURS", payload: workingHour })
    }
}

export function setGallery(gallery) {
    return dispatch => {
        dispatch({ type: "SET_GALLERY", payload: gallery })
    }
}

export function setSpecialPack(SpecialPack) {
    return dispatch => {
        dispatch({ type: "SET_SPECIAL_PACK", payload: SpecialPack })
    }
}

export function setShop(shop) {
    console.log(shop,"SET_SHOP_INSIDE_ACTION")
    return dispatch => {
        dispatch({ type: "SET_CURRENT_SHOP", payload: shop })
    }
}









