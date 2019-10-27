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
import { Actions } from 'react-native-router-flux';

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
            <View style={{ paddingVertical: 5, paddingHorizontal: 15, width: "90%", marginHorizontal: "5%" }}>

                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => Actions.ServiceDetaild()}
                            style={{ marginTop: 25, flexDirection: "row", flex: 1 }}>
                            <View style={{ flex: 2 }}>
                                <Image
                                    resizeMode="contain"
                                    style={{ width: 35, height: 35 }}
                                    source={item.image}
                                />
                            </View>
                            <View style={{ flex: 7 }}>
                                <Text>{item.heading}</Text>
                                <Text style={{ fontSize: 11, color: "grey" }}>{item.type} Types</Text>
                            </View>
                            <TouchableOpacity style={{ flex: 1 }}>
                                <Text style={{ fontSize: 11, color: "#FD6958" }}>View</Text>
                            </TouchableOpacity>




                        </TouchableOpacity>
                    )}
                // keyExtractor={item => item.id}
                // extraData={selected}
                />

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

