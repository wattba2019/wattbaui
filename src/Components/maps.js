import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, ActivityIndicator, Dimensions, Platform } from 'react-native';
import { connect } from 'react-redux'

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';


const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class MapDirection extends React.Component {
    constructor() {
        super()
        this.state = {
            location: null,
            errorMessage: null,
        }
    }

    componentWillMount() {
        if (this.props.sendLocation) {
            console.log(this.props.sendLocation, "sendLocation")
            this.setState({ location: this.props.sendLocation });
        }
        else {
            this.allowLocation()
        }
    }

    allowLocation = async () => {
        // Instead of navigator.geolocation, just use Geolocation.
        await Geolocation.getCurrentPosition(
            (position) => {
                if (position) {
                    console.log(position, "USER_CURRENT_LOCATION")
                    this.setState({
                        coords: position.coords
                    })
                }
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message, "66666");
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, }
        );
    }

    // region={{
    //     latitude: 37.78825,
    //     longitude: -122.4324,
    //     latitudeDelta: 0.015,
    //     longitudeDelta: 0.0121,
    // }}

    render() {
        let { coords } = this.state
        if (coords) {
            console.log(coords)
        }
        return (
            <View >
                {
                    (coords && coords.latitude && coords.longitude) ?
                        <MapView style={{ width: "99%", height: 500 }}
                            provider={PROVIDER_GOOGLE}
                            region={{
                                latitude: coords.latitude,
                                longitude: coords.longitude,
                                latitudeDelta: LATITUDE_DELTA,
                                longitudeDelta: LONGITUDE_DELTA,
                            }}
                        >
                            <Marker draggable={false}
                                // style={{ top: 0, bottom: 0, left: 0, right: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}
                                coordinate={
                                    {
                                        latitude: coords.latitude,
                                        longitude: coords.longitude,
                                        latitudeDelta: LATITUDE_DELTA,
                                        longitudeDelta: LONGITUDE_DELTA,
                                    }
                                }
                            // onDragEnd={!this.props.sendLocation ? (e) => this.locationSet(e.nativeEvent.coordinate) : null}
                            >
                                {/* <View style={{ width: 70, height: 70, backgroundColor: "orange" }}>
                                </View> */}
                                    <Image source={require('../../assets/mapIcon.png')} style={{ height: 35, width: 35 }} />
                            </Marker>
                        </MapView> : <MapView style={{ width: "99%", height: 500 }}
                            provider={PROVIDER_GOOGLE}
                            region={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: LATITUDE_DELTA,
                                longitudeDelta: LONGITUDE_DELTA,
                            }}
                        >
                        </MapView>
                }

            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 500,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },


});

const mapStateToProps = state => {
    return {
        // isLoader: state.root.isLoader,
    };
};


function mapDispatchToProps(dispatch) {
    return ({
        // userAuth: (Email, Password) => {
        //     dispatch(userAction(Email, Password));
        // }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MapDirection);



