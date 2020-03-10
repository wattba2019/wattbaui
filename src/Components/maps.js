import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text, } from 'react-native';
import { connect } from 'react-redux'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { setUserCurrentLocation } from "./../Store/Action/action";

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
            markers: [],
            draggable: false
        }
    }

    UNSAFE_componentWillMount() {
        if (this.props.currentLocation) {
            this.setState({
                coords: this.props.currentLocation.coords
            })
        }
        if (this.props.markers) {
            this.setState({
                markers: this.props.markers
            })
        }
        if (this.props.draggable) {
            this.setState({
                draggable: this.props.draggable
            })
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.currentLocation) {
            this.setState({
                coords: nextProps.currentLocation.coords
            })
        }
        if (nextProps.markers) {
            this.setState({
                markers: nextProps.markers
            })
        }
    }

    locationSet(coords) {
        let currentLocation = {
            coords: coords
        }
        this.setState({
            coords: coords
        })
        this.props.setUserCurrentLocation(currentLocation, true)
    }


    render() {
        let { coords, markers, draggable } = this.state
        // console.log(coords, "INSIDERENDER")
        return (
            <View>
                {
                    (coords && coords.latitude && coords.longitude) ?
                        <MapView style={{ width: "100%", height: 500 }}
                            provider={PROVIDER_GOOGLE}
                            region={{
                                latitude: coords.latitude,
                                longitude: coords.longitude,
                                latitudeDelta: LATITUDE_DELTA,
                                longitudeDelta: LONGITUDE_DELTA,
                            }}
                        >

                            {
                                (markers.length != 0) ? (

                                    markers.map((key, index) => {
                                        return (
                                            <Marker key={index} draggable={false}
                                                coordinate={
                                                    {
                                                        latitude: key.latitude,
                                                        longitude: key.longitude,
                                                        latitudeDelta: LATITUDE_DELTA,
                                                        longitudeDelta: LONGITUDE_DELTA,
                                                    }
                                                }
                                                title={key.title}
                                            // description={'This is your current location'}
                                            >
                                                <Image source={require('../../assets/Group55346(2).png')} style={{ height: 45, width: 45 }} />
                                                {/* <Text>{key.title}</Text> */}
                                            </Marker>
                                        )
                                    })

                                ) : null
                            }

                            <Marker draggable={draggable}
                                // style={{ top: 0, bottom: 0, left: 0, right: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}
                                coordinate={
                                    {
                                        latitude: coords.latitude,
                                        longitude: coords.longitude,
                                        latitudeDelta: LATITUDE_DELTA,
                                        longitudeDelta: LONGITUDE_DELTA,
                                    }
                                }
                                onDragEnd={(e) => this.locationSet(e.nativeEvent.coordinate)}
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
        currentLocation: state.root.currentLocation,
    };
};


function mapDispatchToProps(dispatch) {
    return ({
        setUserCurrentLocation: (position, bolean) => {
            dispatch(setUserCurrentLocation(position, bolean));
        },
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MapDirection);



