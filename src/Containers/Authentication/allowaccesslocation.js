import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, TextInput, ScrollView

} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';


class Allowaccesslocation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.contentContainer}
            // style={{
            //     flex: 1,
            //     // justifyContent: "center",
            //     // alignItems: "center",
            //     width: "100%",
            //     backgroundColor: "white"
            // }}
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
                        style={{ left: 0, height: "40%", width: "40%",marginTop:40  }}
                    />

                    <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}>
                        Find Barbershops near{"\n"}your location!
                  </Text>
                    <Text style={{ textAlign: "center", marginTop: 20 }}>
                        Please allow app access to your location to{"\n"}find Barbershops near you
                  </Text>

                    <View
                        style={{ width: "85%", height: 50, marginTop: 100, }}
                    >
                        <TouchableOpacity>
                            <ImageBackground source={require('../../../assets/buttonBackground.png')} resizeMode="contain"
                                style={{ height: "100%", width: "100%", justifyContent: "center", }}
                            >
                                <Text style={{ textAlign: "center", fontSize: 15, margin: 12, color: "white" }}>Yes, allow</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity>

                            <Text style={{ textAlign: "center", fontSize: 15, marginTop: 12, }}>Don't allow</Text>

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