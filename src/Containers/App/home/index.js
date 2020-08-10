import React, { Component } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text, TextInput, ScrollView, Alert, RefreshControl, ActivityIndicator } from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import { setNearByShops, } from "../../../Store/Action/action";
import axios from 'axios';
//icons import
import AntDesign from 'react-native-vector-icons/AntDesign';
import InfiniteScroll from 'react-native-infinite-scroll';

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

            //infinite Scrolling states
            activity: false,
            isloader: false,
            moreLoader: false,
            offsetBestBarber: 0,
            offsetNearByShops: 0,
            offsetPackages: 0,


            Haircut: [],
            Coloring: [],
            Styling: [],
            Shaving: [],
            Childrens_Haircut: [],
            Waxing: [],
            // Hairdryer: [],
            // Hairspa: [],
            // Shampoo: [],
            More: [],
        };
    }

    UNSAFE_componentWillMount() {
        console.log(this.props, "USER_CURRENT_LOCATION")
        this.getNeabyShops()
        // this.getBestBarbershops()
        // this.getPackages()
        this.getAllServices()
        // this.getHairStyles()
        // this.setState({ activity: false, })
    }

    distance(lat1, lon1, lat2, lon2) {
        var R = 6371; // km (change this constant to get miles)
        var dLat = (lat2 - lat1) * Math.PI / 180;
        var dLon = (lon2 - lon1) * Math.PI / 180;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        // if (d > 1) return Math.round(d) + " km";
        // else if (d <= 1) return Math.round(d * 1000) + "m";
        return d;
    }

    getNeabyShops() {
        const { currentLocation } = this.props
        let { offsetNearByShops, } = this.state
        if (currentLocation != null) {
            this.setState({ isloader: true })
            let cloneLocation = {
                lat: currentLocation.coords.latitude,
                long: currentLocation.coords.longitude,
                km: 5,
            }
            var options = {
                method: 'POST',
                // url: `${this.props.bseUrl}/getallshops/${offsetNearByShops}/${2}`,
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
                    let nearByShops1 = result.data.data
                    let nearByShops = []
                    for (let index = 0; index < nearByShops1.length; index++) {
                        const element = nearByShops1[index];
                        const lat = nearByShops1[index].location.coordinates[0];
                        const lng = nearByShops1[index].location.coordinates[1];
                        element.distance = this.distance(lat, lng, currentLocation.coords.latitude, currentLocation.coords.longitude)
                        nearByShops.push(element)
                    }
                    nearByShops = nearByShops.sort((a, b) => a.distance - b.distance)
                    // console.log(nearByShops, "Fetch_Shops_NearBy_Home_Screen")
                    this.props.setNearByShops(nearByShops)
                    this.setState({
                        nearByShops: nearByShops,
                        isloader: false,
                        offsetNearByShops: 2
                    })
                    this.getBestBarbershops()
                    this.getNearbyPackages(nearByShops)
                })
                .catch(err => {
                    let error = JSON.parse(JSON.stringify(err))
                    console.log(error, 'ERRROR', err)
                    this.setState({
                        err: error,
                        isloader: false,
                    })
                })

        }
    }

    getBestBarbershops() {
        let { nearByShops, } = this.state
        const fiveStarRatingShops = nearByShops.filter(nearByShops => nearByShops.review === "5");
        let bestShops = []
        for (let index = 0; index < fiveStarRatingShops.length; index++) {
            const element = fiveStarRatingShops[index];
            if (index < 5) {
                bestShops.push(element)
            }
            else {
                break
            }
        }
        this.setState({
            bestBarberShops: bestShops,
        })

        // this.setState({ isloader: true })
        // var options = {
        //     method: 'GET',
        //     url: `${this.props.bseUrl}/getallshops/getAllShops/${offsetBestBarber}/${2}`,

        //     headers:
        //     {
        //         'cache-control': 'no-cache',
        //         "Allow-Cross-Origin": '*',
        //     },
        // }
        // axios(options)
        //     .then(result => {
        //         let bestBarberShops = result.data.data
        //         // console.log(bestBarberShops, "Fetch_Best_Shops")
        //         this.setState({
        //             bestBarberShops: bestBarberShops,
        //             isloader: false,
        //             offsetBestBarber: 2
        //         })
        //     })
        //     .catch(err => {
        //         let error = JSON.parse(JSON.stringify(err))
        //         console.log(error, 'ERRROR', err)
        //         this.setState({
        //             err: error,
        //             isloader: false,
        //         })
        //     })

    }

    getPackages() {
        let { offsetPackages, } = this.state
        this.setState({ isloader: true })
        var options = {
            method: 'GET',
            url: `${this.props.bseUrl}/getNearbyShopServices/getAllPackage/${offsetPackages}/${2}`,
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
                    offsetPackages: 2,
                    isloader: false,
                })
            })
            .catch(err => {
                let error = JSON.parse(JSON.stringify(err))
                console.log(error, 'ERRROR', err)
                this.setState({
                    err: error,
                    isloader: false,
                })
            })

    }

    getNearbyPackages(nearByShops) {
        const fiveStarRatingShops = nearByShops.filter(nearByShops => nearByShops.review === "5");
        let shopIds = []
        for (let index = 0; index < fiveStarRatingShops.length; index++) {
            const element = fiveStarRatingShops[index]._id;
            shopIds.push(element)
        }
        console.log(shopIds, "Pack_Get_With_Shop_Id")
        this.setState({ isloader: true })
        let cloneLocation = {
            shopIds: shopIds
        }
        var options = {
            method: 'POST',
            url: `${this.props.bseUrl}/getNearbyShopServices/getNearByPackages/`,
            headers:
            {
                'cache-control': 'no-cache',
                "Allow-Cross-Origin": '*',
            },
            data: cloneLocation
        }
        axios(options)
            .then(result => {
                let packages = result.data.data
                console.log(packages, "Fetch_Packages")
                this.setState({
                    packages: packages,
                    isloader: false,
                })
            })
            .catch(err => {
                let error = JSON.parse(JSON.stringify(err))
                console.log(error, 'ERRROR', err)
                this.setState({
                    err: error,
                    isloader: false,
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
        console.log(shopid, "shopid")
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
                    const fiveStarRatingShops = shops.filter(shops => shops.review === "5");
                    Actions.SearchResults({ shops: fiveStarRatingShops, headerTitle: "Top Services" })
                    // console.log(shops, "Fetch_multiple_shops_withID")
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
        const { currentLocation } = this.props
        if (currentLocation != null) {
            let urlM = `${this.props.bseUrl}/getallshops/getAllService/${currentLocation.coords.latitude}/${currentLocation.coords.longitude}`
            axios({
                method: 'get',
                url: urlM,
            })
                .then(result => {
                    let allServices = result.data.data
                    let Haircut = []
                    let Coloring = []
                    let Styling = []
                    let Shaving = []
                    let Childrens_Haircut = []
                    let Waxing = []
                    // let Hairdryer = []
                    // let Hairspa = []
                    // let Shampoo = []
                    let More = []
                    for (let index = 0; index < allServices.length; index++) {
                        const service = allServices[index];
                        const serviceName = allServices[index].serviceName;
                        // console.log(service, "getAllServices")

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

                        if (serviceName === "Shaving") {
                            if (Shaving.indexOf(service.userId) == -1) {
                                Shaving.push(service.userId)
                            }
                        }

                        if (serviceName === "Childrens Haircut") {
                            if (Childrens_Haircut.indexOf(service.userId) == -1) {
                                Childrens_Haircut.push(service.userId)
                            }
                        }

                        if (serviceName === "Waxing") {
                            if (Waxing.indexOf(service.userId) == -1) {
                                Waxing.push(service.userId)
                            }
                        }

                        // if (serviceName === "Hairdryer") {
                        //     if (Hairdryer.indexOf(service.userId) == -1) {
                        //         Hairdryer.push(service.userId)
                        //     }
                        // }
                        // if (serviceName === "Hairspa") {
                        //     if (Hairspa.indexOf(service.userId) == -1) {
                        //         Hairspa.push(service.userId)
                        //     }
                        // }
                        // if (serviceName === "Shampoo") {
                        //     if (Shampoo.indexOf(service.userId) == -1) {
                        //         Shampoo.push(service.userId)
                        //     }
                        // }

                        else {
                            // console.log(service, "MORE_DATA")
                            More.push(service)
                        }
                    }
                    this.setState({
                        Haircut,
                        Coloring,
                        Styling,
                        Shaving,
                        Childrens_Haircut,
                        Waxing,
                        // Hairdryer,
                        // Hairspa,
                        // Shampoo,
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

    }

    onFocusSearch() {
        Actions.AppContainer({ rout: "Nearby", openInput: true })
    }

    _onRefreshSearch() {
        this.setState({
            nearByShops: [],
            bestBarberShops: [],
            packages: [],
            activity: false,
            isloader: false,
            moreLoader: false,
            offsetBestBarber: 0,
            offsetNearByShops: 0,
            offsetPackages: 0,
        }, () => {
            this.UNSAFE_componentWillMount()
        })

    }

    _onEndReachedNeabyShops() {
        let { offsetNearByShops, moreLoader } = this.state
        const { currentLocation } = this.props

        this.setState({ moreLoader: true })

        if (currentLocation != null && moreLoader === false) {
            let cloneLocation = {
                lat: currentLocation.coords.latitude,
                long: currentLocation.coords.longitude,
                km: 15,
            }
            var options = {
                method: 'POST',
                url: `${this.props.bseUrl}/getallshops/${offsetNearByShops}/${2}`,
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
                    console.log(nearByShops, "Fetch_Shops_NearBy")
                    if (nearByShops.length != 0) {
                        let clonData = this.state.nearByShops
                        for (var i = 0; i < nearByShops.length; i++) {
                            clonData.push(nearByShops[i])
                        }
                        // this.props.setNearByShops(clonData)
                    }
                    this.setState({
                        // nearByShops: clonData,
                        moreLoader: false,
                        isloader: false,
                        offsetNearByShops: offsetNearByShops + nearByShops.length
                    })

                })
                .catch(err => {
                    let error = JSON.parse(JSON.stringify(err))
                    console.log(error, 'ERRROR', err)
                    this.setState({
                        err: error,
                        isloader: false,
                        moreLoader: false,
                    })
                })
        }
    }

    _onEndReachedBestBarberShops() {
        let { offsetBestBarber, moreLoader } = this.state
        this.setState({ moreLoader: true })
        if (moreLoader === false) {
            var options = {
                method: 'GET',
                url: `${this.props.bseUrl}/getallshops/getAllShops/${offsetBestBarber}/${2}`,
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
                    let clonData = this.state.bestBarberShops
                    for (var i = 0; i < bestBarberShops.length; i++) {
                        clonData.push(bestBarberShops[i])
                    }
                    this.setState({
                        isloader: false,
                        moreLoader: false,
                        offsetBestBarber: offsetBestBarber + bestBarberShops.length
                    })
                })
                .catch(err => {
                    let error = JSON.parse(JSON.stringify(err))
                    console.log(error, 'ERRROR', err)
                    this.setState({
                        err: error,
                        isloader: false,
                        moreLoader: false,
                    })
                })
        }
    }

    _onEndReachedSpecialPackages() {
        let { offsetPackages, moreLoader } = this.state
        this.setState({ moreLoader: true })
        if (moreLoader === false) {
            var options = {
                method: 'GET',
                url: `${this.props.bseUrl}/getNearbyShopServices/getAllPackage/${offsetPackages}/${2}`,
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
                    let clonData = this.state.packages
                    for (var i = 0; i < packages.length; i++) {
                        clonData.push(packages[i])
                    }

                    this.setState({
                        // packages: packages,
                        offsetPackages: offsetPackages + packages.length,
                        isloader: false,
                        moreLoader: false,
                    })
                })
                .catch(err => {
                    let error = JSON.parse(JSON.stringify(err))
                    console.log(error, 'ERRROR', err)
                    this.setState({
                        err: error,
                        isloader: false,
                        moreLoader: false,
                    })
                })
        }
    }

    render() {
        let { fullName } = this.props.userProfile
        let { nearByShops, bestBarberShops, packages, hairStyles,
            Haircut,
            Coloring,
            Styling,
            Shaving,
            Childrens_Haircut,
            Waxing,
            More,
            // Hairdryer,
            // Hairspa,
            // Shampoo,
            isloader,
            activity,
            moreLoader
        } = this.state

        // console.log(Haircut, Childrens_Haircut, "Childrens_Haircut")
        return (
            <View
                style={{
                    flex: 1,
                    width: "100%",
                    alignItems: "center",
                    backgroundColor: "white",
                }}
            >
                <InfiniteScroll
                    style={{ width: "100%" }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.activity}
                            onRefresh={this._onRefreshSearch.bind(this)} />
                    }
                >
                    <View style={{
                        height: 120,
                        width: "95%",
                        marginHorizontal: "2.5%",
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor:"red"
                    }}>
                        <View style={{ width: "100%", marginTop: 5 }}>
                            <Text style={{ fontSize: fullName.length < 12 ? 16 : 12, fontWeight: "bold", textAlign: "left" }}>Hi {fullName}</Text>
                        </View>


                        {/* <View style={{ width: "105%", top: -5, justifyContent: "center", alignItems: "center", flex: 1, flexDirection: "row", backgroundColor: "red" }}>
                            <View style={{
                                flex: 8, flexDirection: "row", justifyContent: "center", alignItems: "center",
                            }}>
                                <View style={{
                                    flex: 1,
                                    justifyContent: "center", alignItems: "center",
                                }}>
                                    <Image source={require('../../../../assets/Path27909.png')} resizeMode="contain"
                                        style={{ height: "50%", width: "50%", }}
                                    />
                                </View>

                                <View style={{
                                    flex: 8
                                }}>
                                    <Text style={{ textAlign: "left" }}>My location</Text>
                                </View>
                            </View>

                            <View style={{
                                flex: 3, justifyContent: "center", alignItems: "center", flexDirection: "row",
                            }}>
                                <TouchableOpacity
                                    onPress={() => Actions.Googlemapfullview()}
                                    style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                    <Entypo name="direction" style={{ color: "#FD6958", fontWeight: 'bold', fontSize: 20 }} />
                                    <Text style={{ color: "#FD6958" }}>CHANGE</Text>
                                </TouchableOpacity>
                            </View>
                        </View> */}

                        <View
                            style={{
                                flex: 0.45, flexDirection: "row",
                                width: "100%", height: 40, marginTop: 10,
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
                                    style={{ width: "90%", }}
                                    value={this.state.email}
                                    placeholder={"Best Barbershops"}
                                    // onChangeText={text => onChangeText(text)}
                                    onFocus={() => this.onFocusSearch()}
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
                            }}>
                                <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Top Services</Text>
                            </View>

                            <View style={{
                                width: "100%",
                                height: 180,
                                flex: 1,
                                flexDirection: "row",
                                flexWrap: "wrap",
                                // justifyContent: "center",
                                // alignItems: "center",
                                // backgroundColor: "yellow"
                            }}>

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
                                    onPress={() => { this.getMultipleShopWithId(Shaving) }}
                                >
                                    <Image source={require('../../../../assets/services/shaving.png')} resizeMode="contain"
                                        style={{ width: "100%", height: "100%", }}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.iconsStyle}
                                    onPress={() => { this.getMultipleShopWithId(Childrens_Haircut) }}
                                >
                                    <Image source={require('../../../../assets/services/childrecutting.png')} resizeMode="contain"
                                        style={{ width: "100%", height: "100%", }}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.iconsStyle}
                                    onPress={() => { this.getMultipleShopWithId(Waxing) }}
                                >
                                    <Image source={require('../../../../assets/services/waxing.png')} resizeMode="contain"
                                        style={{ width: "100%", height: "100%", }}
                                    />
                                </TouchableOpacity>

                                {/* <TouchableOpacity style={styles.iconsStyle}
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
                                </TouchableOpacity> */}



                                <TouchableOpacity style={styles.iconsStyle}
                                    onPress={() => Actions.ServiceListing({ More, headerTitle: "More Services" })}
                                >
                                    <Image source={require('../../../../assets/services/more.png')} resizeMode="contain"
                                        style={{ width: "100%", height: "100%", }}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View>
                                {
                                    (isloader === true) ? (
                                        <View style={{
                                            flex: 1,
                                            height: 170,
                                            justifyContent: 'center',
                                            alignItems: "center",
                                        }}>
                                            <ActivityIndicator size="large" color="#FD6958" />
                                            <Text style={{ marginTop: 10, color: "#FD6958" }} >Loading....</Text>
                                        </View>
                                    ) :
                                        <>
                                            {
                                                (nearByShops && nearByShops != 0) ? (
                                                    <View style={{ width: "95%", marginTop: 10, flex: 1, flexDirection: "row", }}>
                                                        <TouchableOpacity style={{ flex: 1 }}>
                                                            <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Nearby Barbershops</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                ) : null
                                            }

                                            <InfiniteScroll
                                                showsHorizontalScrollIndicator={true}
                                                horizontal={true}
                                            // onLoadMoreAsync={this._onEndReachedNeabyShops.bind(this)}
                                            >
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
                                                                                    // borderTopLeftRadius: 6, borderTopRightRadius: 6,
                                                                                }}
                                                                                    resizeMode="cover"
                                                                                    source={{ uri: key.coverImage }}
                                                                                />
                                                                            ) : <Image source={require('../../../../assets/nophoto.jpg')} resizeMode="cover"
                                                                                style={{
                                                                                    width: "100%", height: "100%",
                                                                                    // borderTopLeftRadius: 6, borderTopRightRadius: 6,
                                                                                }}
                                                                                />
                                                                            }
                                                                        </View>
                                                                        <View style={{
                                                                            top: -10,
                                                                            height: 50,
                                                                            // borderBottomRightRadius: 6, borderBottomLeftRadius: 6,
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
                                                                                    style={{ width: "30%", left: -5 }}
                                                                                />
                                                                                <Text style={{ color: "#7F7F7F", marginRight: 10 }}>{key.review}</Text>
                                                                            </View>
                                                                        </View>
                                                                    </View>
                                                                </TouchableOpacity>
                                                            )
                                                        })
                                                    ) : null
                                                }
                                            </InfiniteScroll>
                                        </>

                                }
                            </View>



                            <View>
                                {
                                    (isloader === true) ? (
                                        <View style={{
                                            flex: 1,
                                            height: 170,
                                            justifyContent: 'center',
                                            alignItems: "center",
                                        }}>
                                            <ActivityIndicator size="large" color="#FD6958" />
                                            <Text style={{ marginTop: 10, color: "#FD6958" }} >Loading....</Text>
                                        </View>
                                    ) :
                                        <>

                                            {
                                                (bestBarberShops && bestBarberShops != 0) ? (
                                                    <View style={{ width: "95%", marginTop: 10, flex: 1, flexDirection: "row", }}>
                                                        <TouchableOpacity style={{ flex: 1 }}>
                                                            <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Top rated Barbershops</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                ) : null
                                            }


                                            <InfiniteScroll
                                                showsHorizontalScrollIndicator={true}
                                                horizontal={true}
                                            // onLoadMoreAsync={this._onEndReachedBestBarberShops.bind(this)}
                                            >
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
                                                                }}
                                                                    onPress={() => Actions.Shop({ shop: key })}
                                                                >
                                                                    <View style={{ width: 250, }}>
                                                                        <View style={{
                                                                            flex: 2,
                                                                        }}>
                                                                            {(key.coverImage != null) ? (
                                                                                <Image style={{
                                                                                    width: "100%", height: "100%",
                                                                                    // borderTopLeftRadius: 6, borderTopRightRadius: 6,
                                                                                }}
                                                                                    resizeMode="cover"
                                                                                    source={{ uri: key.coverImage }}
                                                                                />
                                                                            ) : <Image source={require('../../../../assets/nophoto.jpg')} resizeMode="cover"
                                                                                style={{
                                                                                    width: "100%", height: "100%",
                                                                                    // borderTopLeftRadius: 6, borderTopRightRadius: 6,
                                                                                }}
                                                                                />
                                                                            }
                                                                        </View>
                                                                        <View style={{
                                                                            top: -10,
                                                                            height: 50,
                                                                            // borderBottomRightRadius: 6, borderBottomLeftRadius: 6,
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
                                                                                    style={{ width: "30%", left: -5 }}
                                                                                />
                                                                                <Text style={{ color: "#7F7F7F", marginRight: 10 }}>{key.review}</Text>
                                                                            </View>
                                                                        </View>
                                                                    </View>

                                                                    {
                                                                        (this.state[`moreloader${index}`] === true) ? (
                                                                            <View style={{
                                                                                justifyContent: 'center',
                                                                                alignItems: "center",
                                                                            }}>
                                                                                <ActivityIndicator size="large" color="#FD6958" />
                                                                            </View>
                                                                        ) : null
                                                                    }
                                                                </TouchableOpacity>
                                                            )
                                                        })
                                                    ) : null
                                                }
                                            </InfiniteScroll>
                                        </>

                                }
                            </View>


                            <View>
                                {
                                    (isloader === true) ? (
                                        <View style={{
                                            flex: 1,
                                            height: 170,
                                            justifyContent: 'center',
                                            alignItems: "center",
                                        }}>
                                            <ActivityIndicator size="large" color="#FD6958" />
                                            <Text style={{ marginTop: 10, color: "#FD6958" }} >Loading....</Text>
                                        </View>
                                    ) :
                                        <>

                                            {
                                                (packages && packages != 0) ? (
                                                    <View style={{ width: "95%", marginTop: 10, flex: 1, flexDirection: "row", }}>
                                                        <View style={{ flex: 1.5 }}>
                                                            <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Special Packages & Offers</Text>
                                                        </View>
                                                    </View>
                                                ) : null
                                            }

                                            <InfiniteScroll
                                                showsHorizontalScrollIndicator={true}
                                                horizontal={true}
                                            // onLoadMoreAsync={this._onEndReachedSpecialPackages.bind(this)}
                                            >
                                                {
                                                    (packages && packages != 0) ? (
                                                        packages.map((key, index) => {
                                                            return (
                                                                <TouchableOpacity key={index}
                                                                    style={{
                                                                        margin: 10,
                                                                        flexDirection: "row",
                                                                        marginBottom: 20,
                                                                        height: 170,
                                                                        width: 250,
                                                                    }}
                                                                    onPress={() => this.getShopWithId(key.userId)}
                                                                >
                                                                    <View style={{ width: 250, }}>
                                                                        <View style={{ flex: 2, }}>
                                                                            {(key.packageImage != null) ? (
                                                                                <Image style={{
                                                                                    width: "100%", height: "100%",
                                                                                    // borderTopLeftRadius: 6, borderTopRightRadius: 6,
                                                                                }}
                                                                                    resizeMode="cover"
                                                                                    source={{ uri: key.packageImage }}
                                                                                />
                                                                            ) : <Image source={require('../../../../assets/nophoto.jpg')} resizeMode="cover"
                                                                                style={{
                                                                                    width: "100%", height: "100%",
                                                                                    // borderTopLeftRadius: 6, borderTopRightRadius: 6,
                                                                                }}
                                                                                />
                                                                            }
                                                                        </View>

                                                                        <View style={{
                                                                            top: -10,
                                                                            height: 50,
                                                                            // borderBottomRightRadius: 6, borderBottomLeftRadius: 6,
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
                                                                                <Text style={{ color: "#7F7F7F" }}>{key.price} GBP</Text>
                                                                            </View>
                                                                            <View style={{
                                                                                flex: 2,
                                                                                flexDirection: "row",
                                                                                justifyContent: "center",
                                                                                alignItems: "center"
                                                                            }}>
                                                                            </View>
                                                                        </View>
                                                                    </View>
                                                                </TouchableOpacity>
                                                            )
                                                        })
                                                    ) : null
                                                }
                                            </InfiniteScroll>
                                        </>

                                }
                            </View>

                        </ScrollView>
                    </View>
                </InfiniteScroll>
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
        setNearByShops: (shops,) => {
            dispatch(setNearByShops(shops));
        },
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
        justifyContent: 'flex-end',
        padding: 10,
        backgroundColor: 'white',
        // borderRadius: 6,
        overflow: 'hidden'
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