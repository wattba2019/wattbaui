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
import PhoneInput from 'react-native-phone-input'
import CountryPicker from 'react-native-country-picker-modal';

class Veryfiyournumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            countryCode: "92",
            phoneNumber: "",
            cca2: 'PK',
            // phoneNumber: "3452153709"
            // phoneNumber: "3368990497"
            // phoneNumber: "3472076096"
        };
    }

    selectCountry(country) {
        console.log(country, "country")
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
        console.log(countryCode + phoneNumber, "PHONE_NUMBER")
        this.setState({
            loader: true
        })
        firebase.auth().signInWithPhoneNumber("+" + countryCode + phoneNumber)
            .then(confirmResult => {
                this.setState({
                    loader: false
                })
                console.log(confirmResult, "CONFIRMATION_RESULT")
                Actions.Phoneverification({ confirmResult: confirmResult, email: this.props.email })
            })
            .catch(error => {
                this.setState({
                    loader: false
                })
                console.log(error)
                alert(error)
            });
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
                        style={{ flex: 1, flexDirection: "row", width: "85%", height: 50, marginTop: 40, backgroundColor: "#E8E6E7", borderRadius: 50 }}
                    >
                        {/* picker container */}

                        <View style={{ borderRightColor: "grey", borderRightWidth: 0.5, flex: 2.2, flexDirection: "row", }}>
                            <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center", }}>
                                {/* <Image source={require('../../../assets/pak.png')} resizeMode="contain"
                                    style={{ height: "80%", width: "80%", marginLeft: 20 }}
                                /> */}
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
                                    // onPress={() => this.openModal()}
                                    style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontWeight: "bold" }}>{"+" + countryCode}</Text>
                                    <AntDesign name="caretdown" style={{ marginLeft: "15%", color: '#909090', fontWeight: 'bold', fontSize: 15 }} />
                                </View>

                                {/* <Picker
                                    selectedValue={this.state.countryCode}
                                    style={{ marginLeft: 15, width: 95 }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ countryCode: itemValue })
                                    }>
                                    <Picker.Item label="+92" value="+92" />
                                    <Picker.Item label="+92" value="+92" />
                                </Picker> */}
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
export default connect(mapStateToProps, mapDispatchToProps)(Veryfiyournumber);


const styles = StyleSheet.create({
    contentContainer: {
        // flex: 1,
        paddingBottom: 500,
        backgroundColor: "white",

    },
    input: { justifyContent: 'center', alignItems: 'center', width: '90%' },

});


// import React, { Component } from 'react';
// import { StyleSheet, View, Text } from 'react-native';

// import PhoneInput from 'react-native-phone-input';
// import CountryPicker from 'react-native-country-picker-modal';

// class Veryfiyournumber extends Component {
//     constructor() {
//         super();

//         // this.onPressFlag = this.onPressFlag.bind(this);
//         // this.selectCountry = this.selectCountry.bind(this);
//         this.state = {
//             // countryName: 'Kenya',
//             // phoneCode: '254',
//             cca2: 'PK',
//         };
//     }

//     componentDidMount() {
//         // this.setState({
//         //     pickerData: this.phone.getPickerData(),
//         // });
//     }

//     onPressFlag() {
//         console.log(this.countryPicker)
//         // this.countryPicker.openModal();
//     }

//     selectCountry(country) {
//         console.log(country, "country")

//         this.setState({
//             cca2: country.cca2,
//             countryName: country.name,
//             phoneCode: country.callingCode[0]
//         })
//         // this.phone.selectCountry(country.cca2.toLowerCase());
//         // this.setState({ cca2: country.cca2 });
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 {/* <PhoneInput disabled={true}
//                     // ref={(ref) => {
//                     //     this.phone = ref;
//                     // }}
//                     // onSelect={value => this.selectCountry(value)}
//                     // translation="eng"
//                     // cca2={this.state.cca2}
//                     ref={(ref) => {
//                         this.phone = ref;
//                     }}
//                 // onPressFlag={() => this.onPressFlag()}
//                 /> */}

//                 <CountryPicker
//                     filterable={true}
//                     closeable={true}
//                     filterPlaceholder={'Search'}
//                     autoFocusFilter={true}
//                     ref={(ref) => {
//                         this.countryPicker = ref;
//                     }}
//                     onSelect={value => this.selectCountry(value)}
//                     translation="eng"
//                     countryCode={this.state.cca2}
//                 >
//                     <View style={{}}>
//                         <Text>
//                             {`${this.state.countryName}(+${this.state.phoneCode})`}
//                         </Text>
//                     </View>
//                 </CountryPicker>
//             </View>
//         );
//     }
// }

// let styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         padding: 20,
//         paddingTop: 60,
//     },
// });

// module.exports = Veryfiyournumber;