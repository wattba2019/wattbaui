import React, { Component } from "react";
import {
    View, StyleSheet,
    StatusBar, TouchableOpacity,
    Text, ScrollView, Picker, Alert

} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';

class ChooseService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCost: 0,
            types3: [{ label: 'Male', value: "male" }, { label: 'Female', value: "female" },],
            value3: "male",
            value3Index: 0,
            selectedHairStyles: {},
            HairStyles: [],
            selectedShaving: {},
            Shaving: [],
            selectedHairdryer: {},
            Hairdryer: [],
            selectedHairCut: {},
            HairCut: [],
            selectedHairColoring: {},
            HairColoring: [],
            selectedFacialMakeup: {},
            FacialMakeup: [],
            selectedEyeMackup: {},
            EyeMackup: [],
            selectedServices: []
        };
    }

    componentDidMount() {
        // let urlMservicesget = `${this.props.bseUrl}/servicesget/${this.props.shop._id}`
        let urlMservicesget = `${this.props.bseUrl}/servicesget/${"5dfb488f662af31be47f3254"}`
        axios({
            method: 'get',
            url: urlMservicesget,
        })
            .then(result => {
                let services = result.data.data
                // console.log(services, "DATA_FROM_API")
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
                this.setState({
                    services: services,
                    isloader: false
                })
            })
            .catch(err => {
                if (err.response.status === 409) {
                    console.log(err.response.data.message, "ERROR_ON_GET_SERVICES")
                }
                else {
                    alert(err.response.data.message)
                }
            })
    }

    chooseYourService = (type, serviceArr, itemValue, index) => {
        console.log(type, serviceArr, itemValue, index, "PARAMS_IN_CHOOSE_YOUR_SERVICE")
        if (itemValue, index) {
            let price = 0
            let service = this.state[serviceArr]
            let cloneSelectedServices = this.state.selectedServices

            // selected data sorting
            var chosenItem = service.filter(function (obj) {
                return obj._id === itemValue;
            })

            // data push after checking already exist
            for (var i = 0; i < cloneSelectedServices.length; i++) {
                if (cloneSelectedServices[i].serviceCatogery === chosenItem[0].serviceCatogery) {
                    cloneSelectedServices.splice(i, 1)
                }
            }
            cloneSelectedServices.push(chosenItem[0])

            //price makeing
            for (var i = 0; i < cloneSelectedServices.length; i++) {
                price = price + Number(cloneSelectedServices[i].price)
            }
            this.setState({
                totalCost: price,       //total cost
                [`${type}`]: chosenItem[0],     //single array selected items
                selectedServices: cloneSelectedServices     //all selected items
            })
        }
    }

    next = () => {
        let { selectedServices, value3, totalCost } = this.state
        if (selectedServices.length != 0) {
            Actions.Bookappointment({ chosenItems: selectedServices, gendre: value3, totalCost: totalCost })
        }
        else {
            Alert.alert("Please choose service")
        }
    }

    render() {
        const {
            selectedHairStyles, HairStyles, selectedShaving, Shaving,
            selectedHairdryer, Hairdryer, selectedHairCut, HairCut,
            selectedHairColoring, HairColoring, selectedFacialMakeup, FacialMakeup,
            selectedEyeMackup, EyeMackup, totalCost,
        } = this.state
        return (
            <View style={{
                flex: 1,
                width: "100%",
                backgroundColor: "white",
                paddingHorizontal: 10,
            }}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <View style={{
                    flex: 0.7,
                    flexDirection: "row",
                    borderBottomWidth: 0.5,
                    borderBottomColor: 'grey',
                }}>

                    <View style={{ position: "absolute" }}>
                        <TouchableOpacity onPress={() => Actions.pop()}>
                            <Entypo name="cross" style={{ marginLeft: 15, top: 10, color: "black", fontSize: 25 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Text style={{ alignItems: "center", fontSize: 16 }}>Book Appointment</Text>
                    </View>
                </View>

                <View style={{
                    flex: 8,
                    width: "100%",
                    marginTop: 20,
                    justifyContent: "center",
                    alignItems: "center"

                }}>
                    <ScrollView
                        contentContainerStyle={styles.contentContainer}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        style={{ width: "90%", }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: "normal" }}>Gender</Text>
                        <View style={{ width: "100%", marginTop: 10 }}>
                            <RadioForm formHorizontal={true} animation={true} >
                                {this.state.types3.map((obj, i) => {
                                    var onPress = (value, index) => {
                                        this.setState({
                                            value3: value,
                                            value3Index: index
                                        })
                                    }
                                    return (
                                        <RadioButton labelHorizontal={true} key={i} >
                                            {/*  You can set RadioButtonLabel before RadioButtonInput */}
                                            <RadioButtonInput
                                                animation={true}
                                                obj={obj}
                                                index={i}
                                                isSelected={this.state.value3Index === i}
                                                onPress={onPress}
                                                buttonInnerColor={'#FD6958'}
                                                buttonOuterColor={this.state.value3Index === i ? '#FD6958' : '#8E8E93'}
                                                buttonSize={15}
                                                buttonOuterSize={30}
                                                buttonStyle={{ marginLeft: 10 }}
                                                buttonWrapStyle={{ marginLeft: 10, }}
                                            />
                                            <RadioButtonLabel
                                                obj={obj}
                                                index={i}
                                                onPress={onPress}
                                                labelStyle={{ fontWeight: 'bold', color: this.state.value3Index === i ? '#FD6958' : '#8E8E93' }}
                                                labelWrapStyle={{ marginLeft: 10 }}
                                            />
                                        </RadioButton>
                                    )
                                })}
                            </RadioForm>

                            <Text style={{ fontSize: 20, fontWeight: "normal", marginTop: 20 }}>Choose your service</Text>

                            {/* Picker Hair Styles */}

                            <View style={{ flex: 1, marginTop: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                                <View style={{ flex: 0.5, justifyContent: "center", }}>
                                    <Text style={{ fontWeight: "normal", fontSize: 18 }}>Hair Styles</Text>
                                </View>
                                <View style={{ flex: 0.8, justifyContent: "center", alignItems: "flex-end", backgroundColor: "#F0F0F0" }}>
                                    <Picker
                                        style={{ width: "90%", color: "#8E8E93", }}
                                        selectedValue={selectedHairStyles._id}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.chooseYourService("selectedHairStyles", "HairStyles", itemValue, itemIndex)
                                        }
                                    >
                                        <Picker.Item label="Select Type" value="Select Type" />
                                        {
                                            (HairStyles) ? (
                                                HairStyles.map((key, index) => {
                                                    return (
                                                        <Picker.Item key={index} label={key.serviceName + " ($" + key.price + ")"} value={key._id} />
                                                    )
                                                })
                                            ) : null
                                        }
                                    </Picker>
                                </View>
                            </View>

                            {/* Picker Shaving */}

                            <View style={{ flex: 1, marginTop: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                                <View style={{ flex: 0.5, justifyContent: "center", }}>
                                    <Text style={{ fontWeight: "normal", fontSize: 18 }}>Shaving</Text>
                                </View>
                                <View style={{ flex: 0.8, justifyContent: "center", alignItems: "flex-end", backgroundColor: "#F0F0F0" }}>
                                    <Picker
                                        style={{ width: "90%", color: "#8E8E93", }}
                                        selectedValue={selectedShaving._id}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.chooseYourService("selectedShaving", "Shaving", itemValue, itemIndex)
                                        }
                                    >
                                        <Picker.Item label="Select Type" value="Select Type" />
                                        {
                                            (Shaving) ? (
                                                Shaving.map((key, index) => {
                                                    return (
                                                        <Picker.Item key={index} label={key.serviceName + " ($" + key.price + ")"} value={key._id} />
                                                    )
                                                })
                                            ) : null
                                        }
                                    </Picker>
                                </View>
                            </View>

                            {/* Picker Shaving */}

                            <View style={{ flex: 1, marginTop: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                                <View style={{ flex: 0.5, justifyContent: "center", }}>
                                    <Text style={{ fontWeight: "normal", fontSize: 18 }}>Hairdryer</Text>
                                </View>
                                <View style={{ flex: 0.8, justifyContent: "center", alignItems: "flex-end", backgroundColor: "#F0F0F0" }}>
                                    <Picker
                                        style={{ width: "90%", color: "#8E8E93", }}
                                        selectedValue={selectedHairdryer._id}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.chooseYourService("selectedHairdryer", "Hairdryer", itemValue, itemIndex)
                                        }
                                    >
                                        <Picker.Item label="Select Type" value="Select Type" />
                                        {
                                            (Hairdryer) ? (
                                                Hairdryer.map((key, index) => {
                                                    return (
                                                        <Picker.Item key={index} label={key.serviceName + " ($" + key.price + ")"} value={key._id} />
                                                    )
                                                })
                                            ) : null
                                        }
                                    </Picker>
                                </View>
                            </View>

                            {/* Picker Haircut */}

                            <View style={{ flex: 1, marginTop: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                                <View style={{ flex: 0.5, justifyContent: "center", }}>
                                    <Text style={{ fontWeight: "normal", fontSize: 18 }}>Haircut</Text>
                                </View>
                                <View style={{ flex: 0.8, justifyContent: "center", alignItems: "flex-end", backgroundColor: "#F0F0F0" }}>
                                    <Picker
                                        style={{ width: "90%", color: "#8E8E93", }}
                                        selectedValue={selectedHairCut._id}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.chooseYourService("selectedHairCut", "HairCut", itemValue, itemIndex)
                                        }
                                    >
                                        <Picker.Item label="Select Type" value="Select Type" />
                                        {
                                            (HairCut) ? (
                                                HairCut.map((key, index) => {
                                                    return (
                                                        <Picker.Item key={index} label={key.serviceName + " ($" + key.price + ")"} value={key._id} />
                                                    )
                                                })
                                            ) : null
                                        }
                                    </Picker>
                                </View>
                            </View>

                            {/* Picker Hair Coloring */}

                            <View style={{ flex: 1, marginTop: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                                <View style={{ flex: 0.5, justifyContent: "center", }}>
                                    <Text style={{ fontWeight: "normal", fontSize: 18 }}>Hair Coloring</Text>
                                </View>
                                <View style={{ flex: 0.8, justifyContent: "center", alignItems: "flex-end", backgroundColor: "#F0F0F0" }}>
                                    <Picker
                                        style={{ width: "90%", color: "#8E8E93", }}
                                        selectedValue={selectedHairColoring._id}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.chooseYourService("selectedHairColoring", "HairColoring", itemValue, itemIndex)
                                        }
                                    >
                                        <Picker.Item label="Select Type" value="Select Type" />
                                        {
                                            (HairColoring) ? (
                                                HairColoring.map((key, index) => {
                                                    return (
                                                        <Picker.Item key={index} label={key.serviceName + " ($" + key.price + ")"} value={key._id} />
                                                    )
                                                })
                                            ) : null
                                        }
                                    </Picker>
                                </View>
                            </View>

                            {/* Picker Facial Makeup */}

                            <View style={{ flex: 1, marginTop: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                                <View style={{ flex: 0.5, justifyContent: "center", }}>
                                    <Text style={{ fontWeight: "normal", fontSize: 18 }}>Facial Makeup</Text>
                                </View>
                                <View style={{ flex: 0.8, justifyContent: "center", alignItems: "flex-end", backgroundColor: "#F0F0F0" }}>
                                    <Picker
                                        style={{ width: "90%", color: "#8E8E93", }}
                                        selectedValue={selectedFacialMakeup._id}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.chooseYourService("selectedFacialMakeup", "FacialMakeup", itemValue, itemIndex)
                                        }
                                    >
                                        <Picker.Item label="Select Type" value="Select Type" />
                                        {
                                            (FacialMakeup) ? (
                                                FacialMakeup.map((key, index) => {
                                                    return (
                                                        <Picker.Item key={index} label={key.serviceName + " ($" + key.price + ")"} value={key._id} />
                                                    )
                                                })
                                            ) : null
                                        }
                                    </Picker>
                                </View>
                            </View>

                            {/* Picker Eye Makeup */}

                            <View style={{ flex: 1, marginTop: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                                <View style={{ flex: 0.5, justifyContent: "center", }}>
                                    <Text style={{ fontWeight: "normal", fontSize: 18 }}>Eye Makeup</Text>
                                </View>
                                <View style={{ flex: 0.8, justifyContent: "center", alignItems: "flex-end", backgroundColor: "#F0F0F0" }}>
                                    <Picker
                                        style={{ width: "90%", color: "#8E8E93", }}
                                        selectedValue={selectedEyeMackup._id}
                                        onValueChange={(itemValue, itemIndex) =>
                                            this.chooseYourService("selectedEyeMackup", "EyeMackup", itemValue, itemIndex)
                                        }
                                    >
                                        <Picker.Item label="Select Type" value="Select Type" />
                                        {
                                            (EyeMackup) ? (
                                                EyeMackup.map((key, index) => {
                                                    return (
                                                        <Picker.Item key={index} label={key.serviceName + " ($" + key.price + ")"} value={key._id} />
                                                    )
                                                })
                                            ) : null
                                        }
                                    </Picker>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={{
                    flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", borderTopColor: "grey", borderTopWidth: 0.5,
                }}>
                    <View style={{
                        flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", width: "90%", marginHorizontal: "5%",
                    }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start", }}>
                            <Text style={{ fontWeight: "normal", }}>Total Cost</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>${totalCost}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end", }}>
                            <TouchableOpacity
                                // onPress={() => Actions.Bookappointment()}
                                onPress={() => this.next()}
                                style={{ width: "70%", height: 42, justifyContent: "center", alignItems: "center", backgroundColor: "#FD6958", borderRadius: 8 }}>
                                <Text style={{ fontWeight: "bold", fontSize: 18, color: "#ffffff" }}>Next</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}

let mapStateToProps = state => {
    return {
        bseUrl: state.root.bseUrl,
    };
};
function mapDispatchToProps(dispatch) {
    return ({
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(ChooseService);

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 30,
    },
});