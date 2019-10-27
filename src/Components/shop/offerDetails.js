import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, TextInput, ScrollView

} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';

//icons import
import AntDesign from 'react-native-vector-icons/AntDesign';

class OfferDetails extends Component {
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
                            width: "90%", marginTop: 15
                            // backgroundColor: "green"
                        }}>
                            <Text style={{ marginLeft: 10, color: "black", fontSize: 18, }}>Haircut & Hiarstyle</Text>
                            <Text style={{ marginLeft: 10, color: "#858585", fontSize: 18, }}>Luxary Package offer till Sep 22,2019</Text>

                        </View>

                        <View style={{
                            width: "90%", marginTop: 15, flexDirection: "row", justifyContent: "space-between"
                            // backgroundColor: "green"
                        }}>
                            <Text style={{ color: "#858585", fontSize: 16, }}>Ranya Barber shop is one of the most powerful brande in the hair & beauty care sector in Lahore,Pakistan. That has given hairstyling a new horizon</Text>
                        </View>

                        <View style={{
                            width: "90%", marginTop: 15, flexDirection: "row", justifyContent: "space-between"
                            // backgroundColor: "green"
                        }}>
                            <Text style={{ color: "#000000", fontSize: 16, }}>Services</Text>
                            <Text style={{ color: "#FD6958", fontSize: 16, fontWeight: "bold" }}>Total: $288.30</Text>
                        </View>

                        <View style={{
                            width: "90%", marginTop: 15, flex: 1, flexDirection: "row", justifyContent: "space-between",
                            // backgroundColor: "green"
                        }}>
                            <View style={{
                                flex: 1, flexDirection: "row",
                                // backgroundColor: "red"
                            }}>
                                <AntDesign name="check" style={{ marginLeft: "5%", color: '#FD6958',  fontSize: 20 }} />
                                <Text style={{ color: "#000000", fontSize: 16, marginLeft: 10 }}>Hair Styling</Text>
                            </View>

                            <View style={{
                                flex: 1, flexDirection: "row",
                                // backgroundColor: "grey"
                            }}>
                                <AntDesign name="check" style={{ marginLeft: "5%", color: '#FD6958',  fontSize: 20 }} />
                                <Text style={{ color: "#000000", fontSize: 16, marginLeft: 10 }}>Hair Color</Text>
                            </View>
                        </View>

                        <View style={{
                            width: "90%", marginTop: 15, flex: 1, flexDirection: "row", justifyContent: "space-between",
                            // backgroundColor: "green"
                        }}>
                            <View style={{
                                flex: 1, flexDirection: "row",
                                // backgroundColor: "red"
                            }}>
                                <AntDesign name="check" style={{ marginLeft: "5%", color: '#FD6958',  fontSize: 20 }} />
                                <Text style={{ color: "#000000", fontSize: 16, marginLeft: 10 }}>Spa</Text>
                            </View>

                            <View style={{
                                flex: 1, flexDirection: "row",
                                // backgroundColor: "grey"
                            }}>
                                <AntDesign name="check" style={{ marginLeft: "5%", color: '#FD6958',  fontSize: 20 }} />
                                <Text style={{ color: "#000000", fontSize: 16, marginLeft: 10 }}>Facial</Text>
                            </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(OfferDetails);