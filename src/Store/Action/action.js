import { Actions } from 'react-native-router-flux';

export function setUserCredentials(userCredentials, routeInsideApp) {
    return dispatch => {
        dispatch({ type: "SAVE_USER", payload: userCredentials })
        // routeInsideApp != true ? Actions.Allowaccesslocation() : null
        routeInsideApp != true ? Actions.AppContainer() : null
    }
}

export function setUserCurrentLocation(location, bolean) {
    return dispatch => {
        dispatch({ type: "USER_CURRENT_LOCATION_ACTION", payload: location })
        bolean != true ? Actions.AppContainer() : null
        // Actions.AppContainer()
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
    return dispatch => {
        dispatch({ type: "SET_CURRENT_SHOP", payload: shop })
    }
}

export function setNearByShops(shops) {
    // console.log(shops, "INSIDEACTION")
    return dispatch => {
        dispatch({ type: "SET_NEARBY_SHOP", payload: shops })
    }
}









