import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, TextInput, ScrollView

} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';


class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    render() {
        return (
            <ImageBackground source={require('../../../assets/background.png')}
                style={{
                    // backgroundColor: '#fd902a',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: "100%"
                }}>
                <StatusBar backgroundColor="#F86078" barStyle="dark-content" />

                <View
                    style={{
                        flex: 1.4,
                        width: "100%"
                    }}
                >
                    <ImageBackground source={require('../../../assets/halfmask.png')} resizeMode="stretch"
                        style={{ height: "100%", width: "100%", justifyContent: "center", }}
                    >

                        <View style={{ justifyContent: "center", alignItems: "center", }}>
                            <Image source={require('../../../assets/logo.png')} resizeMode="contain"
                                style={{ height: "60%", width: "60%", }}
                            />
                        </View>
                    </ImageBackground>

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


                        <Text style={{ fontSize: 30, marginTop: 10 }}>Welcome back</Text>
                        <Text style={{ color: "grey" }}>Login to your account</Text>

                        <View
                            style={{ width: "85%", marginTop: 10, borderColor: 'gray', backgroundColor: "#E8E6E7", borderRadius: 25, justifyContent: "center", alignItems: "center" }}
                        >
                            <TextInput
                                style={{ height: 50, width: "90%", }}
                                // onChangeText={text => onChangeText(text)}
                                value={this.state.email}
                                placeholder={"Email"}
                            />
                        </View>

                        <View
                            style={{ width: "85%", marginTop: 10, borderColor: 'gray', backgroundColor: "#E8E6E7", borderRadius: 25, justifyContent: "center", alignItems: "center" }}
                        >
                            <TextInput
                                style={{ height: 50, width: "90%", }}
                                // onChangeText={text => onChangeText(text)}
                                value={this.state.email}
                                placeholder={"Password"}
                            />
                        </View>

                        <View
                            style={{ width: "85%", height: 50, marginTop: 30, }}
                        >
                            <TouchableOpacity
                                onPress={() => Actions.Allowaccesslocation()}
                            >
                                <ImageBackground source={require('../../../assets/buttonBackground.png')} resizeMode="contain"
                                    style={{ height: "100%", width: "100%", justifyContent: "center", }}
                                >
                                    <Text style={{ textAlign: "center", fontSize: 15, margin: 12, color: "white" }}>Login</Text>
                                </ImageBackground>
                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity
                            onPress={() => Actions.Forgotyourpassword()}
                        >
                            <Text style={{ textAlign: "center", fontSize: 15, marginTop: 20, color: "black" }}>Forgot your password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ flexDirection: "row", marginTop: 10, }}
                            onPress={() => Actions.Signup()}
                        >
                            <Text style={{ textAlign: "center", fontSize: 15, color: "#B7B7C0" }}>Don't have an account? </Text>
                            <Text style={{ textAlign: "center", fontSize: 15, color: "#F28602" }}>Sign up</Text>
                        </TouchableOpacity>


                    </View>


                </ScrollView>
            </ImageBackground>


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
export default connect(mapStateToProps, mapDispatchToProps)(Signin);