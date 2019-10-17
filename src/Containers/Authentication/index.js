import React, { useEffect } from 'react';
import {
    View, Image, ActivityIndicator, StyleSheet,
    ImageBackground, StatusBar, TouchableOpacity,
    Text,

} from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';

// Assets

const Walkthrough = ({ navigation }) => {
    return (
        <ImageBackground source={require('../../../assets/background.png')}
            style={{
                // backgroundColor: '#fd902a',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <StatusBar backgroundColor="#F86078" barStyle="dark-content" />

            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    // backgroundColor: "red",
                }}
            >
                <ImageBackground source={require('../../../assets/mask.png')} resizeMode="cover"
                    style={{ height: "100%", width: "100%", justifyContent: "center", }}
                >
                    <View style={{ justifyContent: "center", alignItems: "center", }}>
                        <Image source={require('../../../assets/logo.png')} resizeMode="contain"
                            style={{ height: "65%", width: "65%", }}
                        />
                    </View>

                    <TouchableOpacity
                        style={{
                            // marginTop: 100,
                            width: "80%",
                            backgroundColor: "white",
                            justifyContent: "center",
                            alignItems: "center",
                            marginHorizontal: "10%",
                            borderRadius: 30,
                            borderColor: "white",
                            borderWidth: 1

                        }}

                        onPress={() => Actions.Signin()}
                    >
                        <Text style={{ textAlign: "center", fontSize: 15, margin: 12, color: "#FD6958" }}>Sign in</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            width: "80%",
                            // backgroundColor: "white",
                            justifyContent: "center",
                            alignItems: "center",
                            marginHorizontal: "10%",
                            borderRadius: 30,
                            borderColor: "white",
                            borderWidth: 1
                        }}
                        onPress={() => Actions.Signup()}

                    >
                        <Text style={{ textAlign: "center", fontSize: 15, margin: 12, color: "white" }}>Sign up</Text>
                    </TouchableOpacity>

                </ImageBackground>


                {/* <Image source={require('../../../assets/mask.png')} resizeMode="cover"
                    style={{ height: "100%", width: "100%", }}
                /> */}
                {/* <ActivityIndicator style={{ flex: 1.5 }} size={40} color="white" /> */}

            </View>
        </ImageBackground>


        // <View style={{
        //     flex: 1,
        //     alignItems: "center",
        //     justifyContent: "center",
        //     backgroundColor: "#FF6E70"
        //     // backgroundColor: "red",

        // }}>
        //     <View
        //         style={{
        //             flex: 1.5,
        //             alignItems: "center",
        //             justifyContent: "center",
        //             width: "100%",
        //             backgroundColor: "red",
        //         }}
        //     >

        //         <Image source={require('../../../assets/logo.png')} resizeMode="contain"
        //             style={{ height: "50%", width: "50%", }}
        //         />

        //     </View>
        //     <View
        //         style={{
        //             flex: 3,
        //             alignItems: "center",
        //             justifyContent: "center",
        //             width: "100%",
        //             backgroundColor: "yellow",
        //         }}
        //     >

        //         <Image source={require('../../../assets/logo.png')} resizeMode="contain"
        //             style={{ height: "50%", width: "50%", }}
        //         />

        //         {/* <View>
        //             <Item rounded style={style.input}>
        //                 <Input
        //                     placeholder={"Signin"}
        //                     placeholderStyle={{ fontSize: 10 }}
        //                     placeholderTextColor="#b3b3b3"
        //                     keyboardType={'email-address'}
        //                     style={{ marginLeft: "10%", fontSize: 15 }}
        //                     onChangeText={(e) => { this.setState({ userName: e }) }}
        //                 />
        //             </Item>
        //         </View> */}
        //     </View>
        // </View>
    );

}

let mapStateToProps = state => {
    return {

    };
};
function mapDispatchToProps(dispatch) {
    return ({

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Walkthrough);

const style = StyleSheet.create({
    input: { backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', borderColor: 'white', shadowColor: '#e6ebf3', shadowOffset: { width: 5, height: 6 }, shadowOpacity: 1.0, width: '80%', margin: 5, elevation: 15 },
})