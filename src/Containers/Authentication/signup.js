import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, TextInput, ScrollView

} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';


class Signup extends Component {
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

                <View style={{ flex: 1, width: "100%", backgroundColor: "red" }}>

                </View>

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
                            // onChangeText={text => onChangeText(text)}
                            value={this.state.fullname}
                            placeholder={"Full Name"}
                        />
                    </View>
                    <View
                        style={{ width: "85%", marginTop: 20, borderColor: 'gray', backgroundColor: "#E8E6E7", borderRadius: 25, justifyContent: "center", alignItems: "center" }}
                    >
                        <TextInput
                            style={{ height: 50, width: "90%", }}
                            // onChangeText={text => onChangeText(text)}
                            value={this.state.email}
                            placeholder={"Email"}
                        />
                    </View>
                    <View
                        style={{ width: "85%", marginTop: 20, borderColor: 'gray', backgroundColor: "#E8E6E7", borderRadius: 25, justifyContent: "center", alignItems: "center" }}
                    >
                        <TextInput
                            style={{ height: 50, width: "90%", }}
                            // onChangeText={text => onChangeText(text)}
                            value={this.state.email}
                            placeholder={"Phone Number"}
                        />
                    </View>
                    <View
                        style={{ width: "85%", marginTop: 20, borderColor: 'gray', backgroundColor: "#E8E6E7", borderRadius: 25, justifyContent: "center", alignItems: "center" }}
                    >
                        <TextInput
                            style={{ height: 50, width: "90%", }}
                            // onChangeText={text => onChangeText(text)}
                            value={this.state.email}
                            placeholder={"Password"}
                        />
                    </View>

                    <View
                        style={{ width: "85%", height: 50, marginTop: 50, }}
                    >
                        <TouchableOpacity
                            onPress={() => Actions.Veryfiyournumber()}
                        >
                            <ImageBackground source={require('../../../assets/buttonBackground.png')} resizeMode="contain"
                                style={{ height: "100%", width: "100%", justifyContent: "center", }}
                            >
                                <Text style={{ textAlign: "center", fontSize: 15, margin: 12, color: "white" }}>Sign Up</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                    </View>

                    <View>
                        <Text style={{ color: "black", textAlign: "center", top: 20 }}>By clicking Sign Up you agree to the </Text>
                        <Text style={{ color: "black", textAlign: "center", top: 20, fontWeight: "bold" }}> Terms and Conditions </Text>
                    </View>
                    <TouchableOpacity
                        style={{ flexDirection: "row", marginTop: 50, }}
                        onPress={() => Actions.Signin()}
                    >
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