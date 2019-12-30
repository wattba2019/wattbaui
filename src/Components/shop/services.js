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
class Services extends Component {
    constructor(props) {
        super(props)
        this.state = {
            catogeries: "services"
        }
    }


    render() {
        let { shop, services } = this.props
        return (
            <View>
                <View style={{ alignItems: "center" }}>
                    <View style={{
                        marginTop: 25,
                        width: "90%",
                        height: 45,
                        borderRadius: 5,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: "#fff",
                        overflow: "hidden", borderColor: "#FD6958", borderWidth: 1

                    }}>
                        <View style={{
                            flex: 1, flexDirection: "row", borderRadius: 5, height: "100%",
                        }}>

                            <TouchableOpacity
                                // onPress={() => Actions.ServiceDetaild()}

                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: this.state.catogeries === "services" ? "#FD6958" : "#fff",
                                }}
                                onPress={() => { this.setState({ catogeries: "services" }) }}
                            >
                                <Text style={{ color: this.state.catogeries === "services" ? "#fff" : "#FD6958", fontSize: 13 }}>Services</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                // onPress={() => Actions.ServiceDetaild()}
                                style={{
                                    flex: 2,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: this.state.catogeries === "packages" ? "#FD6958" : "#fff",
                                }}
                                onPress={() => { this.setState({ catogeries: "packages" }) }}
                            >
                                <Text style={{ color: this.state.catogeries === "packages" ? "#fff" : "#FD6958", fontSize: 13 }}>Packages & Offers</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                // onPress={() => Actions.ServiceDetaild()}
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: this.state.catogeries === "price" ? "#FD6958" : "#fff",
                                }}
                                onPress={() => { this.setState({ catogeries: "price" }) }}
                            >
                                <Text style={{ color: this.state.catogeries === "price" ? "#fff" : "#FD6958", fontSize: 13 }}>Price Table</Text>
                            </TouchableOpacity>



                        </View>

                    </View>

                </View>

                {
                    (this.state.catogeries === "services") ?
                        (
                            <ServiceChild1 services={services} />

                        ) :
                        (
                            this.state.catogeries === "packages" ?
                                <Packages />
                                : null
                        )
                }


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
export default connect(mapStateToProps, mapDispatchToProps)(Services);

