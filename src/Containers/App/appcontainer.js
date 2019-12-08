import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text, StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
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

    componentWillMount() {
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    imgSize: {
        width: "50%",
        height: 100,
    },
    imgView: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 200,
    },
    footerColor: {
        backgroundColor: "#cc3333"
    },
    marginText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 15
    },
    forgetYourPassword: {
        color: '#004D94',
        textAlign: 'center',
        margin: 15

    },
    btnTextMargin: {
        fontWeight: 'bold',
        marginTop: 8,

    }

});

const styl = StyleSheet.create({
    header: { backgroundColor: "#2196f3", flexDirection: 'row', borderBottomColor: '#cbcacf', borderBottomWidth: 1, shadowRadius: 1.2, shadowOpacity: 0.2, height: 50, shadowOffset: { width: 0, height: 2 }, elevation: 3 },
    input: { backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', width: '80%', margin: 5, borderBottomColor: "#FFCB05", borderBottomWidth: 0.5 },
    icons: { color: '#2196f3', marginRight: 10 },
    form: { backgroundColor: '#F8F8F8', justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 2, height: 4 }, shadowOpacity: 2, width: '80%', margin: 10, elevation: 7, borderRadius: 100, borderWidth: 1, borderColor: '#d6d7da' },
    button: { width: '80%', backgroundColor: '#FFCB05', marginLeft: '10%', marginRight: '10%', marginTop: '5%', borderColor: '#FFCB05', borderRadius: 100, borderWidth: 1, shadowColor: '#d7f0ff', shadowOffset: { width: 2, height: 4 }, shadowOpacity: 2, elevation: 9, marginBottom: 30 },
    error: { color: 'red', marginLeft: 30, marginRight: 30, width: '80%', fontWeight: "600" }
})