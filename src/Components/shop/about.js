import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, StatusBar,
    ScrollView, Picker, Image, SafeAreaView, ActivityIndicator,
    images, Dimensions, ImageBackground
} from 'react-native';
import { connect } from "react-redux";
import { Icon, Tabs, Tab, TabHeading } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Zocial from 'react-native-vector-icons/Zocial';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImageSlider from 'react-native-image-slider';

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { activeColor } = this.state
        return (
            <View>
                <View style={{ paddingHorizontal: 25, paddingVertical: 10 }} >
                    <Text style={{ fontWeight: "bold" }}>About</Text>
                    <Text style={{ color: "grey" }}>Ranya Barber shop is one of the most powerful brande in the hair & beauty care sector in mordern, london. That has given hairstyling in new horizon</Text>
                    <Text style={{ color: "#FD6958" }}>read more</Text>

                    <Text style={{ marginTop: 20, fontWeight: "bold" }}>Opening Hours</Text>

                    <View style={{ flexDirection: "row", flex: 1 }}>
                        <View style={{ flex: 0.5 }}>
                            <Text style={{ color: "green" }}>{'\u2B24'} <Text style={{ color: "black" }}> Monday -Friday</Text></Text>
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Text style={{}}>8:30AM - 9:00PM</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", flex: 1, marginTop: 5 }}>
                        <View style={{ flex: 0.5 }}>
                            <Text style={{ color: "green" }}>{'\u2B24'} <Text style={{ color: "black" }}> Saturday -Sunday</Text></Text>
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Text style={{}}>9:00AM - 1:00PM</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 6, marginTop: 20, }}>
                            <Text style={{ fontWeight: "bold" }}>Address</Text>
                            <Text style={{ color: "grey" }}>47B R-Block Morden, London, Greater London, United Kingdom</Text>
                            <TouchableOpacity style={{ flexDirection: "row", marginTop: 5 }}>

                                <Entypo name="direction" style={{ color: "#FD6958", fontWeight: 'bold', fontSize: 20 }} />
                                <Text style={{ color: "#FD6958" }}> Get directions</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 4, marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                            <Image
                                resizeMode="contain"
                                style={{ width: 100, height: 100 }}
                                source={require("../../../assets/Rectangle2938.png")}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row",justifyContent:"space-between" }}>
                        <TouchableOpacity>
                            <Text style={{ marginTop: 20, fontWeight: "bold" }}>Photos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ marginTop: 20, fontWeight: "bold" }}>View all</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{}}>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                        <TouchableOpacity style={{
                            height: 100,
                            width: 80,
                            justifyContent: "center",
                            alignItems: "center",
                            // backgroundColor: "red",
                        }}
                        // onPress={() => this.props.navigate.navigate('Product')}
                        >
                            <View style={{
                                height: 75,
                                width: 75,
                                // borderRadius: 10,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "white",
                                // borderColor: "#FD6958",
                                // borderWidth: 1.80

                            }}>
                                <Image source={require('../../../assets/tinh-khuong-RiPBG93bKBI-unsplash.png')} resizeMode="contain"
                                    style={{
                                        width: "90%", height: "90%",

                                    }}
                                />
                            </View>
                            {/* <Text style={{ marginTop: 5, fontSize: 14, color: "#8E8E93", textAlign: "right", }}>Hairstyle Name</Text> */}
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            height: 100,
                            width: 80,
                            justifyContent: "center",
                            alignItems: "center",
                            // backgroundColor: "red",
                        }}
                        // onPress={() => this.props.navigate.navigate('Product')}
                        >
                            <View style={{
                                height: 75,
                                width: 75,
                                borderRadius: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "white",

                            }}>
                                <Image source={require('../../../assets/tinh-khuong-RiPBG-1.png')} resizeMode="contain"
                                    style={{ width: "90%", height: "90%", }}
                                />
                            </View>
                            {/* <Text style={{ marginTop: 5, fontSize: 14, color: "#8E8E93", textAlign: "right", }}>Hairstyle Name</Text> */}
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            height: 100,
                            width: 80,
                            justifyContent: "center",
                            alignItems: "center",
                            // backgroundColor: "red",
                        }}
                        // onPress={() => this.props.navigate.navigate('Product')}
                        >
                            <View style={{
                                height: 75,
                                width: 75,
                                borderRadius: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "white",
                                // borderColor: "#FD6958",
                                // borderWidth: 1.80

                            }}>
                                <Image source={require('../../../assets/download.png')} resizeMode="contain"
                                    style={{ width: "90%", height: "90%", }}
                                />
                            </View>
                            {/* <Text style={{ marginTop: 5, fontSize: 14, color: "#8E8E93", textAlign: "right", }}>Hairstyle Name</Text> */}
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            height: 100,
                            width: 80,
                            justifyContent: "center",
                            alignItems: "center",
                            // backgroundColor: "red",
                        }}
                        // onPress={() => this.props.navigate.navigate('Product')}
                        >
                            <View style={{
                                height: 75,
                                width: 75,
                                borderRadius: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "white",

                            }}>
                                <Image source={require('../../../assets/tinh-khuong-RiPBG-2.png')} resizeMode="contain"
                                    style={{ width: "90%", height: "90%", }}
                                />
                            </View>
                            {/* <Text style={{ marginTop: 5, fontSize: 14, color: "#8E8E93", textAlign: "right", }}>Hairstyle Name</Text> */}
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            height: 100,
                            width: 80,
                            justifyContent: "center",
                            alignItems: "center",
                            // backgroundColor: "red",
                        }}
                        // onPress={() => this.props.navigate.navigate('Product')}
                        >
                            <View style={{
                                height: 75,
                                width: 75,
                                borderRadius: 50,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "white",

                            }}>
                                <Image source={require('../../../assets/tinh-khuong-RiPBG-3.png')} resizeMode="contain"
                                    style={{ width: "90%", height: "90%", }}
                                />
                            </View>
                            {/* <Text style={{ marginTop: 5, fontSize: 14, color: "#8E8E93", textAlign: "right", }}>Hairstyle Name</Text> */}
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <View style={{ width: "85%", height: 50, marginTop: 0, marginHorizontal: "7%" }}>
                    <TouchableOpacity
                    // onPress={() => Actions.Allowaccesslocation()}
                    >
                        <ImageBackground source={require('../../../assets/buttonBackground.png')} resizeMode="contain"
                            style={{ height: "100%", width: "100%", justifyContent: "center", }}
                        >
                            <Text style={{ textAlign: "center", fontSize: 15, margin: 12, color: "white" }}>Book</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({

});

let mapStateToProps = state => {
    return {
        // str: state.root.str,
        // userDetails: state.root.userDetails,
    };
};
function mapDispatchToProps(dispatch) {
    return ({
        // languageSet: (lang) => {
        //     dispatch(languageSet(lang))
        // },
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(About);

