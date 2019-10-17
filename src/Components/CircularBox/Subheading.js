import React from 'react';
import { Text } from 'react-native';
import { contentStyle } from '../../Styles/styles'


export default Subheading = ({ subheading }) => {
  return (
    <Text style={[contentStyle, { fontSize: 16, paddingTop: 20, textAlign: 'center', fontWeight: 'bold' }]}>
      {subheading}
    </Text>
  );
}