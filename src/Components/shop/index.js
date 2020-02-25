import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    ScrollView, Image, SafeAreaView, ActivityIndicator

} from 'react-native';
import { connect } from "react-redux";
import { Tabs, Tab, TabHeading } from 'native-base';
import About from '../shop/about';
import Services from '../shop/services';
import Gallery from '../shop/gallery';
import Review from '../shop/Review';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
// import moment from 'moment';

class shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeColor: "about",
            workingtime: true
        }
    }

    componentDidMount() {
        this.getWorkingHours()
        this.getGallery()
        this.getStylists()
        this.getServices()
        this.getSpecialPack()
    }

    getStylists() {
        let urlm = `${this.props.bseUrl}/stylist/${this.props.shop._id}`
        axios({
            method: 'get',
            url: urlm,
        })
            .then(result => {
                let data = result.data.data
                // console.log(data, "DATA_FROM_API_STYLISTS")
                this.setState({
                    stylists: data
                })
            })
            .catch(err => {
                if (err.response.status === 409) {
                    console.log(err.response.data.message, "ERROR_ON_GET_GALLERY")
                }
                else {
                    alert(err.response.data.message)
                }
            })

    }

    getGallery() {
        let urlMgalleryget = `${this.props.bseUrl}/galleryget/${this.props.shop._id}`
        axios({
            method: 'get',
            url: urlMgalleryget,
        })
            .then(result => {
                let data = result.data.data
                // console.log(data, "DATA_FROM_API_GALLERY")
                this.setState({
                    gallery: data,
                })
            })
            .catch(err => {
                if (err.response.status === 409) {
                    console.log(err.response.data.message, "ERROR_ON_GET_GALLERY")
                }
                else {
                    alert(err.response.data.message)
                }
            })
    }

    getWorkingHours() {
        let urlMgetworkinghours = `${this.props.bseUrl}/workinghours/${this.props.shop._id}`
        axios({
            method: 'get',
            url: urlMgetworkinghours,
        })
            .then(result => {
                let data = result.data.workingHours
                // console.log(data, "DATA_FROM_API_WORKING_HOURS")
                var d = new Date();
                var weekday = new Array(7);
                weekday[0] = "sunday";
                weekday[1] = "monday";
                weekday[2] = "tuesday";
                weekday[3] = "wednesday";
                weekday[4] = "thursday";
                weekday[5] = "friday";
                weekday[6] = "saturday";
                let day = weekday[d.getDay()];

                let shopOpenTime = data[day].openTimings;
                let shopCloseTime = data[day].closingTime;

                // var time = new Date().getHours();
                var time = new Date().toLocaleString('en-GB', { hour: 'numeric', minute: 'numeric', hour12: true });
                // console.log(shopOpenTime, time, shopCloseTime, time, "Data")
                // console.log(shopOpenTime > time, shopCloseTime > time, "Check_time")

                // let workingtime;
                // if (data[day].openTimings < new Date().toLocaleTimeString('en') && data[day].closingTime > new Date().toLocaleTimeString('en')) {
                //     console.log("STATUS_OPEN")
                //     workingtime = true
                // }
                // else {
                //     console.log("STATUS_CLOSE")
                //     workingtime = false
                // }

                // console.log(workingtime, "STATUS")

                let workingHoursArr = []
                workingHoursArr.push(data.monday)
                workingHoursArr.push(data.tuesday)
                workingHoursArr.push(data.wednesday)
                workingHoursArr.push(data.thursday)
                workingHoursArr.push(data.friday)
                workingHoursArr.push(data.saturday)
                workingHoursArr.push(data.sunday)

                this.setState({
                    // workingtime: workingtime,
                    workingHours: workingHoursArr,
                })

            })
            .catch(err => {
                if (err.response.status === 409) {
                    console.log(err.response.data.message, "ERROR_ON_GET_WORKING_HOURS")
                }
                else {
                    alert(err.response.data.message)
                }
            })

    }

    getServices() {
        let urlm = `${this.props.bseUrl}/servicesget/${this.props.shop._id}`
        axios({
            method: 'get',
            url: urlm,
        })
            .then(result => {
                let data = result.data.data
                // console.log(data, "DATA_FROM_API_SERVICES")
                this.setState({
                    services: data,
                })
            })
            .catch(err => {
                if (err.response.status === 409) {
                    console.log(err.response.data.message, "ERROR_ON_GET_SERVICES")
                }
                else {
                    alert(err.response.data.message)
                }
            })
    }

    getSpecialPack() {
        let urlMpackagesget = `${this.props.bseUrl}/packagesandoffersget/${this.props.shop._id}`
        axios({
            method: 'get',
            url: urlMpackagesget,
        })
            .then(result => {
                let data = result.data.data
                // console.log(data, "DATA_FROM_API_SPECIAL_PACK")
                this.setState({
                    packages: data,
                })
            })
            .catch(err => {
                if (err.response.status === 409) {
                    console.log(err.response.data.message, "ERROR_ON_GET_PACKAGES")
                }
                else {
                    alert(err.response.data.message)
                }
            })
    }

    activeColor(key) {
        if (key.ref.key == ".0") {
            this.setState({
                activeColor: "about"
            })
        }
        if (key.ref.key == ".1") {
            this.setState({
                activeColor: "services"
            })
        }
        if (key.ref.key == ".2") {
            this.setState({
                activeColor: "gallery"
            })
        }
        if (key.ref.key == ".3") {
            this.setState({
                activeColor: "review"
            })
        }
    }

    render() {
        const { activeColor, workingtime, workingHours, services, packages, stylists, gallery, } = this.state
        let { shop } = this.props
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView style={styles.container} >
                    {
                        (shop.coverImage != null) ? (
                            <Image source={{ uri: shop.coverImage }} resizeMode="cover"
                                style={{ width: "100%", height: 250 }} />
                        ) : <Image source={require('../../../assets/nophoto.jpg')} resizeMode="cover"
                            style={{ width: "100%", height: 250 }} />
                    }

                    <TouchableOpacity onPress={() => Actions.pop()}
                        style={{ width: 25, position: 'absolute', top: 0, left: 30, right: 0, bottom: 130, justifyContent: "center" }}>
                        <Ionicons name="ios-arrow-back" style={{ color: "#fff", fontWeight: 'bold', fontSize: 28 }} />
                    </TouchableOpacity>

                    <View style={{ width: 230, position: 'absolute', top: "35%", left: 30, right: 0, bottom: 0, justifyContent: "center", }}>
                        <Text style={{ color: "#fff", fontSize: 18 }}>{shop.businessName}</Text>
                        <Text style={{ color: "#fff", fontSize: 14 }}>{shop.addressLine1}</Text>
                    </View>

                    <View style={{ position: 'absolute', top: "80%", left: 30, bottom: 0, marginTop: 5, justifyContent: "center", flexDirection: "row" }}>
                        <Entypo name="star" style={{ color: "#EBAC43", fontWeight: 'bold', fontSize: 16 }} />
                        <Entypo name="star" style={{ color: "#EBAC43", fontWeight: 'bold', fontSize: 16 }} />
                        <Entypo name="star" style={{ color: "#EBAC43", fontWeight: 'bold', fontSize: 16 }} />
                        <Entypo name="star" style={{ color: "#EBAC43", fontWeight: 'bold', fontSize: 16 }} />
                        <Entypo name="star" style={{ color: "#fff", fontWeight: 'bold', fontSize: 16 }} />
                    </View>

                    {
                        (workingtime === true) ? (
                            <View style={{ borderColor: "#16BE4E", borderWidth: 1, borderRadius: 4, justifyContent: "center", alignItems: "center", position: 'absolute', right: 20, bottom: 20, height: 30, width: 65, justifyContent: "center" }}>
                                <Text style={{ color: "#16BE4E", fontSize: 14 }}>Open</Text>
                            </View>
                        ) : <View style={{ borderColor: "red", borderWidth: 1, borderRadius: 4, justifyContent: "center", alignItems: "center", position: 'absolute', right: 20, bottom: 20, height: 30, width: 65, justifyContent: "center" }}>
                                <Text style={{ color: "red", fontSize: 14 }}>Close</Text>
                            </View>
                    }

                </SafeAreaView>

                <View style={{ flex: 0.65, backgroundColor: "#fff" }}>
                    <ScrollView contentContainerStyle={styles.contentContainer}>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: "10%", paddingVertical: "5%" }}>
                            <View>
                                <Image
                                    resizeMode="contain"
                                    source={require("../../../assets/Group55286.png")}
                                    style={{ width: 45, height: 45 }}
                                />
                            </View>
                            <View>
                                <Image
                                    resizeMode="contain"
                                    source={require("../../../assets/Group55287.png")}
                                    style={{ width: 45, height: 45 }}
                                />
                            </View>
                            <View>
                                <Image
                                    resizeMode="contain"
                                    source={require("../../../assets/Group55288.png")}
                                    style={{ width: 45, height: 45 }}
                                />
                            </View>
                        </View>
                        {
                            (stylists) ? (
                                <View style={{
                                    paddingHorizontal: 35
                                }}>
                                    <View>
                                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Stylist</Text>
                                    </View>
                                </View>
                            ) : null
                        }

                        <ScrollView horizontal
                            contentContainerStyle={{ flexGrow: 1 }}
                            showsHorizontalScrollIndicator={false}
                            style={{
                                marginVertical: 15,
                                width: "100%",
                                // backgroundColor: "orange"
                            }}>

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
                                                onPress={() => Actions.BarberDetails({ barberDetails: key, shop: shop })}
                                            >
                                                <View style={{
                                                    height: 75,
                                                    width: 75,
                                                    borderRadius: 50,
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    backgroundColor: "white",
                                                    borderColor: "#FD6958",
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

                        <Tabs
                            onChangeTab={(key) => this.activeColor(key)}
                            locked={true}
                            tabBarUnderlineStyle={{ backgroundColor: '#FD6958' }}
                        >
                            {/* //About// */}
                            <Tab
                                heading={
                                    <TabHeading
                                        style={{ flexDirection: "column", backgroundColor: "white" }}
                                    >
                                        <Text style={{ color: activeColor === "about" ? "#FD6958" : "black" }}>About</Text>
                                    </TabHeading>}
                            >
                                <About shop={shop} workingHours={workingHours} gallery={gallery} />
                            </Tab>

                            {/* //Services// */}
                            <Tab
                                heading={
                                    <TabHeading
                                        style={{ flexDirection: "column", backgroundColor: "white" }}
                                    >
                                        <Text style={{ color: activeColor === "services" ? "#FD6958" : "black" }}>Services</Text>
                                    </TabHeading>
                                }
                            >
                                <View>
                                    <Services shop={shop} services={services} packages={packages} />
                                </View>
                            </Tab>

                            {/* //Gallery// */}
                            <Tab
                                heading={
                                    <TabHeading
                                        style={{ flexDirection: "column", backgroundColor: "white" }}
                                    >
                                        <Text style={{ color: activeColor === "gallery" ? "#FD6958" : "black" }}>Gallery</Text>
                                    </TabHeading>
                                }
                            >
                                <View>
                                    <Gallery shop={shop} gallery={gallery} />
                                </View>
                            </Tab>

                            {/* //Review// */}
                            <Tab
                                heading={
                                    <TabHeading
                                        style={{ flexDirection: "column", backgroundColor: "white" }}
                                    >
                                        <Text style={{ color: activeColor === "review" ? "#FD6958" : "black" }}>Review</Text>
                                    </TabHeading>
                                }
                            >
                                <View>
                                    <Review shop={shop} />
                                </View>
                            </Tab>
                        </Tabs>
                    </ScrollView>
                </View>
            </View >
        );
    }
}


