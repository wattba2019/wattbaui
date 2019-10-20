import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, StatusBar,
    ScrollView, Picker, Image, SafeAreaView, ActivityIndicator,
    images, Dimensions, ImageBackground
} from 'react-native';
import { connect } from "react-redux";
import { Icon, } from 'native-base';
// import IconEntypo from 'react-native-vector-icons/Entypo';
import ImageSlider from 'react-native-image-slider';

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
        }
    }
    render() {
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
                                    flex: 1, flexDirection: 'row', top: -41, marginLeft: "80%",
                                    alignItems: 'center', justifyContent: 'flex-end', position: 'relative',
                                }}>
                                    <TouchableOpacity style={{
                                        height: 40, width: 40, borderColor: '#fce5c8',
                                        borderWidth: 1, borderRadius: 5, marginRight: 0,
                                        justifyContent: 'center', alignItems: 'center', backgroundColor: '#E94E1B'
                                    }}
                                    // onPress={this.addToFav.bind(this)}
                                    >
                                        <Icon name='heart' style={{ color: "#ffff", fontWeight: "bold", fontSize: 23, }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )} />
                </SafeAreaView>
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
        flex: 0.5,
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

