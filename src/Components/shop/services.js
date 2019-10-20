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
const DATA = [
    {
        image: womenHairstyling,
    },
    {
        image: surface1,
    },

];
class Services extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const { activeColor } = this.state
        return (
            <View style={{ alignItems: "center" }}>
                <View style={{
                    marginTop: 10,
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

                        <TouchableOpacity style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: this.state.catogeries === "services" ? "#FD6958" : "#fff",
                        }}
                            onPress={() => { this.setState({ catogeries: "services" }) }}
                        >
                            <Text style={{ color: this.state.catogeries === "services" ? "#fff" : "#FD6958", fontSize: 14 }}>Services</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flex: 2,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: this.state.catogeries === "packages" ? "#FD6958" : "#fff",
                        }}
                            onPress={() => { this.setState({ catogeries: "packages" }) }}
                        >
                            <Text style={{ color: this.state.catogeries === "packages" ? "#fff" : "#FD6958", fontSize: 14 }}>Packages & Offers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: this.state.catogeries === "price" ? "#FD6958" : "#fff",
                        }}
                            onPress={() => { this.setState({ catogeries: "price" }) }}
                        >
                            <Text style={{ color: this.state.catogeries === "price" ? "#fff" : "#FD6958", fontSize: 14 }}>Price Table</Text>
                        </TouchableOpacity>



                    </View>

                </View>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <Image
                            source={item.image}
                            // title={item.title}
                            // selected={!!selected.get(item.id)}
                            // onSelect={onSelect}
                        />
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
export default connect(mapStateToProps, mapDispatchToProps)(Services);

