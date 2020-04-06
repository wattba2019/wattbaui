import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, StatusBar,
    ScrollView, Picker, Image, SafeAreaView, ActivityIndicator,
    images, Dimensions, FlatList, TextInput
} from 'react-native';
import { connect } from "react-redux";
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Fontisto from 'react-native-vector-icons/Fontisto'
import DatePicker from 'react-native-datepicker'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Textarea from 'react-native-textarea';
// import DatePicker1 from 'react-native-date-ranges';
import axios from 'axios';

class Checkout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: "",
            Message: "",
            loader: false,
        }
    }

    submitBooking = () => {
        const { booking, } = this.props
        this.setState({
            loader: !this.state.loader
        })
        let cloneBookingData = {
            shopId: booking.shopId,
            bookerId: booking.bookerId,
            stylistId: booking.selectedBarber,
            bookingDateTime: booking.bookingDateTime,
            bookingHour: booking.bookingHour,
            requiredServiceId: booking.chosenItems,
            requiredExtraServices: booking.extraServicesSelected,
            package: booking.package,
            instruction: this.state.Message,
        }
        console.log(cloneBookingData, "cloneSignUpData")
        var options = {
            method: 'POST',
            url: `${this.props.bseUrl}/bookings/addBooking`,
            headers:
            {
                'cache-control': 'no-cache',
                "Allow-Cross-Origin": '*',
            },
            data: cloneBookingData
        };
        axios(options)
            .then((data) => {
                console.log(data, "BOOKING_CREATE_SUCCESSFULLY")
                this.setState({
                    loader: !this.state.loader
                })
                Actions.Submited()
            }).catch((err) => {
                console.log(err.response.data, "ERROR_ON_SIGN_UP")
                // console.log(err.response.data.message, "ERROR_ON_SIGN_UP")
                alert(err.response.data.message)
                this.setState({
                    loader: !this.state.loader
                })
            })
    }

    render() {
        const { Message, loader } = this.state
        const { booking, shop, userProfile } = this.props

        return (
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <StatusBar backgroundColor="#FD6958" barStyle="dark-content" />

                {/* header */}

                <View style={{
                    flex: 0.8,
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center",
                    backgroundColor: "#FD6958"

                }}>
                    <View style={{ position: "absolute" }}>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <AntDesign name="arrowleft" style={{ marginLeft: 15, color: "#ffffff", fontSize: 25 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Text style={{ alignItems: "center", color: "#ffffff", fontWeight: "bold", fontSize: 18 }}>Checkout</Text>
                    </View>

                </View>

                {/* body */}

                <View style={{ flex: 8, }}>
                    <ScrollView
                        contentContainerStyle={styles.contentContainer}
                        showsVerticalScrollIndicator={false}
                    >
                        <View
                            style={{
                                backgroundColor: "#ffffff",
                                width: "90%",
                                marginHorizontal: "5%",
                                marginTop: 15,
                                padding: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.22,
                                shadowRadius: 2.22,
                                elevation: 3,
                            }}
                        >
                            <View style={{
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                // backgroundColor: "red",
                            }}>
                                <View style={{
                                    width: "90%",
                                    borderBottomColor: "#E3E5E6",
                                    borderBottomWidth: 0.2,
                                    // backgroundColor: "yellow"
                                }}>

                                    <View>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 18 }}>Booking summary</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 16 }}>Cost</Text>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 16 }}>$ {booking.cost}</Text>
                                    </View>

                                    {/* Promotion Discounts */}
                                    {/* <View style={{ flexDirection: "row", marginBottom: 20, justifyContent: "space-between", marginTop: 15 }}>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 16 }}>Promotion Discounts</Text>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 16 }}>$ 0</Text>
                                    </View> */}

                                </View>

                                <View style={{
                                    marginTop: 0,
                                    width: "90%",
                                    borderBottomColor: "#E3E5E6",
                                    borderBottomWidth: 0.2,
                                    // backgroundColor: "yellow"
                                }}>

                                    {/* Add Coupon */}

                                    {/* <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                                        <View
                                            style={{ justifyContent: "center", alignItems: "center" }}
                                        >
                                            <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 16 }}>Add Coupon</Text>

                                        </View>
                                        <View
                                            style={{ width: "50%", borderColor: "#E8E6E7", borderWidth: 0.8, justifyContent: "center", alignItems: "center" }}
                                        >
                                            <TextInput
                                                keyboardType={"numeric"}
                                                style={{ height: 50, width: "90%", }}
                                                value={this.state.email}
                                            // onChangeText={text => onChangeText(text)}
                                            // placeholder={"Number"}
                                            />
                                        </View>
                                    </View> */}

                                    {/* Service Fees */}

                                    {/* <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 16 }}>Service Fees</Text>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 16 }}>$5</Text>
                                    </View> */}

                                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15, marginBottom: 15 }}>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 20 }}>Total</Text>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 16 }}>$ {booking.cost}</Text>
                                    </View>
                                </View>

                                <View style={{ width: "100%", }}>
                                    <View style={{ width: "90%", marginHorizontal: "5%" }}>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 18 }}>BarberShop</Text>

                                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                                            <Text style={{ alignItems: "center", fontSize: 18 }}>{shop.businessName}</Text>
                                        </View>

                                        <View style={{ flexDirection: "row", height: 45, justifyContent: "space-between", marginTop: 10, borderColor: "#D4D4E0", borderWidth: 0.5, borderRadius: 5 }}>

                                            <View style={{ flex: 1, borderTopRightRadius: 5, borderBottomRightRadius: 5, justifyContent: "center", alignItems: "flex-start" }}>
                                                <Text style={{ alignItems: "center", fontSize: 12, marginLeft: 18 }}>{shop.addressLine1}</Text>
                                            </View>

                                            <View style={{ flex: 0.2, borderColor: "#D4D4E0", borderWidth: 0.5, justifyContent: "center", alignItems: "center" }}>
                                                <SimpleLineIcons style={{ color: "#6E7990" }} size={22} name={"location-pin"} />
                                            </View>
                                        </View>

                                        <View style={{ justifyContent: "space-between", marginTop: 20 }}>
                                            <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 18 }}>Schedule</Text>
                                            <Text style={{ alignItems: "center", fontSize: 14, color: "#6E7990", marginTop: 10 }}>Your Booking date should be within a month sstarting from today</Text>
                                        </View>

                                        <View style={{ flexDirection: "row", height: 45, justifyContent: "space-between", marginTop: 10, borderColor: "#D4D4E0", borderWidth: 0.5, borderRadius: 5 }}>
                                            <View style={{ flex: 1, borderTopRightRadius: 5, borderBottomRightRadius: 5, marginLeft: 15, justifyContent: "center", alignItems: "flex-start" }}>
                                                <Text style={{ alignItems: "center", fontSize: 12, }}>{booking.bookingDate}</Text>
                                            </View>

                                            <View style={{ flex: 0.2, borderColor: "#D4D4E0", borderWidth: 0.5, justifyContent: "center", alignItems: "center" }}>
                                                <SimpleLineIcons style={{ color: "#6E7990" }} size={22} name={"calendar"} />
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: "row", marginBottom: 20, height: 45, justifyContent: "space-between", marginTop: 10, borderColor: "#D4D4E0", borderWidth: 0.5, borderRadius: 5 }}>
                                            <View style={{ flex: 1, borderTopRightRadius: 5, borderBottomRightRadius: 5, marginLeft: 15, justifyContent: "center", alignItems: "flex-start" }}>
                                                <Text style={{ alignItems: "center", fontSize: 12, }}>{booking.selectedSlotTime}</Text>
                                            </View>

                                            <View style={{ flex: 0.2, borderColor: "#D4D4E0", borderWidth: 0.5, justifyContent: "center", alignItems: "center" }}>
                                                <MaterialCommunityIcons style={{ color: "#6E7990" }} size={28} name={"av-timer"} />
                                            </View>
                                        </View>

                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{
                            backgroundColor: "#ffffff",
                            width: "90%",
                            marginHorizontal: "5%",
                            marginTop: 15,
                            padding: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,
                            elevation: 3,
                        }}>
                            <View style={{
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                // backgroundColor: "red",
                            }}>
                                <View style={{
                                    width: "90%",
                                    borderBottomColor: "#E3E5E6",
                                    borderBottomWidth: 0.2,
                                    // backgroundColor: "yellow"
                                }}>

                                    <View>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 18 }}>Customer Details</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", marginBottom: 10, height: 45, justifyContent: "space-between", marginTop: 10, borderColor: "#D4D4E0", borderWidth: 0.5, borderRadius: 5 }}>
                                        <View style={{ flex: 1, borderTopRightRadius: 5, borderBottomRightRadius: 5, justifyContent: "center", }}>
                                            <Text style={{ marginLeft: 10, fontSize: 12 }}>{userProfile.fullName}</Text>
                                        </View>
                                    </View>

                                    <View style={{ width: "100%", }}>
                                        <View style={{ width: "90%", marginHorizontal: "5%" }}></View>
                                        <View style={{ flexDirection: "row", marginBottom: 20, height: 45, justifyContent: "space-between", marginTop: 0, borderColor: "#D4D4E0", borderWidth: 0.5, borderRadius: 5 }}>
                                            <View style={{ flex: 1, borderTopRightRadius: 5, borderBottomRightRadius: 5, marginLeft: 15, justifyContent: "center", alignItems: "flex-start" }}>
                                                <Text style={{ alignItems: "center", fontSize: 12, }}>{userProfile.phoneNumber}</Text>
                                            </View>
                                            <View style={{ flex: 0.2, borderColor: "#D4D4E0", borderWidth: 0.5, justifyContent: "center", alignItems: "center" }}>
                                                <MaterialCommunityIcons style={{ color: "#6E7990" }} size={28} name={"cellphone"} />
                                            </View>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        </View>



                        <View style={{
                            backgroundColor: "#ffffff",
                            width: "90%",
                            marginHorizontal: "5%",
                            marginTop: 15,
                            padding: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,
                            elevation: 3,
                        }}>
                            <View style={{
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                // backgroundColor: "red",
                            }}>
                                <View style={{
                                    width: "90%",
                                    borderBottomColor: "#E3E5E6",
                                    borderBottomWidth: 0.2,
                                    // height: 120
                                    // borderStyle: "dashed",
                                    // backgroundColor: "yellow"
                                }}>

                                    <View>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 18 }}>Special Instructions</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", marginBottom: 20, height: 100, justifyContent: "space-between", marginTop: 10, borderColor: "#D4D4E0", borderWidth: 0.5, borderRadius: 5 }}>
                                        <View style={{ flex: 1, borderTopRightRadius: 5, borderBottomRightRadius: 5, justifyContent: "center", }}>
                                            <View style={styles.container}>
                                                <Textarea
                                                    containerStyle={styles.textareaContainer}
                                                    style={styles.textarea}
                                                    onChangeText={(Message) => this.setState({ Message })}
                                                    defaultValue={Message}
                                                    maxLength={100}
                                                    placeholder={'Message'}
                                                    underlineColorAndroid={'transparent'}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>


                        <View style={{
                            backgroundColor: "#ffffff",
                            width: "90%",
                            marginHorizontal: "5%",
                            marginTop: 15,
                            padding: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,
                            elevation: 3,
                        }}>
                            <View style={{
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                // backgroundColor: "red",
                            }}>
                                <View style={{
                                    width: "90%",
                                    borderBottomColor: "#E3E5E6",
                                    borderBottomWidth: 0.2,
                                    // height: 120
                                    // borderStyle: "dashed",
                                    // backgroundColor: "yellow"
                                }}>

                                    <View>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 18 }}>Payment Method</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", marginBottom: 20, height: 45, justifyContent: "space-between", marginTop: 10, borderRadius: 5 }}>
                                        <View style={{ flexDirection: "row", height: "100%", width: "30%", justifyContent: "center", alignItems: "center", borderColor: "#D4D4E0", borderWidth: 0.5, borderRadius: 5 }}>
                                            <Image source={require('../../../assets/visaIcon.png')} resizeMode="contain"
                                                style={{ height: "80%", width: "80%", }}
                                            />
                                        </View>
                                        <View style={{ flexDirection: "row", height: "100%", width: "65%", justifyContent: "center", alignItems: "center", borderRadius: 5, }}>
                                            <View style={{ flexDirection: "row", width: "100%", height: "100%", justifyContent: "space-between", alignItems: "center", }}>
                                                <Text style={{ marginLeft: 10, fontSize: 17 }}>X - 4567</Text>
                                                <Image source={require('../../../assets/checkbox.png')} resizeMode="contain"
                                                    style={{ height: "60%", width: "60%", marginLeft: "20%" }}
                                                />
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", marginBottom: 20, height: 45, justifyContent: "space-between", marginTop: 0, borderRadius: 5 }}>
                                        <TouchableOpacity style={{ flexDirection: "row", height: "100%", width: "30%", justifyContent: "center", alignItems: "center", borderColor: "#D4D4E0", borderWidth: 0.5, borderRadius: 5 }}>
                                            <AntDesign name="plus" style={{ color: "grey", fontSize: 25 }} />
                                        </TouchableOpacity>

                                        <View style={{ flexDirection: "row", height: "100%", width: "65%", justifyContent: "space-between", alignItems: "center", borderRadius: 5 }}>
                                            <Text style={{ marginLeft: 10, fontSize: 17 }}>Add a Card</Text>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        </View>
                        <View style={{
                            // backgroundColor: "#ffffff",
                            width: "90%",
                            marginHorizontal: "5%",
                            marginTop: 15,
                            padding: 10,
                            // shadowColor: "#000",
                            // shadowOffset: {
                            //     width: 0,
                            //     height: 1,
                            // },
                            // shadowOpacity: 0.22,
                            // shadowRadius: 2.22,
                            // elevation: 3,
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <View style={{
                                width: "30%",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#ffff",
                                borderColor: "#44C062",
                                borderWidth: 0.5
                            }}>
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
                                    <Text style={{ fontSize: 17 }}>Cancel</Text>
                                </View>
                            </View>
                            <View style={{
                                width: "60%",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#ffff",
                            }}>
                                <View style={{ flex: 1, width: "100%", justifyContent: "center", alignItems: "flex-end", }}>
                                    <TouchableOpacity
                                        onPress={() => this.submitBooking()}
                                        // onPress={() => Actions.Submited()}
                                        style={{ width: "100%", height: 42, justifyContent: "center", alignItems: "center", backgroundColor: "#FD6958", borderRadius: 0 }}>
                                        {
                                            (loader != true) ? (
                                                <Text style={{ fontWeight: "bold", fontSize: 18, color: "#ffffff" }}>Pay Now</Text>
                                            ) : <ActivityIndicator color="#ffffff" />
                                        }
                                        {/* <Text style={{ fontWeight: "bold", fontSize: 18, color: "#ffffff" }}>Pay Now</Text> */}

                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>






            </View>
        );
    }
}


const styles = StyleSheet.create({
    contentContainer: {
        // flex: 1,
        paddingBottom: 30,
        backgroundColor: "#F4F7FA",

    },
    container: {
        flex: 1,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textareaContainer: {
        height: 100,
        padding: 5,
        // backgroundColor: 'rgba(52, 52, 52, .1)',
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 14,
        color: 'black',
    },
});

let mapStateToProps = state => {
    return {
        shop: state.root.shop,
        userProfile: state.root.userProfile,
        bseUrl: state.root.bseUrl,

    };
};
function mapDispatchToProps(dispatch) {
    return ({
        // languageSet: (lang) => {
        //     dispatch(languageSet(lang))
        // },
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

