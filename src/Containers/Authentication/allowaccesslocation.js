import React, { Component } from "react";
import {
    View, Image, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, ScrollView, ActivityIndicator, Platform, PermissionsAndroid

} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import { setUserCurrentLocation } from "./../../Store/Action/action";
import Geolocation from 'react-native-geolocation-service';

class Allowaccesslocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allowLocation: false,
            loader: false
        };
    }

    async requestPermissions() {
        if (Platform.OS === 'ios') {
            Geolocation.requestAuthorization();
            Geolocation.setRNConfiguration({
                skipPermissionRequests: false,
                authorizationLevel: 'whenInUse',
            });
        }
        if (Platform.OS === 'android') {
            await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
        }
    }

    allowLocation = () => {
        this.requestPermissions()
        this.setState({
            loader: true
        })
        // Instead of navigator.geolocation, just use Geolocation.
        Geolocation.getCurrentPosition(
            (position) => {
                if (position) {
                    console.log(position, "USER_CURRENT_LOCATION_AllowAcces")
                    this.props.setUserCurrentLocation(position)
                    this.setState({
                        loader: false
                    })
                }
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message, "ERROR_ON_GETTING_YOUR_LOCATION_AllowAcces");
                this.setState({
                    loader: false,
                    err: error.message
                })
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, }
        );
    }

    render() {
        const { loader, err } = this.state
        return (
            <ScrollView
                contentContainerStyle={styles.contentContainer}
            >
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                {/* //body// */}
                <View style={{
                    // flex: 8,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white"
                }}>
                    <Image source={require('../../../assets/image.png')} resizeMode="contain"
                        style={{ left: 0, height: "40%", width: "40%", marginTop: 40 }}
                    />
                    <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}>
                        Find Barbershops near{"\n"}your location!
                  </Text>
                    <Text style={{ textAlign: "center", marginTop: 20 }}>
                        Please allow app access to your location to{"\n"}find Barbershops near you
                  </Text>
                    <View
                        style={{ width: "85%", height: 50, marginTop: 100, flexDirection: "column", }}
                    >
                        <TouchableOpacity style={{}}
                            onPress={() => this.allowLocation()}
                        >
                            <ImageBackground source={require('../../../assets/buttonBackground.png')} resizeMode="contain"
                                style={{ height: "100%", width: "100%", justifyContent: "center", }}
                            >
                                {
                                    (loader != true) ? (
                                        <Text style={{ textAlign: "center", fontSize: 15, margin: 12, color: "white" }}>Yes, allow</Text>
                                    ) : <ActivityIndicator color="white" />
                                }
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={{
                        width: "100%"
                    }}
                        onPress={() => Actions.AppContainer()}
                    >
                        <Text
                            onPress={() => Actions.AppContainer()}
                            style={{ textAlign: "center", fontSize: 15, marginTop: 12, }}
                        >
                            Don't allow
                        </Text>
                    </TouchableOpacity>

                    {
                        err ? <Text style={{ textAlign: "center", fontSize: 15, marginTop: 12, color: "red" }}>{err}</Text> : null
                    }

                </View>
            </ScrollView>
        );
    }
}

let mapStateToProps = state => {
    return {
    };
};
function mapDispatchToProps(dispatch) {
    return ({
        setUserCurrentLocation: (position, ) => {
            dispatch(setUserCurrentLocation(position));
        },
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Allowaccesslocation);

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingBottom: 0,
        backgroundColor: "white",
    },
});