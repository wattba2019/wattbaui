import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, StatusBar,
    ScrollView, Picker, Image, SafeAreaView, ActivityIndicator,
    images, Dimensions, FlatList, TextInput
} from 'react-native';
import { connect } from "react-redux";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto'
import DatePicker from 'react-native-datepicker'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
// import DatePicker1 from 'react-native-date-ranges';
import Textarea from 'react-native-textarea';

var moment = require('moment');
class Checkout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            catogeries: "services",
            date: "",
            Message: "",

        }
    }

    render() {
        const { activeColor, Message } = this.state

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
                                    // height: 120
                                    // borderStyle: "dashed",
                                    // backgroundColor: "yellow"
                                }}>

                                    <View>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 18 }}>Booking summary</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 16 }}>Total</Text>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 16 }}>$20</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", marginBottom: 20, justifyContent: "space-between", marginTop: 15 }}>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 16 }}>Promotion Discounts</Text>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 16 }}>$0</Text>
                                    </View>
                                </View>

                                <View style={{
                                    marginTop: 0,
                                    width: "90%",
                                    borderBottomColor: "#E3E5E6",
                                    borderBottomWidth: 0.2,
                                    // height: 120  
                                    // borderStyle: "dashed",
                                    // backgroundColor: "yellow"
                                }}>

                                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
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
                                                // onChangeText={text => onChangeText(text)}
                                                value={this.state.email}
                                            // placeholder={"Number"}
                                            />
                                        </View>

                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 16 }}>Service Fees</Text>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 16 }}>$5</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15, marginBottom: 15 }}>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 20 }}>Total</Text>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 16 }}>$25</Text>
                                    </View>
                                </View>
                                <View style={{ width: "100%", }}>
                                    <View style={{ width: "90%", marginHorizontal: "5%" }}>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 18 }}>BarberShop</Text>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                                            <Text style={{ alignItems: "center", fontSize: 18 }}>Ranya Barbershop</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", height: 45, justifyContent: "space-between", marginTop: 10, borderColor: "#D4D4E0", borderWidth: 0.5, borderRadius: 5 }}>

                                            <View style={{ flex: 1, borderTopRightRadius: 5, borderBottomRightRadius: 5, justifyContent: "center", alignItems: "center" }}>
                                                <Text style={{ alignItems: "center", fontSize: 16, marginLeft: 18 }}>424/1D Palanwatta, Pannipitiya</Text>
                                            </View>

                                            <TouchableOpacity style={{ flex: 0.2, borderColor: "#D4D4E0", borderWidth: 0.5, justifyContent: "center", alignItems: "center" }}>
                                                <SimpleLineIcons style={{ color: "#6E7990" }} size={22} name={"location-pin"} />
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{ justifyContent: "space-between", marginTop: 20 }}>
                                            <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 18 }}>Schedule</Text>
                                            <Text style={{ alignItems: "center", fontSize: 16, color: "#6E7990", marginTop: 10 }}>Your Booking date should be within a month sstarting from today</Text>
                                        </View>


                                        <View style={{ flexDirection: "row", height: 45, justifyContent: "space-between", marginTop: 10, borderColor: "#D4D4E0", borderWidth: 0.5, borderRadius: 5 }}>

                                            <View style={{ flex: 1, borderTopRightRadius: 5, borderBottomRightRadius: 5, justifyContent: "center", alignItems: "center" }}>
                                                <DatePicker showIcon={false}
                                                    style={{
                                                        width: 280,
                                                        // backgroundColor: "yellow"
                                                    }}
                                                    date={this.state.date}
                                                    mode="date"
                                                    // placeholder="Date"
                                                    // moment().format('MMMM Do YYYY, h:mm:ss a')
                                                    format="dddd Do MMMM YYYY"
                                                    // minDate="2016-05-01"
                                                    // maxDate="2016-06-01"
                                                    confirmBtnText="Confirm"
                                                    cancelBtnText="Cancel"
                                                    customStyles={{
                                                        placeholderText: {
                                                            marginRight: 180, color: "#9b9b9b"
                                                        },
                                                        dateInput: {
                                                            left: "-60%",
                                                            height: 52,
                                                            borderLeftWidth: 0,
                                                            borderRightWidth: 0,
                                                            borderTopWidth: 0,
                                                            borderBottomWidth: 0
                                                        }
                                                        // ... You can check the source to find the other keys.
                                                    }}
                                                    onDateChange={(date) => { this.setState({ date: date }) }}
                                                />
                                            </View>

                                            <View style={{ flex: 0.2, borderColor: "#D4D4E0", borderWidth: 0.5, justifyContent: "center", alignItems: "center" }}>
                                                <SimpleLineIcons style={{ color: "#6E7990" }} size={22} name={"calendar"} />
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: "row", marginBottom: 20, height: 45, justifyContent: "space-between", marginTop: 10, borderColor: "#D4D4E0", borderWidth: 0.5, borderRadius: 5 }}>

                                            <View style={{ flex: 1, borderTopRightRadius: 5, borderBottomRightRadius: 5, justifyContent: "center", alignItems: "center" }}>
                                                <DatePicker showIcon={false}
                                                    style={{
                                                        width: 280,
                                                        // backgroundColor: "yellow"
                                                    }}
                                                    date={this.state.time}
                                                    mode="time"
                                                    // placeholder="Time"
                                                    // moment().format('MMMM Do YYYY, h:mm:ss a')
                                                    format="h:mm:ss a"
                                                    // minDate="2016-05-01"
                                                    // maxDate="2016-06-01"
                                                    confirmBtnText="Confirm"
                                                    cancelBtnText="Cancel"
                                                    customStyles={{
                                                        placeholderText: {
                                                            marginRight: 180, color: "#9b9b9b"
                                                        },

                                                        dateInput: {
                                                            left: "-180%",
                                                            height: 52,
                                                            borderLeftWidth: 0,
                                                            borderRightWidth: 0,
                                                            borderTopWidth: 0,
                                                            borderBottomWidth: 0
                                                        }
                                                        // ... You can check the source to find the other keys.
                                                    }}
                                                    onDateChange={(time) => { this.setState({ time: time }) }}
                                                />
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
                                    // height: 120
                                    // borderStyle: "dashed",
                                    // backgroundColor: "yellow"
                                }}>

                                    <View>
                                        <Text style={{ alignItems: "center", fontWeight: "bold", fontSize: 18 }}>Customer Details</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", marginBottom: 20, height: 45, justifyContent: "space-between", marginTop: 10, borderColor: "#D4D4E0", borderWidth: 0.5, borderRadius: 5 }}>
                                        <View style={{ flex: 1, borderTopRightRadius: 5, borderBottomRightRadius: 5, justifyContent: "center", }}>
                                            <Text style={{ marginLeft: 10, fontSize: 18 }}>Aqib Khan</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: "row", marginBottom: 20, height: 45, justifyContent: "space-between", marginTop: 0, borderRadius: 5 }}>
                                        <View style={{ flexDirection: "row", height: "100%", width: "30%", justifyContent: "center", alignItems: "center", borderColor: "#D4D4E0", borderWidth: 0.5, borderRadius: 5 }}>

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
                                        <View style={{ flexDirection: "row", height: "100%", width: "65%", justifyContent: "center", alignItems: "center", borderColor: "#D4D4E0", borderWidth: 0.5, borderRadius: 5 }}>
                                            <Text style={{ marginLeft: 10, fontSize: 17 }}>3039626640</Text>
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
                                        // onPress={() => alert("Under Development")}
                                        onPress={() => Actions.Submited()}
                                        style={{ width: "100%", height: 42, justifyContent: "center", alignItems: "center", backgroundColor: "#FD6958", borderRadius: 0 }}>
                                        <Text style={{ fontWeight: "bold", fontSize: 18, color: "#ffffff" }}>Pay Now</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

