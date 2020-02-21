import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, StatusBar,
    ScrollView, Image,
} from 'react-native';
import { connect } from "react-redux";
import Fontisto from 'react-native-vector-icons/Fontisto'
import DatePicker from 'react-native-datepicker'
import Entypo from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';

class BookAppointment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: ""
        }
    }

    render() {
        let { chosenItems, gendre, totalCost } = this.props
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
                                            marginRight: 180, color: "#9b9b9b"
                                        },
                                        dateInput: {
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
                                <Fontisto style={{ marginRight: 15, color: "#4B534F" }} size={16} name={"date"} />
                            </View>

                            <View style={{ paddingVertical: "5%" }}>
                                <Text style={{ fontSize: 22, color: "#4B534F" }}>Availble Slots</Text>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <View style={{ backgroundColor: "#F3E7E3", height: 45, width: "30%", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "#4B534F" }}>08:00 AM</Text>
                                </View>
                                <View style={{ backgroundColor: "#F3E7E3", height: 45, width: "30%", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "#4B534F" }}>09:00 AM</Text>
                                </View>
                                <View style={{ backgroundColor: "#F3E7E3", height: 45, width: "30%", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "#4B534F" }}>10:00 AM</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "5%" }}>
                                <View style={{ backgroundColor: "#FD6958", height: 45, width: "30%", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "#fff" }}>11:00 AM</Text>
                                </View>
                                <View style={{ backgroundColor: "#F3E7E3", height: 45, width: "30%", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "#4B534F" }}>12:00 AM</Text>
                                </View>
                                <View style={{ backgroundColor: "#F3E7E3", height: 45, width: "30%", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "#4B534F" }}>13:00 AM</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "5%" }}>
                                <View style={{ backgroundColor: "#F3E7E3", height: 45, width: "30%", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "#4B534F" }}>14:00 AM</Text>
                                </View>
                                <View style={{ backgroundColor: "#F3E7E3", height: 45, width: "30%", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "#4B534F" }}>15:00 AM</Text>
                                </View>
                                <View style={{ backgroundColor: "#F3E7E3", height: 45, width: "30%", justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "#4B534F" }}>16:00 AM</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ paddingVertical: "5%" }}>
                            <Text style={{ fontSize: 22, color: "#4B534F" }}>Choose Barber</Text>
                        </View>

                        <ScrollView horizontal style={{ marginVertical: 15, marginTop: -15, }} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={{
                                height: 110,
                                width: 110,
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <View style={{
                                    height: 75,
                                    width: 75,
                                    borderRadius: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    borderColor: "#FD6958",
                                    borderWidth: 1.80
                                }}>
                                    <Image source={require('../../../assets/Ellipse-1.png')} resizeMode="contain"
                                        style={{ width: "90%", height: "90%", }}
                                    />
                                </View>
                                <Text style={{ marginTop: 5, fontSize: 14, color: "#8E8E93", textAlign: "right", }}>Hairstyle Name</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: 110,
                                width: 110,
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <View style={{
                                    height: 75,
                                    width: 75,
                                    borderRadius: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    borderColor: "#FD6958",
                                    borderWidth: 1.80
                                }}>
                                    <Image source={require('../../../assets/Ellipse2s.png')} resizeMode="contain"
                                        style={{ width: "90%", height: "90%", }}
                                    />
                                </View>
                                <Text style={{ marginTop: 5, fontSize: 14, color: "#8E8E93", textAlign: "right", }}>Hairstyle Name</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: 110,
                                width: 110,
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <View style={{
                                    height: 75,
                                    width: 75,
                                    borderRadius: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    borderColor: "#FD6958",
                                    borderWidth: 1.80
                                }}>
                                    <Image source={require('../../../assets/Ellipse-2.png')} resizeMode="contain"
                                        style={{ width: "90%", height: "90%", }}
                                    />
                                </View>
                                <Text style={{ marginTop: 5, fontSize: 14, color: "#8E8E93", textAlign: "right", }}>Hairstyle Name</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: 110,
                                width: 110,
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <View style={{
                                    height: 75,
                                    width: 75,
                                    borderRadius: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    borderColor: "#FD6958",
                                    borderWidth: 1.80
                                }}>
                                    <Image source={require('../../../assets/Ellipse-3.png')} resizeMode="contain"
                                        style={{ width: "90%", height: "90%", }}
                                    />
                                </View>
                                <Text style={{ marginTop: 5, fontSize: 14, color: "#8E8E93", textAlign: "right", }}>Hairstyle Name</Text>
                            </TouchableOpacity>
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
                                onPress={() => Actions.Checkout()}
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
    };
};
function mapDispatchToProps(dispatch) {
    return ({
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(BookAppointment);

