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

    // UNSAFE_componentWillMount() {
    //     let { shopServices, } = this.props
    //     this.setState({
    //         shopServices: shopServices
    //     })
    // }

    chooseYourService = (itemValue, itemIndex, index) => {
        let { shopServices, } = this.props

        if (itemValue && itemIndex) {
            let price = 0
            let allServices = [...shopServices]
            let selectedShopService = allServices[index]
            let selectedExtraService = selectedShopService.extraServices[itemIndex - 1];
            let serviceName = selectedShopService.serviceName;
            let allItems = this.state.allItems.slice(0);

            for (var i = 0; i < allItems.length; i++) {
                if (allItems[i].serviceName === selectedShopService.serviceName) {
                    allItems.splice(i, 1)
                }
            }

            selectedShopService.extraServices = [selectedExtraService]
            allItems.push(selectedShopService)

            console.log(shopServices, "SHOP_ALL_SERVICES")
            console.log(selectedShopService, "SELECTED_SERVICES")
            console.log(selectedExtraService, "SELECTED_EXTRA_SERVICES")
            console.log(allItems, itemIndex, index, "DATA")

            //Cost Add
            for (var i = 0; i < allItems.length; i++) {
                price = price + Number(allItems[i].extraServices[0].price)
            }

            this.setState({
                totalCost: price,
                [`${serviceName}`]: selectedExtraService,
                allItems: allItems
            })
        }
    }

    next = () => {
        let { allItems, value3, totalCost } = this.state
        if (allItems.length != 0) {
            Actions.Bookappointment({ chosenItems: allItems, gendre: value3, totalCost: totalCost })
        }
        else {
            Alert.alert("Please choose service")
        }
    }

    render() {
        const { totalCost, } = this.state
        const { shopServices, } = this.props
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

                            {
                                (shopServices) ? (
                                    shopServices.map((key, index) => {
                                        let selectedData = this.state[`${key.serviceName}`] && this.state[`${key.serviceName}`].serviceName
                                        return (
                                            <View key={index} style={{ flex: 1, marginTop: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>
                                                <View style={{ flex: 0.5, justifyContent: "center", }}>
                                                    <Text style={{ fontWeight: "normal", fontSize: 18 }}>{key.serviceName}</Text>
                                                </View>
                                                <View style={{ flex: 0.8, justifyContent: "center", alignItems: "flex-end", backgroundColor: "#F0F0F0" }}>
                                                    <Picker
                                                        style={{ width: "90%", color: "#8E8E93", }}
                                                        selectedValue={selectedData}
                                                        onValueChange={(itemValue, itemIndex, ) =>
                                                            this.chooseYourService(itemValue, itemIndex, index)
                                                        }
                                                    >
                                                        <Picker.Item label="Select Type" value="Select Type" />
                                                        {
                                                            (key.extraServices.length != 0) ? (
                                                                key.extraServices.map((extraService, count) => {
                                                                    return (
                                                                        <Picker.Item key={count} label={extraService.serviceName + " (" + extraService.price + " $)"} value={extraService.serviceName} />
                                                                    )
                                                                })
                                                            ) : null
                                                        }
                                                    </Picker>
                                                </View>
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
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>${totalCost}</Text>
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