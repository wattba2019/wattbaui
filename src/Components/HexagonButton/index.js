import React from 'react';
import { Image } from 'react-native';
import hexButton from '../../../assets/Button/hexButton2.png'
export const HexagonButton = () => {
  return (
    <Image source={hexButton} style={{ height: 70, width: 70 }} />
  );
}
