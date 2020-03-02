import getDirections from 'react-native-google-maps-directions'
import { Alert } from 'react-native';

export default handleGetDirections = (shop, currentLocation) => {
    if (currentLocation != null && shop.latitude && shop.longitude) {
        const data = {
            source: {
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude
            },
            destination: {
                latitude: Number(shop.latitude),
                longitude: Number(shop.longitude),
            },
            params: [
                {
                    key: "travelmode",
                    value: "driving"        // may be "walking", "bicycling" or "transit" as well
                },
                {
                    key: "dir_action",
                    value: "navigate"       // this instantly initializes navigation using the given travel mode
                }
            ],
        }
        getDirections(data)
    }
    else {
        Alert.alert("Please turn on your location")
    }
}