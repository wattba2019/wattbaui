import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default Greeting = ({ heading, subheading }) => (
  <View style={styles.greetMain} >
    <Text style={styles.head}>
      {heading}
    </Text>
    <Text style={[styles.head, { fontSize: 11 }]}>
      {subheading}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  greetMain: {
    zIndex: 1000,
    position: 'absolute',
    top: '2%',
    paddingHorizontal: '20%'
  }
  , head: {
    fontSize: 20,
    // color: '#fff',
    color: '#221765',
    fontWeight: 'bold'
  }
});