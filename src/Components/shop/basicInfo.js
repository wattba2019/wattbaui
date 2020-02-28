import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, StatusBar,
    ScrollView, Picker, Image, SafeAreaView, ActivityIndicator,
    images, Dimensions, ImageBackground
} from 'react-native';
import { connect } from "react-redux";
// import { Icon, Tabs, Tab, TabHeading } from 'native-base';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
// import Zocial from 'react-native-vector-icons/Zocial';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import ImageSlider from 'react-native-image-slider';

class BasicInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { barberDetails, shop, workingHours } = this.props
        console.log(barberDetails, shop, workingHours, "BARBER_DETAILS_AND_SHOPS")
        return (
            <View>
                <View style={{ paddingHorizontal: 25, paddingVertical: 10 }} >
                    <Text style={{ marginTop: 20, fontWeight: "bold" }}>Opening Hours</Text>
                    {
                        (workingHours) ? (
                            workingHours.map((key, index) => {
                                return (
                                    <View style={{ flexDirection: "row", flex: 1 }} key={index}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ color: "green" }}>{'\u2B24'} <Text style={{ color: "black" }}> {key.day}</Text></Text>
                                        </View>
                                        <View style={{ flex: 0.5 }}>
                                            <Text>{key.openTimings}</Text>
                                        </View>
                                        <View style={{ flex: 0.5 }}>
                                            <Text>{key.closingTime}</Text>
                                        </View>
                                    </View>
                                )
                            })
                        ) : null
                    }
                   
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 6, marginTop: 20, }}>
                            <Text style={{ fontWeight: "bold" }}>Address</Text>
                            {/* <Text style={{ color: "grey" }}>47B R-Block Morden, London, Greater London, United Kingdom</Text> */}
                            <Text style={{ color: "grey" }}>{shop.addressLine1}</Text>
                            <TouchableOpacity style={{ flexDirection: "row", marginTop: 5 }}>
                                <Entypo name="direction" style={{ color: "#FD6958", fontWeight: 'bold', fontSize: 20 }} />
                                <Text style={{ color: "#FD6958" }}> Get directions</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{ flex: 4, marginTop: 20, justifyContent: "center", alignItems: "center" }}>
                            <Image
                                resizeMode="contain"
                                style={{ width: 100, height: 100 }}
                                source={require("../../../assets/Rectangle2938.png")}
                            />
                        </View>
                    </View>
                </View>




            </View>
        );
    }
}


const styles = StyleSheet.create({

});

let mapStateToProps = state => {
    return {
        // workinghours: state.root.workinghours,
    };
};
function mapDispatchToProps(dispatch) {
    return ({
        // languageSet: (lang) => {
        //     dispatch(languageSet(lang))
        // },
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(BasicInfo);

