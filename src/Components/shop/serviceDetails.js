import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, TextInput, ScrollView

} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';


class ServiceDetaild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    render() {
        return (
            <View style={{
                // backgroundColor: '#fd902a',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                width: "100%"
            }}>
                {/* <StatusBar backgroundColor="#F86078" barStyle="dark-content" /> */}
                <StatusBar backgroundColor="white" barStyle="dark-content" />

                <View
                    style={{
                        flex: 1.4,
                        width: "100%",
                        // backgroundColor: "red"
                    }}
                >
                    <Image source={require('../../../assets/servicedetails.png')} resizeMode="cover"
                        style={{ height: "110%", width: "100%", }}
                    />
                    <TouchableOpacity onPress={() => Actions.pop()}
                        style={{ width: 25, position: 'absolute', top: -30, left: 30, right: 0, bottom: 130, justifyContent: "center" }}>
                        <Ionicons name="ios-arrow-back" style={{ color: "#fff", fontWeight: 'bold', fontSize: 28 }} />
                    </TouchableOpacity>
                </View>


                <ScrollView
                    style={{
                        height: "30%",
                        // flex: 1,
                        backgroundColor: "white",
                        width: "100%",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        // justifyContent: "center",
                        // alignItems: "center",

                    }}
                >
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}>


                        <View style={{
                            width: "90%", flexDirection: "row", marginTop: 15
                            // backgroundColor: "green"
                        }}>
                            <Text style={{
                                // color: "#858585",
                                color: "black",
                                fontSize: 18,
                            }}>Hair Styles</Text>
                        </View>

                        <View style={{
                            width: "90%", marginTop: 15, flexDirection: "row", justifyContent: "space-between"
                            // backgroundColor: "green"
                        }}>
                            <Text style={{ color: "#858585", fontSize: 16, }}>Style Name</Text>
                            <Text style={{ color: "#FD6958", fontSize: 16, fontWeight: "bold" }}>$20</Text>
                        </View>
                        <View style={{
                            width: "90%", marginTop: 15, flexDirection: "row", justifyContent: "space-between"
                            // backgroundColor: "green"
                        }}>
                            <Text style={{ color: "#858585", fontSize: 16, }}>Style Name</Text>
                            <Text style={{ color: "#FD6958", fontSize: 16, fontWeight: "bold" }}>$20</Text>
                        </View>
                        <View style={{
                            width: "90%", marginTop: 15, flexDirection: "row", justifyContent: "space-between"
                            // backgroundColor: "green"
                        }}>
                            <Text style={{ color: "#858585", fontSize: 16, }}>Style Name</Text>
                            <Text style={{ color: "#FD6958", fontSize: 16, fontWeight: "bold" }}>$20</Text>
                        </View>
                        <View style={{
                            width: "90%", marginTop: 15, flexDirection: "row", justifyContent: "space-between"
                            // backgroundColor: "green"
                        }}>
                            <Text style={{ color: "#858585", fontSize: 16, }}>Style Name</Text>
                            <Text style={{ color: "#FD6958", fontSize: 16, fontWeight: "bold" }}>$20</Text>
                        </View>
                        <View style={{
                            width: "90%", marginTop: 15, flexDirection: "row", justifyContent: "space-between"
                            // backgroundColor: "green"
                        }}>
                            <Text style={{ color: "#858585", fontSize: 16, }}>Style Name</Text>
                            <Text style={{ color: "#FD6958", fontSize: 16, fontWeight: "bold" }}>$20</Text>
                        </View>
                        <View style={{
                            width: "90%", marginTop: 15, flexDirection: "row", justifyContent: "space-between"
                            // backgroundColor: "green"
                        }}>
                            <Text style={{ color: "#858585", fontSize: 16, }}>Style Name</Text>
                            <Text style={{ color: "#FD6958", fontSize: 16, fontWeight: "bold" }}>$20</Text>
                        </View>
                        <View style={{
                            width: "90%", marginTop: 15, flexDirection: "row", justifyContent: "space-between"
                            // backgroundColor: "green"
                        }}>
                            <Text style={{ color: "#858585", fontSize: 16, }}>Style Name</Text>
                            <Text style={{ color: "#FD6958", fontSize: 16, fontWeight: "bold" }}>$20</Text>
                        </View>

                        <View
                            style={{ width: "85%", height: 50, marginTop: 30, }}
                        >
                            <TouchableOpacity
                            // onPress={() => Actions.Allowaccesslocation()}
                            >
                                <ImageBackground source={require('../../../assets/buttonBackground.png')} resizeMode="contain"
                                    style={{ height: "100%", width: "100%", justifyContent: "center", }}
                                >
                                    <Text style={{ textAlign: "center", fontSize: 15, margin: 12, color: "white" }}>Book</Text>
                                </ImageBackground>
                            </TouchableOpacity>

                        </View>
                    </View>


                </ScrollView>
            </View>


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
export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetaild);