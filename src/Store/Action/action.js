import { Actions } from 'react-native-router-flux';
import axios from 'axios';

export function setUserCredentials(userCredentials, routeInsideApp) {
    return dispatch => {
        dispatch({ type: "SAVE_USER", payload: userCredentials })
        routeInsideApp != true ? Actions.Allowaccesslocation() : null
        // routeInsideApp != true ? Actions.AppContainer() : null
    }
}

export function setUserCurrentLocationWithUserCredentials(location, userCredentials) {
    // console.log(location, userCredentials, "location_setUserCurrentLocation")
    return dispatch => {
        dispatch({ type: "USER_CURRENT_LOCATION_ACTION", payload: location })
        dispatch({ type: "SAVE_USER", payload: userCredentials })
        Actions.AppContainer()
    }
}

export function setUserCurrentLocation(location, bolean) {
    // console.log(location, "location_setUserCurrentLocation")
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
        if (shops) {
            let shopLocationMarkers = []
            for (let index = 0; index < shops.length; index++) {
                let location = {
                    latitude: shops[index].location.coordinates[0],
                    longitude: shops[index].location.coordinates[1],
                    title: shops[index].businessName,
                }
                shopLocationMarkers.push(location)
            }
            dispatch({ type: "SET_MARKERS", payload: shopLocationMarkers })
        }

    }
}

export function setFavShops(shops) {
    // console.log(shops, "INSIDEACTION")
    return dispatch => {
        dispatch({ type: "SET_FAV_SHOPS", payload: shops })
    }
}


export function getNearByShopsUnder5Km(currentLocation) {
    // console.log(currentLocation, "INSIDEACTION")
    return dispatch => {
        if (currentLocation != null) {
            let cloneLocation = {
                lat: currentLocation.coords.latitude,
                long: currentLocation.coords.longitude,
                km: 5,
            }
            var options = {
                method: 'POST',
                url: `https://fathomless-citadel-43321.herokuapp.com/getallshops/`,
                headers:
                {
                    'cache-control': 'no-cache',
                    "Allow-Cross-Origin": '*',
                },
                data: cloneLocation
            }
            axios(options)
                .then(result => {
                    let shops = result.data.data
                    // console.log(shops, "Fetch_Shops_NearBy")
                    dispatch({ type: "SET_NEARBY_SHOP", payload: shops })
                    if (shops) {
                        let shopLocationMarkers = []
                        for (let index = 0; index < shops.length; index++) {
                            let location = {
                                latitude: shops[index].location.coordinates[0],
                                longitude: shops[index].location.coordinates[1],
                                title: shops[index].businessName,
                            }
                            shopLocationMarkers.push(location)
                        }
                        dispatch({ type: "SET_MARKERS", payload: shopLocationMarkers })
                    }
                })
                .catch(err => {
                    let error = JSON.parse(JSON.stringify(err))
                    console.log(error, 'ERRROR', err)
                    // alert(error)

                })

        }

    }
}







