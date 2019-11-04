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



class Appointments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeColor: "Upcoming"
        };
    }

    activeColor(key) {
        console.log(key.ref.key)
        if (key.ref.key == ".0") {
            this.setState({
                activeColor: "Upcoming"
            })
        }
        if (key.ref.key == ".1") {
            this.setState({
                activeColor: "Approved"
            })
        }
        if (key.ref.key == ".2") {
            this.setState({
                activeColor: "Declined"
            })
        }


    }

    render() {
        const { activeColor } = this.state

        return (
            <View style={{
                flex: 1,
                width: "100%",
                // alignItems: "center",
                backgroundColor: "white",
            }}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />

                <View style={{
                    flex: 0.6,
                    flexDirection: "row",
                    // borderBottomWidth: 0.5,
                    // borderBottomColor: 'grey',
                    // height:30
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: 'red'
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor: "red"
                    }}>

                        <Text style={{ alignItems: "center", fontSize: 18, fontWeight: "bold" }}>Appointments</Text>


                    </View>

                </View>


                <View style={{
                    flex: 8,
                    width: "100%",
                    marginTop: 10
                }}>
                    <ScrollView style={{
                        width: "100%",
                        // backgroundColor: "grey"
                    }}>

                        <Tabs
                            onChangeTab={(key) => this.activeColor(key)}
                            locked={true}
                            tabBarUnderlineStyle={{ backgroundColor: '#FD6958' }}
                        >
                            {/* //Upcoming// */}
                            <Tab
                                heading={
                                    <TabHeading
                                        style={{ flexDirection: "column", backgroundColor: "white" }}
                                    >
                                        <Text style={{ color: activeColor === "Upcoming" ? "#FD6958" : "black", fontWeight: "bold" }}>Upcoming</Text>
                                    </TabHeading>}
                            >
                                <AppointmentCard />
                                {/* <Text>test</Text> */}

                            </Tab>

                            {/* //Approved// */}
                            <Tab
                                heading={
                                    <TabHeading
                                        style={{ flexDirection: "column", backgroundColor: "white" }}
                                    >
                                        <Text style={{ color: activeColor === "Approved" ? "#FD6958" : "black", fontWeight: "bold" }}>Approved</Text>
                                    </TabHeading>
                                }
                            >
                                <AppointmentCard />

                                {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Text>Under Development</Text>
                                </View> */}
                            </Tab>

                            {/* //Declined// */}
                            <Tab
                                heading={
                                    <TabHeading
                                        style={{ flexDirection: "column", backgroundColor: "white" }}
                                    >
                                        <Text style={{ color: activeColor === "Declined" ? "#FD6958" : "black", fontWeight: "bold" }}>Declined</Text>
                                    </TabHeading>
                                }
                            >
                                <AppointmentCard />

                                {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Text>Under Development</Text>
                                </View> */}
                            </Tab>


                        </Tabs>
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
export default connect(mapStateToProps, mapDispatchToProps)(Appointments);


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingBottom: 150,
        backgroundColor: "green",

    },
});