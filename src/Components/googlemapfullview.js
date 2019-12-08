
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, ScrollView, Picker, Image, SafeAreaView, ActivityIndicator, images, Dimensions, Share } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Card, CardItem, Thumbnail, Button, Icon, Item, Fab, Input } from 'native-base';
import { connect } from "react-redux";
import MapDirection from '../Components/maps'
import Ionicons from 'react-native-vector-icons/Ionicons';

class googlemapfullview extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "white"
            }}>
                <View style={{ flex: 0.8, }}>
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        borderBottomColor: "grey",
                        borderBottomWidth: 0.5
                    }}>
                        <TouchableOpacity onPress={() => Actions.pop()}
                        >
                            <Ionicons name="ios-arrow-back" style={{ marginLeft: 25, color: "black", fontWeight: 'bold', fontSize: 28 }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 8, }}>

                    <View style={{ flex: 1, flexDirection: "row", borderBottomWidth: 0.5, borderBottomColor: "#BEBCBC", marginTop: 10 }} >
                        <View
                            style={{
                                // marginTop: 10,
                                marginBottom: 10,
                                width: "90%",
                                marginHorizontal: "5%",
                                borderWidth: 1,
                                borderColor: "#1E90FF",
                                borderRadius: 0,
                                backgroundColor: "#EDEDED",
                            }}
                        >
                            <Text>Location on map</Text>
                            <MapDirection />
                        </View>


                    </View>
                </View>


            </View>
        );
    }
}


let mapStateToProps = state => {
    return {

    };
};
function mapDispatchToProps(dispatch) {
    return ({
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(googlemapfullview);
