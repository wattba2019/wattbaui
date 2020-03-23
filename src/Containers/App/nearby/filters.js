import React, { Component } from "react";
import {
    View, ActivityIndicator, StyleSheet,
    StatusBar, TouchableOpacity,
    Text, ScrollView,
} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import RangeSlider from 'rn-range-slider';
import Geocoder from 'react-native-geocoding';
import axios from 'axios';
import { setNearByShops } from "../../../Store/Action/action";

//icons import
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // gender: "Female",
            // service: "Haircut",
            rangeLow: "",
            sortedby: "highToLow",
            selectedService: "",
            allServicesNames: [],
            isloader: false,
            err: ""
        };
    }

    UNSAFE_componentWillMount() {
        // this.getLocationNameGeoCoader()
        this.getAllServices()
    }


    getLocationNameGeoCoader() {
        // Initialize the module (needs to be done only once)
        Geocoder.init("AIzaSyBQHKZTwhPJX_9IevM5jKC8kmz0NzqAaBk"); // use a valid API key
        // With more options
        // Geocoder.init("xxxxxxxxxxxxxxxxxxxxxxxxx", {language : "en"}); // set the language

        Geocoder.from("Colosseum")
            .then(json => {
                var location = json.results[0].geometry.location;
                console.log(location);
            })
            .catch(error => console.warn(error));

        Geocoder.from(41.89, 12.49)
            .then(json => {
                var addressComponent = json.results[0].address_components[0];
                console.log(addressComponent, "LOCATION_NAME");
                alert(addressComponent)
            })
            .catch(error => console.warn(error));

        // Works as well :
        // ------------
    }


    getAllServices() {
        let urlM = `${this.props.bseUrl}/getallshops/getAllService`
        axios({
            method: 'get',
            url: urlM,
        })
            .then(result => {
                console.log(result.data.data, "Fetch_all_services")
                let allServices = result.data.data
                let allServicesNames = []
                for (let index = 0; index < allServices.length; index++) {
                    const element = allServices[index].serviceName;
                    if (allServicesNames.indexOf(element) == -1) {
                        allServicesNames.push(element)
                    }
                }
                this.setState({
                    allServicesNames: allServicesNames
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


    selectService(key, index) {
        this.setState({
            selectedService: key
        })
    }


    saveSearch() {
        const { rangeLow, sortedby, selectedService } = this.state
        const { currentLocation } = this.props
        this.setState({
            isloader: true
        })
        if (currentLocation != null) {
            let cloneLocation = {
                lat: currentLocation.coords.latitude,
                long: currentLocation.coords.longitude,
                km: rangeLow,
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
                    console.log(shops, "Fetch_search_data")
                    if (shops.length) {
                        // alert("Available_Shops")
                        let nearbyShopIDs = []
                        for (let index = 0; index < shops.length; index++) {
                            const element = shops[index]._id;
                            nearbyShopIDs.push(element)
                        }
                        this.getNearbyShopsServices(nearbyShopIDs, shops)
                    }
                    else {
                        // alert("There is no shops in " + cloneLocation.km + " kilometre")
                        this.setState({
                            err: "There is no shops in " + cloneLocation.km + " kilometre",
                            isloader: false
                        }, () => {
                            setTimeout(() => {
                                this.setState({
                                    err: ""
                                })
                            }, 10000)

                        })
                    }
                })
                .catch(err => {
                    let error = JSON.parse(JSON.stringify(err))
                    console.log(error, err, "cloneSerchKeywords")
                    this.setState({
                        err: error,
                        isloader: false
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                err: ""
                            })
                        }, 10000)

                    })
                })

        }
    }

    getNearbyShopsServices(nearbyShopIDs, shops, ) {
        const { selectedService, sortedby } = this.state
        let idsCloneData = { shopid: nearbyShopIDs }
        var options = {
            method: 'POST',
            url: `${this.props.bseUrl}/getNearbyShopServices/NearbyAllShopServices/`,
            headers:
            {
                'cache-control': 'no-cache',
                "Allow-Cross-Origin": '*',
            },
            data: idsCloneData
        }
        axios(options)
            .then(result => {
                let allShopsServices = result.data.data
                if (sortedby === "highToLow") {
                    allShopsServices.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                }
                else {
                    allShopsServices.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                }
                // console.log(allShopsServices, "Fetch_Shops_NearBy_Shops_Services")
                if (selectedService != "") {
                    let sortedService = []
                    for (let index = 0; index < allShopsServices.length; index++) {
                        const element = allShopsServices[index];
                        if (element.serviceName === selectedService) {
                            sortedService.push(element)
                        }
                    }
                    let sortedShops = []
                    for (let index = 0; index < sortedService.length; index++) {
                        for (let i = 0; i < shops.length; i++) {
                            if (sortedService[index].userId === shops[i]._id) {
                                sortedShops.push(shops[i])
                            }
                        }
                    }
                    Actions.SearchResults({ shops: sortedShops })
                    // console.log(sortedService, sortedShops, "sortedService")
                    this.setState({
                        isloader: false
                    })
                }
                else {
                    Actions.SearchResults({ shops: shops })
                    // console.log(allShopsServices, shops, "withoutsoorted")
                    this.setState({
                        isloader: false
                    })
                }

            })
            .catch(err => {
                let error = JSON.parse(JSON.stringify(err))
                console.log(error, 'ERRROR', err)
                this.setState({
                    err: error,
                    isloader: false
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            err: ""
                        })
                    }, 10000)

                })
            })
    }


    render() {
        const { rangeLow, allServicesNames, selectedService, isloader, err } = this.state
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <View style={{
                    flex: 0.8,
                    flexDirection: "row",
                    borderBottomWidth: 0.5,
                    borderBottomColor: "#8E8E93",
                    // backgroundColor: "red"
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor: "orange"
                    }}>
                        <TouchableOpacity
                            onPress={() => Actions.pop()}
                        >
                            <Text style={{ marginTop: 10 }}>Cancle</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor: "yellow"
                    }}>
                        <TouchableOpacity

                        >
                            <Text style={{ marginTop: 10, fontWeight: "bold" }}>Filters</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor: "gray"
                    }}>

                        {
                            isloader === false ?
                                <TouchableOpacity
                                    // onPress={() => Actions.SearchResults()}
                                    onPress={() => this.saveSearch()}
                                >
                                    <Text style={{ marginTop: 10, color: "#FD6958" }}>Save</Text>
                                </TouchableOpacity>
                                :
                                <ActivityIndicator color="#FD6958" />
                        }


                    </View>

                </View>
                <View style={{
                    flex: 8,
                    // justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    marginTop: 0,
                    // backgroundColor: "green"
                }}>
                    <View style={{
                        width: "90%", marginTop: 20, flexDirection: "row",
                        // backgroundColor: "green"
                    }}>
                        <Text style={{ color: "#4A4A4A", fontSize: 16 }}>Location</Text>
                    </View>

                    <TouchableOpacity style={{
                        marginTop: 10,
                        width: "90%",
                        height: 45,
                        borderRadius: 50,
                        // justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: "#E8E6E7"
                    }}
                        onPress={() => { Actions.Googlemapfullview({ draggable: true }) }}
                    >
                        <FontAwesome name="location-arrow" style={{ marginLeft: "5%", color: '#909090', fontWeight: 'bold', fontSize: 20 }} />
                        <Text style={{ marginLeft: "5%", color: "black", fontWeight: "bold", fontSize: 14 }}>Current location </Text>
                        <Text style={{ color: "#8E8E93", fontWeight: "bold", fontSize: 14 }}>(Select Location on map)</Text>
                    </TouchableOpacity>

                    {/* gender */}
                    {/* <View style={{
                        width: "90%", marginTop: 10, flexDirection: "row",
                        // backgroundColor: "green"
                    }}>
                        <Text style={{ color: "#4A4A4A", fontSize: 16 }}>Gender</Text>
                    </View>

                    <View style={{
                        marginTop: 10,
                        width: "90%",
                        height: 45,
                        borderRadius: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: "#E8E6E7",
                        overflow: "hidden"

                    }}>
                        <View style={{
                            flex: 1, flexDirection: "row", borderRadius: 50, height: "100%"
                        }}>

                            <TouchableOpacity style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: this.state.gender === "Male" ? "#FD6958" : "#E8E6E7",
                            }}
                                onPress={() => { this.setState({ gender: "Male" }) }}
                            >
                                <Text style={{ color: "black", fontSize: 16 }}>Male</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: this.state.gender === "Female" ? "#FD6958" : "#E8E6E7",
                            }}
                                onPress={() => { this.setState({ gender: "Female" }) }}
                            >
                                <Text style={{ color: "black", fontSize: 16 }}>Female</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: this.state.gender === "Others" ? "#FD6958" : "#E8E6E7",
                            }}
                                onPress={() => { this.setState({ gender: "Others" }) }}
                            >
                                <Text style={{ color: "black", fontSize: 16 }}>Others</Text>
                            </TouchableOpacity>
                        </View>

                    </View> */}

                    <View style={{
                        width: "90%", marginTop: 10, flexDirection: "row", marginTop: 20
                        // backgroundColor: "green"
                    }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: "#4A4A4A", fontSize: 16, }}>Distance</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 16, color: "#8E8E93", textAlign: "right", }}>{rangeLow}.0 Km</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{
                        width: "100%",
                        height: 50,
                        justifyContent: "center", alignItems: "center", top: -20,
                        // backgroundColor: "red"
                    }}>
                        <RangeSlider
                            style={{ width: "90%", height: 80 }}
                            gravity={'center'}
                            min={0}
                            max={25}
                            initialLowValue={5}
                            // initialHighValue={5}
                            step={1}
                            rangeEnabled={false}
                            selectionColor="#FD6958"
                            blankColor="#E8E6E7"
                            thumbColor="#FD6958"
                            thumbBorderColor="#F1EBEB"
                            onValueChanged={(low, high, fromUser) => {
                                this.setState({ rangeLow: low, rangeHigh: high })
                            }} />

                    </View>

                    <View style={{
                        width: "90%", flexDirection: "row",
                        // backgroundColor: "green"
                    }}>
                        <Text style={{ color: "#4A4A4A", fontSize: 16, }}>Services</Text>
                    </View>
                    <View style={{
                        // width: "90%",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 5, flexWrap: "wrap", flexDirection: "row",
                        // backgroundColor: "green"
                    }}>
                        {

                            (allServicesNames.length != 0) ? (
                                allServicesNames.map((key, index) => {
                                    return (
                                        <TouchableOpacity key={index} style={{
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: 150,
                                            height: 35,
                                            margin: 5,
                                            borderRadius: 25,
                                            borderWidth: 0.5,
                                            borderColor: "grey",
                                            backgroundColor: selectedService === key ? "#FD6958" : null,
                                        }}
                                            onPress={() => { this.selectService(key, index) }}

                                        >
                                            <Text style={{
                                                color: "black", fontSize: 12,
                                                marginHorizontal: 25, marginVertical: 5,
                                                color: selectedService === key ? "#ffff" : null,
                                            }}>{key}</Text>
                                        </TouchableOpacity>

                                    )
                                })

                            ) : <ActivityIndicator color="#FD6958" size={"large"} />
                        }
                    </View>


                    <View style={{
                        width: "90%", marginTop: 20, marginBottom: 50
                        // backgroundColor: "green"
                    }}>
                        <Text style={{ color: "#4A4A4A", fontSize: 16, }}>Sortby</Text>

                        {/* <TouchableOpacity style={{
                            marginTop: 10,
                        }}
                            onPress={() => { this.setState({ sortedby: "Popular" }) }}
                        >
                            <Text style={{ color: "black", fontSize: 16, color: this.state.sortedby === "Popular" ? "#FD6958" : null, }}>Most Popular</Text>
                        </TouchableOpacity> */}

                        {
                            (selectedService != "") ? (
                                <>
                                    <TouchableOpacity style={{
                                        marginTop: 10,
                                    }}
                                        onPress={() => { this.setState({ sortedby: "lowToHigh" }) }}
                                    >
                                        <Text style={{ color: "black", fontSize: 16, color: this.state.sortedby === "lowToHigh" ? "#FD6958" : null, }}>Cost Low to High</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{
                                        marginTop: 10,
                                    }}
                                        onPress={() => { this.setState({ sortedby: "highToLow" }) }}
                                    >
                                        <Text style={{ color: "black", fontSize: 16, color: this.state.sortedby === "highToLow" ? "#FD6958" : null, }}>Cost High to Low</Text>
                                    </TouchableOpacity>
                                </>
                            ) : <>
                                    <TouchableOpacity disabled style={{ marginTop: 10, }}>
                                        <Text style={{ color: "grey", fontSize: 16, }}>Cost Low to High</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity disabled style={{ marginTop: 10, }}>
                                        <Text style={{ color: "grey", fontSize: 16, }}>Cost High to Low</Text>
                                    </TouchableOpacity>
                                </>
                        }
                    </View>

                    <View style={{ width: "90%", justifyContent: "center", alignItems: "center", }}>
                        {
                            err != "" ? <Text style={{ marginTop: 10, color: "red" }}>{err}</Text> : null
                        }
                    </View>

                </View>
            </ScrollView>
        );
    }
}
let mapStateToProps = state => {
    return {
        bseUrl: state.root.bseUrl,
        currentLocation: state.root.currentLocation,
    };
};
function mapDispatchToProps(dispatch) {
    return ({
        setNearByShops: (shops, ) => {
            dispatch(setNearByShops(shops));
        },
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Filters);


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingBottom: 0,
        backgroundColor: "white",

    },

});