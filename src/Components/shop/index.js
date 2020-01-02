import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity,
    ScrollView, Image, SafeAreaView,

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

class shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeColor: "about"
        }
    }

    componentDidMount() {
        let urlMgetworkinghours = `${this.props.bseUrl}/workinghour/getworkinghours/${this.props.shop._id}`
        axios({
            method: 'get',
            url: urlMgetworkinghours,
        })
            .then(result => {
                let data = result.data.data[0].workingHours
                let day = result.data.day
                // console.log(data, day, "DATA_FROM_API")
                let workingtime;
                if (data && data.length != 0) {
                    // Current day sorting
                    var resultCurrentDay = data.filter(function (obj) {
                        return obj.day === day;
                    })
                    if (resultCurrentDay[0].openTime < new Date().toLocaleTimeString('en-GB') && resultCurrentDay[0].closeTime > new Date().toLocaleTimeString('en-GB')) {
                        // console.log("STATUS_OPEN")
                        workingtime = true
                    }
                    else {
                        workingtime = false
                        // console.log("STATUS_CLOSE")
                    }
                }
                this.setState({
                    workingtime: workingtime,
                    workingHours: data,
                    isloader: false
                })
            })
            .catch(err => {
                if (err.response.status === 409) {
                    console.log(err.response.data.message, "ERROR_ON_GET_WORKING_HOURS")
                }
                else{
                    alert(err.response.data.message)
                }
            })

        let urlMservicesget = `${this.props.bseUrl}/servicesget/${this.props.shop._id}`
        axios({
            method: 'get',
            url: urlMservicesget,
        })
            .then(result => {
                let data = result.data.data
                // console.log(data, "DATA_FROM_API")
                if (data && data.length != 0) {
                    // Hair styles sorting
                    var resultHairStyles = data.filter(function (obj) {
                        return obj.serviceCatogery === "Hair Styles";
                    })
                }
                this.setState({
                    services: data,
                    hairStyles: resultHairStyles,
                    isloader: false
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

        let urlMpackagesget = `${this.props.bseUrl}/packagesandoffersget/${this.props.shop._id}`
        axios({
            method: 'get',
            url: urlMpackagesget,
        })
            .then(result => {
                let data = result.data.data
                // console.log(data, "DATA_FROM_API")
                this.setState({
                    packages: data,
                    isloader: false
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

        let urlMgalleryget = `${this.props.bseUrl}/galleryget/${this.props.shop._id}`
        axios({
            method: 'get',
            url: urlMgalleryget,
        })
            .then(result => {
                let data = result.data.data
                // console.log(data, "DATA_FROM_API")
                this.setState({
                    gallery: data,
                    isloader: false
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
        const { activeColor, workingtime, workingHours, services, packages, hairStyles, gallery } = this.state
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
                            (hairStyles) ? (
                                <View style={{
                                    paddingHorizontal: 35
                                }}>
                                    <View>
                                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Stylist</Text>
                                    </View>
                                </View>
                            ) : null
                        }

                        <ScrollView horizontal style={{ marginVertical: 15 }} showsHorizontalScrollIndicator={false}>
                            {
                                (hairStyles) ? (
                                    hairStyles.map((key, index) => {
                                        return (
                                            <TouchableOpacity key={index} style={{
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
                                                <Text style={{ marginTop: 5, fontSize: 10, color: "#8E8E93", textAlign: "right", }}>{key.serviceName}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                ) : null
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
            </View>
        );
    }
}


const styles = StyleSheet.create({
    holder: {
        flex: 0.25,
        justifyContent: 'center',
    },
    contentContainer: {
        paddingBottom: 60,
        backgroundColor: "white",

    },
    container: {
        flex: 0.35,
        backgroundColor: "black"
    },
    containerForModal: {
        // flex: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        // width:"100%"
    },
    textareaContainer: {
        height: "30%",
        width: "95%",
        padding: 5,
        // backgroundColor: '#F8F8F8',
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 100,
        fontSize: 14,
        // color: '#333',
    },
    customSlide: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    customImage: {
        width: "100%",
        height: "100%",
    },
    listView: {
        width: "100%", height: 40, marginTop: 15,
        borderBottomWidth: 0.5, borderBottomColor: "#BEBCBC",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    listTextOption: {
        marginLeft: 10, color: "#000", fontWeight: "bold", fontSize: 12
    },
    listTextOptionValue: {
        marginLeft: 10, color: "#6a6a6a", textAlign: "right",
    },
    input: { justifyContent: 'center', alignItems: 'center', width: '95%', },
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

