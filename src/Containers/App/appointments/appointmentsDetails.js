import React, { Component } from "react";
import { View, Image, StatusBar, TouchableOpacity, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import axios from 'axios';

class AppointmentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedService: [],
            loader: false,
            totalCost: 0
        };
    }


    UNSAFE_componentWillMount() {
        const { service } = this.props
        if (service.package === true) {
            this.getBookedPackage(service.requiredServiceId)
        }
        else {
            this.getBookedService(service.requiredServiceId)
        }
    }

    getBookedService(serviceId) {
        let { totalCost } = this.state
        if (serviceId != undefined) {
            let idsCloneData = { serviceId: serviceId }
            var options = {
                method: 'POST',
                url: `${this.props.bseUrl}/getNearbyShopServices/NearbyAllShopServicesGetWithId/`,
                headers:
                {
                    'cache-control': 'no-cache',
                    "Allow-Cross-Origin": '*',
                },
                data: idsCloneData
            }
            axios(options)
                .then(result => {
                    let bookedService = result.data.data
                    console.log(bookedService, "Fetch_Booked_Services")

                    let price = totalCost

                    for (let index = 0; index < bookedService.length; index++) {
                        const extraServices = bookedService[index].extraServices;
                        const servicePrice = bookedService[index].price;
                        price = price + Number(servicePrice)
                        console.log(servicePrice, price, "ELEMENT")
                        if (extraServices.length != 0) {
                            for (let index = 0; index < extraServices.length; index++) {
                                const extraPrice = extraServices[index].price;
                                price = price + Number(extraPrice)
                            }
                            this.setState({
                                totalCost: price
                            })
                        }
                        else {
                            this.setState({
                                totalCost: price
                            })
                        }
                    }
                    this.setState({
                        selectedService: bookedService
                    })
                })
                .catch(err => {
                    let error = JSON.parse(JSON.stringify(err))
                    console.log(error, 'ERRROR', err)
                })
        }

    }



    getBookedPackage(packageId) {
        let { totalCost } = this.state
        if (packageId != undefined) {
            let idsCloneData = { packageId: packageId }
            var options = {
                method: 'POST',
                url: `${this.props.bseUrl}/getNearbyShopServices/PackageFindWithId/`,
                headers:
                {
                    'cache-control': 'no-cache',
                    "Allow-Cross-Origin": '*',
                },
                data: idsCloneData
            }
            axios(options)
                .then(result => {
                    let bookedPackage = result.data.data
                    let price = totalCost
                    console.log(bookedPackage, "Fetch_Booked_Package")
                    price = price + Number(bookedPackage[0].price)
                    this.setState({
                        selectedService: bookedPackage,
                        totalCost: price
                    })
                })
                .catch(err => {
                    let error = JSON.parse(JSON.stringify(err))
                    console.log(error, 'ERRROR', err)
                })
        }
    }


    deleteBooking(_id) {
        if (_id != undefined) {
            this.setState({
                loader: !this.state.loader
            })
            let idsCloneData = { _id: _id }
            var options = {
                method: 'POST',
                url: `${this.props.bseUrl}/bookings/deleteBooking/`,
                headers:
                {
                    'cache-control': 'no-cache',
                    "Allow-Cross-Origin": '*',
                },
                data: idsCloneData
            }
            axios(options)
                .then(result => {
                    let data = result.data
                    console.log(data, "Delete_Booking")
                    this.setState({
                        loader: !this.state.loader
                    })
                    Actions.AppContainer({ rout: "Appointments" })
                })
                .catch(err => {
                    let error = JSON.parse(JSON.stringify(err))
                    console.log(error, 'ERRROR', err)
                    this.setState({
                        loader: !this.state.loader
                    })
                })
        }
    }

    render() {
        const { service } = this.props
        const { selectedService, totalCost, loader } = this.state

        console.log(service, totalCost, "DELETEBOOKING")
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
                    <ScrollView
                        contentContainerStyle={styles.contentContainer}
                    >

                        <View style={{ width: "90%", marginHorizontal: "5%" }}>
                            <View style={{
                                flex: 1, justifyContent: "center", alignItems: "center", marginTop: 10,
                                backgroundColor: "#F7F7F7"
                            }} >
                                <View style={{ flex: 1, width: "90%", flexDirection: "row", height: 80 }}>
                                    {
                                        (service.stylistId.coverImage != null) ? (
                                            <Image source={{ uri: service.stylistId.coverImage }} resizeMode="cover"
                                                style={{ width: 80, height: 80, borderRadius: 20 }}
                                            />
                                        ) : <Image source={require('../../../../assets/nophoto.jpg')} resizeMode="cover"
                                            style={{ width: 80, height: 80, borderRadius: 20 }}
                                            />
                                    }
                                    <View style={{ marginLeft: 20, justifyContent: "center", }}>
                                        <Text style={{ fontSize: 20 }}>{service.stylistId.fullname}</Text>
                                        <Text style={{ fontSize: 15 }}>{service.shopId.businessName}</Text>
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
                                            <Text >{moment(service.bookingDateTime).format("dddd, MMMM Do YYYY")}</Text>
                                            <View style={{ flexDirection: "row", }}>
                                                <Text style={{ fontWeight: "bold" }}>{moment(service.bookingHour, ["h:mm A"]).format("h:mm A")}</Text>
                                                {
                                                    (service.bookingStatus === "Approved") ? (
                                                        <Text style={{ fontWeight: "bold", marginLeft: 10, color: "green" }}>{service.bookingStatus}</Text>
                                                    ) : null
                                                }
                                                {
                                                    (service.bookingStatus === "Cancled") ? (
                                                        <Text style={{ fontWeight: "bold", marginLeft: 10, color: "red" }}>{service.bookingStatus}</Text>
                                                    ) : null
                                                }
                                                {
                                                    (service.bookingStatus === "Pending") ? (
                                                        <Text style={{ fontWeight: "bold", marginLeft: 10, color: "orange" }}>{service.bookingStatus}</Text>
                                                    ) : null
                                                }
                                            </View>
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
                                            <Text >{service.shopId.addressLine1}</Text>
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
                                        <Text >Fees</Text>
                                        <Text >{totalCost} $</Text>
                                    </View>
                                </View>
                            </View>

                            <Text style={{ marginTop: 20 }}>Service Details</Text>

                            {
                                (selectedService.length) ? (
                                    selectedService.map((key, index) => {
                                        return (
                                            <View key={index}
                                                style={{
                                                    flex: 1, justifyContent: "center", alignItems: "center", marginTop: 20, width: "100%",
                                                    backgroundColor: "white"
                                                }}
                                            >
                                                {
                                                    service.package != true ?
                                                        <>
                                                            <View style={{ flex: 1, width: "90%", flexDirection: "row", height: 80, borderBottomColor: "#EFEFF4", borderBottomWidth: 0.5 }}>
                                                                <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                                                                    <View style={{ marginLeft: 0 }}>
                                                                        <Text style={{ fontWeight: "bold", color: "#A3B8CB" }}>Service</Text>
                                                                        <Text >{key.serviceName}</Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                            {
                                                                (key.extraServices.length != 0) ? (
                                                                    <View style={{ flex: 1, width: "90%", flexDirection: "row", height: 80, borderBottomColor: "#EFEFF4", borderBottomWidth: 0.5 }}>
                                                                        <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                                                                            <View style={{ marginLeft: 0 }}>
                                                                                <Text style={{ fontWeight: "bold", color: "#A3B8CB" }}>Extra Service</Text>
                                                                                {
                                                                                    key.extraServices.map((keys, index) => {
                                                                                        return (
                                                                                            <Text key={index} >{keys.serviceName}</Text>
                                                                                        )
                                                                                    })}
                                                                            </View>
                                                                        </View>
                                                                    </View>
                                                                ) : null
                                                            }


                                                        </>
                                                        : <View style={{ flex: 1, width: "90%", flexDirection: "row", borderBottomColor: "#EFEFF4", borderBottomWidth: 0.5, padding: 8 }}>
                                                            <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                                                                <View style={{ marginLeft: 0 }}>
                                                                    <Text style={{ fontWeight: "bold", color: "#A3B8CB" }}>Package</Text>
                                                                    <Text>{key.packageName}</Text>
                                                                    <Text>{key.packageDescription}</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                }
                                            </View>
                                        )
                                    })
                                ) : <ActivityIndicator color="orange" />
                            }

                            {
                                loader != true ?
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.deleteBooking(service._id)
                                        }}
                                        style={{
                                            backgroundColor: "red",
                                            height: 35, marginTop: 20,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: 35
                                        }}>
                                        <Text style={{ color: "white", fontWeight: "bold" }}>Delete Booking</Text>
                                    </TouchableOpacity> :
                                    <View
                                        style={{
                                            backgroundColor: "red",
                                            height: 35, marginTop: 20,
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: 35
                                        }}>
                                        <ActivityIndicator color="white" />
                                    </View>
                            }


                        </View>
                    </ScrollView>
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
export default connect(mapStateToProps, mapDispatchToProps)(AppointmentDetails);

const styles = StyleSheet.create({
    contentContainer: {
        // flex: 1,
        width: "100%",
        paddingBottom: 40,
        // backgroundColor: "white",
        backgroundColor: "#F6F6F6"

    },
});