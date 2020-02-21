import React, { Component } from 'react';
import { Image, TouchableOpacity, View, Text, StatusBar, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Footer, FooterTab, } from 'native-base';
import Home from '../App/home/index';
import Nearby from '../App/nearby/index';
import Appointments from '../App/appointments/index';
import Profile from '../App/profile/index'

class AppContainer extends Component {
    constructor() {
        super()
        this.state = {
            rout: "Nearby"
        }
    }

    UNSAFE_componentWillMount() {
        if (this.props.rout) {
            this.setState({
                rout: this.props.rout
            })
        }
    }

    render() {
        return (
            <View style={{ flex: 1, }}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />

                {/* //body// */}
                <ScrollView style={{ flex: 6 }}>
                    {
                        (this.state.rout === "Home") ? (<Home />) : null
                    }
                    {
                        (this.state.rout === "Nearby") ? (<Nearby />) : null
                    }
                    {
                        (this.state.rout === "Appointments") ? (<Appointments />) : null
                    }
                    {
                        (this.state.rout === "Profile") ? (<Profile />) : null
                    }
                </ScrollView>

                <Footer style={{ backgroundColor: "#F8F8F8", borderTopColor: "#8E8E93", borderTopWidth: 0.5 }}>
                    <FooterTab style={{ backgroundColor: "#F8F8F8", marginHorizontal: 12 }}>
                        <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }} onPress={() => { this.setState({ rout: "Home" }) }} >
                            {
                                (this.state.rout === "Home") ? (
                                    <Image source={require('../../../assets/footericons/homeOrange.png')} resizeMode="contain"
                                        style={{ width: "40%", height: "40%", }}
                                    />
                                ) : <Image source={require('../../../assets/footericons/homeGrey.png')} resizeMode="contain"
                                    style={{ width: "40%", height: "40%", }}
                                    />
                            }
                            <Text style={{ textAlign: "center", marginTop: 0, color: this.state.rout === "Home" ? "#FD6958" : "#8E8E93", fontSize: 12 }}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }} onPress={() => { this.setState({ rout: "Nearby" }) }}  >

                            {
                                (this.state.rout === "Nearby") ? (
                                    <Image source={require('../../../assets/footericons/nearbyOrange.png')} resizeMode="contain"
                                        style={{ width: "40%", height: "40%", }}
                                    />
                                ) : <Image source={require('../../../assets/footericons/nearbyGrey.png')} resizeMode="contain"
                                    style={{ width: "40%", height: "40%", }}
                                    />
                            }

                            <Text style={{ textAlign: "center", marginTop: 0, color: this.state.rout === "Nearby" ? "#FD6958" : "#8E8E93", fontSize: 12 }}>Nearby</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }} onPress={() => { this.setState({ rout: "Appointments" }) }}>

                            {
                                (this.state.rout === "Appointments") ? (
                                    <Image source={require('../../../assets/footericons/appointmentOrange.png')} resizeMode="contain"
                                        style={{ width: "40%", height: "40%", }}
                                    />
                                ) : <Image source={require('../../../assets/footericons/appointmentGrey.png')} resizeMode="contain"
                                    style={{ width: "40%", height: "40%", }}
                                    />
                            }


                            <Text style={{ textAlign: "center", marginTop: 0, color: this.state.rout === "Appointments" ? "#FD6958" : "#8E8E93", fontSize: 12 }}>Appointments</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }} onPress={() => { this.setState({ rout: "Profile" }) }}>
                            {
                                (this.state.rout === "Profile") ? (
                                    <Image source={require('../../../assets/footericons/profileOrange.png')} resizeMode="contain"
                                        style={{ width: "40%", height: "40%", }}
                                    />
                                ) : <Image source={require('../../../assets/footericons/profileGrey.png')} resizeMode="contain"
                                    style={{ width: "40%", height: "40%", }}
                                    />
                            }
                            <Text style={{ textAlign: "center", marginTop: 0, color: this.state.rout === "Profile" ? "#FD6958" : "#8E8E93", fontSize: 12 }}>Profile</Text>
                        </TouchableOpacity>
                    </FooterTab>
                </Footer>
            </View>
        );
    }
}

function mapStateToProp(state) {
    return ({
    })
}
function mapDispatchToProp(dispatch) {
    return ({
    })
}
export default connect(mapStateToProp, mapDispatchToProp)(AppContainer);
