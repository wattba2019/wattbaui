import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, TextInput, ScrollView

} from 'react-native';
import { Icon, Tabs, Tab, TabHeading } from 'native-base';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
// import ShopsCards from '../../../Components/shopscards';
import AppointmentCard from '../../../Components/appointmentCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';



class AppointmentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    render() {

        return (
            <View style={{
                flex: 1,
                width: "100%",
                // alignItems: "center",
                backgroundColor: "white",
            }}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />

                {/* header */}

                <View style={{
                    flex: 0.6,
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center",
                    backgroundColor: "#ffffff"
                }}>
                    <View style={{ position: "absolute" }}>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <AntDesign name="arrowleft" style={{ marginLeft: 15, color: "#000000", fontSize: 25 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Text style={{ alignItems: "center", color: "#000000", fontSize: 18 }}>Appointment Details</Text>
                    </View>

                </View>


                <View style={{
                    flex: 8,
                    width: "100%",
                    marginTop: 10
                }}>
                    <ScrollView style={{
                        width: "100%",
                        backgroundColor: "#F6F6F6"
                    }}>

                        <View style={{ width: "90%", marginHorizontal: "5%" }}>
                            <View style={{
                                flex: 1, justifyContent: "center", alignItems: "center", marginTop: 10,
                                backgroundColor: "#F7F7F7"
                            }} >
                                <View style={{ flex: 1, width: "90%", flexDirection: "row", height: 80 }}>
                                    <Image
                                        resizeMode="contain"
                                        style={{ width: 80, height: 80 }}
                                        source={require("../../../../assets/cline1.png")}
                                    />
                                    <View style={{ marginLeft: 20, justifyContent: "center", }}>
                                        <Text style={{ fontSize: 20 }}>Feve snes</Text>
                                        <Text style={{ fontSize: 15 }}>Ranya Barbershop</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{
                                flex: 1, justifyContent: "center", alignItems: "center", marginTop: 20, width: "100%",
                                backgroundColor: "white"
                            }} >
                                <View style={{ flex: 1, width: "90%", flexDirection: "row", height: 80, borderBottomColor: "#EFEFF4", borderBottomWidth: 0.5 }}>
                                    <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                                        <Image
                                            resizeMode="contain"
                                            style={{ width: 30, height: 30 }}
                                            source={require("../../../../assets/calendar.png")}
                                        />
                                        <View style={{ marginLeft: 20 }}>
                                            <Text style={{}}>08:00</Text>
                                            <Text style={{}}>Sun, 17 Apr </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={{
                                flex: 1, justifyContent: "center", alignItems: "center", marginTop: 20, width: "100%",
                                backgroundColor: "white"
                            }} >
                                <View style={{ flex: 1, width: "90%", flexDirection: "row", height: 80, borderBottomColor: "#EFEFF4", borderBottomWidth: 0.5 }}>
                                    <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                                        <Image
                                            resizeMode="contain"
                                            style={{ width: 30, height: 30 }}
                                            source={require("../../../../assets/Path27909.png")}
                                        />
                                        <View style={{ marginLeft: 20 }}>
                                            <Text style={{}}>47B R-Block Morden, London</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={{
                                flex: 1, justifyContent: "center", alignItems: "center", marginTop: 20, width: "100%",
                                backgroundColor: "white"
                            }} >
                                <View style={{ flex: 1, width: "90%", flexDirection: "row", height: 80, borderBottomColor: "#EFEFF4", borderBottomWidth: 0.5 }}>
                                    <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                                        <Image
                                            resizeMode="contain"
                                            style={{ width: 30, height: 30 }}
                                            source={require("../../../../assets/iconPrice.png")}
                                        />
                                    </View>
                                    <View style={{ marginLeft: 20, flex: 7, flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                                        <Text style={{}}>Fees</Text>
                                        <Text style={{}}>100$</Text>
                                    </View>
                                </View>
                            </View>

                            <Text style={{ marginTop: 20 }}>Service Details</Text>

                            <View style={{
                                flex: 1, justifyContent: "center", alignItems: "center", marginTop: 20, width: "100%",
                                backgroundColor: "white"
                            }} >
                                <View style={{ flex: 1, width: "90%", flexDirection: "row", height: 80, borderBottomColor: "#EFEFF4", borderBottomWidth: 0.5 }}>
                                    <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                                        <View style={{ marginLeft: 0 }}>
                                            <Text style={{ fontWeight: "bold", color: "#A3B8CB" }}>Service</Text>
                                            <Text style={{}}>Hair Cut</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 1, width: "90%", flexDirection: "row", height: 80, borderBottomColor: "#EFEFF4", borderBottomWidth: 0.5 }}>
                                    <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                                        <View style={{ marginLeft: 0 }}>
                                            <Text style={{ fontWeight: "bold", color: "#A3B8CB" }}>Type</Text>
                                            <Text style={{}}>King Style</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>


                            <View style={{
                                flex: 1, justifyContent: "center", alignItems: "center", marginTop: 20, width: "100%", marginBottom: 20,
                                backgroundColor: "white"
                            }} >
                                <View style={{ flex: 1, width: "90%", flexDirection: "row", height: 80, borderBottomColor: "#EFEFF4", borderBottomWidth: 0.5 }}>
                                    <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                                        <View style={{ marginLeft: 0 }}>
                                            <Text style={{ fontWeight: "bold", color: "#A3B8CB" }}>Service</Text>
                                            <Text style={{}}>Beard Shave</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 1, width: "90%", flexDirection: "row", height: 80, borderBottomColor: "#EFEFF4", borderBottomWidth: 0.5, }}>
                                    <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                                        <View style={{ marginLeft: 0 }}>
                                            <Text style={{ fontWeight: "bold", color: "#A3B8CB" }}>Type</Text>
                                            <Text style={{}}>Hot Towel Shave</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>


                </View>
            </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(AppointmentDetails);


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingBottom: 150,
        backgroundColor: "green",

    },
});