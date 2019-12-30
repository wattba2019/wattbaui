import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, TextInput, ScrollView, Picker,

} from 'react-native';
//icons import
import AntDesign from 'react-native-vector-icons/AntDesign';

import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import firebase from 'react-native-firebase'
import CountryPicker from 'react-native-country-picker-modal';
import axios from 'axios';

class ActivateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            countryCode: "44",
            cca2: 'GB',
            phoneNumber: "",
            // countryCode: "92",
            // cca2: 'PK',
            // phoneNumber: "3368990499",
            // phoneNumber: "7480824582"
        };
    }

    selectCountry(country) {
        this.setState({
            cca2: country.cca2,
            countryName: country.name,
            countryCode: country.callingCode[0]
        })
    }

    openModal() {
        this.countryPicker.open();
    }

    clearNumber = () => {
        this.setState({
            phoneNumber: ""
        })
    }

    sendCode = () => {
        let { countryCode, phoneNumber, } = this.state
        let newNumber = "+" + countryCode + phoneNumber;
        console.log(newNumber, "PHONE_NUMBER")
        this.setState({
            loader: true
        })
        let cloneNumbers = {
            phoneNumber: newNumber
        }
        console.log(cloneNumbers, "cloneNumbers")
        var options = {
            method: 'POST',
            url: `${this.props.bseUrl}/signup/finduserwithphonenumber/`,
            headers:
            {
                'cache-control': 'no-cache',
                "Allow-Cross-Origin": '*',
            },
            data: cloneNumbers
        };
        axios(options)
            .then((data) => {
                console.log(data, "Verify_Number")
                firebase.auth().signInWithPhoneNumber(newNumber)
                    .then(confirmResult => {
                        this.setState({
                            loader: false
                        })
                        console.log(confirmResult, "CONFIRMATION_RESULT")
                        Actions.Phoneverification({ confirmResult: confirmResult, newNumber: newNumber })
                    })
                    .catch(error => {
                        this.setState({
                            loader: false
                        })
                        console.log(error)
                        alert(error)
                    });
            }).catch((err) => {
                console.log(err.response.data.message, "ERROR_ON_UPDATE_PHONE")
                // console.log(err, "ERROR_ON_UPDATE_PHONE")
                alert(err.response.data.message)
                this.setState({
                    loader: false
                })
            })
    }

    render() {
        let { countryCode, phoneNumber, loader } = this.state
        return (
            <ScrollView
                contentContainerStyle={styles.contentContainer}
            >
                <StatusBar backgroundColor="white" barStyle="dark-content" />

                <View style={{ flex: 1, width: "100%", backgroundColor: "red" }}>
                </View>

                {/* //header// */}

                <View style={{ height: "15%", flexDirection: "row", width: "100%", }}>
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
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>Verify your {"\n"} phone number</Text>
                    <Text style={{ marginTop: 40, textAlign: "center" }}>We have sent you an SMS with a code to{"\n"} number {"+" + countryCode + " " + phoneNumber} </Text>

                    {/* main container */}

                    <View
                        style={{ flex: 1, flexDirection: "row", width: "85%", height: 50, marginTop: 40, backgroundColor: "#E8E6E7", borderRadius: 50 }}
                    >
                        {/* picker container */}

                        <View style={{ borderRightColor: "grey", borderRightWidth: 0.5, flex: 2.2, flexDirection: "row", }}>
                            <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center", }}>
                                <View style={{ marginLeft: 20 }}>
                                    <CountryPicker
                                        filterable={true}
                                        closeable={true}
                                        filterPlaceholder={'Search'}
                                        autoFocusFilter={true}
                                        ref={(ref) => {
                                            this.countryPicker = ref;
                                        }}
                                        onSelect={value => this.selectCountry(value)}
                                        translation="eng"
                                        countryCode={this.state.cca2}
                                    >
                                    </CountryPicker>
                                </View>
                            </View>
                            <View style={{ flex: 3, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <View
                                    style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontWeight: "bold" }}>{"+" + countryCode}</Text>
                                    <AntDesign name="caretdown" style={{ marginLeft: "15%", color: '#909090', fontWeight: 'bold', fontSize: 15 }} />
                                </View>
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
        bseUrl: state.root.bseUrl,
    };
};
function mapDispatchToProps(dispatch) {
    return ({
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(ActivateAccount);

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 500,
        backgroundColor: "white",

    },
    input: { justifyContent: 'center', alignItems: 'center', width: '90%' },

});