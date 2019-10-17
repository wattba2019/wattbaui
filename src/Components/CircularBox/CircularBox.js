import React from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { withNavigation } from 'react-navigation'
// styles
import { welcomeDiv, mainDiv, touchableStyle } from './styles'
//component
import { HexagonButton } from '../HexagonButton'
import Heading from './Heading'
import Subheading from './Subheading'
const CircularBox = ({ heading, subheading, children, height, headSize, navigation, mainDivHeight, formBtn, func, hideLoader }) => {
  return (
    <View style={[mainDiv, { height: mainDivHeight }]} >
      <View style={{ width: '100%' }} >
        {heading ? <Heading heading={heading} headSize={headSize} /> : null}
        <View style={[welcomeDiv, { height }]}>
          {subheading ? <Subheading subheading={subheading} /> : null}
          <View style={{ paddingVertical: 6, width: '100%', alignItems: 'center' }}>
            {children}
          </View>
          {formBtn ?
            <TouchableOpacity style={touchableStyle} onPress={() => func()} >
              <HexagonButton />
            </TouchableOpacity>
            : (hideLoader) ? (null) : (
              <ActivityIndicator color="#eaa4c7" />
            )}
        </View>
      </View>
    </View>
  );
}

export default withNavigation(CircularBox); 