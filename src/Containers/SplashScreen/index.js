// import React, { useEffect } from 'react';
import { View, Image, Text, ActivityIndicator, ImageBackground, StatusBar, AsyncStorage, Platform, PermissionsAndroid } from 'react-native';
import { connect } from "react-redux";
import React, { Component } from "react";
import { Actions } from 'react-native-router-flux';
import { setUserCredentials, setUserCurrentLocationWithUserCredentials } from "./../../Store/Action/action";
import Geolocation from 'react-native-geolocation-service';

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
        // We have data!!
        let userProfile = JSON.parse(value)
        let locationAllow = await this._checkLocationAllow()
        if (locationAllow) {
          this.allowLocation(userProfile)
        }
        else {
          this.props.setUserCredentials(userProfile)
        }
      }
      else {
        Actions.Walkthrough()
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  _checkLocationAllow = async () => {
    try {
      const value = await AsyncStorage.getItem('locationAllow');
      if (value !== null) {
        // We have data!!
        let locationAllow = JSON.parse(value)
        return locationAllow
      }

    } catch (error) {
      // Error retrieving data
    }
  };


  async requestPermissions() {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse',
      });
    }
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  }

  allowLocation = (userProfile) => {
    this.requestPermissions()
    // Instead of navigator.geolocation, just use Geolocation.
    Geolocation.getCurrentPosition(
      (position) => {
        if (position) {
          console.log(position, "USER_CURRENT_LOCATION_AllowAcces")
          this.props.setUserCurrentLocationWithUserCredentials(position, userProfile)
        }
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message, "ERROR_ON_GETTING_YOUR_LOCATION_AllowAcces");
        this.setState({
          loader: false,
          err: error.message
        })
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, }
    );
  }


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

          <Text style={{ color: "white", fontWeight: "bold" }}>Loading...</Text>

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
    setUserCurrentLocationWithUserCredentials: (position, userProfile) => {
      dispatch(setUserCurrentLocationWithUserCredentials(position, userProfile));
    },
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);