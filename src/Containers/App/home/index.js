import React, { Component } from "react";
import { View, Image, StyleSheet, ImageBackground, TouchableOpacity, Text, TextInput, ScrollView, Alert, } from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import { setNearByShops, setFavShops } from "../../../Store/Action/action";
import axios from 'axios';
//icons import
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

// import icon1 from '../../../../assets/services/haircut.png';
// import icon2 from '../../../../assets/services/coloring.png';
// import icon3 from '../../../../assets/services/styling.png';
// import icon4 from '../../../../assets/services/hairdryer.png';
// import icon5 from '../../../../assets/services/hairspa.png';
// import icon6 from '../../../../assets/services/shampo.png';
// import icon7 from '../../../../assets/services/shaving.png';
// import icon8 from '../../../../assets/services/more.png';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: [],
            allServicesNames: [],
            nearByShops: [],
            bestBarberShops: [],
            packages: [],
            hairStyles: [],
        };
    }

    UNSAFE_componentWillMount() {
        console.log(this.props, "USER_CURRENT_LOCATION")
        this.getNeabyShops()
        this.getBestBarbershops()
        this.getPackages()
        // this.getHairStyles()
        this.getAllServices()
        // this.getMultipleShopWithId()
        // this.getFavShops()
    }

    // getFavShops() {
    //     let urlm = `${this.props.bseUrl}/favorites/${this.props.userProfile._id}`
    //     axios({
    //         method: 'get',
    //         url: urlm,
    //     })
    //         .then(result => {
    //             let data = result.data.data[0].favrouiteIds
    //             console.log(data, "FAV_ON_HOME")
    //             this.props.setFavShops(data)
    //         })
    //         .catch(err => {
    //             if (err.response.status === 409) {
    //                 console.log(err.response.data.message, "ERROR_ON_GET_Fav")
    //             }
    //             else {
    //                 alert(err.response.data.message)
    //             }
    //         })

    // }


    getNeabyShops() {
        const { currentLocation } = this.props
        if (currentLocation != null) {
            let cloneLocation = {
                lat: currentLocation.coords.latitude,
                long: currentLocation.coords.longitude,
                km: 15,
            }
            var options = {
                method: 'POST',
                url: `${this.props.bseUrl}/getallshops/`,
                headers:
                {
                    'cache-control': 'no-cache',
                    "Allow-Cross-Origin": '*',
                },
                data: cloneLocation
            }
            axios(options)
                .then(result => {
                    let nearByShops = result.data.data
                    // console.log(nearByShops, "Fetch_Shops_NearBy")
                    this.props.setNearByShops(nearByShops)
                    this.setState({
                        nearByShops: nearByShops,
                    })
                })
                .catch(err => {
                    let error = JSON.parse(JSON.stringify(err))
                    console.log(error, 'ERRROR', err)
                    this.setState({
                        err: error,
                    })
                })

        }
    }

    getBestBarbershops() {
        var options = {
            method: 'GET',
            url: `${this.props.bseUrl}/getallshops/getAllShops`,
            headers:
            {
                'cache-control': 'no-cache',
                "Allow-Cross-Origin": '*',
            },
        }
        axios(options)
            .then(result => {
                let bestBarberShops = result.data.data
                // console.log(bestBarberShops, "Fetch_Best_Shops")
                this.setState({
                    bestBarberShops: bestBarberShops,
                })
            })
            .catch(err => {
                let error = JSON.parse(JSON.stringify(err))
                console.log(error, 'ERRROR', err)
                this.setState({
                    err: error,
                })
            })

    }

    getPackages() {
        var options = {
            method: 'GET',
            url: `${this.props.bseUrl}/getNearbyShopServices/getAllPackage`,
            headers:
            {
                'cache-control': 'no-cache',
                "Allow-Cross-Origin": '*',
            },
        }
        axios(options)
            .then(result => {
                let packages = result.data.data
                // console.log(packages, "Fetch_Packages")
                this.setState({
                    packages: packages,
                })
            })
            .catch(err => {
                let error = JSON.parse(JSON.stringify(err))
                console.log(error, 'ERRROR', err)
                this.setState({
                    err: error,
                })
            })

    }

    // getHairStyles() {
    //     var options = {
    //         method: 'GET',
    //         url: `${this.props.bseUrl}/getNearbyShopServices/getAllHairsyles`,
    //         headers:
    //         {
    //             'cache-control': 'no-cache',
    //             "Allow-Cross-Origin": '*',
    //         },
    //     }
    //     axios(options)
    //         .then(result => {
    //             let hairStyles = result.data.data
    //             console.log(hairStyles, "Fetch_HairStyles")
    //             const sortedData = hairStyles.filter(hairStyles => hairStyles.serviceName === "Hair Style");
    //             console.log(sortedData, "AfteSorting_HairStyles");
    //             this.setState({
    //                 hairStyles: sortedData,
    //             })
    //         })
    //         .catch(err => {
    //             let error = JSON.parse(JSON.stringify(err))
    //             console.log(error, 'ERRROR', err)
    //             this.setState({
    //                 err: error,
    //             })
    //         })
    // }


    getShopWithId(_id) {
        console.log(_id, "USERID")
        var options = {
            method: 'GET',
            url: `${this.props.bseUrl}/getallshops/getShopWithId/${_id}`,
            headers:
            {
                'cache-control': 'no-cache',
                "Allow-Cross-Origin": '*',
            },

        }
        axios(options)
            .then(result => {
                let shopwithid = result.data.data
                // console.log(shopwithid, "Fetch_shops_withID")
                Actions.Shop({ shop: shopwithid[0] })
            })
            .catch(err => {
                let error = JSON.parse(JSON.stringify(err))
                console.log(error, 'ERRROR', err)
                this.setState({
                    err: error,
                })
            })

    }


    getMultipleShopWithId(shopid) {
        if (shopid.length) {
            cloneData = {
                shopid: shopid
            }
            var options = {
                method: 'POST',
                url: `${this.props.bseUrl}/getallshops/getMultipleShopWithId/`,
                headers:
                {
                    'cache-control': 'no-cache',
                    "Allow-Cross-Origin": '*',
                },
                data: cloneData
            }
            axios(options)
                .then(result => {
                    let shops = result.data.data
                    console.log(shops, "Fetch_multiple_shops_withID")
                    Actions.SearchResults({ shops: shops, headerTitle: "Top Services" })

                })
                .catch(err => {
                    let error = JSON.parse(JSON.stringify(err))
                    console.log(error, 'ERRROR', err)
                    this.setState({
                        err: error,
                    })
                })
        }
        else {
            Alert.alert("There is no data")
        }

    }


    getAllServices() {
        let urlM = `${this.props.bseUrl}/getallshops/getAllService`
        axios({
            method: 'get',
            url: urlM,
        })
            .then(result => {
                let allServices = result.data.data
                let Haircut = []
                let Coloring = []
                let Styling = []
                let Hairdryer = []
                let Hairspa = []
                let Shampoo = []
                let Shaving = []
                let More = []
                for (let index = 0; index < allServices.length; index++) {
                    const service = allServices[index];
                    const serviceName = allServices[index].serviceName;
                    if (serviceName === "Haircut") {
                        if (Haircut.indexOf(service.userId) == -1) {
                            Haircut.push(service.userId)
                        }
                    }
                    if (serviceName === "Coloring") {
                        if (Coloring.indexOf(service.userId) == -1) {
                            Coloring.push(service.userId)
                        }
                    }
                    if (serviceName === "Styling") {
                        if (Styling.indexOf(service.userId) == -1) {
                            Styling.push(service.userId)
                        }
                    }
                    if (serviceName === "Hairdryer") {
                        if (Hairdryer.indexOf(service.userId) == -1) {
                            Hairdryer.push(service.userId)
                        }
                    }
                    if (serviceName === "Hairspa") {
                        if (Hairspa.indexOf(service.userId) == -1) {
                            Hairspa.push(service.userId)
                        }
                    }
                    if (serviceName === "Shampoo") {
                        if (Shampoo.indexOf(service.userId) == -1) {
                            Shampoo.push(service.userId)
                        }
                    }
                    if (serviceName === "Shaving") {
                        if (Shaving.indexOf(service.userId) == -1) {
                            Shaving.push(service.userId)
                        }
                    }
                    else {
                        More.push(service)
                    }
                }

                // console.log(
                //     Haircut,
                //     Coloring,
                //     Styling,
                //     Hairdryer,
                //     Hairspa,
                //     Shampoo,
                //     Shaving,
                //     More, "Fetch_services_after_soorting"
                // )

                this.setState({
                    Haircut,
                    Coloring,
                    Styling,
                    Hairdryer,
                    Hairspa,
                    Shampoo,
                    Shaving,
                    More,

                })
            })
            .catch(err => {
                let error = JSON.parse(JSON.stringify(err))
                console.log(error, 'ERRROR', err)
                this.setState({
                    err: error,
                })
            })
    }

    render() {
        let { fullName } = this.props.userProfile
        let { nearByShops, bestBarberShops, packages, hairStyles,
            Haircut,
            Coloring,
            Styling,
            Hairdryer,
            Hairspa,
            Shampoo,
            Shaving,
            More,
        } = this.state
        // let images = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8]

        return (
            <View style={{
                flex: 1,
                width: "100%",
                alignItems: "center",
                backgroundColor: "white",
            }}>
                <View style={{
                    height: 120,
                    width: "95%",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "yellow",
                }}>
                    <View style={{ width: "100%", marginTop: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "left" }}>{fullName}</Text>
                    </View>


                    <View style={{ width: "105%", top: -5, justifyContent: "center", alignItems: "center", flex: 1, flexDirection: "row" }}>
                        <View style={{
                            flex: 8, flexDirection: "row", justifyContent: "center", alignItems: "center",
                            // backgroundColor: "orange"
                        }}>

                            <View style={{
                                flex: 1,
                                justifyContent: "center", alignItems: "center",
                                // backgroundColor: "green",
                            }}>
                                <Image source={require('../../../../assets/Path27909.png')} resizeMode="contain"
                                    style={{ height: "50%", width: "50%", }}
                                />
                            </View>

                            <View style={{
                                flex: 8
                            }}>
                                <Text style={{ textAlign: "left" }}>Your Location</Text>
                            </View>
                        </View>

                        <View style={{
                            flex: 3, justifyContent: "center", alignItems: "center", flexDirection: "row",
                            // backgroundColor: "green"
                        }}>
                            <TouchableOpacity
                                onPress={() => Actions.Googlemapfullview()}
                                style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Entypo name="direction" style={{ color: "#FD6958", fontWeight: 'bold', fontSize: 20 }} />
                                <Text style={{ color: "#FD6958" }}>CHANGE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                        style={{
                            flex: 1, flexDirection: "row",
                            width: "100%", height: 40,
                            borderRadius: 10,
                            justifyContent: "center", alignItems: "center",
                            backgroundColor: "#E8E6E7",
                        }}
                    >

                        <View
                            style={{ width: "5%", borderColor: 'gray', backgroundColor: "#E8E6E7", justifyContent: "center", alignItems: "center", }}
                        >
                            <AntDesign name="search1" style={{ marginLeft: "3%", color: '#909090', fontWeight: 'bold', fontSize: 15 }} />
                        </View>

                        <View
                            style={{ width: "80%", borderColor: 'gray', backgroundColor: "#E8E6E7", justifyContent: "center", alignItems: "center", }}
                        >
                            <TextInput
                                // keyboardType={"numeric"}
                                style={{ width: "90%", }}
                                // onChangeText={text => onChangeText(text)}
                                value={this.state.email}
                                placeholder={"Search"}
                            />
                        </View>

                    </View>
                </View>

                <View style={{
                    flex: 8,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "red",
                }}>
                    <ScrollView
                        contentContainerStyle={{}}
                        style={{ width: "95%" }}
                    >
                        <View style={{
                            width: "95%", marginTop: 10,
                            // backgroundColor: "green"
                        }}>
                            <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Top Services</Text>
                        </View>

                        <View style={{
                            width: "100%",
                            height: 180,
                            flex: 1,
                            flexDirection: "row", flexWrap: "wrap",
                            justifyContent: "center", alignItems: "center",
                            // backgroundColor: "yellow"
                        }}>
                            {/* 
                            {
                                (allServicesNames.length = !0) ? (
                                    allServicesNames.map((key, index) => {
                                        return (
                                            <TouchableOpacity key={index} style={styles.iconsStyle}>
                                                <Image
                                                    // source={images[Math.floor(Math.random() * allServicesNames.length)]}
                                                    source={images[0]}
                                                    resizeMode="contain"
                                                    style={{ width: 40, height: 40, }}
                                                />
                                            </TouchableOpacity>
                                        )
                                    })
                                ) : null

                            } */}



                            {/* {
                                (allServicesNames.length = !0) ? (
                                    [0, 1, 2, 3, 4, 5, 6, 7,].map((key, index) => {
                                        return (
                                            <TouchableOpacity key={index} style={styles.iconsStyle}>
                                                <Image
                                                    // source={images[Math.floor(Math.random() * allServicesNames.length)]}
                                                    source={images[0]}
                                                    resizeMode="contain"
                                                    style={{ width: "100%", height: "100%", }}
                                                />
                                            </TouchableOpacity>
                                        )
                                    })
                                ) : null

                            } */}

                            <TouchableOpacity style={styles.iconsStyle}
                                onPress={() => { this.getMultipleShopWithId(Haircut) }}
                            >
                                <Image source={require('../../../../assets/services/haircut.png')} resizeMode="contain"
                                    style={{ width: "100%", height: "100%", }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.iconsStyle}
                                onPress={() => { this.getMultipleShopWithId(Coloring) }}
                            >
                                <Image source={require('../../../../assets/services/coloring.png')} resizeMode="contain"
                                    style={{ width: "100%", height: "100%", }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.iconsStyle}
                                onPress={() => { this.getMultipleShopWithId(Styling) }}
                            >
                                <Image source={require('../../../../assets/services/styling.png')} resizeMode="contain"
                                    style={{ width: "100%", height: "100%", }}
                                />
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.iconsStyle}
                                onPress={() => { this.getMultipleShopWithId(Hairdryer) }}
                            >
                                <Image source={require('../../../../assets/services/hairdryer.png')} resizeMode="contain"
                                    style={{ width: "100%", height: "100%", }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.iconsStyle}
                                onPress={() => { this.getMultipleShopWithId(Hairspa) }}
                            >
                                <Image source={require('../../../../assets/services/hairspa.png')} resizeMode="contain"
                                    style={{ width: "100%", height: "100%", }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.iconsStyle}
                                onPress={() => { this.getMultipleShopWithId(Shampoo) }}
                            >
                                <Image source={require('../../../../assets/services/shampo.png')} resizeMode="contain"
                                    style={{ width: "100%", height: "100%", }}
                                />
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.iconsStyle}
                                onPress={() => { this.getMultipleShopWithId(Shaving) }}
                            >
                                <Image source={require('../../../../assets/services/shaving.png')} resizeMode="contain"
                                    style={{ width: "100%", height: "100%", }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.iconsStyle}
                                onPress={() => Actions.ServiceListing({ More, headerTitle: "More Services" })}
                            >
                                <Image source={require('../../../../assets/services/more.png')} resizeMode="contain"
                                    style={{ width: "100%", height: "100%", }}
                                />
                            </TouchableOpacity>
                        </View>
                        {
                            (nearByShops && nearByShops != 0) ? (
                                <View style={{
                                    width: "95%", marginTop: 10, flex: 1, flexDirection: "row",
                                    // backgroundColor: "green"
                                }}>
                                    <TouchableOpacity style={{ flex: 1 }}
                                    // onPress={() => Actions.SearchResults()}
                                    >
                                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Nearby Barbershops</Text>
                                    </TouchableOpacity>
                                    <View style={{ flex: 1 }}>
                                        {/* <TouchableOpacity>
                                            <Text style={{ fontSize: 16, color: "#8E8E93", textAlign: "right", }}>View All</Text>
                                        </TouchableOpacity> */}
                                    </View>
                                </View>
                            ) : null
                        }

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {
                                (nearByShops && nearByShops != 0) ? (
                                    nearByShops.map((key, index) => {
                                        return (
                                            <TouchableOpacity key={index} style={{
                                                margin: 10,
                                                flexDirection: "row",
                                                marginBottom: 20,
                                                height: 170,
                                                width: 250,
                                            }} key={index}
                                                onPress={() => Actions.Shop({ shop: key })}
                                            >
                                                <View style={{ width: 250, }}>
                                                    <View style={{
                                                        flex: 2,
                                                    }}>
                                                        {(key.coverImage != null) ? (
                                                            <Image style={{
                                                                width: "100%", height: "100%",
                                                                borderTopLeftRadius: 6,
                                                                borderTopRightRadius: 6,
                                                            }}
                                                                resizeMode="cover"
                                                                source={{ uri: key.coverImage }}
                                                            />
                                                        ) : <Image source={require('../../../../assets/nophoto.jpg')} resizeMode="cover"
                                                            style={{ width: "100%", height: "100%", borderTopLeftRadius: 6, borderTopRightRadius: 6, }}
                                                            />
                                                        }
                                                    </View>
                                                    <View style={{
                                                        top: -10,
                                                        height: 50,
                                                        borderBottomRightRadius: 6,
                                                        borderBottomLeftRadius: 6,
                                                        padding: "2%",
                                                        borderColor: "#E8E6E7",
                                                        borderWidth: 1,
                                                        flex: 1,
                                                        flexDirection: "row",
                                                        backgroundColor: "white",
                                                    }}>
                                                        <View style={{
                                                            flex: 5,
                                                        }}>
                                                            <Text style={styles.card_text}>{key.businessName}</Text>
                                                            <Text style={{ color: "#7F7F7F" }}>{key.addressLine1}</Text>
                                                        </View>
                                                        <View style={{
                                                            flex: 2,
                                                            flexDirection: "row",
                                                            justifyContent: "center",
                                                            alignItems: "center"
                                                        }}>
                                                            <Image source={require('../../../../assets/Path.png')} resizeMode="contain"
                                                                style={{ width: "30%", }}
                                                            />
                                                            <Text style={{ color: "#7F7F7F" }}>4.0</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })
                                ) : null
                            }

                        </ScrollView>


                        {/* <View style={{
                            width: "95%", marginTop: 10, flex: 1, flexDirection: "row",
                        }}>
                            <View style={{ flex: 1.5 }}>
                                <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Trending Hairstyles 2019</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 16, color: "#8E8E93", textAlign: "right", }}>View All</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={{
                                height: 120,
                                width: 120,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            // onPress={() => this.props.navigate.navigate('Product')}
                            >
                                <View style={{
                                    height: 85,
                                    width: 85,
                                    borderRadius: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    borderColor: "#FD6958",
                                    borderWidth: 1.80

                                }}>
                                    <Image source={require('../../../../assets/Ellipse.png')} resizeMode="contain"
                                        style={{ width: "90%", height: "90%", }}
                                    />
                                </View>
                                <Text style={{ marginTop: 5, fontSize: 14, color: "#8E8E93", textAlign: "right", }}>Hairstyle Name</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: 120,
                                width: 120,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            // onPress={() => this.props.navigate.navigate('Product')}
                            >
                                <View style={{
                                    height: 85,
                                    width: 85,
                                    borderRadius: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    borderColor: "#FD6958",
                                    borderWidth: 1.80

                                }}>
                                    <Image source={require('../../../../assets/Ellipse2.png')} resizeMode="contain"
                                        style={{ width: "90%", height: "90%", }}
                                    />
                                </View>
                                <Text style={{ marginTop: 5, fontSize: 14, color: "#8E8E93", textAlign: "right", }}>Hairstyle Name</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: 120,
                                width: 120,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            // onPress={() => this.props.navigate.navigate('Produ-ct')}
                            >
                                <View style={{
                                    height: 85,
                                    width: 85,
                                    borderRadius: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    borderColor: "#FD6958",
                                    borderWidth: 1.80

                                }}>
                                    <Image source={require('../../../../assets/Ellipse3.png')} resizeMode="contain"
                                        style={{ width: "90%", height: "90%", }}
                                    />
                                </View>
                                <Text style={{ marginTop: 5, fontSize: 14, color: "#8E8E93", textAlign: "right", }}>Hairstyle Name</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: 120,
                                width: 120,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            // onPress={() => this.props.navigate.navigate('Product')}
                            >
                                <View style={{
                                    height: 85,
                                    width: 85,
                                    borderRadius: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    borderColor: "#FD6958",
                                    borderWidth: 1.80

                                }}>
                                    <Image source={require('../../../../assets/Ellipse4.png')} resizeMode="contain"
                                        style={{ width: "90%", height: "90%", }}
                                    />
                                </View>
                                <Text style={{ marginTop: 5, fontSize: 14, color: "#8E8E93", textAlign: "right", }}>Hairstyle Name</Text>
                            </TouchableOpacity>
                        </ScrollView> */}


                        {
                            (bestBarberShops && bestBarberShops != 0) ? (
                                <View style={{
                                    width: "95%", marginTop: 10, flex: 1, flexDirection: "row",
                                }}>
                                    <TouchableOpacity style={{ flex: 1 }}
                                        onPress={() => Actions.SearchResults()}
                                    >
                                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Best Barbershops</Text>
                                    </TouchableOpacity>
                                    <View style={{ flex: 1 }}>
                                        {/* <TouchableOpacity>
                                            <Text style={{ fontSize: 16, color: "#8E8E93", textAlign: "right", }}>View All</Text>
                                        </TouchableOpacity> */}
                                    </View>
                                </View>
                            ) : null
                        }

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {
                                (bestBarberShops && bestBarberShops != 0) ? (
                                    bestBarberShops.map((key, index) => {
                                        return (
                                            <TouchableOpacity key={index} style={{
                                                margin: 10,
                                                flexDirection: "row",
                                                marginBottom: 20,
                                                height: 170,
                                                width: 250,
                                            }} key={index}
                                                onPress={() => Actions.Shop({ shop: key })}
                                            >
                                                <View style={{ width: 250, }}>
                                                    <View style={{
                                                        flex: 2,
                                                    }}>
                                                        {(key.coverImage != null) ? (
                                                            <Image style={{
                                                                width: "100%", height: "100%",
                                                                borderTopLeftRadius: 6,
                                                                borderTopRightRadius: 6,
                                                            }}
                                                                resizeMode="cover"
                                                                source={{ uri: key.coverImage }}
                                                            />
                                                        ) : <Image source={require('../../../../assets/nophoto.jpg')} resizeMode="cover"
                                                            style={{ width: "100%", height: "100%", borderTopLeftRadius: 6, borderTopRightRadius: 6, }}
                                                            />
                                                        }
                                                    </View>
                                                    <View style={{
                                                        top: -10,
                                                        height: 50,
                                                        borderBottomRightRadius: 6,
                                                        borderBottomLeftRadius: 6,
                                                        padding: "2%",
                                                        borderColor: "#E8E6E7",
                                                        borderWidth: 1,
                                                        flex: 1,
                                                        flexDirection: "row",
                                                        backgroundColor: "white",
                                                    }}>
                                                        <View style={{
                                                            flex: 5,
                                                        }}>
                                                            <Text style={styles.card_text}>{key.businessName}</Text>
                                                            <Text style={{ color: "#7F7F7F" }}>{key.addressLine1}</Text>
                                                        </View>
                                                        <View style={{
                                                            flex: 2,
                                                            flexDirection: "row",
                                                            justifyContent: "center",
                                                            alignItems: "center"
                                                        }}>
                                                            <Image source={require('../../../../assets/Path.png')} resizeMode="contain"
                                                                style={{ width: "30%", }}
                                                            />
                                                            <Text style={{ color: "#7F7F7F" }}>4.0</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })
                                ) : null
                            }

                        </ScrollView>

                        {
                            (packages && packages != 0) ? (
                                <View style={{
                                    width: "95%", marginTop: 10, flex: 1, flexDirection: "row",
                                    // backgroundColor: "green"
                                }}>
                                    <View style={{ flex: 1.5 }}>
                                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Special Packages & Offers</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        {/* <TouchableOpacity>
                                            <Text style={{ fontSize: 16, color: "#8E8E93", textAlign: "right", }}>View All</Text>
                                        </TouchableOpacity> */}
                                    </View>
                                </View>
                            ) : null
                        }

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                            {
                                (packages && packages != 0) ? (
                                    packages.map((key, index) => {
                                        return (
                                            <TouchableOpacity key={index} style={{
                                                margin: 10,
                                                flexDirection: "row",
                                                marginBottom: 20,
                                                height: 170,
                                                width: 250,
                                            }} key={index}
                                                onPress={() => this.getShopWithId(key.userId)}
                                            >
                                                <View style={{ width: 250, }}>

                                                    <View style={{
                                                        flex: 2,
                                                    }}>
                                                        {(key.packageImage != null) ? (
                                                            <Image style={{
                                                                width: "100%", height: "100%",
                                                                borderTopLeftRadius: 6,
                                                                borderTopRightRadius: 6,
                                                            }}
                                                                resizeMode="cover"
                                                                source={{ uri: key.packageImage }}
                                                            />
                                                        ) : <Image source={require('../../../../assets/nophoto.jpg')} resizeMode="cover"
                                                            style={{ width: "100%", height: "100%", borderTopLeftRadius: 6, borderTopRightRadius: 6, }}
                                                            />
                                                        }
                                                    </View>

                                                    <View style={{
                                                        top: -10,
                                                        height: 50,
                                                        borderBottomRightRadius: 6,
                                                        borderBottomLeftRadius: 6,
                                                        padding: "2%",
                                                        borderColor: "#E8E6E7",
                                                        borderWidth: 1,
                                                        flex: 1,
                                                        flexDirection: "row",
                                                        backgroundColor: "white",
                                                    }}>
                                                        <View style={{
                                                            flex: 5,
                                                        }}>
                                                            <Text style={styles.card_text}>{key.packageName}</Text>
                                                            <Text style={{ color: "#7F7F7F" }}>{key.price} $</Text>
                                                        </View>
                                                        <View style={{
                                                            flex: 2,
                                                            flexDirection: "row",
                                                            justifyContent: "center",
                                                            alignItems: "center"
                                                        }}>
                                                            <Image source={require('../../../../assets/Path.png')} resizeMode="contain"
                                                                style={{ width: "30%", }}
                                                            />
                                                            <Text style={{ color: "#7F7F7F" }}>4.0</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })
                                ) : null
                            }




                            {/* {
                                (packages) ? (
                                    packages.map((key, index) => {
                                        return (
                                            <TouchableOpacity key={index} style={{ width: "90%", marginHorizontal: "5%", borderBottomColor: "#EEEEEE", borderBottomWidth: 1, margin: 5 }}
                                                onPress={() => Actions.OfferDetails({ offerDetails: key })}
                                            >
                                                {(key.packageImage != null) ? (
                                                    <Image source={{ uri: key.packageImage }} resizeMode="cover"
                                                        style={{ width: "100%", height: 200, borderRadius: 10, marginTop: 5 }}
                                                    />
                                                ) : <Image source={require('../../../../assets/nophoto.jpg')} resizeMode="cover"
                                                    style={{ width: "100%", height: 200, borderRadius: 10, marginTop: 5 }}
                                                    />}

                                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, }}>
                                                    <View>
                                                        <Text>{key.packageName}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={{ color: "#FD6958" }}>Book Now</Text>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 2, marginBottom: 10 }}>
                                                    <View>
                                                        <Text style={{ color: "grey", fontSize: 11 }}>{key.offerTillAvailability}</Text>
                                                    </View>
                                                    <View>
                                                        <Text>${key.price}</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })
                                ) : null
                            } */}



                            {/* <TouchableOpacity style={{
                                margin: 10,
                                // backgroundColor: "red",
                            }}
                            // onPress={() => Actions.Shop()}
                            // onPress={() => this.props.navigate.navigate('Product')}
                            >
                                <View style={{
                                    height: 170,
                                    // backgroundColor: "red",
                                }}>
                                    <ImageBackground source={require('../../../../assets/Rectangle.png')} style={styles.card} >
                                    </ImageBackground>
                                    <View style={{
                                        top: -10,
                                        height: 50,
                                        borderBottomRightRadius: 6,
                                        borderBottomLeftRadius: 6,
                                        padding: "2%",
                                        borderColor: "#E8E6E7",
                                        borderWidth: 1,
                                        flex: 1,
                                        flexDirection: "row",
                                        backgroundColor: "white",
                                    }}>
                                        <View style={{
                                            flex: 1,
                                            // backgroundColor: "green",
                                        }}>
                                            <Text style={styles.card_text}>Haircut & Hiarstyle</Text>
                                            <Text style={{ color: "#7F7F7F", fontSize: 10 }}>Luxary Package offer till Sep 22,2019</Text>
                                        </View>
                                        <View style={{
                                            flex: 2,
                                            // flexDirection: "row",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            // backgroundColor: "yellow",
                                        }}>

                                            <Text style={{ color: "#FD6958" }}>Book Now</Text>
                                            <Text style={{ color: "#7F7F7F" }}>$100.00</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                margin: 10,
                                // backgroundColor: "red",
                            }}
                            // onPress={() => Actions.Shop()}
                            // onPress={() => this.props.navigate.navigate('Product')}
                            >
                                <View style={{
                                    height: 170,
                                    // backgroundColor: "red",
                                }}>
                                    <ImageBackground source={require('../../../../assets/Rectangle.png')} style={styles.card} >
                                    </ImageBackground>
                                    <View style={{
                                        top: -10,
                                        height: 50,
                                        borderBottomRightRadius: 6,
                                        borderBottomLeftRadius: 6,
                                        padding: "2%",
                                        borderColor: "#E8E6E7",
                                        borderWidth: 1,
                                        flex: 1,
                                        flexDirection: "row",
                                        backgroundColor: "white",
                                    }}>
                                        <View style={{
                                            flex: 1,
                                            // backgroundColor: "green",
                                        }}>
                                            <Text style={styles.card_text}>Haircut & Hiarstyle</Text>
                                            <Text style={{ color: "#7F7F7F", fontSize: 10 }}>Luxary Package offer till Sep 22,2019</Text>
                                        </View>
                                        <View style={{
                                            flex: 2,
                                            // flexDirection: "row",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            // backgroundColor: "yellow",
                                        }}>

                                            <Text style={{ color: "#FD6958" }}>Book Now</Text>
                                            <Text style={{ color: "#7F7F7F" }}>$100.00</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity> */}



                        </ScrollView>
                    </ScrollView>
                </View>

            </View>
        );
    }
}
let mapStateToProps = state => {
    return {
        currentLocation: state.root.currentLocation,
        userProfile: state.root.userProfile,
        bseUrl: state.root.bseUrl,
    };
};
function mapDispatchToProps(dispatch) {
    return ({
        setNearByShops: (shops, ) => {
            dispatch(setNearByShops(shops));
        },
        // setFavShops: (shops) => {
        //     dispatch(setFavShops(shops));
        // },
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingBottom: 150,
        backgroundColor: "green",

    },
    card: {
        width: 250, height: 120,
        // margin: 15,
        justifyContent: 'flex-end',
        padding: 10,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
        backgroundColor: 'white',
        borderRadius: 6, overflow: 'hidden'

    },
    card_text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15
    },
    iconsStyle: {
        width: "22%", height: "42%", justifyContent: "center", alignItems: "center", margin: 5,
    },

});