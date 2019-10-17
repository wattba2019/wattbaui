import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import drop from '../../../assets/Footer/drop.png'
import button from '../../../assets/Footer/button.png'

var screenWidth = Dimensions.get('window').width * 0.2;

export default Footer = ({ footerText }) => (
  <View style={styles.footerMain} >
    <View style={styles.drop}>
      <Image source={drop} />
    </View>
    {footerText ?
      <Text style={styles.text}>
        Chose what to give us when we collect. Skip
    </Text> : null}
  </View>
);

const styles = StyleSheet.create({
  footerMain: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
    alignItems: 'center',
    zIndex: 2000
  },
  hexagonBtn: {
    position: 'absolute',
    top: -40,
    right: 10,
    zIndex: 2000
  },
  text: {
    color: '#3B3291',
    fontSize: 10
  },
  drop: { paddingHorizontal: '6%' },
  img: { height: screenWidth, width: screenWidth }
});