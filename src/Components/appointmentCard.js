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
import { Actions } from 'react-native-router-flux';

class AppointmentCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { activeColor } = this.state
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}
            >
                <TouchableOpacity
                    onPress={() => Actions.AppointmentDetails()}
                >
                    <View style={{
                        flex: 1, justifyContent: "center", alignItems: "center", marginTop: 10,
                        backgroundColor: "#F7F7F7"
                    }} >
                        <View style={{ flex: 1, width: "90%", flexDirection: "row", height: 80 }}>
                            <Image
                                resizeMode="contain"
                                style={{ width: 80, height: 80 }}
                                source={require("../../assets/cline1.png")}
                            />
                            <View style={{ marginLeft: 20, justifyContent: "center", }}>
                                <Text style={{ fontSize: 20 }}>Feve snes</Text>
                                <Text style={{ fontSize: 15 }}>Ranya Barbershop</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        flex: 1, justifyContent: "center", alignItems: "center", marginTop: 0, width: "100%",
                        backgroundColor: "white"
                    }} >
                        <View style={{ flex: 1, width: "90%", flexDirection: "row", height: 80, borderBottomColor: "#EFEFF4", borderBottomWidth: 0.5 }}>
                            <View style={{ justifyContent: "center", }}>
                                <Text style={{ color: "grey" }}>Date</Text>
                                <Text style={{}}>Sun, 17 Apr 08:00</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        flex: 1, justifyContent: "center", alignItems: "center", marginTop: 0, width: "100%",
                        backgroundColor: "white"
                    }} >
                        <View style={{ flex: 1, width: "90%", flexDirection: "row", height: 80, borderBottomColor: "#EFEFF4", borderBottomWidth: 0.5 }}>
                            <View style={{ justifyContent: "center", }}>
                                <Text style={{ color: "grey" }}>Location</Text>
                                <Text style={{}}>47B R-Block Morden, London</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Actions.AppointmentDetails()}
                >
                    <View style={{
                        flex: 1, justifyContent: "center", alignItems: "center", marginTop: 10,
                        backgroundColor: "#F7F7F7"
                    }} >
                        <View style={{ flex: 1, width: "90%", flexDirection: "row", height: 80 }}>
                            <Image
                                resizeMode="contain"
                                style={{ width: 80, height: 80 }}
                                source={require("../../assets/cline2.png")}
                            />
                            <View style={{ marginLeft: 20, justifyContent: "center", }}>
                                <Text style={{ fontSize: 20 }}>Stev bURK</Text>
                                <Text style={{ fontSize: 15 }}>Horizon Barbershop</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        flex: 1, justifyContent: "center", alignItems: "center", marginTop: 0, width: "100%",
                        backgroundColor: "white"
                    }} >
                        <View style={{ flex: 1, width: "90%", flexDirection: "row", height: 80, borderBottomColor: "#EFEFF4", borderBottomWidth: 0.5 }}>
                            <View style={{ justifyContent: "center", }}>
                                <Text style={{ color: "grey" }}>Date</Text>
                                <Text style={{}}>Sun, 17 Apr 08:00</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        flex: 1, justifyContent: "center", alignItems: "center", marginTop: 0, width: "100%",
                        backgroundColor: "white"
                    }} >
                        <View style={{ flex: 1, width: "90%", flexDirection: "row", height: 80, borderBottomColor: "#EFEFF4", borderBottomWidth: 0.5 }}>
                            <View style={{ justifyContent: "center", }}>
                                <Text style={{ color: "grey" }}>Location</Text>
                                <Text style={{}}>47B R-Block Morden, London</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Actions.AppointmentDetails()}
                >
                    <View style={{
                        flex: 1, justifyContent: "center", alignItems: "center", marginTop: 10,
                        backgroundColor: "#F7F7F7"
                    }} >
                        <View style={{ flex: 1, width: "90%", flexDirection: "row", height: 80 }}>
                            <Image
                                resizeMode="contain"
                                style={{ width: 80, height: 80 }}
                                source={require("../../assets/cline2.png")}
                            />
                            <View style={{ marginLeft: 20, justifyContent: "center", }}>
                                <Text style={{ fontSize: 20 }}>Stev bURK</Text>
                                <Text style={{ fontSize: 15 }}>Horizon Barbershop</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        flex: 1, justifyContent: "center", alignItems: "center", marginTop: 0, width: "100%",
                        backgroundColor: "white"
                    }} >
                        <View style={{ flex: 1, width: "90%", flexDirection: "row", height: 80, borderBottomColor: "#EFEFF4", borderBottomWidth: 0.5 }}>
                            <View style={{ justifyContent: "center", }}>
                                <Text style={{ color: "grey" }}>Date</Text>
                                <Text style={{}}>Sun, 17 Apr 08:00</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        flex: 1, justifyContent: "center", alignItems: "center", marginTop: 0, width: "100%",
                        backgroundColor: "white"
                    }} >
                        <View style={{ flex: 1, width: "90%", flexDirection: "row", height: 80, borderBottomColor: "#EFEFF4", borderBottomWidth: 0.5 }}>
                            <View style={{ justifyContent: "center", }}>
                                <Text style={{ color: "grey" }}>Location</Text>
                                <Text style={{}}>47B R-Block Morden, London</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>


        );
    }
}


const styles = StyleSheet.create({
    contentContainer: {
        // flex: 1,
        width: "100%",
        paddingBottom: 40,
        backgroundColor: "white",

    },
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
export default connect(mapStateToProps, mapDispatchToProps)(AppointmentCard);

