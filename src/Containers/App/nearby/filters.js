import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, TextInput, ScrollView, KeyboardAvoidingView

} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import RangeSlider from 'rn-range-slider';

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: "Female",
            service: "Haircut",
            sortedby: "Popular"
        };
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}
            >
                <View style={{
                    flex: 0.8,
                    flexDirection: "row",
                    borderBottomWidth: 0.5,
                    borderBottomColor: "#8E8E93"
                    // backgroundColor: "red"
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor: "orange"
                    }}>
                        <TouchableOpacity
                            onPress={() => Actions.pop()}

                        >
                            <Text style={{ marginTop: 10 }}>Cancle</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor: "yellow"
                    }}>
                        <TouchableOpacity

                        >
                            <Text style={{ marginTop: 10, fontWeight: "bold" }}>Filters</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        // backgroundColor: "gray"
                    }}>
                        <TouchableOpacity>
                            <Text style={{ marginTop: 10, color: "#FD6958" }}>Save</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{
                    flex: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                    // backgroundColor: "green"
                }}>
                    <View style={{
                        width: "90%", marginTop: 10, flexDirection: "row",
                        // backgroundColor: "green"
                    }}>
                        <Text style={{ color: "#4A4A4A", fontSize: 16 }}>Location</Text>
                    </View>

                    <View style={{
                        marginTop: 10,
                        width: "90%",
                        height: 45,
                        borderRadius: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: "#E8E6E7"
                    }}>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Current location </Text>
                        <Text style={{ color: "#8E8E93", fontWeight: "bold", fontSize: 16 }}>(San Francisco)</Text>
                    </View>

                    <View style={{
                        width: "90%", marginTop: 10, flexDirection: "row",
                        // backgroundColor: "green"
                    }}>
                        <Text style={{ color: "#4A4A4A", fontSize: 16 }}>Gender</Text>
                    </View>

                    <View style={{
                        marginTop: 10,
                        width: "90%",
                        height: 45,
                        borderRadius: 50,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: "#E8E6E7",
                        overflow: "hidden"

                    }}>
                        <View style={{
                            flex: 1, flexDirection: "row", borderRadius: 50, height: "100%"
                        }}>

                            <TouchableOpacity style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: this.state.gender === "Male" ? "#FD6958" : "#E8E6E7",
                            }}
                                onPress={() => { this.setState({ gender: "Male" }) }}
                            >
                                <Text style={{ color: "black", fontSize: 16 }}>Male</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: this.state.gender === "Female" ? "#FD6958" : "#E8E6E7",
                            }}
                                onPress={() => { this.setState({ gender: "Female" }) }}
                            >
                                <Text style={{ color: "black", fontSize: 16 }}>Female</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: this.state.gender === "Others" ? "#FD6958" : "#E8E6E7",
                            }}
                                onPress={() => { this.setState({ gender: "Others" }) }}
                            >
                                <Text style={{ color: "black", fontSize: 16 }}>Others</Text>
                            </TouchableOpacity>



                        </View>

                    </View>

                    <View style={{
                        width: "90%", marginTop: 10, flexDirection: "row", marginTop: 20
                        // backgroundColor: "green"
                    }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: "#4A4A4A", fontSize: 16, }}>Distance</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 16, color: "#8E8E93", textAlign: "right", }}>5.0 Km</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{
                        width: "100%",
                        height: 50,
                        justifyContent: "center", alignItems: "center", top: -20,
                        // backgroundColor: "red"
                    }}>
                        <RangeSlider
                            style={{ width: "90%", height: 80 }}
                            gravity={'center'}
                            min={5}
                            max={100}
                            step={5}
                            selectionColor="#FD6958"
                            blankColor="#E8E6E7"
                            thumbColor="#FD6958"
                            thumbBorderColor="#F1EBEB"
                            onValueChanged={(low, high, fromUser) => {
                                this.setState({ rangeLow: low, rangeHigh: high })
                            }} />

                    </View>

                    <View style={{
                        width: "90%", flexDirection: "row",
                        // backgroundColor: "green"
                    }}>
                        <Text style={{ color: "#4A4A4A", fontSize: 16, }}>Services</Text>
                    </View>


                    <View style={{
                        width: "90%", flexDirection: "row", marginTop: 5, flexWrap: "wrap"
                        // backgroundColor: "green"
                    }}>
                        <TouchableOpacity style={{
                            margin: 5,
                            borderRadius: 25,
                            borderWidth: 0.5,
                            borderColor: "grey",
                            backgroundColor: this.state.service === "Haircut" ? "#FD6958" : null,
                        }}
                            onPress={() => { this.setState({ service: "Haircut" }) }}

                        >
                            <Text style={{
                                color: "black", fontSize: 15,
                                marginHorizontal: 25, marginVertical: 5,
                                color: this.state.service === "Haircut" ? "#ffff" : null,
                            }}>Haircut</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            margin: 5,
                            borderRadius: 25,
                            borderWidth: 0.5,
                            borderColor: "grey",
                            backgroundColor: this.state.service === "Styling" ? "#FD6958" : null,

                        }}
                            onPress={() => { this.setState({ service: "Styling" }) }}

                        >
                            <Text style={{
                                color: "black", fontSize: 15, marginHorizontal: 25, marginVertical: 5, color: this.state.service === "Styling" ? "#ffff" : null,
                            }}>Styling</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            margin: 5,
                            borderRadius: 25,
                            borderWidth: 0.5,
                            borderColor: "grey",
                            backgroundColor: this.state.service === "Shampoo" ? "#FD6958" : null,

                        }}
                            onPress={() => { this.setState({ service: "Shampoo" }) }}
                        >
                            <Text style={{
                                color: "black", fontSize: 15, marginHorizontal: 25, marginVertical: 5, color: this.state.service === "Shampoo" ? "#ffff" : null,
                            }}>Shampoo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            margin: 5,
                            borderRadius: 25,
                            borderWidth: 0.5,
                            borderColor: "grey",
                            backgroundColor: this.state.service === "Shaving" ? "#FD6958" : null,

                        }}
                            onPress={() => { this.setState({ service: "Shaving" }) }}

                        >
                            <Text style={{
                                color: "black", fontSize: 15, marginHorizontal: 25, marginVertical: 5, color: this.state.service === "Shaving" ? "#ffff" : null,
                            }}>Shaving</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            margin: 5,
                            borderRadius: 25,
                            borderWidth: 0.5,
                            borderColor: "grey",
                            backgroundColor: this.state.service === "Spa" ? "#FD6958" : null,

                        }}
                            onPress={() => { this.setState({ service: "Spa" }) }}

                        >
                            <Text style={{
                                color: "black", fontSize: 15, marginHorizontal: 25, marginVertical: 5, color: this.state.service === "Spa" ? "#ffff" : null,
                            }}>Spa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            margin: 5,
                            borderRadius: 25,
                            borderWidth: 0.5,
                            borderColor: "grey",
                            backgroundColor: this.state.service === "Facial" ? "#FD6958" : null,

                        }}
                            onPress={() => { this.setState({ service: "Facial" }) }}
                        >
                            <Text style={{
                                color: "black", fontSize: 15, marginHorizontal: 25, marginVertical: 5, color: this.state.service === "Facial" ? "#ffff" : null,
                            }}>Facial Mackeup</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            margin: 5,
                            borderRadius: 25,
                            borderWidth: 0.5,
                            borderColor: "grey",
                            backgroundColor: this.state.service === "Hairdryer" ? "#FD6958" : null,

                        }}
                            onPress={() => { this.setState({ service: "Hairdryer" }) }}

                        >
                            <Text style={{
                                color: "black", fontSize: 15, marginHorizontal: 25, marginVertical: 5, color: this.state.service === "Hairdryer" ? "#ffff" : null,
                            }}>Hairdryer</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{
                        width: "90%", marginTop: 20
                        // backgroundColor: "green"
                    }}>
                        <Text style={{ color: "#4A4A4A", fontSize: 16, }}>Sortby</Text>

                        <TouchableOpacity style={{
                            marginTop: 10,
                            backgroundColor: this.state.sortedby === "Sortby" ? "#FD6958" : null,

                        }}>
                            <Text style={{ color: "black", fontSize: 16, }}>Most Popular</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </ScrollView>
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
export default connect(mapStateToProps, mapDispatchToProps)(Filters);


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingBottom: 0,
        backgroundColor: "white",

    },

});