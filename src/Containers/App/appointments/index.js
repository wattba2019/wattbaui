import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity, Dimensions,
    Text, TextInput, ScrollView

} from 'react-native';
import { Icon, Tabs, Tab, TabHeading } from 'native-base';
import { connect } from "react-redux";
// import ShopsCards from '../../../Components/shopscards';
import AppointmentCard from '../../../Components/appointmentCard';
import axios from 'axios';



class Appointments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeColor: "Upcoming",
            loader: false
        };
    }

    UNSAFE_componentWillMount() {
        this.getAppointments()
        var { height, width } = Dimensions.get('window');
        this.setState({
            screenHeight: height,
        })
    }

    getAppointments() {
        this.setState({
            loader: !this.state.loader
        })
        let cloneId = {
            _id: this.props.userProfile._id,
        }
        console.log(cloneId, "cloneSignUpData")
        var options = {
            method: 'POST',
            url: `${this.props.bseUrl}/bookings/myAppointments`,
            headers:
            {
                'cache-control': 'no-cache',
                "Allow-Cross-Origin": '*',
            },
            data: cloneId
        };
        axios(options)
            .then((data) => {
                let result = data.data
                console.log(result, "FETCHING_MY_APPOINTMENTS")

                const pending = result.pending.sort((a, b) => b.bookingDateTime - a.bookingDateTime)
                const approved = result.approved.sort((a, b) => b.bookingDateTime - a.bookingDateTime)
                const cancled = result.cancled.sort((a, b) => b.bookingDateTime - a.bookingDateTime)

                this.setState({
                    loader: !this.state.loader,
                    upcoming: pending,
                    approved: approved,
                    declined: cancled,
                })
            }).catch((err) => {
                console.log(err.response.data, "ERROR")
                // console.log(err.response.data.message, "ERROR_ON_SIGN_UP")
                alert(err.response.data.message)
                this.setState({
                    loader: !this.state.loader
                })
            })
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
        const { activeColor, loader, upcoming, approved, declined } = this.state
        // console.log(upcoming, approved, declined, "LOADER")
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
                    marginTop: 10,
                    // backgroundColor:"orange"
                }}>
                    {
                        (loader) ? (
                            <View style={{
                                height: this.state.screenHeight,
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                top: "-10%"
                                // backgroundColor: "red"
                            }}
                            >
                                <ActivityIndicator size="large" color="#FD6958" />
                                <Text style={{ marginTop: 5, fontSize: 10, color: "#000000", textAlign: "right", }}>Loading...</Text>
                            </View>

                        ) :
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
                                    < Tab
                                        heading={
                                            <TabHeading
                                                style={{ flexDirection: "column", backgroundColor: "white" }}
                                            >
                                                <Text style={{ color: activeColor === "Upcoming" ? "#FD6958" : "black", fontWeight: "bold" }}>Upcoming</Text>
                                            </TabHeading>}
                                    >
                                        <AppointmentCard appointments={upcoming} />
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
                                        <AppointmentCard appointments={approved} />
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
                                        <AppointmentCard appointments={declined} />
                                    </Tab>
                                </Tabs>
                            </ScrollView>
                    }


                </View>
            </View >
        );
    }
}
let mapStateToProps = state => {
    return {
        bseUrl: state.root.bseUrl,
        userProfile: state.root.userProfile,
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