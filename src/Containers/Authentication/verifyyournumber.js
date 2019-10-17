import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, TextInput, ScrollView, Picker, Item

} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';


class Veryfiyournumber extends Component {
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
                    // flex: 8,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor:"white"
                }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>Verify your {"\n"} phone number</Text>
                    <Text style={{ marginTop: 40, textAlign: "center" }}>We have sent you an SMS with a code to{"\n"} number +84 905070017</Text>

                    {/* main container */}

                    <View
                        style={{ flex: 1, flexDirection: "row", width: "85%", height: 50, marginTop: 40, backgroundColor: "#E8E6E7", borderRadius: 50 }}
                    >
                        {/* picker container */}

                        <View style={{ borderRightColor: "grey", borderRightWidth: 0.5, flex: 2.2, flexDirection: "row" }}>
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                <Image source={require('../../../assets/Bitmap.png')} resizeMode="contain"
                                    style={{ height: "100%", width: "100%", marginLeft: 35 }}
                                />
                            </View>
                            <View style={{ flex: 4 }}>
                                <Picker
                                    selectedValue={this.state.language}
                                    style={{ marginLeft: 15, width: 95 }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ language: itemValue })
                                    }>
                                    <Picker.Item label="+84" value="+84" />
                                    <Picker.Item label="+84" value="+84" />
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
                                    // onChangeText={text => onChangeText(text)}
                                    value={this.state.email}
                                    placeholder={"Number"}
                                />
                            </View>
                        </View>

                        {/* cancele container */}

                        <View style={{ flex: 0.8, width: "100%", justifyContent: "center", alignItems: "center", }}>
                                <Image source={require('../../../assets/Shape.png')} resizeMode="contain"
                                    style={{ height: "40%", width: "40%", }}
                                />
                        </View>
                    </View>

                    <View
                        style={{ width: "85%", height: 50, marginTop: 60, }}
                    >
                        <TouchableOpacity
                            onPress={() => Actions.Phoneverification()}

                        >
                            <ImageBackground source={require('../../../assets/buttonBackground.png')} resizeMode="contain"
                                style={{ height: "100%", width: "100%", justifyContent: "center", }}
                            >
                                <Text style={{ textAlign: "center", fontSize: 15, margin: 12, color: "white" }}>Send OTP code</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(Veryfiyournumber);


const styles = StyleSheet.create({
    contentContainer: {
        // flex: 1,
        paddingBottom: 500,
        backgroundColor: "white",

    },
    input: { justifyContent: 'center', alignItems: 'center', width: '90%' },

});



