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

export function setSearchLocation(location, locationName) {
    // console.log(location, "location_setUserCurrentLocation")
    return dispatch => {
        dispatch({ type: "USER_SEARCH_LOCATION_ACTION", payload: location })
        dispatch({ type: "USER_SEARCH_LOCATION_NAME_ACTION", payload: locationName })
    }
}

export function setShopServices(services) {
    // alert("work_action")
    console.log(services, "services")
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


export function distance(lat1, lon1, lat2, lon2) {
    return dispatch => {
        var R = 6371; // km (change this constant to get miles)
        var dLat = (lat2 - lat1) * Math.PI / 180;
        var dLon = (lon2 - lon1) * Math.PI / 180;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        // if (d > 1) return Math.round(d) + " km";
        // else if (d <= 1) return Math.round(d * 1000) + "m";
        return d;
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
                    let shops1 = result.data.data
                    let shops = []
                    for (let index = 0; index < shops1.length; index++) {
                        const element = shops1[index];
                        const lat = shops1[index].location.coordinates[0];
                        const lng = shops1[index].location.coordinates[1];
                        element.distance = dispatch(distance(lat, lng, currentLocation.coords.latitude, currentLocation.coords.longitude))
                        shops.push(element)
                    }
                    shops = shops.sort((a, b) => a.distance - b.distance)
                    // console.log(shops, "Fetch_Shops_NearBy")
                    if (shops) {
                        dispatch({ type: "SET_NEARBY_SHOP", payload: shops })
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