const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 60,
        backgroundColor: "white",

    },
    container: {
        flex: 0.35,
        backgroundColor: "black"
    },
    // holder: {
    //     flex: 0.25,
    //     justifyContent: 'center',
    // },
    // containerForModal: {
    //     // flex: 1,
    //     padding: 30,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     // width:"100%"
    // },
    // textareaContainer: {
    //     height: "30%",
    //     width: "95%",
    //     padding: 5,
    //     // backgroundColor: '#F8F8F8',
    // },
    // textarea: {
    //     textAlignVertical: 'top',  // hack android
    //     height: 100,
    //     fontSize: 14,
    //     // color: '#333',
    // },
    // customSlide: {
    //     backgroundColor: 'white',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // customImage: {
    //     width: "100%",
    //     height: "100%",
    // },
    // listView: {
    //     width: "100%", height: 40, marginTop: 15,
    //     borderBottomWidth: 0.5, borderBottomColor: "#BEBCBC",
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    // },
    // listTextOption: {
    //     marginLeft: 10, color: "#000", fontWeight: "bold", fontSize: 12
    // },
    // listTextOptionValue: {
    //     marginLeft: 10, color: "#6a6a6a", textAlign: "right",
    // },
    // input: { justifyContent: 'center', alignItems: 'center', width: '95%', },
});



let mapStateToProps = state => {
    return {
        bseUrl: state.root.bseUrl,
    };
};
function mapDispatchToProps(dispatch) {
    return ({
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(shop);

