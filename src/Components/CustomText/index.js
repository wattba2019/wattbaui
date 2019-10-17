import React from 'react';
import { Text } from 'react-native';

export default CustomText = ({ text, textSize, textWeight, align, paddingVertical, color }) => (
  <Text style={
    [
      {
        color: color,
        fontSize: textSize,
      },
      textWeight ? {
        fontWeight: textWeight
      } :
        {},
      align ? {
        textAlign: align
      } :
        {},
      paddingVertical ? {
        paddingVertical
      } :
        {}
    ]}
  >
    {text}
  </Text>
);
