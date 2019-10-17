import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, TextInput, ScrollView

} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';


class Phoneverification extends Component {
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

                <View style={{ height: "13%", flexDirection: "row", width: "100%", }}>
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
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>Phone Verification</Text>
                    <Text style={{}}>Enter your OTP code here</Text>

                    <View style={{
                        marginTop: 40,
                        flexDirection: "row"
                    }}>
                        <View
                            style={{ width: "15%", height: 62, borderColor: 'gray', backgroundColor: this.state.input1 ? "#FD6958" : "#E8E6E7", borderRadius: 80, justifyContent: "center", alignItems: "center", margin: "2%" }}
                        >
                            <TextInput
                                keyboardType={"numeric"}
                                style={{ top: -5, fontSize: 30, color: "white", justifyContent: "center", alignItems: "center", textAlign: "center" }}
                                // onChangeText={text => onChangeText(text)}
                                onChangeText={text => this.setState({
                                    input1: text
                                })}
                                value={this.state.input1}
                            // placeholder={"Full Name"}
                            />
                        </View>
                        <View
                            style={{ width: "15%", height: 62, borderColor: 'gray', backgroundColor: this.state.input2 ? "#FD6958" : "#E8E6E7", borderRadius: 80, justifyContent: "center", alignItems: "center", margin: "2%" }}
                        >
                            <TextInput
                                keyboardType={"numeric"}
                                style={{ top: -5, fontSize: 30, color: "white", justifyContent: "center", alignItems: "center", textAlign: "center" }}
                                // onChangeText={text => onChangeText(text)}
                                onChangeText={text => this.setState({
                                    input2: text
                                })}
                                value={this.state.input2}
                            // placeholder={"Full Name"}
                            />
                        </View>
                        <View
                            style={{ width: "15%", height: 62, borderColor: 'gray', backgroundColor: this.state.input3 ? "#FD6958" : "#E8E6E7", borderRadius: 80, justifyContent: "center", alignItems: "center", margin: "2%" }}
                        >
                            <TextInput
                                keyboardType={"numeric"}
                                style={{ top: -5, fontSize: 30, color: "white", justifyContent: "center", alignItems: "center", textAlign: "center" }}
                                // onChangeText={text => onChangeText(text)}
                                onChangeText={text => this.setState({
                                    input3: text
                                })}
                                value={this.state.input3}
                            // placeholder={"Full Name"}
                            />
                        </View>
                        <View
                            style={{ width: "15%", height: 62, borderColor: 'gray', backgroundColor: this.state.input4 ? "#FD6958" : "#E8E6E7", borderRadius: 80, justifyContent: "center", alignItems: "center", margin: "2%" }}
                        >
                            <TextInput
                                keyboardType={"numeric"}
                                style={{ top: -5, fontSize: 30, color: "white", justifyContent: "center", alignItems: "center", textAlign: "center" }}
                                // onChangeText={text => onChangeText(text)}
                                onChangeText={text => this.setState({
                                    input4: text
                                })}
                                value={this.state.input4}
                            // placeholder={"Full Name"}
                            />
                        </View>


                    </View>

                    <View style={{ marginTop: "25%" }}>
                        <Text style={{ textAlign: "center", fontSize: 15, color: "#B7B7C0" }}>Didn't receive a code?</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => alert("Under Development")}
                    >
                        <Text style={{ color: "#FD6958", textAlign: "center", }}>Resend a new code </Text>
                    </TouchableOpacity>

                    <View
                        style={{ width: "85%", height: 50, marginTop: 50, }}
                    >
                        <TouchableOpacity
                            onPress={() => alert("Under Development")}
                        >
                            <ImageBackground source={require('../../../assets/buttonBackground.png')} resizeMode="contain"
                                style={{ height: "100%", width: "100%", justifyContent: "center", }}
                            >
                                <Text style={{ textAlign: "center", fontSize: 15, margin: 12, color: "white" }}>Next</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(Phoneverification);


const styles = StyleSheet.create({
    contentContainer: {
        // flex: 1,
        paddingBottom: 500,
        backgroundColor: "white",

    },

});