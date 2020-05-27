import React, { Component } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text, TextInput, ScrollView, Alert, } from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import { setNearByShops, } from "../../../Store/Action/action";
import axios from 'axios';
//icons import
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

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
    }

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
                const fiveStarRatingShops = bestBarberShops.filter(bestBarberShops => bestBarberShops.review === "5");
                this.setState({
                    bestBarberShops: fiveStarRatingShops,
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
                    // const fiveStarRatingShops = shops.filter(shops => shops.review === "5");
                    Actions.SearchResults({ shops: shops, headerTitle: "Top Services" })
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
                        // console.log(service, "MORE_DATA")
                        More.push(service)
                    }
                }
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
    
    onFocusSearch() {
        Actions.AppContainer({ rout: "Nearby", openInput: true })
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
                                style={{ width: "90%", }}
                                value={this.state.email}
                                placeholder={"Search"}
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
                                <View style={{ width: "95%", marginTop: 10, flex: 1, flexDirection: "row", }}>
                                    <TouchableOpacity style={{ flex: 1 }}>
                                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Nearby Barbershops</Text>
                                    </TouchableOpacity>
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

                        </ScrollView>

                        {
                            (bestBarberShops && bestBarberShops != 0) ? (
                                <View style={{ width: "95%", marginTop: 10, flex: 1, flexDirection: "row", }}>
                                    <TouchableOpacity style={{ flex: 1 }}>
                                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Best Barbershops</Text>
                                    </TouchableOpacity>
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
                        </ScrollView>

                        {
                            (packages && packages != 0) ? (
                                <View style={{ width: "95%", marginTop: 10, flex: 1, flexDirection: "row", }}>
                                    <View style={{ flex: 1.5 }}>
                                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Special Packages & Offers</Text>
                                    </View>
                                </View>
                            ) : null
                        }

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
                                                        </View>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })
                                ) : null
                            }

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