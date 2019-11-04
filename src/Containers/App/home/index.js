import React, { Component } from "react";
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text, TextInput, ScrollView, KeyboardAvoidingView

} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
// import ShopsCards from '../../../Components/shopscards';
import Entypo from 'react-native-vector-icons/Entypo';


//icons import
import AntDesign from 'react-native-vector-icons/AntDesign';


class Home extends Component {
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
                    <View style={{ width: "100%", marginTop: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "left" }}>Hello, Aqib Khan</Text>
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
                                <Image source={require('../../../../assets/Path27909.png')} resizeMode="contain"
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
                                {/* <Image source={require('../../../../assets/surface1.png')} resizeMode="contain"
                                    style={{ width: "20%", }}
                                /> */}
                                <Entypo name="direction" style={{ color: "#FD6958", fontWeight: 'bold', fontSize: 20 }} />

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
                            style={{ width: "5%", borderColor: 'gray', backgroundColor: "#E8E6E7", justifyContent: "center", alignItems: "center", }}
                        >
                            <AntDesign name="search1" style={{ marginLeft: "3%", color: '#909090', fontWeight: 'bold', fontSize: 15 }} />
                        </View>

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
                    <ScrollView
                        contentContainerStyle={{}}
                        style={{ width: "95%" }}
                    >
                        <View style={{
                            width: "95%", marginTop: 10,
                            // backgroundColor: "green"
                        }}>
                            <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Top Services</Text>
                        </View>

                        <View style={{
                            width: "100%", height: 180, flex: 1, flexDirection: "row", flexWrap: "wrap",
                            justifyContent: "center", alignItems: "center",
                            // backgroundColor: "yellow"
                        }}>


