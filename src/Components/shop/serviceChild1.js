import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Image, FlatList
} from 'react-native';
import { connect } from "react-redux";
import womenHairstyling from '../../../assets/women-hairstyling.png';
import surface1 from '../../../assets/surface1.png';
import surface from '../../../assets/surface-1.png';
import surface2 from '../../../assets/surface-2.png';
import dye from '../../../assets/dye.png';
import makeup from '../../../assets/makeup.png';
import mascara from '../../../assets/mascara.png';
import { Actions } from 'react-native-router-flux';

class ServiceChild1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            HairStyles: [],
            Shaving: [],
            Hairdryer: [],
            HairCut: [],
            HairColoring: [],
            FacialMakeup: [],
            EyeMackup: []
        }
    }

    componentDidMount() {
        let { services } = this.props
        if (services) {
            // Hair styles
            var resultHairStyles = services.filter(function (obj) {
                return obj.serviceCatogery === "Hair Styles";
            })
            // console.log(resultHairStyles, "SERVICES_Hair_Styles")

            // Shaving
            var resultShaving = services.filter(function (obj) {
                return obj.serviceCatogery === "Shaving";
            })
            // console.log(resultShaving, "SERVICES_Shaving")

            // Hairdryer
            var resultHairdryer = services.filter(function (obj) {
                return obj.serviceCatogery === "Hairdryer";
            })
            // console.log(resultHairdryer, "SERVICES_Hairdryer")

            // Haircut
            var resultHairCut = services.filter(function (obj) {
                return obj.serviceCatogery === "HairCut";
            })
            // console.log(resultHairCut, "SERVICES_HairCut")

            // Hair Coloring
            var resultHairColoring = services.filter(function (obj) {
                return obj.serviceCatogery === "Hair Coloring";
            })
            // console.log(resultHairColoring, "SERVICES_Hair_Coloring")

            // Facial Mackup
            var resultFacialMakeup = services.filter(function (obj) {
                return obj.serviceCatogery === "Facial Mackup";
            })
            // console.log(resultFacialMakeup, "SERVICES_Facial_Makeup")

            // Eye Mackup
            var resultEyeMackup = services.filter(function (obj) {
                return obj.serviceCatogery === "Eye Mackup";
            })
            // console.log(resultEyeMackup, "SERVICES_Eye_Mackup")

            this.setState({
                HairStyles: resultHairStyles,
                Shaving: resultShaving,
                Hairdryer: resultHairdryer,
                HairCut: resultHairCut,
                HairColoring: resultHairColoring,
                FacialMakeup: resultFacialMakeup,
                EyeMackup: resultEyeMackup,
            })
        }
    }

    serviceDetails = (item) => {
        let dataDetect = item.dataDetect
        let data = this.state[dataDetect]
        Actions.ServiceDetaild({ serviceDetails: data, serviceName: dataDetect })
    }

    render() {
        const { HairStyles, Shaving, Hairdryer, HairCut, HairColoring, FacialMakeup, EyeMackup } = this.state
        let DATA = [
            {
                image: womenHairstyling,
                heading: "Hair Styles",
                dataDetect: "HairStyles",
                type: HairStyles.length,
            },
            {
                image: surface1,
                heading: "Shaving",
                dataDetect: "Shaving",
                type: Shaving.length,
            },
            {
                image: surface,
                heading: "Hairdryer",
                dataDetect: "Hairdryer",
                type: Hairdryer.length,
            },
            {
                image: surface2,
                heading: "HairCut",
                dataDetect: "HairCut",
                type: HairCut.length,
            },
            {
                image: dye,
                heading: "Hair Coloring",
                dataDetect: "HairColoring",
                type: HairColoring.length,
            },
            {
                image: makeup,
                heading: "Facial Mackup",
                dataDetect: "FacialMakeup",
                type: FacialMakeup.length,
            },
            {
                image: mascara,
                heading: "Eye Mackup",
                dataDetect: "EyeMackup",
                type: EyeMackup.length,
            },
        ];
        return (
            <View style={{ paddingVertical: 5, paddingHorizontal: 15, width: "90%", marginHorizontal: "5%" }}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => this.serviceDetails(item)}
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
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
});
let mapStateToProps = state => {
    return {
    };
};
function mapDispatchToProps(dispatch) {
    return ({
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(ServiceChild1);

