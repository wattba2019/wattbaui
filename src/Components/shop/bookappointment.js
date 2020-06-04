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
            // date: new Date(),
            slots: [],
            selectedSlotTime: "",
            selectedBarberBolean: false,
        }
    }

    componentDidMount() {
        let { stylists, workinghours, gendre } = this.props
        let { date } = this.state
        let barberList = []
        if (gendre) {
            for (let index = 0; index < stylists.length; index++) {
                const element = stylists[index];
                const elementGender = stylists[index].gender.toLowerCase();
                if (elementGender === gendre) {
                    barberList.push(element)
                }
            }
        }
        else {
            barberList = stylists
        }
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
            let currentTime = this.formatAMPM(new Date);

            // let openTimeInMiliSeconds = this.makeDateStr(start);
            // let closeTimeInMiliSeconds = this.makeDateStr(end);
            // let currentTimeInMiliSeconds = this.makeDateStr(currentTime);
            // console.log(start, end, day, currentDayShopOpen, "TimeSlots")

            let returnValue = this.getTimeStops(start, end, currentTime);
            this.setState({
                slots: returnValue,
                stylists: barberList,
                day: day,
            })
        }
        else {
            this.setState({
                day: day,
                slots: [],
                stylists: barberList,
            })
        }

    }

    makeDateStr(dateStr) {
        //5:14 am
        var splittedDateStr = dateStr.split(":");
        var hour = splittedDateStr[0]
        var minuteAndAMPM = splittedDateStr[1]
        var splittedMinuteAndAMPM = minuteAndAMPM.split(" ");
        var minute = splittedMinuteAndAMPM[0];
        var amPm = splittedMinuteAndAMPM[1];
        // console.log(amPm, hour)
        if (amPm === 'pm') {
            hour = Number(hour) + 12
        }
        var bookingDate = new Date(this.state.date);
        var bookingDateandTime = new Date(bookingDate.getFullYear(), bookingDate.getMonth(), bookingDate.getDate(), hour, minute, 0);
        return bookingDateandTime.getTime();
    }

    formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    getTimeStops(start, end, ampmCurrent) {
        console.log(start, end, ampmCurrent, "ampmCurrent")
        var startTime = moment(start, 'h:mm a');
        var endTime = moment(end, 'h:mm a');
        var currentTime = moment(ampmCurrent, 'h:mm a');
        if (endTime.isBefore(startTime)) {
            endTime.add(1, 'day');
        }
        console.log(startTime, "startTime")
        var timeStops = [];
        while (startTime <= endTime) {
            // console.log(startTime, currentTime, "currentTime", startTime > currentTime)
            if (startTime > currentTime) {
                timeStops.push(new moment(startTime).format('h:mm a'));
            }
            startTime.add(60, 'minutes');
        }
        return timeStops;
    }

    slotSelect(key, index) {
        console.log(key, index, "slotSelect")
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
            selectedBarberBolean: true,
            selectedBarber: selectedBarber
        })
    }

    setDate(date) {
        console.log(date, "SETDATE")

        this.setState({
            date: date
        })
        this.componentDidMount(date)
    }

    Checkout() {
        let { chosenItems, extraServicesSelected, gendre, totalCost, pack } = this.props
        let { date, selectedSlotTime, selectedBarber, selectedBarberBolean } = this.state
        var dt = moment(selectedSlotTime, ["h:mm A"]).format("HH");
        var dateMiliSecond = moment(date).format("x");

        if (date === "") {
            Alert.alert("Please select date")
        }
        else if (selectedSlotTime === "") {
            Alert.alert("Please select slot")
        }
        else if (selectedBarberBolean === false) {
            Alert.alert("Please select barber")
        }
        else {
            let cloneObj = {
                chosenItems: chosenItems,
                extraServicesSelected: extraServicesSelected,
                gendre: gendre,
                cost: totalCost,
                bookingHour: dt,
                selectedSlotTime: selectedSlotTime,
                selectedBarber: selectedBarber._id,
                bookingDateTime: dateMiliSecond,
                bookingDate: date,
                bookerId: this.props.bookerId,
                shopId: this.props.shopId,
                package: pack,
            }

            if (pack === true) {
                cloneObj.package = true
            }
            else {
                cloneObj.package = false
            }
            Actions.Checkout({ booking: cloneObj })
        }
    }

    render() {
        let { totalCost, gendre } = this.props
        let { stylists, slots, selectedSlotTime, day, date } = this.state

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
                                    minDate={moment().toDate()}
                                    style={{
                                        width: 280,
                                    }}
                                    date={this.state.date}
                                    mode="date"
                                    placeholder="Date"
                                    format="YYYY-MM-DD"
                                    // format="Do MMMM YYYY"
                                    // format="DD-MM-YYYY"
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

                            {
                                (date != "") ? (
                                    <>
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
                                                ) : <Text style={{ color: "red" }}>{'No slots available on ' + day + ' please change date'}</Text>

                                            }
                                        </View>

                                        <View style={{ paddingVertical: "5%" }}>
                                            <Text style={{ fontSize: 22, color: "#4B534F" }}>Choose Stylists</Text>
                                        </View>
                                    </>
                                ) : null
                            }


                        </View>
                        {
                            (date != "") ? (
                                <>
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
                                                                {(key.coverImage != null) ? (
                                                                    <Image source={{ uri: key.coverImage }} resizeMode="cover"
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
                                        {
                                            (stylists && stylists.length === 0) ? (
                                                <TouchableOpacity style={{
                                                    height: 30,
                                                    width: "100%",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    // backgroundColor: "red"
                                                }}>
                                                    <Text style={{ marginTop: 5, fontSize: 10, color: "red", textAlign: "right", }}>There is no {gendre} stylists</Text>
                                                </TouchableOpacity>
                                            ) : null
                                        }
                                    </ScrollView>
                                </>
                            ) : null
                        }

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
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>GBP {totalCost}</Text>
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
        shopId: state.root.shop._id,
        bookerId: state.root.userProfile._id,
    };
};
function mapDispatchToProps(dispatch) {
    return ({
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(BookAppointment);

