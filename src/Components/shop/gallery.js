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
class Gallery extends Component {
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
                <View>
                    <Image
                        resizeMode="contain" style={{ width: "100%", height: 250 }}
                        source={require('../../../assets/ODUD5I0.png')}
                    />
                </View>

                <View style={{ flexDirection: "row", width: "100%", }}>

                    <View style={{  width: "100%", flex:1}}>
                        <Image
                            resizeMode="contain" style={{ width: "100%", height: 250 }}
                            source={require('../../../assets/benjamin-raffetseder-1069591-unsplash.png')}
                        />
                        <Image
                            resizeMode="contain" style={{ width: "100%", height: 250,marginTop:15}}
                            source={require('../../../assets/stefan-stefancik-1203044-unsplash.png')}
                        />
                    </View>
                    <View style={{  width: "100%", flex:1}}>
                        <Image
                            resizeMode="contain" style={{ width: "100%",  height: 150 }}
                            source={require('../../../assets/radoslaw-prekurat-148700-unsplash.png')}
                        />
                        <Image
                            resizeMode="contain" style={{ width: "100%", height: 150,marginTop:10  }}
                            source={require('../../../assets/brooke-lark-158019-unsplash.png')}
                        />
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
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

