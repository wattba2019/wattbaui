import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, StatusBar,
    ScrollView, Picker, Image, SafeAreaView, ActivityIndicator,
    images, Dimensions, ImageBackground
} from 'react-native';
import { connect } from "react-redux";
import { Icon, Tabs, Tab, TabHeading } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import About from '../shop/about';
import Services from '../shop/services';
import Entypo from 'react-native-vector-icons/Entypo';
import Zocial from 'react-native-vector-icons/Zocial';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImageSlider from 'react-native-image-slider';
import shopImage from '../../../assets/Group55346.png';
let img= require("../../../assets/Group55346.png")
const imagesUri = [
    'https://placeimg.com/640/640/nature',
    'https://placeimg.com/640/640/people',
    'https://placeimg.com/640/640/animals',
    'https://placeimg.com/640/640/beer',
];
class shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeColor:"about"
        }
    }
    activeColor(key) {
        console.log(key.ref.key)
        if (key.ref.key == ".0") {
            this.setState({
                activeColor: "about"
            })
        }
        if (key.ref.key == ".1") {
            this.setState({
                activeColor: "services"
            })
        }
        if (key.ref.key == ".2") {
            this.setState({
                activeColor: "gallery"
            })
        }
        if (key.ref.key == ".3") {
            this.setState({
                activeColor: "review"
            })
        }

    }
    render() {
        const {activeColor}=this.state
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView style={styles.container}>
                    <ImageSlider
                        // loopBothSides
                        autoPlayWithInterval={8000}
                        images={imagesUri}
                        customSlide={({ index, item, style, width }) => (
                            // It's important to put style here because it's got offset inside
                            <View key={index} style={[style, styles.customSlide]}>
                                <Image resizeMode={"cover"} source={{ uri: item }} style={styles.customImage} />

                                <View style={{
                                    flex: 1, top: -41, left: -100, backgroundColor: "#fff"

                                }}>
                                    <Text style={{ color: "green" }}>OPEN</Text>

                                </View>


                                <View style={{
                                    flex: 1, flexDirection: 'row', top: -41, marginLeft: "80%",
                                    alignItems: 'center', justifyContent: 'flex-end', position: 'relative',
                                }}>
                                    <TouchableOpacity style={{
                                        height: 25, width: 60, borderColor: 'green',
                                        borderWidth: 1, borderRadius: 4, marginRight: 0,
                                        justifyContent: 'center', alignItems: 'center',
                                    }}
                                    // onPress={this.addToFav.bind(this)}
                                    >
                                        <Text style={{ color: "green" }}>OPEN</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )} />
                </SafeAreaView>

                <View style={{ flex: 0.65,backgroundColor:"#fff" }}>
                    <ScrollView>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: "10%", paddingVertical: "5%" }}>
                            <View>
                                <Image
                                    resizeMode="contain"
                                    source={require("../../../assets/Group55286.png")}
                                    style={{ width: 45, height: 45 }}
                                />
                            </View>
                            <View>
                                <Image
                                    resizeMode="contain"
                                    source={require("../../../assets/Group55287.png")}
                                    style={{ width: 45, height: 45 }}
                                />
                            </View>
                            <View>
                                <Image
                                    resizeMode="contain"
                                    source={require("../../../assets/Group55288.png")}
                                    style={{ width: 45, height: 45 }}
                                />
                            </View>
                        </View>

                        <View style={{
                            paddingHorizontal: 35
                            // backgroundColor: "green"
                        }}>
                            <View style={{}}>
                                <Text style={{ color: "black", fontWeight: "bold", fontSize: 16 }}>Stylist</Text>
                            </View>

                        </View>
                        <ScrollView horizontal style={{marginVertical:15}} showsHorizontalScrollIndicator={false}>

                            <TouchableOpacity style={{
                                height: 110,
                                width: 110,
                                justifyContent: "center",
                                alignItems: "center",
                                // backgroundColor: "red",
                            }}
                            // onPress={() => this.props.navigate.navigate('Product')}
                            >
                                <View style={{
                                    height: 75,
                                    width: 75,
                                    borderRadius: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    borderColor: "#FD6958",
                                    borderWidth: 1.80

                                }}>
                                    <Image source={require('../../../assets/Ellipse-1.png')} resizeMode="contain"
                                        style={{ width: "90%", height: "90%", }}
                                    />
                                </View>
                                <Text style={{ marginTop: 5, fontSize: 14, color: "#8E8E93", textAlign: "right", }}>Hairstyle Name</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: 110,
                                width: 110,
                                justifyContent: "center",
                                alignItems: "center",
                                // backgroundColor: "red",
                            }}
                            // onPress={() => this.props.navigate.navigate('Product')}
                            >
                                <View style={{
                                  height: 75,
                                  width: 75,
                                    borderRadius: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    borderColor: "#FD6958",
                                    borderWidth: 1.80

                                }}>
                                    <Image source={require('../../../assets/Ellipse2s.png')} resizeMode="contain"
                                        style={{ width: "90%", height: "90%", }}
                                    />
                                </View>
                                <Text style={{ marginTop: 5, fontSize: 14, color: "#8E8E93", textAlign: "right", }}>Hairstyle Name</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: 110,
                                width: 110,
                                justifyContent: "center",
                                alignItems: "center",
                                // backgroundColor: "red",
                            }}
                            // onPress={() => this.props.navigate.navigate('Product')}
                            >
                                <View style={{
                                   height: 75,
                                   width: 75,
                                    borderRadius: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    borderColor: "#FD6958",
                                    borderWidth: 1.80

                                }}>
                                    <Image source={require('../../../assets/Ellipse-2.png')} resizeMode="contain"
                                        style={{ width: "90%", height: "90%", }}
                                    />
                                </View>
                                <Text style={{ marginTop: 5, fontSize: 14, color: "#8E8E93", textAlign: "right", }}>Hairstyle Name</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: 110,
                                width: 110,
                                justifyContent: "center",
                                alignItems: "center",
                                // backgroundColor: "red",
                            }}
                            // onPress={() => this.props.navigate.navigate('Product')}
                            >
                                <View style={{
                                   height: 75,
                                   width: 75,
                                    borderRadius: 50,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    borderColor: "#FD6958",
                                    borderWidth: 1.80

                                }}>
                                    <Image source={require('../../../assets/Ellipse-3.png')} resizeMode="contain"
                                        style={{ width: "90%", height: "90%", }}
                                    />
                                </View>
                                <Text style={{ marginTop: 5, fontSize: 14, color: "#8E8E93", textAlign: "right", }}>Hairstyle Name</Text>
                            </TouchableOpacity>
                        </ScrollView>

                       
                            <Tabs
                                onChangeTab={(key) => this.activeColor(key)}
                                locked={true}
                                tabBarUnderlineStyle={{ backgroundColor: '#FD6958' }}
                            >
                                {/* //Pin// */}
                                <Tab
                                    heading={
                                        <TabHeading
                                            style={{ flexDirection: "column", backgroundColor: "white" }}
                                        >
                                            <Text style={{color:activeColor==="about"?"#FD6958":"black"}}>About</Text>
                                        </TabHeading>}
                                >
                                        <About/>
                                </Tab>

                                {/* //Search// */}
                                <Tab
                                    heading={
                                        <TabHeading
                                            style={{ flexDirection: "column", backgroundColor: "white" }}
                                        >
                                            <Text  style={{color:activeColor==="services"?"#FD6958":"black"}}>Services</Text>
                                        </TabHeading>
                                    }
                                >
                                    <View>
                                    <Services/>

                                    </View>
                                </Tab>

                                {/* //Gift// */}
                                <Tab
                                    heading={
                                        <TabHeading
                                            style={{ flexDirection: "column", backgroundColor: "white" }}
                                        >
                                            <Text  style={{color:activeColor==="gallery"?"#FD6958":"black"}}>Gallery</Text>
                                        </TabHeading>
                                    }
                                >
                                    <View>
                                        <Text>
                                            aaaa
                                            aaaa
                                            aaaa
                               </Text>
                                    </View>
                                </Tab>

                                {/* //Basket// */}
                                <Tab
                                    heading={
                                        <TabHeading
                                            style={{ flexDirection: "column", backgroundColor: "white" }}
                                        >
                                            <Text  style={{color:activeColor==="review"?"#FD6958":"black"}}>Review</Text>
                                        </TabHeading>
                                    }
                                >
                                    <View>
                                        <Text>
                                            aaaa
                                            aaaa
                                            aaaa
                               </Text>
                                    </View>
                                </Tab>

                            </Tabs>






















                    </ScrollView>
                </View>




            </View>
        );
    }
}


