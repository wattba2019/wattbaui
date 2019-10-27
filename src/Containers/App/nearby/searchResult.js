import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, TextInput, ScrollView

} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
// import ShopsCards from '../../../Components/shopscards';
import Ionicons from 'react-native-vector-icons/Ionicons';



class SearchResults extends Component {
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
                // alignItems: "center",
                backgroundColor: "white",
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
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        // alignItems: "center",
                        // backgroundColor: "red"
                    }}>
                        {/* <TouchableOpacity
                            onPress={() => Actions.pop()}
                        >
                            <Image source={require('../../../../assets/ArrowLeft.png')} resizeMode="contain"
                                style={{ height: 20, width: 20, marginLeft: 25 }}
                            />
                        </TouchableOpacity> */}


                        <TouchableOpacity onPress={() => Actions.pop()}
                        >
                            <Ionicons name="ios-arrow-back" style={{ marginLeft: 25, color: "black", fontWeight: 'bold', fontSize: 28 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flex: 1,
                        justifyContent: "center", alignItems: "center",
                        // backgroundColor: "green"
                    }}>
                        <Text style={{ alignItems: "center", }}>Search Results</Text>
                    </View>

                    <View style={{
                        flex: 1,
                        // backgroundColor: "red"
                    }}>

                    </View>
                    {/* <TouchableOpacity>
                        <Image source={require('../../../../assets/ArrowLeft.png')} resizeMode="contain"
                            style={{ height: 20, width: 20, marginTop: 30, marginLeft: 20 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ alignItems: "center", marginTop: 30, marginLeft: 90, }}>Search Results</Text> */}

                </View>


                <View style={{
                    flex: 8,

                    // backgroundColor: 'green'
                }}>

                    <ScrollView>
                        <TouchableOpacity
                            onPress={() => Actions.Shop()}

                            style={{
                                flexDirection: "row",
                                height: 100,
                                marginTop: 10,
                                marginLeft: 10,
                                borderBottomWidth: 0.5,
                                borderBottomColor: 'grey'
                                // backgroundColor: 'red'
                            }}>

                            <View style={{
                                flex: 3,
                                // backgroundColor: 'red'
                            }}>
                                <Image source={require('../../../../assets/Rectangle.png')} resizeMode="contain"
                                    style={{ height: 90, width: 110, }}
                                />
                            </View>

                            <View style={{
                                flex: 7,
                                marginLeft: 20,
                                padding: 5,
                                // backgroundColor: 'green'
                            }}>
                                <Text style={{ fontWeight: "bold", }}>Ranya Barbershop</Text>
                                <Text style={{ color: "grey", fontSize: 14 }}>47B R-Block Morden, Londen</Text>


                                {/* <View> */}

                                <View style={{
                                    flex: 1,
                                    flexDirection: "row",

                                    //  backgroundColor: 'grey'
                                }}>

                                    <View style={{
                                        flex: 3,

                                        //  flexDirection: "row", 
                                        //  backgroundColor: 'blue'
                                    }}>

                                        <View style={{
                                            flexDirection: "row",

                                            //  backgroundColor: 'red'
                                        }}>
                                            <Image source={require('../../../../assets/Path.png')} resizeMode="contain"
                                                style={{ height: 15, width: 15, }}
                                            />
                                            <Text style={{ color: "grey", marginLeft: 7, fontSize: 13, }}>4.0</Text>

                                            <Image source={require('../../../../assets/Group.png')} resizeMode="contain"
                                                style={{ height: 14, width: 14, marginLeft: 5 }}
                                            />
                                            <Text style={{ marginLeft: 7, fontSize: 11 }}>1.2 km </Text>
                                        </View>

                                        <Text style={{ color: "grey", fontSize: 12, color: "#ff4500" }}>8:30 am - 8:00 pm</Text>

                                    </View>

                                    <View style={{
                                        flex: 2,
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        //  backgroundColor: 'grey'
                                    }}>

                                        <TouchableOpacity>
                                            <Image source={require('../../../../assets/book.png')} resizeMode="contain"
                                                style={{ height: 30, width: 80, }}
                                            />
                                        </TouchableOpacity>


                                    </View>
                                </View>



                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => Actions.Shop()}
                            style={{
                                flexDirection: "row",
                                height: 100,
                                marginTop: 10,
                                marginLeft: 10,
                                borderBottomWidth: 0.5,
                                borderBottomColor: 'grey'
                                // backgroundColor: 'red'
                            }}>

                            <View style={{
                                flex: 3,
                                // backgroundColor: 'red'
                            }}>
                                <Image source={require('../../../../assets/hair.png')} resizeMode="contain"
                                    style={{ height: 90, width: 110, }}
                                />
                            </View>

                            <View style={{
                                flex: 7,
                                marginLeft: 20,
                                padding: 5,
                                // backgroundColor: 'green'
                            }}>
                                <Text style={{ fontWeight: "bold", }}>Sun in Sky Hair Salon</Text>
                                <Text style={{ color: "grey", fontSize: 14 }}>Crescent Town, Londen</Text>


                                {/* <View> */}

                                <View style={{
                                    flex: 1,
                                    flexDirection: "row",

                                    //  backgroundColor: 'grey'
                                }}>

                                    <View style={{
                                        flex: 3,

                                        //  flexDirection: "row", 
                                        //  backgroundColor: 'blue'
                                    }}>

                                        <View style={{
                                            flexDirection: "row",

                                            //  backgroundColor: 'red'
                                        }}>
                                            <Image source={require('../../../../assets/Path.png')} resizeMode="contain"
                                                style={{ height: 15, width: 15, }}
                                            />
                                            <Text style={{ color: "grey", marginLeft: 7, fontSize: 13, }}>4.0</Text>

                                            <Image source={require('../../../../assets/Group.png')} resizeMode="contain"
                                                style={{ height: 14, width: 14, marginLeft: 5 }}
                                            />
                                            <Text style={{ marginLeft: 7, fontSize: 11 }}>1.2 km </Text>
                                        </View>

                                        <Text style={{ color: "grey", fontSize: 12, color: "#ff4500" }}>8:30 am - 8:00 pm</Text>

                                    </View>

                                    <View style={{
                                        flex: 2,
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        //  backgroundColor: 'grey'
                                    }}>

                                        <TouchableOpacity>
                                            <Image source={require('../../../../assets/book.png')} resizeMode="contain"
                                                style={{ height: 30, width: 80, }}
                                            />
                                        </TouchableOpacity>


                                    </View>
                                </View>



                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => Actions.Shop()}
                            style={{
                                flexDirection: "row",
                                height: 100,
                                marginTop: 10,
                                marginLeft: 10,
                                borderBottomWidth: 0.5,
                                borderBottomColor: 'grey'
                                // backgroundColor: 'red'
                            }}>

                            <View style={{
                                flex: 3,
                                // backgroundColor: 'red'
                            }}>
                                <Image source={require('../../../../assets/photo.png')} resizeMode="contain"
                                    style={{ height: 90, width: 110, }}
                                />
                            </View>

                            <View style={{
                                flex: 7,
                                marginLeft: 20,
                                padding: 5,
                                // backgroundColor: 'green'
                            }}>
                                <Text style={{ fontWeight: "bold", }}>Horizaon JD Barber</Text>
                                <Text style={{ color: "grey", fontSize: 14 }}>Crescent Town, Londen</Text>


                                {/* <View> */}

                                <View style={{
                                    flex: 1,
                                    flexDirection: "row",

                                    //  backgroundColor: 'grey'
                                }}>

                                    <View style={{
                                        flex: 3,

                                        //  flexDirection: "row", 
                                        //  backgroundColor: 'blue'
                                    }}>

                                        <View style={{
                                            flexDirection: "row",

                                            //  backgroundColor: 'red'
                                        }}>
                                            <Image source={require('../../../../assets/Path.png')} resizeMode="contain"
                                                style={{ height: 15, width: 15, }}
                                            />
                                            <Text style={{ color: "grey", marginLeft: 7, fontSize: 13, }}>4.0</Text>

                                            <Image source={require('../../../../assets/Group.png')} resizeMode="contain"
                                                style={{ height: 14, width: 14, marginLeft: 5 }}
                                            />
                                            <Text style={{ marginLeft: 7, fontSize: 11 }}>1.2 km </Text>
                                        </View>

                                        <Text style={{ color: "grey", fontSize: 12, color: "#ff4500" }}>8:30 am - 8:00 pm</Text>

                                    </View>

                                    <View style={{
                                        flex: 2,
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        //  backgroundColor: 'grey'
                                    }}>

                                        <TouchableOpacity>
                                            <Image source={require('../../../../assets/book.png')} resizeMode="contain"
                                                style={{ height: 30, width: 80, }}
                                            />
                                        </TouchableOpacity>


                                    </View>
                                </View>



                            </View>
                        </TouchableOpacity>



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
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingBottom: 150,
        backgroundColor: "green",

    },
});