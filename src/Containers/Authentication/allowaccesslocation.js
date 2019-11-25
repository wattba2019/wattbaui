import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, TextInput, ScrollView

} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import { setUserCurrentLocation } from "./../../Store/Action/action";
import Geolocation from 'react-native-geolocation-service';

class Allowaccesslocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allowLocation: false
        };
    }

    allowLocation = () => {
        // Instead of navigator.geolocation, just use Geolocation.
        Geolocation.getCurrentPosition(
            (position) => {
                if (position) {
                    console.log(position, "USER_CURRENT_LOCATION")
                    this.props.setUserCurrentLocation(position)
                }
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message, "66666");
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, }
        );
    }

    render() {

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
                                <Text style={{ textAlign: "center", fontSize: 15, margin: 12, color: "white" }}>Yes, allow</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={{}}
                            onPress={() => Actions.AppContainer()}
                        >
                            {/* <Text>TEST</Text> */}
                            <Text onPress={() => Actions.AppContainer()} style={{ textAlign: "center", fontSize: 15, marginTop: 12, }}>Don't allow</Text>
                        </TouchableOpacity>
                    </View>
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
        setUserCurrentLocation: (color, drawerBolean) => {
            dispatch(setUserCurrentLocation(color, drawerBolean));
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