import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    TouchableOpacity,
    Text, TextInput, ScrollView
} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import MapDirection from '../../../Components/maps'
import { setNearByShops } from "../../../Store/Action/action";

//icons import
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';

class Nearby extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: [],
            shops: [],
        };
    }

    componentDidMount() {
        const { currentLocation } = this.props
        if (currentLocation != null) {
            let cloneLocation = {
                lat: currentLocation.coords.latitude,
                long: currentLocation.coords.longitude,
                km: 5,
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
                    let shops = result.data.data
                    console.log(shops, "Fetch_Shops_NearBy")
                    this.props.setNearByShops(shops)
                    this.createShopLocationMarkers(shops)
                    // Actions.Filters()
                    this.setState({
                        shops: shops,
                        isloader: false
                    })
                })
                .catch(err => {
                    let error = JSON.parse(JSON.stringify(err))
                    console.log(error, 'ERRROR', err)
                    this.setState({
                        err: error,
                        isloader: false
                    })
                })

        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { currentLocation } = nextProps
        if (currentLocation != null) {
            let cloneLocation = {
                lat: currentLocation.coords.latitude,
                long: currentLocation.coords.longitude,
                km: 5,
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
                    let shops = result.data.data
                    console.log(shops, "Fetch_Shops_NearBy_RECEIVE_PROPS")
                    // this.props.setNearByShops(shops)
                    this.createShopLocationMarkers(shops)
                    this.setState({
                        shops: shops,
                        isloader: false
                    })
                })
                .catch(err => {
                    let error = JSON.parse(JSON.stringify(err))
                    console.log(error, 'ERRROR', err)
                    this.setState({
                        err: error,
                        isloader: false
                    })
                })
        }
    }

    createShopLocationMarkers(shops) {
        let shopLocationMarkers = []
        for (let index = 0; index < shops.length; index++) {
            let location = {
                latitude: shops[index].location.coordinates[0],
                longitude: shops[index].location.coordinates[1],
                title: shops[index].businessName,
            }
            shopLocationMarkers.push(location)
        }
        // console.log(shopLocationMarkers, "Markers")
        this.setState({
            shopLocationMarkers: shopLocationMarkers,
        })
    }


    render() {
        let { fullName, } = this.props.userProfile
        let { nearByShops, } = this.props
        let { shops, shopLocationMarkers, search } = this.state

        let filterShops = [];
        if (shops.length > 0) {
            if (search.length) {
                const searchPattern = new RegExp(search.map(term => `(?=.*${term})`).join(''), 'i');
                shops = shops.filter(data => {
                    return data.businessName.match(searchPattern)
                });
            } else {
                filterShops = shops;
            }
        }

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
                }}>
                    <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", marginTop: 20, }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "left" }}>{fullName}</Text>
                        <TouchableOpacity style={{
                            width: 50,
                            alignItems: "flex-end",
                            zIndex: 1,
                        }}
                            onPress={() => Actions.Filters()}
                        >
                            <IconFontAwesome name="filter" size={25} style={{ color: "grey" }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: "105%", top: -5, justifyContent: "center", alignItems: "center", flex: 1, flexDirection: "row" }}>
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
                                <Text style={{ textAlign: "left" }}>Your Location</Text>

                            </View>
                        </View>
                        <View style={{
                            flex: 3, justifyContent: "center", alignItems: "center", flexDirection: "row",
                        }}>
                            <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", }}
                                onPress={() => { Actions.Googlemapfullview({ draggable: true }) }}
                            >
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
                                onChangeText={(e) => this.setState({ search: e.split(' ') })}
                                // onChangeText={(e) => this.searchShops(e)}
                                value={search[0]}
                                placeholder={"Search"}
                            />
                        </View>
                    </View>
                </View>

                <View style={{
                    flex: 8,
                    width: "100%", height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <View
                        style={{
                            // flex: 1,
                            marginTop: 10,
                            marginBottom: 0,
                            width: "100%",
                            height: "100%",
                            marginHorizontal: "0%",
                            backgroundColor: "#EDEDED",
                            // backgroundColor: "orange",
                        }}
                    >
                        <MapDirection markers={shopLocationMarkers} />
                    </View>

                    <View style={{ position: "absolute", zIndex: 1, bottom: 20, flexDirection: "row", flex: 1, }}>
                        <View style={{ flexDirection: "row", height: 180 }}>
                            <ScrollView horizontal={true} style={{ flexDirection: "row", zIndex: 1 }}>
                                {
                                    (shops && shops != 0) ? (
                                        shops.map((key, index) => {
                                            return (
                                                <TouchableOpacity style={{
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
                        </View>
                    </View>
                </View>
            </View >
        );
    }
}

let mapStateToProps = state => {
    return {
        userProfile: state.root.userProfile,
        currentLocation: state.root.currentLocation,
        bseUrl: state.root.bseUrl,
        nearByShops: state.root.nearByShops,
    };
};
function mapDispatchToProps(dispatch) {
    return ({
        setNearByShops: (shops, ) => {
            dispatch(setNearByShops(shops));
        },
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Nearby);

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingBottom: 150,
        backgroundColor: "green",

    },
    card: {
        width: 250, height: 115,
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