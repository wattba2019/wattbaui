import React from 'react';
import { Text } from 'react-native';
import { topHeadStyle } from '../../Styles/styles'

export default Heading = ({ heading, headSize }) => {
  return (
    <Text style={[topHeadStyle, headSize ? { fontSize: headSize } : null]}>{heading}</Text>
  );
}