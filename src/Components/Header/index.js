import React from 'react';
import ActionTypes from '../../Store/Constant/constant'
import { withNavigation } from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import back from '../../../assets/Header/back.png'
import message from '../../../assets/Header/message.png'

signout = async (navigation, dispatch) => {
  dispatch({ type: ActionTypes.SIGNOUT })
  try {
    await AsyncStorage.removeItem('authToken')
    await AsyncStorage.removeItem('userData')

    
    navigation.navigate("Signin")
  } catch (e) {
    console.log(e)
  }
  console.log('Done.')
}

const Header = ({ title, navigation, dispatch }) => (
  <View style={styles.headerMain} >
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={back} resizeMode="contain" style={styles.back} />
    </TouchableOpacity>
    <Text style={{
       color: '#221765',
      //  color: '#fff',
        fontSize: 13, fontWeight: 'bold' }}>
      {title ? title : ''}
    </Text>
    <TouchableOpacity onPress={() => signout(navigation, dispatch)}>
      <Image source={message} resizeMode="contain" style={styles.message} />
    </TouchableOpacity>
  </View >
);

const styles = StyleSheet.create({
  headerMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '7%'
  },
  back: { height: 20, width: 20,
    tintColor:'#221765' 
},
  message: { height: 30, width: 30,
    tintColor:'#221765' 
   }
});


export default withNavigation(connect()(Header));
// export default withNavigation(Header);