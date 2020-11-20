import React, { Component } from "react";
import { View, Image, TouchableOpacity, Text, } from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';

class BusinessType extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={{
                    flex: 0.8,
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center",
                    backgroundColor: "#FE4B72",
                }}>
                    <View
                        style={{
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        {/* <Text style={{ alignItems: "center", color: "#ffffff", fontWeight: "bold", fontSize: 18 }}>Business Type</Text> */}
                    </View>
                </View>

                <View style={{ flex: 8, justifyContent: "center", }}>
                    <View style={{ flex: 0.3 }}>
                        <TouchableOpacity
                            onPress={() => Actions.AppContainer({ businessType: "barberShop" })}
                        >
                            <Image
                                source={require('../../../assets/businessType/barberShop.png')}
                                resizeMode="contain"
                                style={{ height: "100%", width: "90%", }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.3 }}>
                        <TouchableOpacity
                            onPress={() => Actions.AppContainer({ businessType: "saloon" })}
                        >
                            <Image
                                source={require('../../../assets/businessType/saloon.png')}
                                resizeMode="contain"
                                style={{ height: "100%", width: "90%", }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.3 }}>
                        <TouchableOpacity
                            onPress={() => Actions.AppContainer({ businessType: "beautySaloon" })}
                        >
                            <Image
                                source={require('../../../assets/businessType/beautysaloon.png')}
                                resizeMode="contain"
                                style={{ height: "100%", width: "90%", }}
                            />
                        </TouchableOpacity>
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
export default connect(mapStateToProps, mapDispatchToProps)(BusinessType);
