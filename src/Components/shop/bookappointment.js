import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, StatusBar,
    ScrollView, Image, ActivityIndicator, Alert
} from 'react-native';
import { connect } from "react-redux";
import Fontisto from 'react-native-vector-icons/Fontisto'
import DatePicker from 'react-native-datepicker'
import Entypo from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';

class BookAppointment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: "",
            slots: [],
            selectedSlotTime: "",
            selectedBarber: false,
        }
    }

    componentDidMount() {
        let { stylists, workinghours } = this.props
        let { date } = this.state

        var d;
        if (date != "") {
            d = new Date(date);
        }
        else {
            d = new Date();
        }
        var weekday = new Array(7);
        weekday[0] = "sunday";
        weekday[1] = "monday";
        weekday[2] = "tuesday";
        weekday[3] = "wednesday";
        weekday[4] = "thursday";
        weekday[5] = "friday";
        weekday[6] = "saturday";
        let day = weekday[d.getDay()];
        let currentDayShopOpen = workinghours[day].open;
        if (currentDayShopOpen === true) {
            let start = workinghours[day].openTimings;
            let end = workinghours[day].closingTime;
            let returnValue = this.getTimeStops(start, end);
            this.setState({
                slots: returnValue,
                stylists: stylists,
                day: day,
            })
        }
        else {
            this.setState({
                day: day,
                slots: [],
                stylists: stylists,
            })
        }

    }

    getTimeStops(start, end) {
        var startTime = moment(start, 'h:mm a');
        var endTime = moment(end, 'h:mm a');
        if (endTime.isBefore(startTime)) {
            endTime.add(1, 'day');
        }
        var timeStops = [];
        while (startTime <= endTime) {
            timeStops.push(new moment(startTime).format('h:mm a'));
            startTime.add(60, 'minutes');
        }
        return timeStops;
    }

    slotSelect(key, index) {
        this.setState({
            selectedSlotTime: key
        })
    }

    chooseBarber(key, index) {
        let { stylists } = this.state
        let selectedBarber = stylists[index]
        for (var i = 0; i < stylists.length; i++) {
            stylists[i].active = false
        }
        selectedBarber.active = true
        this.setState({
            stylists: stylists,
            selectedBarber: true,
        })
    }

    setDate(date) {
        this.setState({
            date: date
        })
        this.componentDidMount(date)
    }


    Checkout() {
        let { chosenItems, gendre, totalCost, } = this.props
        let { date, selectedSlotTime, selectedBarber } = this.state
        // alert("work")
        if (date === "") {
            Alert.alert("Please select date")
        }
        else if (selectedSlotTime === "") {
            Alert.alert("Please select slot")

        }
        else if (selectedBarber === false) {
            Alert.alert("Please select barber")
        }
        else {
            Actions.Checkout()
        }

    }

    render() {
        let { totalCost, } = this.props
        let { stylists, slots, selectedSlotTime, day } = this.state

        return (
            <View style={{ paddingHorizontal: 10, flex: 1, backgroundColor: "#fff" }}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <View style={{
                    flex: 0.7,
                    flexDirection: "row",
                    borderBottomWidth: 0.5,
                    borderBottomColor: 'grey',
                }}>
                    <View style={{ position: "absolute" }}>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Entypo name="cross" style={{ marginLeft: 15, top: 10, color: "black", fontSize: 25 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Text style={{ alignItems: "center", fontSize: 15 }}>Book Appointment</Text>
                    </View>
                </View>

                <View style={{ flex: 8, }}>
                    <ScrollView
                        contentContainerStyle={styles.contentContainer}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={{
                            width: "90%", marginHorizontal: "5%"
                        }}>
                            <View style={{ paddingVertical: "5%" }}>

                                <Text style={{ fontSize: 22, color: "#4B534F" }}>Choose Date</Text>
                            </View>
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                marginTop: 10, width: "97%", marginHorizontal: "1%",
                                borderRadius: 100, height: 50,

                                flexDirection: "row", backgroundColor: "#F1EDED"
                            }}>

                                <DatePicker showIcon={false}
                                    style={{
                                        width: 280,
                                    }}
                                    date={this.state.date}
                                    mode="date"
                                    placeholder="Date"
                                    format="YYYY-MM-DD"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        placeholderText: {
                                            marginRight: "40%", color: "#9b9b9b"
                                        },
                                        dateInput: {
                                            height: 52,
                                            borderLeftWidth: 0,
                                            borderRightWidth: 0,
                                            borderTopWidth: 0,
                                            borderBottomWidth: 0,
                                            marginRight: "40%"
                                        },
                                        // ... You can check the source to find the other keys.
                                    }}
                                    // onDateChange={(date) => { this.setState({ date: date }) }}
                                    onDateChange={(date) => this.setDate(date)}
                                />
                                <Fontisto style={{ marginRight: "10%", color: "#4B534F" }} size={16} name={"date"} />
                            </View>

                            <View style={{ paddingVertical: "5%" }}>
                                <Text style={{ fontSize: 22, color: "#4B534F" }}>Availble Slots</Text>
                            </View>
                            <View style={{
                                flexWrap: "wrap",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                // backgroundColor: "red"
                            }}>
                                {
                                    (slots.length != 0) ? (
                                        slots.map((key, index) => {
                                            // console.log(key, index, "INSIDE_MAP")
                                            return (
                                                <TouchableOpacity
                                                    onPress={() => this.slotSelect(key, index)}
                                                    key={index}
                                                    style={{
                                                        // backgroundColor: "#F3E7E3",
                                                        backgroundColor: selectedSlotTime === key ? "#FD6958" : "#F3E7E3",
                                                        margin: "1.5%", height: 45, width: "30%",
                                                        justifyContent: "center",
                                                        alignItems: "center"
                                                    }}>
                                                    <Text style={{
                                                        color: selectedSlotTime === key ? "#ffffff" : "#4B534F",
                                                        fontWeight: selectedSlotTime === key ? "bold" : "normal"
                                                    }}>{key}</Text>
                                                </TouchableOpacity>
                                            )
                                        })
                                    ) : <Text style={{ color: "red" }}>{'Shop close on ' + day}</Text>

                                }
                            </View>

                        </View>

                        <View style={{ paddingVertical: "5%" }}>
                            <Text style={{ fontSize: 22, color: "#4B534F" }}>Choose Barber</Text>
                        </View>

                        <ScrollView
                            contentContainerStyle={{ flexGrow: 1 }}
                            showsHorizontalScrollIndicator={false}
                            horizontal style={{ marginVertical: 15, marginTop: -15, }}
                        >
                            {
                                (stylists) ? (
                                    stylists.map((key, index) => {
                                        return (
                                            <TouchableOpacity key={index} style={{
                                                height: 120,
                                                width: 110,
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                                onPress={() => this.chooseBarber(key, index)}
                                            >
                                                <View style={{
                                                    height: 75,
                                                    width: 75,
                                                    borderRadius: 50,
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    backgroundColor: "white",
                                                    // borderColor: "#FD6958",
                                                    borderColor: key.active == true ? "#FD6958" : "#E6E6E6",
                                                    borderWidth: 1.80,
                                                    overflow: "hidden"
                                                }}>
                                                    {(key.serviceImage != null) ? (
                                                        <Image source={{ uri: key.serviceImage }} resizeMode="cover"
                                                            style={{ width: "90%", height: "90%", borderRadius: 100 }}
                                                        />
                                                    ) : <Image source={require('../../../assets/nophoto.jpg')} resizeMode="cover"
                                                        style={{ width: "90%", height: "90%", borderRadius: 100 }}
                                                        />}
                                                </View>
                                                <Text style={{ marginTop: 5, fontSize: 10, color: "#000000", textAlign: "right", }}>{key.fullname}</Text>
                                                <Text style={{ marginTop: 0, fontSize: 10, color: "#8E8E93", textAlign: "right", }}>{key.designation}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                ) :
                                    <TouchableOpacity style={{
                                        height: 120,
                                        width: "100%",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        // backgroundColor: "red"
                                    }}
                                    >
                                        <ActivityIndicator size="large" color="#FD6958" />
                                        <Text style={{ marginTop: 5, fontSize: 10, color: "#000000", textAlign: "right", }}>Loading...</Text>
                                    </TouchableOpacity>
                            }

                        </ScrollView>
                    </ScrollView>
                </View>

                <View style={{
                    flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", borderTopColor: "grey", borderTopWidth: 0.5,
                }}>
                    <View style={{
                        flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", width: "90%", marginHorizontal: "5%",
                    }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start", }}>
                            <Text style={{ fontWeight: "normal", }}>Total Cost</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>${totalCost}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end", }}>
                            <TouchableOpacity
                                onPress={() => this.Checkout()}
                                style={{ width: "70%", height: 42, justifyContent: "center", alignItems: "center", backgroundColor: "#FD6958", borderRadius: 8 }}>
                                <Text style={{ fontWeight: "bold", fontSize: 18, color: "#ffffff" }}>Book</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 30,
    },
});

let mapStateToProps = state => {
    return {
        stylists: state.root.stylists,
        workinghours: state.root.workinghours,
    };
};
function mapDispatchToProps(dispatch) {
    return ({
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(BookAppointment);

