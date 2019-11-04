import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, TextInput, ScrollView, Picker

} from 'react-native';
import { Icon, Tabs, Tab, TabHeading } from 'native-base';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
// import ShopsCards from '../../../Components/shopscards';
import BasicInfo from '../shop/basicInfo';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Entypo from 'react-native-vector-icons/Entypo';



class ChooseService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeColor: "basicinfo",
            genderValue: "male",
            types3: [{ label: 'Male', value: "male" }, { label: 'Female', value: "female" },],
            value3: 0,
            value3Index: 0,

        };
    }

    activeColor(key) {
        console.log(key.ref.key)
        if (key.ref.key == ".0") {
            this.setState({
                activeColor: "basicinfo"
            })
        }
        if (key.ref.key == ".1") {
            this.setState({
                activeColor: "review"
            })
        }


    }

    render() {
        const { activeColor } = this.state



        var radio_props = [
            { label: 'Male', value: "male" },
            { label: 'Female', value: "female" }
        ];

        return (
            <View style={{
                flex: 1,
                width: "100%",
                // alignItems: "center",
                backgroundColor: "white",
                paddingHorizontal: 10,
            }}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />

                <View style={{
                    flex: 0.7,
                    flexDirection: "row",
                    borderBottomWidth: 0.5,
                    borderBottomColor: 'grey',
                    // height:30
                    // justifyContent: "center", 
                    // alignItems: "center", 
                    // backgroundColor: 'red'
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

                        style={{
                            width: "90%",
                            // backgroundColor: "grey"
                        }}>
                        <Text style={{ fontSize: 20, fontWeight: "normal" }}>Gender</Text>

                        <View style={{
                            width: "100%",
                            marginTop: 10
                        }}>
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


                            {/* Picker */}

                            <View style={{ flex: 1, marginTop: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>

                                <View style={{ flex: 0.5, justifyContent: "center", }}>
                                    <Text style={{ fontWeight: "normal", fontSize: 18 }}>Haircut</Text>
                                </View>

                                <View style={{ flex: 0.8, justifyContent: "center", alignItems: "flex-end", backgroundColor: "#F0F0F0" }}>
                                    <Picker
                                        style={{ width: "90%", color: "#8E8E93", }}
                                    // selectedValue={this.state.language}
                                    // onValueChange={(itemValue, itemIndex) =>
                                    //     this.setState({ language: itemValue })
                                    // }
                                    >
                                        <Picker.Item label="Relexed Bob ($15)" value="Relexed Bob ($15)" />
                                        <Picker.Item label="Select Type" value="Select Type" />
                                    </Picker>
                                </View>

                            </View>


                            <View style={{ flex: 1, marginTop: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>

                                <View style={{ flex: 0.5, justifyContent: "center", }}>
                                    <Text style={{ fontWeight: "normal", fontSize: 18 }}>Hair Styles</Text>
                                </View>

                                <View style={{ flex: 0.8, justifyContent: "center", alignItems: "flex-end", backgroundColor: "#F0F0F0" }}>
                                    <Picker
                                        style={{ width: "90%", color: "#8E8E93", }}
                                    // selectedValue={this.state.language}
                                    // onValueChange={(itemValue, itemIndex) =>
                                    //     this.setState({ language: itemValue })
                                    // }
                                    >
                                        <Picker.Item label="Select Type" value="Select Type" />
                                        <Picker.Item label="Relexed Bob ($15)" value="Relexed Bob ($15)" />
                                    </Picker>
                                </View>

                            </View>

                            <View style={{ flex: 1, marginTop: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>

                                <View style={{ flex: 0.5, justifyContent: "center", }}>
                                    <Text style={{ fontWeight: "normal", fontSize: 18 }}>Shaving</Text>
                                </View>

                                <View style={{ flex: 0.8, justifyContent: "center", alignItems: "flex-end", backgroundColor: "#F0F0F0" }}>
                                    <Picker
                                        style={{ width: "90%", color: "#8E8E93", }}
                                    // selectedValue={this.state.language}
                                    // onValueChange={(itemValue, itemIndex) =>
                                    //     this.setState({ language: itemValue })
                                    // }
                                    >
                                        <Picker.Item label="Select Type" value="Select Type" />
                                        <Picker.Item label="Relexed Bob ($15)" value="Relexed Bob ($15)" />
                                    </Picker>
                                </View>

                            </View>

                            <View style={{ flex: 1, marginTop: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>

                                <View style={{ flex: 0.5, justifyContent: "center", }}>
                                    <Text style={{ fontWeight: "normal", fontSize: 18 }}>Hairdryer</Text>
                                </View>

                                <View style={{ flex: 0.8, justifyContent: "center", alignItems: "flex-end", backgroundColor: "#F0F0F0" }}>
                                    <Picker
                                        style={{ width: "90%", color: "#8E8E93", }}
                                    // selectedValue={this.state.language}
                                    // onValueChange={(itemValue, itemIndex) =>
                                    //     this.setState({ language: itemValue })
                                    // }
                                    >
                                        <Picker.Item label="Select Type" value="Select Type" />
                                        <Picker.Item label="Relexed Bob ($15)" value="Relexed Bob ($15)" />
                                    </Picker>
                                </View>

                            </View>

                            <View style={{ flex: 1, marginTop: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>

                                <View style={{ flex: 0.5, justifyContent: "center", }}>
                                    <Text style={{ fontWeight: "normal", fontSize: 18 }}>Hair Coloring</Text>
                                </View>

                                <View style={{ flex: 0.8, justifyContent: "center", alignItems: "flex-end", backgroundColor: "#F0F0F0" }}>
                                    <Picker
                                        style={{ width: "90%", color: "#8E8E93", }}
                                    // selectedValue={this.state.language}
                                    // onValueChange={(itemValue, itemIndex) =>
                                    //     this.setState({ language: itemValue })
                                    // }
                                    >
                                        <Picker.Item label="Select Type" value="Select Type" />
                                        <Picker.Item label="Relexed Bob ($15)" value="Relexed Bob ($15)" />
                                    </Picker>
                                </View>

                            </View>

                            <View style={{ flex: 1, marginTop: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>

                                <View style={{ flex: 0.5, justifyContent: "center", }}>
                                    <Text style={{ fontWeight: "normal", fontSize: 18 }}>Facial Makeup</Text>
                                </View>

                                <View style={{ flex: 0.8, justifyContent: "center", alignItems: "flex-end", backgroundColor: "#F0F0F0" }}>
                                    <Picker
                                        style={{ width: "90%", color: "#8E8E93", }}
                                    // selectedValue={this.state.language}
                                    // onValueChange={(itemValue, itemIndex) =>
                                    //     this.setState({ language: itemValue })
                                    // }
                                    >
                                        <Picker.Item label="Select Type" value="Select Type" />
                                        <Picker.Item label="Relexed Bob ($15)" value="Relexed Bob ($15)" />
                                    </Picker>
                                </View>

                            </View>

                            <View style={{ flex: 1, marginTop: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", }}>

                                <View style={{ flex: 0.5, justifyContent: "center", }}>
                                    <Text style={{ fontWeight: "normal", fontSize: 18 }}>Eye Makeup</Text>
                                </View>

                                <View style={{ flex: 0.8, justifyContent: "center", alignItems: "flex-end", backgroundColor: "#F0F0F0" }}>
                                    <Picker
                                        style={{ width: "90%", color: "#8E8E93", }}
                                    // selectedValue={this.state.language}
                                    // onValueChange={(itemValue, itemIndex) =>
                                    //     this.setState({ language: itemValue })
                                    // }
                                    >
                                        <Picker.Item label="Select Type" value="Select Type" />
                                        <Picker.Item label="Relexed Bob ($15)" value="Relexed Bob ($15)" />
                                    </Picker>
                                </View>

                            </View>

                        </View>

                    </ScrollView>


                </View>

                <View style={{
                    flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", borderTopColor: "grey", borderTopWidth: 0.5,
                    // backgroundColor: "green"
                }}>

                    <View style={{
                        flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", width: "90%", marginHorizontal: "5%",
                        // backgroundColor: "red"
                    }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-start", }}>
                            <Text style={{ fontWeight: "normal", }}>Total Cost</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>$15</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end", }}>
                            <TouchableOpacity
                                onPress={() => Actions.Bookappointment()}
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

    };
};
function mapDispatchToProps(dispatch) {
    return ({
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(ChooseService);


const styles = StyleSheet.create({
    contentContainer: {
        // flex: 1,
        paddingBottom: 30,
        // backgroundColor: "green",

    },
});