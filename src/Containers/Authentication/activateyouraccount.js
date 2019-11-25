import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, TextInput, ScrollView, Picker,

} from 'react-native';

import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import firebase from 'react-native-firebase'

class ActivateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            email: "",
            countryCode: "+92",
            phoneNumber: ""
            // phoneNumber: "3452153709"
            // phoneNumber: "3368990497"
            // phoneNumber: "3472076096"
        };
    }

    clearNumber = () => {
        this.setState({
            phoneNumber: ""
        })
    }

    sendCode = () => {
        let { countryCode, phoneNumber, email } = this.state
        console.log(countryCode + phoneNumber, "PHONE_NUMBER")
        if (email) {
            this.setState({
                loader: true
            })
            firebase.auth().signInWithPhoneNumber(countryCode + phoneNumber)
                .then(confirmResult => {
                    this.setState({
                        loader: false
                    })
                    console.log(confirmResult, "CONFIRMATION_RESULT")
                    Actions.Phoneverification({ confirmResult: confirmResult, email: email })
                })
                .catch(error => {
                    this.setState({
                        loader: false
                    })
                    console.log(error)
                    alert(error)
                });
        }
        else {
            alert("Please type your valid email")
        }

    }

    render() {
        let { countryCode, phoneNumber, loader, email } = this.state
        return (
            <ScrollView
                contentContainerStyle={styles.contentContainer}
            >
                <StatusBar backgroundColor="white" barStyle="dark-content" />

                <View style={{ flex: 1, width: "100%", backgroundColor: "red" }}>
                </View>

                {/* //header// */}

                <View style={{ height: "12%", flexDirection: "row", width: "100%", }}>
                    <TouchableOpacity
                        style={{ flex: 1.5, }}
                        onPress={() => Actions.pop()}

                    >
                        <View style={{ flex: 2, justifyContent: "center", alignItems: "center", }}>
                            <Image source={require('../../../assets/ArrowLeft.png')}
                                style={{ height: "40%", width: "40%", }}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={{ flex: 8, }}>

                    </View>

                </View>

                {/* //body// */}

                <View style={{
                    // flex: 8,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor:"white"
                }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>Verify your {"\n"} phone number</Text>
                    <Text style={{ marginTop: 40, textAlign: "center" }}>We have sent you an SMS with a code to{"\n"} number {countryCode + " " + phoneNumber} </Text>

                    {/* main container */}
                    <View
                        style={{ width: "85%", marginTop: 40, borderColor: 'gray', backgroundColor: "#E8E6E7", borderRadius: 25, justifyContent: "center", alignItems: "center" }}
                    >
                        <TextInput
                            style={{ height: 50, width: "90%", }}
                            onChangeText={(email) => this.setState({ email })}
                            value={email}
                            placeholder={"Email"}
                        />
                    </View>
                    <View
                        style={{ flex: 1, flexDirection: "row", width: "85%", height: 50, marginTop: 40, backgroundColor: "#E8E6E7", borderRadius: 50 }}
                    >

                        {/* picker container */}

                        <View style={{ borderRightColor: "grey", borderRightWidth: 0.5, flex: 2.2, flexDirection: "row" }}>
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                <Image source={require('../../../assets/pak.png')} resizeMode="contain"
                                    style={{ height: "100%", width: "100%", marginLeft: 35 }}
                                />
                            </View>
                            <View style={{ flex: 4 }}>
                                <Picker
                                    selectedValue={this.state.countryCode}
                                    style={{ marginLeft: 15, width: 95 }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ countryCode: itemValue })
                                    }>
                                    <Picker.Item label="+92" value="+92" />
                                    <Picker.Item label="+92" value="+92" />
                                </Picker>
                            </View>
                        </View>

                        {/* input phone container */}

                        <View style={{ backgroundColor: "yellow", flex: 3, }}>
                            <View
                                style={{ borderColor: 'gray', backgroundColor: "#E8E6E7", justifyContent: "center", alignItems: "center" }}
                            >
                                <TextInput
                                    keyboardType={"numeric"}
                                    style={{ height: 50, width: "90%", }}
                                    onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                                    value={phoneNumber}
                                    placeholder={"Number"}
                                />
                            </View>
                        </View>

                        {/* cancele container */}

                        <TouchableOpacity
                            onPress={() => {
                                this.clearNumber()
                            }}
                            style={{ flex: 0.8, width: "100%", justifyContent: "center", alignItems: "center", }}>
                            <Image source={require('../../../assets/Shape.png')} resizeMode="contain"
                                style={{ height: "40%", width: "40%", }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>

                    </View>

                    <View
                        style={{ width: "85%", height: 50, marginTop: 60, }}
                    >
                        <TouchableOpacity
                            onPress={() => this.sendCode()}
                        >
                            <ImageBackground source={require('../../../assets/buttonBackground.png')} resizeMode="contain"
                                style={{ height: "100%", width: "100%", justifyContent: "center", }}
                            >
                                {
                                    (loader != true) ? (
                                        <Text style={{ textAlign: "center", fontSize: 15, margin: 12, color: "white" }}>Send OTP code</Text>
                                    ) : <ActivityIndicator style={{ color: "orange" }} />
                                }
                            </ImageBackground>
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
export default connect(mapStateToProps, mapDispatchToProps)(ActivateAccount);


const styles = StyleSheet.create({
    contentContainer: {
        // flex: 1,
        paddingBottom: 500,
        backgroundColor: "white",

    },
    input: { justifyContent: 'center', alignItems: 'center', width: '90%' },

});


