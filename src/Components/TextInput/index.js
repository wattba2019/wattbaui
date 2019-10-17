import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import { labelStyle } from '../../Styles/styles'

export default AppInput = ({ label, value, onChange, width, keypadType, secure }) => (
  <View style={{ paddingTop: 12 }} >
    <Text style={labelStyle}>
      {label}
    </Text>
    <TextInput
      style={[styles.input, width ? { width } : {}]}
      onChangeText={onChange}
      value={value}
      keyboardType={keypadType}
      secureTextEntry={secure ? true : false}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 0.4,
    justifyContent: 'center',
    color: "#fff"
  }
});