const styles = StyleSheet.create({
    holder: {
        flex: 0.25,
        justifyContent: 'center',
    },
    contentContainer: {
        paddingBottom: 60,
        backgroundColor: "white",

    },
    container: {
        flex: 0.35,

    },
    containerForModal: {
        // flex: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        // width:"100%"
    },
    textareaContainer: {
        height: "30%",
        width: "95%",
        padding: 5,
        // backgroundColor: '#F8F8F8',
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 100,
        fontSize: 14,
        // color: '#333',
    },
    customSlide: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    customImage: {
        width: "100%",
        height: "100%",
    },
    listView: {
        width: "100%", height: 40, marginTop: 15,
        borderBottomWidth: 0.5, borderBottomColor: "#BEBCBC",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    listTextOption: {
        marginLeft: 10, color: "#000", fontWeight: "bold", fontSize: 12
    },
    listTextOptionValue: {
        marginLeft: 10, color: "#6a6a6a", textAlign: "right",
    },
    input: { justifyContent: 'center', alignItems: 'center', width: '95%', },
});



let mapStateToProps = state => {
    return {
        // str: state.root.str,
        // userDetails: state.root.userDetails,
    };
};
function mapDispatchToProps(dispatch) {
    return ({
        // languageSet: (lang) => {
        //     dispatch(languageSet(lang))
        // },
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(shop);

