import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, TextInput, ScrollView
} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import CountryPicker from 'react-native-country-picker-modal';
//icons import
import AntDesign from 'react-native-vector-icons/AntDesign';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            // fullName: "Abdullah Shah",
            // email: "abddullahshah5@gmail.com",
            // phoneNumber: "+923452153709",
            // password: "12345678",
            cca2: 'GB',
            countryCode: "44",
            phoneNumber: "",
            // phoneNumber: "7480824585",
            // cca2: 'PK',
            // countryCode: "92",
            // phoneNumber: "3368990498",
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

    signup = () => {
        let { fullName, email, phoneNumber, password, countryCode, cca2 } = this.state;
        let phoneNumberWithCode = "+" + countryCode + phoneNumber
        if (fullName && email && phoneNumber && password) {
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(email) === false) {
                alert("invalid email type")
            }
            else {
                if (this.state.password.length < 8) {
                    alert("password should be 8 characters")
                }
                else {
                    this.setState({
                        loader: !this.state.loader
                    })
                    let cloneSignUpData = {
                        fullName,
                        email,
                        phoneNumber: phoneNumberWithCode,
                        password,
                        createdAt: Date.now(),
                    }
                    console.log(cloneSignUpData, "cloneSignUpData")
                    var options = {
                        method: 'POST',
                        url: `${this.props.bseUrl}/signup`,
                        headers:
                        {
                            'cache-control': 'no-cache',
                            "Allow-Cross-Origin": '*',
                        },
                        data: cloneSignUpData
                    };
                    axios(options)
                        .then((data) => {
                            console.log(data, "USER_CREATE_SUCCESSFULLY")
                            this.setState({
                                loader: !this.state.loader
                            })
                            // Actions.Signin({ email: email })
                            Actions.Veryfiyournumber({ email: email, countryCode: countryCode, phoneNumber: phoneNumber, cca2: cca2, phoneNumberWithCode: phoneNumberWithCode })
                        }).catch((err) => {
                            console.log(err.response.data, "ERROR_ON_SIGN_UP")
                            // console.log(err.response.data.message, "ERROR_ON_SIGN_UP")
                            alert(err.response.data.message)
                            this.setState({
                                loader: !this.state.loader
                            })
                        })
                }
            }
        }
        else {
            alert("All fields are required")
        }
    }

    render() {
        let { fullName, email, phoneNumber, password, countryCode, loader } = this.state;

        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                {/* //header// */}
                <View style={{ height: "10%", flexDirection: "row", width: "100%", }}>
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
                }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>Create an account</Text>
                    <View
                        style={{ width: "85%", marginTop: 40, borderColor: 'gray', backgroundColor: "#E8E6E7", borderRadius: 25, justifyContent: "center", alignItems: "center" }}
                    >
                        <TextInput
                            style={{ height: 50, width: "90%", }}
                            onChangeText={(fullName) => this.setState({ fullName })}
                            value={fullName}
                            placeholder={"Full Name"}
                        />
                    </View>
                    <View
                        style={{ width: "85%", marginTop: 20, borderColor: 'gray', backgroundColor: "#E8E6E7", borderRadius: 25, justifyContent: "center", alignItems: "center" }}
                    >
                        <TextInput
                            style={{ height: 50, width: "90%", }}
                            onChangeText={(email) => this.setState({ email })}
                            value={email}
                            placeholder={"Email"}
                        />
                    </View>

                    {/* <View
                        style={{ width: "85%", marginTop: 20, borderColor: 'gray', backgroundColor: "#E8E6E7", borderRadius: 25, justifyContent: "center", alignItems: "center" }}
                    >
                        <TextInput
                            keyboardType={"numeric"}
                            style={{ height: 50, width: "90%", }}
                            onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                            value={phoneNumber}
                            // placeholder={"Phone Number"}
                            placeholder={"Phone +447480824582"}
                        />
                    </View> */}

                    <View
                        style={{ flex: 1, flexDirection: "row", width: "85%", height: 50, marginTop: 25, backgroundColor: "#E8E6E7", borderRadius: 50 }}
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
                    <View
                        style={{ width: "85%", marginTop: 20, borderColor: 'gray', backgroundColor: "#E8E6E7", borderRadius: 25, justifyContent: "center", alignItems: "center" }}
                    >
                        <TextInput
                            secureTextEntry
                            style={{ height: 50, width: "90%", }}
                            onChangeText={(password) => this.setState({ password })}
                            value={password}
                            placeholder={"Password"}
                        />
                    </View>
                    <View style={{ width: "85%", height: 50, marginTop: 50, }}>
                        <TouchableOpacity
                            onPress={() => this.signup()} >
                            <ImageBackground source={require('../../../assets/buttonBackground.png')} resizeMode="contain"
                                style={{ height: "100%", width: "100%", justifyContent: "center", }}
                            >
                                {
                                    (loader != true) ? (
                                        <Text style={{ textAlign: "center", fontSize: 15, margin: 12, color: "white" }}>Sign Up</Text>
                                    ) : <ActivityIndicator style={{ color: "orange" }} />
                                }
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={{ color: "black", textAlign: "center", top: 20 }}>By clicking Sign Up you agree to the </Text>
                        <Text style={{ color: "black", textAlign: "center", top: 20, fontWeight: "bold" }}> Terms and Conditions </Text>
                    </View>
                    <TouchableOpacity
                        style={{ flexDirection: "row", marginTop: 50, }}
                        onPress={() => Actions.Signin()} >
                        <Text style={{ textAlign: "center", fontSize: 15, color: "#B7B7C0" }}>Already have an account? </Text>
                        <Text style={{ textAlign: "center", fontSize: 15, color: "#F28602" }}>Sign in</Text>
                    </TouchableOpacity>
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
export default connect(mapStateToProps, mapDispatchToProps)(Signup);


const styles = StyleSheet.create({
    contentContainer: {
        // flex: 1,
        paddingBottom: 150,
        backgroundColor: "white",

    },

});