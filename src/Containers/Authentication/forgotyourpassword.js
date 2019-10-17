import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, TextInput, ScrollView

} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import UpdatePassword from '../../Components/updatePassword';


class Forgotyourpassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            sendPassword: false
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
                {
                    (this.state.sendPassword === true) ? (
                        <UpdatePassword />
                    ) : null
                }
                <View
                    style={{
                        flex: 1.4,
                        width: "100%",
                    }}
                >
                    <ImageBackground source={require('../../../assets/halfmask.png')} resizeMode="stretch"
                        style={{ height: "100%", width: "100%", justifyContent: "center", }}
                    >
                        <View style={{ justifyContent: "center", alignItems: "center", }}>
                            <Image source={require('../../../assets/lock.png')} resizeMode="contain"
                                style={{ height: "70%", width: "70%", }}
                            />
                        </View>

                        <View style={{
                            justifyContent: "center",
                            alignItems: "center",
                            bottom: "-14%"
                        }}>
                            <View style={{
                                borderStyle: 'solid',
                                borderLeftWidth:20,
                                borderRightWidth:20,
                                borderBottomWidth: 25,
                                borderLeftColor: 'transparent',
                                borderRightColor: 'transparent',
                                borderBottomColor: 'white',
                            }}>
                            </View>
                        </View>


                    </ImageBackground>

                </View>

                <ScrollView
                    style={{
                        // flex: 2,
                        height: "30%",
                        backgroundColor: "white",
                        width: "100%",
                        // borderTopLeftRadius: 20,
                        // borderTopRightRadius: 20,
                        // justifyContent: "center",
                        // alignItems: "center",

                    }}
                >

                    {/* <Image source={require('../../../assets/triangle.png')} resizeMode="contain"
                        style={{ height: "20%", width: "30%", top: "-10%" }}
                    /> */}
                    <View style={{ justifyContent: "center", alignItems: "center", width: "100%", marginTop: "4%" }}>
                        <Text style={{ fontSize: 30 }}>Forgot password</Text>
                        <Text style={{ color: "grey", textAlign: "center" }}>we will need just your email to send you {"\n"} password reset instruction</Text>

                        <View
                            style={{ width: "85%", marginTop: 40, borderColor: 'gray', backgroundColor: "#E8E6E7", borderRadius: 25, justifyContent: "center", alignItems: "center" }}
                        >
                            <TextInput
                                style={{ height: 50, width: "90%", }}
                                // onChangeText={text => onChangeText(text)}
                                value={this.state.email}
                                placeholder={"Email"}
                            />
                        </View>


                        <View
                            style={{ width: "85%", height: 50, marginTop: 30, }}
                        >
                            <TouchableOpacity
                                onPress={() => this.setState({
                                    sendPassword: !this.state.sendPassword
                                })}
                            >
                                <ImageBackground source={require('../../../assets/buttonBackground.png')} resizeMode="contain"
                                    style={{ height: "100%", width: "100%", justifyContent: "center", }}
                                >
                                    <Text style={{ textAlign: "center", fontSize: 15, margin: 12, color: "white" }}>Reset Password</Text>
                                </ImageBackground>
                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity
                            onPress={() => Actions.Signin()}
                        >
                            <Text style={{ textAlign: "center", fontSize: 15, marginTop: 20, color: "black" }}>back to login</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(Forgotyourpassword);