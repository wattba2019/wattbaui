import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, TextInput, ScrollView

} from 'react-native';
import { Icon, Tabs, Tab, TabHeading } from 'native-base';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
// import ShopsCards from '../../../Components/shopscards';
import BasicInfo from '../shop/basicInfo';



class BarberDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeColor: "basicinfo"
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

        return (
            <View style={{
                flex: 1,
                width: "100%",
                // alignItems: "center",
                backgroundColor: "white",
            }}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />

                <View style={{
                    flex: 0.6,
                    flexDirection: "row",
                    borderBottomWidth: 0.5,
                    borderBottomColor: 'grey',
                    // height:30
                    // justifyContent: "center", 
                    // alignItems: "center", 
                    // backgroundColor: 'red'
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        // alignItems: "center",
                        // backgroundColor: "red"
                    }}>
                        <TouchableOpacity
                            onPress={() => Actions.pop()}
                        >
                            <Image source={require('../../../assets/ArrowLeft.png')} resizeMode="contain"
                                style={{ height: 20, width: 20, marginLeft: 25 }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flex: 1,
                        justifyContent: "center", alignItems: "center",
                        // backgroundColor: "green"
                    }}>
                        {/* <Text style={{ alignItems: "center", }}>Search Results</Text> */}
                    </View>

                    <View style={{
                        flex: 1,
                        // backgroundColor: "red"
                    }}>
                    </View>
                </View>


                <View style={{
                    flex: 8,
                    width: "100%",
                    marginTop: 20
                }}>
                    <ScrollView style={{
                        width: "100%",
                        // backgroundColor: "grey"
                    }}>
                        <View style={{
                            flexDirection: "row",
                            height: 100,
                            // backgroundColor: 'orange'

                        }}>
                            <View style={{
                                flex: 4,
                                justifyContent: "center",
                                alignItems: "center",
                                width: "80%",
                                // backgroundColor: 'green'
                            }}>
                                <View style={{
                                    width: "70%", height: "100%", justifyContent: "center", alignItems: "center",
                                    borderColor: "#FD6958", borderWidth: 1, borderRadius: 15, padding: 5
                                    // backgroundColor: "grey"
                                }}>
                                    <Image source={require('../../../assets/image1.png')} resizeMode="contain"
                                        style={{ height: "100%", width: "100%", }}
                                    />
                                </View>
                            </View>

                            <View style={{
                                flex: 7,
                                padding: 5,
                                // alignItems: "center",
                                justifyContent: "center",
                                // backgroundColor: 'red'
                            }}>
                                <Text style={{ fontSize: 25, color: "#3B566E" }}>William son</Text>
                                <Text style={{ color: "#FD6958", fontSize: 14, marginTop: 7 }}>Manager</Text>
                                <Text style={{ color: "#000000", fontSize: 14 }}>Ranya Barbershop</Text>
                            </View>
                        </View>
                        <View style={{ width: "90%", marginHorizontal: "5%", marginTop: 10 }}>
                            <Text style={{ color: "#858585", fontSize: 14 }}>Vestibulum metus risus, facilisis vitae tincidunt vel per  dapibus in sapien. Proin posuere varius posuere dapibu  Quisque et rhoncus urna.</Text>
                        </View>

                        <View
                            style={{ width: "70%", height: 50, marginTop: 30, marginHorizontal: "15%", marginBottom: 20 }}
                        >
                            <TouchableOpacity
                            // onPress={() => Actions.Allowaccesslocation()}
                            >
                                <ImageBackground source={require('../../../assets/buttonBackground.png')} resizeMode="contain"
                                    style={{ height: "100%", width: "100%", justifyContent: "center", }}
                                >
                                    <Text style={{ textAlign: "center", fontSize: 15, margin: 12, color: "white", }}>Book An Appointment</Text>
                                </ImageBackground>
                            </TouchableOpacity>

                        </View>


                        <Tabs
                            onChangeTab={(key) => this.activeColor(key)}
                            locked={true}
                            tabBarUnderlineStyle={{ backgroundColor: '#FD6958' }}
                        >
                            {/* //basicinfo// */}
                            <Tab
                                heading={
                                    <TabHeading
                                        style={{ flexDirection: "column", backgroundColor: "white" }}
                                    >
                                        <Text style={{ color: activeColor === "basicinfo" ? "#FD6958" : "black", fontWeight: "bold" }}>Basic Info</Text>
                                    </TabHeading>}
                            >
                                <BasicInfo />

                            </Tab>

                            {/* //Review// */}
                            <Tab
                                heading={
                                    <TabHeading
                                        style={{ flexDirection: "column", backgroundColor: "white" }}
                                    >
                                        <Text style={{ color: activeColor === "review" ? "#FD6958" : "black", fontWeight: "bold" }}>Review</Text>
                                    </TabHeading>
                                }
                            >
                                <View style={{ flex: 1,justifyContent: "center", alignItems: "center" }}>
                                    <Text>Under Development</Text>
                                </View>
                            </Tab>


                        </Tabs>
                    </ScrollView>


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
export default connect(mapStateToProps, mapDispatchToProps)(BarberDetails);


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingBottom: 150,
        backgroundColor: "green",

    },
});