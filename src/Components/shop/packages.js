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
const DATA = [
    {
        image: womenHairstyling,
        heading: "Hair Styles",
        type: 10,
    },
    {
        image: surface1,
        heading: "Shaving",
        type: 5,
    },
    {
        image: surface,
        heading: "Hairdryer",
        type: 2,
    },
    {
        image: surface2,
        heading: "HairCut",
        type: 9,
    },
    {
        image: dye,
        heading: "Hair Coloring",
        type: 9,
    },
    {
        image: makeup,
        heading: "Facial Mackup",
        type: 9,
    },
    {
        image: mascara,
        heading: "Eye Mackup",
        type: 9,
    },

];
class ServiceChild1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { activeColor } = this.state
        return (
            <View style={{  paddingHorizontal: 15 }}>

                <Image source={require('../../../assets/PaZOMZ.png')} resizeMode="contain"
                                style={{ width:"100%",height:200,borderRadius:10 }}
                            />
                <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:-15}}>
                    <View>
                        <Text>HairCut & Hairstyle</Text>
                    </View>
                    <View>
                    <Text style={{color:"#FD6958"}}>Book Now</Text>

                    </View>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:2}}>
                    <View>
                        <Text style={{color:"grey",fontSize:11}}>Luxury package offer till sep 22 2019</Text>
                    </View>
                    <View>
                    <Text style={{}}>$100.00</Text>

                    </View>
                </View>
                <Image source={require('../../../assets/PaZOMZ.png')} resizeMode="contain"
                                style={{ width:"100%",height:200,borderRadius:10 }}
                            />
                <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:-15}}>
                    <View>
                        <Text>HairCut & Hairstyle</Text>
                    </View>
                    <View>
                    <Text style={{color:"#FD6958"}}>Book Now</Text>

                    </View>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:2}}>
                    <View>
                        <Text style={{color:"grey",fontSize:11}}>Luxury package offer till sep 22 2019</Text>
                    </View>
                    <View>
                    <Text style={{}}>$100.00</Text>

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
export default connect(mapStateToProps, mapDispatchToProps)(ServiceChild1);