                            <TouchableOpacity style={styles.iconsStyle}>
                                <Image source={require('../../../../assets/haircut.png')} resizeMode="contain"
                                    style={{ width: "100%", height: "100%", }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.iconsStyle}>
                                <Image source={require('../../../../assets/coloring.png')} resizeMode="contain"
                                    style={{ width: "100%", height: "100%", }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.iconsStyle}>
                                <Image source={require('../../../../assets/styling.png')} resizeMode="contain"
                                    style={{ width: "100%", height: "100%", }}
                                />
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.iconsStyle}>
                                <Image source={require('../../../../assets/hairdryer.png')} resizeMode="contain"
                                    style={{ width: "100%", height: "100%", }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.iconsStyle}>
                                <Image source={require('../../../../assets/hairspa.png')} resizeMode="contain"
                                    style={{ width: "100%", height: "100%", }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.iconsStyle}>
                                <Image source={require('../../../../assets/shampo.png')} resizeMode="contain"
                                    style={{ width: "100%", height: "100%", }}
                                />
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.iconsStyle}>
                                <Image source={require('../../../../assets/shaving.png')} resizeMode="contain"
                                    style={{ width: "100%", height: "100%", }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.iconsStyle}>
                                <Image source={require('../../../../assets/more.png')} resizeMode="contain"
                                    style={{ width: "100%", height: "100%", }}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            width: "95%", marginTop: 10, flex: 1, flexDirection: "row",
                            // backgroundColor: "green"
                        }}>
                            <TouchableOpacity style={{ flex: 1 }} onPress={() => Actions.SearchResults()}
                            >
                                <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Nearby Barbershops</Text>
                            </TouchableOpacity>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 16, color: "#8E8E93", textAlign: "right", }}>View All</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={{
                                margin: 10,
                                // backgroundColor: "red",
                            }}
                                onPress={() => Actions.Shop()}
                            // onPress={() => this.props.navigate.navigate('Product')}
                            >
                                <View style={{
                                    height: 170,
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
                                            <Text style={styles.card_text}>Salman Hair Salon</Text>
                                            <Text style={{ color: "#7F7F7F" }}>47B R-Block Madina, Lahore</Text>
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
                                onPress={() => Actions.Shop()}
                            // onPress={() => this.props.navigate.navigate('Product')}
                            >
                                <View style={{
                                    height: 170,
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
                                            <Text style={styles.card_text}>Salman Hair Salon</Text>
                                            <Text style={{ color: "#7F7F7F" }}>47B R-Block Madina, Lahore</Text>
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
                        <View style={{
                            width: "95%", marginTop: 10, flex: 1, flexDirection: "row",
                            // backgroundColor: "green"
                        }}>
                            <View style={{ flex: 1.5 }}>
                                <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Trending Hairstyles 2019</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 16, color: "#8E8E93", textAlign: "right", }}>View All</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                            <TouchableOpacity style={{
                                height: 120,
                                width: 120,
                                justifyContent: "center",
                                alignItems: "center",
                                // backgroundColor: "red",
                            }}
                            // onPress={() => this.props.navigate.navigate('Product')}
                            >
                                <View style={{
                                    height: 85,
                                    width: 85,
                                    borderRadius: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    borderColor: "#FD6958",
                                    borderWidth: 1.80

                                }}>
                                    <Image source={require('../../../../assets/Ellipse.png')} resizeMode="contain"
                                        style={{ width: "90%", height: "90%", }}
                                    />
                                </View>
                                <Text style={{ marginTop: 5, fontSize: 14, color: "#8E8E93", textAlign: "right", }}>Hairstyle Name</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: 120,
                                width: 120,
                                justifyContent: "center",
                                alignItems: "center",
                                // backgroundColor: "red",
                            }}
                            // onPress={() => this.props.navigate.navigate('Product')}
                            >
                                <View style={{
                                    height: 85,
                                    width: 85,
                                    borderRadius: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    borderColor: "#FD6958",
                                    borderWidth: 1.80

                                }}>
                                    <Image source={require('../../../../assets/Ellipse2.png')} resizeMode="contain"
                                        style={{ width: "90%", height: "90%", }}
                                    />
                                </View>
                                <Text style={{ marginTop: 5, fontSize: 14, color: "#8E8E93", textAlign: "right", }}>Hairstyle Name</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: 120,
                                width: 120,
                                justifyContent: "center",
                                alignItems: "center",
                                // backgroundColor: "red",
                            }}
                            // onPress={() => this.props.navigate.navigate('Product')}
                            >
                                <View style={{
                                    height: 85,
                                    width: 85,
                                    borderRadius: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    borderColor: "#FD6958",
                                    borderWidth: 1.80

                                }}>
                                    <Image source={require('../../../../assets/Ellipse3.png')} resizeMode="contain"
                                        style={{ width: "90%", height: "90%", }}
                                    />
                                </View>
                                <Text style={{ marginTop: 5, fontSize: 14, color: "#8E8E93", textAlign: "right", }}>Hairstyle Name</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: 120,
                                width: 120,
                                justifyContent: "center",
                                alignItems: "center",
                                // backgroundColor: "red",
                            }}
                            // onPress={() => this.props.navigate.navigate('Product')}
                            >
                                <View style={{
                                    height: 85,
                                    width: 85,
                                    borderRadius: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    borderColor: "#FD6958",
                                    borderWidth: 1.80

                                }}>
                                    <Image source={require('../../../../assets/Ellipse4.png')} resizeMode="contain"
                                        style={{ width: "90%", height: "90%", }}
                                    />
                                </View>
                                <Text style={{ marginTop: 5, fontSize: 14, color: "#8E8E93", textAlign: "right", }}>Hairstyle Name</Text>
                            </TouchableOpacity>
                        </ScrollView>

                        <View style={{
                            width: "95%", marginTop: 10, flex: 1, flexDirection: "row",
                            // backgroundColor: "green"
                        }}>
                            <TouchableOpacity style={{ flex: 1 }}
                                onPress={() => Actions.SearchResults()}
                            >
                                <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Best Barbershops</Text>
                            </TouchableOpacity>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 16, color: "#8E8E93", textAlign: "right", }}>View All</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={{
                                margin: 10,
                                // backgroundColor: "red",
                            }}
                                onPress={() => Actions.Shop()}
                            // onPress={() => this.props.navigate.navigate('Product')}
                            >
                                <View style={{
                                    height: 170,
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
                                            <Text style={styles.card_text}>Salman Hair Salon</Text>
                                            <Text style={{ color: "#7F7F7F" }}>47B R-Block Madina, Lahore</Text>
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
                                onPress={() => Actions.Shop()}
                            // onPress={() => this.props.navigate.navigate('Product')}
                            >
                                <View style={{
                                    height: 170,
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
                                            <Text style={styles.card_text}>Salman Hair Salon</Text>
                                            <Text style={{ color: "#7F7F7F" }}>47B R-Block Madina, Lahore</Text>
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


                        <View style={{
                            width: "95%", marginTop: 10, flex: 1, flexDirection: "row",
                            // backgroundColor: "green"
                        }}>
                            <View style={{ flex: 1.5 }}>
                                <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Special Packages & Offers</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 16, color: "#8E8E93", textAlign: "right", }}>View All</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={{
                                margin: 10,
                                // backgroundColor: "red",
                            }}
                                onPress={() => Actions.Shop()}
                            // onPress={() => this.props.navigate.navigate('Product')}
                            >
                                <View style={{
                                    height: 170,
                                    // backgroundColor: "red",
                                }}>
                                    <ImageBackground source={require('../../../../assets/Rectangle.png')} style={styles.card} >
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
                                            <Text style={styles.card_text}>Haircut & Hiarstyle</Text>
                                            <Text style={{ color: "#7F7F7F", fontSize: 10 }}>Luxary Package offer till Sep 22,2019</Text>
                                        </View>
                                        <View style={{
                                            flex: 2,
                                            // flexDirection: "row",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            // backgroundColor: "yellow",
                                        }}>

                                            <Text style={{ color: "#FD6958" }}>Book Now</Text>
                                            <Text style={{ color: "#7F7F7F" }}>$100.00</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                margin: 10,
                                // backgroundColor: "red",
                            }}
                                onPress={() => Actions.Shop()}
                            // onPress={() => this.props.navigate.navigate('Product')}
                            >
                                <View style={{
                                    height: 170,
                                    // backgroundColor: "red",
                                }}>
                                    <ImageBackground source={require('../../../../assets/Rectangle.png')} style={styles.card} >
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
                                            <Text style={styles.card_text}>Haircut & Hiarstyle</Text>
                                            <Text style={{ color: "#7F7F7F", fontSize: 10 }}>Luxary Package offer till Sep 22,2019</Text>
                                        </View>
                                        <View style={{
                                            flex: 2,
                                            // flexDirection: "row",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            // backgroundColor: "yellow",
                                        }}>

                                            <Text style={{ color: "#FD6958" }}>Book Now</Text>
                                            <Text style={{ color: "#7F7F7F" }}>$100.00</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>



                        </ScrollView>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingBottom: 150,
        backgroundColor: "green",

    },
    card: {
        width: 250, height: 120,
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