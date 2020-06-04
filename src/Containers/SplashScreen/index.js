// import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator, ImageBackground, StatusBar, AsyncStorage } from 'react-native';
import { connect } from "react-redux";
import React, { Component } from "react";
import { Actions } from 'react-native-router-flux';
import { setUserCredentials } from "./../../Store/Action/action";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.percent < 100) {
        this.setState({
          percent: this.state.percent + 2
        })
      }
    }, 10);
  }

  _retrieveData = async () => {

    try {
      const value = await AsyncStorage.getItem('userProfile');
      if (value !== null) {
        // alert("Data_Available")
        // We have data!!
        let userProfile = JSON.parse(value)
        console.log(value, userProfile, "GETASSYNC");
        this.props.setUserCredentials(userProfile)
      }
      else {
        Actions.Walkthrough()
      }
    } catch (error) {
      // Error retrieving data
    }
  };


  render() {

    if (this.state.percent === 100) {
      this._retrieveData()
    }

    return (
      <ImageBackground source={require('../../../assets/background.png')}
        style={{
          // backgroundColor: '#fd902a',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <StatusBar backgroundColor="#F86078" barStyle="dark-content" />
        {/* {
          (this.state.percent != 100) ? ( */}
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            // backgroundColor: "red",
          }}
        >
          <Image source={require('../../../assets/logo.png')} resizeMode="contain"
            style={{ height: "65%", width: "65%", }}
          />
          <ActivityIndicator style={{ flex: 1.5 }} size={40} color="white" />

        </View>
        {/* ) : null
        } */}

      </ImageBackground>
    );
  }
}
let mapStateToProps = state => {
  return {

  };
};
function mapDispatchToProps(dispatch) {
  return ({
    setUserCredentials: (user) => {
      dispatch(setUserCredentials(user));
    },
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);