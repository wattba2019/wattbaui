import React, { Component } from "react";
import {
    View, StyleSheet,
    StatusBar, TouchableOpacity,
    Text, ScrollView, Picker, Alert

} from 'react-native';
import { CheckBox, Body } from 'native-base';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Entypo from 'react-native-vector-icons/Entypo';

class ChooseService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalCost: 0,
            types3: [{ label: 'Male', value: "male" }, { label: 'Female', value: "female" },],
            value3: "male",
            value3Index: 0,
            allItems: [],
        };
    }

    UNSAFE_componentWillMount() {
        let { shopServices, } = this.props
        console.log(shopServices, "shopServices")
        this.setState({
            shopServices: shopServices
        })
    }

    chooseYourService = (key, index,) => {
        let { shopServices, totalCost } = this.state
        let price = totalCost
        let cloneAllServices = shopServices
        let selectedService = shopServices[index]
        if (selectedService.selected != true) {
            selectedService.selected = true
            price = price + Number(selectedService.price)
        }
        else {
            selectedService.selected = false
            price = price - Number(selectedService.price)
        }
        cloneAllServices.splice(index, 1, selectedService)
        this.setState({
            shopServices: cloneAllServices,
            totalCost: price
        })
    }


    chooseYourExtraService = (key, index, serviceIndex) => {
        let { shopServices, totalCost } = this.state
        let price = totalCost
        let cloneAllServices = shopServices
        let selectedService = cloneAllServices[serviceIndex].extraServices[index]
        if (selectedService.selected != true) {
            selectedService.selected = true
            price = price + Number(selectedService.price)
        }
        else {
            selectedService.selected = false
            price = price - Number(selectedService.price)

        }
        this.setState({
            shopServices: cloneAllServices,
            totalCost: price
        })
    }

    next = () => {
        let { value3, totalCost, shopServices } = this.state
        let allItems = []
        let renderSelectedService = []
        let extraServicesSelected = []
        for (let index = 0; index < shopServices.length; index++) {
            const extraServices = shopServices[index].extraServices;
            const _id = shopServices[index]._id;
            const service = shopServices[index];
            const selectedBolean = shopServices[index].selected;
            if (selectedBolean && selectedBolean === true) {
                for (let j = 0; j < extraServices.length; j++) {
                    const extraServiceElement = extraServices[j];
                    if (extraServiceElement.selected && extraServiceElement.selected === true) {
                        extraServicesSelected.push(extraServiceElement)
                    }
                }
                allItems.push(_id)
                renderSelectedService.push(service)
            }
        }

        if (allItems.length != 0) {
            // console.log(renderSelectedService, "renderSelectedService")
            Actions.Bookappointment({ chosenItems: allItems, extraServicesSelected: extraServicesSelected, gendre: value3, totalCost: totalCost, pack: false, renderSelectedService })
        }
        else {
            Alert.alert("Please choose service")
        }
    }

    render() {
        const { totalCost, shopServices } = this.state
        // console.log(shopServices, "SERVICES_DETAILS")
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

                            {
                                (shopServices) ? (
                                    shopServices.map((key, index) => {
                                        return (
                                            <View key={index} style={{ flex: 1, marginTop: 10, }}>

                                                <TouchableOpacity onPress={() => this.chooseYourService(key, index)}
                                                    style={{ flex: 1, flexDirection: "row", borderBottomColor: "#E6E6EE", borderBottomWidth: key.selected ? 1.5 : 0.5, padding: 5, height: 40 }}>
                                                    <View style={{ flex: 0.4, alignItems: "center", flexDirection: "row", }}>
                                                        <CheckBox onPress={() => this.chooseYourService(key, index)} color="#FD6958" checked={key.selected} />
                                                    </View>
                                                    <View style={{ flex: 1.7, alignItems: "center", flexDirection: "row", }}>
                                                        <Text style={{ fontWeight: "normal", fontSize: 15 }}>{key.serviceName}</Text>
                                                    </View>
                                                    <View style={{ flex: 0.5, alignItems: "center", justifyContent: "flex-end", flexDirection: "row", }}>
                                                        <Text style={{ fontWeight: "normal", fontSize: 15 }}>{key.price}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                {
                                                    (key.selected) ? (
                                                        <Text style={{ fontWeight: "bold", marginTop: 10, marginLeft: "5%", textDecorationLine: 'underline', }}>{"Extra Services"}</Text>
                                                    ) : null
                                                }
                                                {
                                                    (key.selected) ? (
                                                        key.extraServices.map((item, indexing) => {
                                                            return (
                                                                <View key={indexing}>
                                                                    <TouchableOpacity onPress={() => this.chooseYourExtraService(item, indexing, index)}
                                                                        style={{ flex: 1, flexDirection: "row", borderBottomColor: "#E6E6EE", borderBottomWidth: 0.5, padding: 15 }}>
                                                                        <View style={{ flex: 0.4, alignItems: "center", flexDirection: "row", }}>
                                                                            <CheckBox onPress={() => this.chooseYourExtraService(item, indexing, index)} color="#FD6958" checked={item.selected} />
                                                                        </View>
                                                                        <View style={{ flex: 1.7, flexDirection: "row", }}>
                                                                            <Text style={{ fontWeight: "normal", fontSize: 14, color: "#8E8E93" }}>{item.serviceName}</Text>
                                                                        </View>
                                                                        <View style={{ flex: 0.5, justifyContent: "flex-end", flexDirection: "row", }}>
                                                                            <Text style={{ fontWeight: "normal", fontSize: 14, color: "#8E8E93" }}>{item.price}</Text>
                                                                        </View>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            )
                                                        })

                                                    ) : null
                                                }



                                            </View>
                                        )
                                    })
                                ) : null
                            }

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
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>GBP {totalCost}</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end", }}>
                            <TouchableOpacity
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
    // console.log(state, 'mapStateToProps')
    return {
        shopServices: state.root.shopServices,
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