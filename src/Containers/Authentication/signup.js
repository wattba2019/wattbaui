import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, TextInput, ScrollView
} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            fullName: "Abdullah Shah",
            email: "abddullahshah@gmail.com",
            phoneNumber: "03452153709",
            password: "12345678",
        };
    }
    signup = () => {
        let { fullName, email, phoneNumber, password } = this.state;
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
                        phoneNumber,
                        password,
                        createdAt: Date.now(),
                    }
                    console.log(cloneSignUpData, "cloneSignUpData")
                    var options = {
                        method: 'POST',
                        url: `http://192.168.10.12:3002/signup`,
                        // url: `${this.props.mainUrl}signup`,
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
                            Actions.Signin()
                        }).catch((err) => {
                            console.log(err.response.data.message, "ERROR_ON_SIGN_UP")
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
        let { fullName, email, phoneNumber, password, loader } = this.state;
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
                    <View
                        style={{ width: "85%", marginTop: 20, borderColor: 'gray', backgroundColor: "#E8E6E7", borderRadius: 25, justifyContent: "center", alignItems: "center" }}
                    >
                        <TextInput
                            keyboardType={"numeric"}
                            style={{ height: 50, width: "90%", }}
                            onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                            value={phoneNumber}
                            placeholder={"Phone Number"}
                        />
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
                            // onPress={() => Actions.Veryfiyournumber()}
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
                        {/* // onPress={() => this.signup()} > */}
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