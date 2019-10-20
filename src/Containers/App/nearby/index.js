import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, TextInput, ScrollView

} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
// import ShopsCards from '../../../Components/shopscards';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';



class Nearby extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{
                flex: 1,
                width: "100%",
                alignItems: "center",
                backgroundColor: "white",
            }}>

                <View style={{
                    height: 120,
                    width: "95%",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "yellow",
                }}>
                    <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", marginTop: 20, }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "left" }}>Hello, Aqib Khan</Text>
                        <TouchableOpacity
                            onPress={() => Actions.Filters()}
                        >
                            <IconFontAwesome name="filter" size={25} style={{ color: "grey" }} />
                        </TouchableOpacity>

                    </View>


                    <View style={{ width: "105%", top: -5, justifyContent: "center", alignItems: "center", flex: 1, flexDirection: "row" }}>
                        <View style={{
                            flex: 8, flexDirection: "row", justifyContent: "center", alignItems: "center",
                            // backgroundColor: "orange"
                        }}>

                            <View style={{
                                flex: 1,
                                justifyContent: "center", alignItems: "center",
                                // backgroundColor: "green",
                            }}>
                                <Image source={require('../../../../assets/Path17909.png')} resizeMode="contain"
                                    style={{ height: "50%", width: "50%", }}
                                />
                            </View>
                            <View style={{
                                flex: 8
                            }}>
                                <Text style={{ textAlign: "left" }}>London, Greater London</Text>

                            </View>
                        </View>
                        <View style={{
                            flex: 3, justifyContent: "center", alignItems: "center", flexDirection: "row",
                            // backgroundColor: "green"
                        }}>
                            <TouchableOpacity style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Image source={require('../../../../assets/surface1.png')} resizeMode="contain"
                                    style={{ width: "20%", }}
                                />
                                <Text style={{ color: "#FD6958" }}>CHANGE</Text>
                            </TouchableOpacity>
                        </View>



                    </View>

                    <View
                        style={{
                            flex: 1, flexDirection: "row",
                            width: "100%", height: 40,
                            borderRadius: 10,
                            justifyContent: "center", alignItems: "center",
                            backgroundColor: "#E8E6E7",
                        }}
                    >

                        <View
                            style={{ width: "80%", borderColor: 'gray', backgroundColor: "#E8E6E7", justifyContent: "center", alignItems: "center", }}
                        >
                            <TextInput
                                // keyboardType={"numeric"}
                                style={{ width: "90%", }}
                                // onChangeText={text => onChangeText(text)}
                                value={this.state.email}
                                placeholder={"Search"}
                            />
                        </View>

                    </View>
                </View>


                <View style={{
                    flex: 8,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "red",
                }}>
                    <ScrollView>
                        <ImageBackground source={require('../../../../assets/img.png')}
                            style={{
                                // backgroundColor: '#fd902a',
                                marginTop: 10,
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: "100%"
                            }}>

                            <ScrollView style={{ marginTop: 30, marginHorizontal: "3%" }} horizontal showsHorizontalScrollIndicator={false}>
                                <TouchableOpacity style={{
                                    marginTop: 10,
                                    // backgroundColor: "red",
                                }}
                                // onPress={() => this.props.navigate.navigate('Product')}
                                >
                                    <View style={{
                                        height: 170,
                                        marginTop: 230
                                        // backgroundColor: "red",
                                    }}>
                                        <ImageBackground source={require('../../../../assets/tinh.png')} style={styles.card} >
                                        </ImageBackground>
                                        <View style={{
                                            top: -10,
                                            height: 50,
                                            borderBottomRightRadius: 6,
                                            borderBottomLeftRadius: 6,
                                            padding: "2%",
                                            borderColor: "#E8E6E7",
                                            borderWidth: 1,
                                            flex: 1,
                                            flexDirection: "row",
                                            backgroundColor: "white",
                                        }}>
                                            <View style={{
                                                flex: 1,
                                                // backgroundColor: "green",
                                            }}>
                                                <Text style={styles.card_text}>Ranya Barbershop</Text>
                                                <Text style={{ color: "#7F7F7F" }}>47B R-Block Morden, London</Text>
                                            </View>
                                            <View style={{
                                                flex: 2,
                                                flexDirection: "row",
                                                justifyContent: "center",
                                                alignItems: "center"
                                                // backgroundColor: "yellow",
                                            }}>
                                                <Image source={require('../../../../assets/Path.png')} resizeMode="contain"
                                                    style={{ width: "30%", }}
                                                />
                                                <Text style={{ color: "#7F7F7F" }}>4.0</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    margin: 10,
                                    // backgroundColor: "red",
                                }}
                                // onPress={() => this.props.navigate.navigate('Product')}
                                >
                                    <View style={{
                                        height: 170,
                                        marginTop: 230

                                        // backgroundColor: "red",
                                    }}>
                                        <ImageBackground source={require('../../../../assets/joshua.png')} style={styles.card} >
                                        </ImageBackground>
                                        <View style={{
                                            top: -10,
                                            height: 50,
                                            borderBottomRightRadius: 6,
                                            borderBottomLeftRadius: 6,
                                            padding: "2%",
                                            borderColor: "#E8E6E7",
                                            borderWidth: 1,
                                            flex: 1,
                                            flexDirection: "row",
                                            backgroundColor: "white",
                                        }}>
                                            <View style={{
                                                flex: 1,
                                                // backgroundColor: "green",
                                            }}>
                                                <Text style={styles.card_text}>Sun in Sky Hair Salon</Text>
                                                <Text style={{ color: "#7F7F7F" }}>Crescent Town, London</Text>
                                            </View>
                                            <View style={{
                                                flex: 2,
                                                flexDirection: "row",
                                                justifyContent: "center",
                                                alignItems: "center"
                                                // backgroundColor: "yellow",
                                            }}>
                                                <Image source={require('../../../../assets/Path.png')} resizeMode="contain"
                                                    style={{ width: "30%", }}
                                                />
                                                <Text style={{ color: "#7F7F7F" }}>4.0</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </ScrollView>
                        </ImageBackground>
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
export default connect(mapStateToProps, mapDispatchToProps)(Nearby);


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingBottom: 150,
        backgroundColor: "green",

    },
    card: {
        width: 250, height: 115,
        // margin: 15,
        justifyContent: 'flex-end',
        padding: 10,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
        backgroundColor: 'white',
        borderRadius: 6, overflow: 'hidden'

    },
    card_text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15
    },
    iconsStyle: {
        width: "22%", height: "42%", justifyContent: "center", alignItems: "center", margin: 5,
    },

});