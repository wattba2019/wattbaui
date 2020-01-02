import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, TextInput, ScrollView, BackHandler

} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { setUserCredentials } from "./../../Store/Action/action";

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            activateAccount: false,
            // email: "",
            // password: ""
            // email: "mynameisabdullahv1@gmail.com",
            // password: "12345678"
            email: "abddullahshah@gmail.com",
            password: "123456789"
        };
    }

    signin = () => {
        let { email, password, } = this.state;

        this.setState({
            loader: !this.state.loader
        })
        let cloneSignUpData = {
            email,
            password
        }
        var options = {
            method: 'POST',
            url: `${this.props.bseUrl}/signin`,
            headers:
            {
                'cache-control': 'no-cache',
                "Allow-Cross-Origin": '*',
            },
            data: cloneSignUpData
        };
        axios(options)
            .then((data) => {
                console.log(data.data, "USER_LOGIN_SUCCESSFULLY")
                this.setState({
                    loader: !this.state.loader
                })
                this.props.setUserCredentials(data.data)
            }).catch((err) => {
                console.log(err.response.data.message, "ERROR_ON_SIGN_IN")
                alert(err.response.data.message)
                this.setState({
                    loader: !this.state.loader,
                    activateAccount: true
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            activateAccount: false
                        })
                    }, 10000)

                })
            })
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', BackHandler.exitApp());
    }
    render() {
        let { email, password, loader, activateAccount } = this.state;
        return (
            <ImageBackground source={require('../../../assets/background.png')}
                style={{
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
                        backgroundColor: "white",
                        width: "100%",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
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
                                onChangeText={(email) => this.setState({ email })}
                                value={email}
                                placeholder={"Email"}
                            />
                        </View>

                        <View
                            style={{ width: "85%", marginTop: 10, borderColor: 'gray', backgroundColor: "#E8E6E7", borderRadius: 25, justifyContent: "center", alignItems: "center" }}
                        >
                            <TextInput
                                secureTextEntry
                                style={{ height: 50, width: "90%", }}
                                onChangeText={(password) => this.setState({ password })}
                                value={password}
                                placeholder={"Password"}
                            />
                        </View>

                        <View
                            style={{ width: "85%", height: 50, marginTop: 30, }}
                        >
                            <TouchableOpacity
                                onPress={() => this.signin()}
                            >
                                <ImageBackground source={require('../../../assets/buttonBackground.png')} resizeMode="contain"
                                    style={{ height: "100%", width: "100%", justifyContent: "center", }}
                                >
                                    {
                                        (loader != true) ? (
                                            <Text style={{ textAlign: "center", fontSize: 15, margin: 12, color: "white" }}>Login</Text>
                                        ) : <ActivityIndicator style={{ color: "orange" }} />
                                    }
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>

                        {
                            activateAccount ?
                                <TouchableOpacity
                                    onPress={() => Actions.ActivateAccount()}
                                >
                                    <Text style={{ textAlign: "center", fontSize: 15, marginTop: 20, color: "red" }}>Activate your account?</Text>
                                </TouchableOpacity> : null

                        }

                        <TouchableOpacity
                            onPress={() => Actions.Forgotyourpassword()}
                        >
                            <Text style={{ textAlign: "center", fontSize: 15, marginTop: activateAccount ? 5 : 20, color: "black" }}>Forgot your password?</Text>
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
        bseUrl: state.root.bseUrl,
    };
};
function mapDispatchToProps(dispatch) {
    return ({
        setUserCredentials: (user) => {
            dispatch(setUserCredentials(user));
        },
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin);