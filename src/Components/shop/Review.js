import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, StatusBar,
    ScrollView, Picker, Image, SafeAreaView, ActivityIndicator,
    images, Dimensions, FlatList
} from 'react-native';
import { connect } from "react-redux";
import { Icon, Tabs, Tab, TabHeading } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Zocial from 'react-native-vector-icons/Zocial';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import womenHairstyling from '../../../assets/women-hairstyling.png';
import surface1 from '../../../assets/surface1.png';
import surface from '../../../assets/surface-1.png';
import surface2 from '../../../assets/surface-2.png';
import dye from '../../../assets/dye.png';
import makeup from '../../../assets/makeup.png';
import mascara from '../../../assets/mascara.png';
import ServiceChild1 from '../../Components/shop/serviceChild1';
import Packages from '../../Components/shop/packages';
class Review extends Component {
    constructor(props) {
        super(props)
        this.state = {
            catogeries: "services"
        }
    }

    render() {
        const { activeColor, } = this.state
        return (
            <View style={{ paddingHorizontal: 10 }}>
                {/* <View> */}

                {/* </View> */}
                <View>

                    <Image
                        resizeMode="contain" style={{ width: "100%", height: 150 }}
                        source={require('../../../assets/Rectangles.png')}
                    />
                    <View style={{ position: 'absolute', top: 0, left: 30, right: 0, bottom:0, justifyContent: "center" }}>
                        <Text style={{ fontSize: 55, color: "#fff" }}>4.8</Text>
                    </View>
                    <View style={{ position: 'absolute', top: 0, left: 130, right: 0, bottom: 20, justifyContent: "center" }}>
                        <Text style={{ fontSize: 15, color: "#fff" }}>2 reviews</Text>
                    </View>
                    <View style={{ position: 'absolute', top: 75, left: 30, right: 0, bottom: 0, justifyContent: "center", flexDirection: "row" }}>
                        <Entypo name="star" style={{ color: "#EBAC43", fontWeight: 'bold', fontSize: 28 }} />
                        <Entypo name="star" style={{ color: "#EBAC43", fontWeight: 'bold', fontSize: 28 }} />
                        <Entypo name="star" style={{ color: "#EBAC43", fontWeight: 'bold', fontSize: 28 }} />
                        <Entypo name="star" style={{ color: "#EBAC43", fontWeight: 'bold', fontSize: 28 }} />
                        <Entypo name="star" style={{ color: "#EBAC43", fontWeight: 'bold', fontSize: 28 }} />

                    </View>
                </View>

                <View style={{ flexDirection: "row", flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Image
                            resizeMode="contain" style={{ width: 50, height: 50, borderRadius: 50 }}
                            source={require('../../../assets/Ellipse2.png')}
                        />
                    </View>
                    <View style={{ flex: 4, marginHorizontal: 15 }}>
                        <Text style={{ fontSize: 15, color: "#8B867E" }}>Sophie French</Text>
                        <Text style={{ fontSize: 15, color: "#C4BCAE" }}>12.9.2019 at 02:44</Text>
                        <Text style={{ fontSize: 15, color: "#8B867E", marginVertical: 15 }}>They will cut yourhair and beard in a very classy and modern style</Text>

                    </View>
                    <View style={{ flex: 2, flexDirection: "row", }}>
                        <Entypo name="star" style={{ color: "#EBAC43", fontWeight: 'bold', fontSize: 18 }} />
                        <Entypo name="star" style={{ color: "#EBAC43", fontWeight: 'bold', fontSize: 18 }} />
                        <Entypo name="star" style={{ color: "#EBAC43", fontWeight: 'bold', fontSize: 18 }} />
                        <Entypo name="star-outlined" style={{ color: "#EBAC43", fontWeight: 'bold', fontSize: 18 }} />
                        <Entypo name="star-outlined" style={{ color: "#EBAC43", fontWeight: 'bold', fontSize: 18 }} />
                    </View>
                </View>


                <View style={{ flexDirection: "row", flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Image
                            resizeMode="contain" style={{ width: 50, height: 50, borderRadius: 50 }}
                            source={require('../../../assets/Ellipse.png')}
                        />
                    </View>
                    <View style={{ flex: 4, marginHorizontal: 15 }}>
                        <Text style={{ fontSize: 15, color: "#8B867E" }}>Alyana thomson</Text>
                        <Text style={{ fontSize: 15, color: "#C4BCAE" }}>24.3.2017 at 07:04</Text>
                        <Text style={{ fontSize: 15, color: "#8B867E", marginVertical: 15 }}>Best among others in the area need to improve cleaning though</Text>

                    </View>
                    <View style={{ flex: 2, flexDirection: "row", }}>
                        <Entypo name="star" style={{ color: "#EBAC43", fontWeight: 'bold', fontSize: 18 }} />
                        <Entypo name="star" style={{ color: "#EBAC43", fontWeight: 'bold', fontSize: 18 }} />
                        <Entypo name="star-outlined" style={{ color: "#EBAC43", fontWeight: 'bold', fontSize: 18 }} />
                        <Entypo name="star-outlined" style={{ color: "#EBAC43", fontWeight: 'bold', fontSize: 18 }} />
                        <Entypo name="star-outlined" style={{ color: "#EBAC43", fontWeight: 'bold', fontSize: 18 }} />
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
        // str: state.root.str,
        // userDetails: state.root.userDetails,
    };
};
function mapDispatchToProps(dispatch) {
    return ({
        // languageSet: (lang) => {
        //     dispatch(languageSet(lang))
        // },
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Review);

