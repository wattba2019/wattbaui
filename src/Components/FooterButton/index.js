import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View,Text,ImageBackground } from 'react-native';
import button from '../../../assets/Button/hexButton2.png'
import buttonBack from '../../../assets/Button/hexButton3.png'
import price from '../../../assets/Button/price.png'
export const FooterButton = ({ navigate, route, func, data, goBack, Basket }) => {
  console.log(route, data, "route, func,data")
  let total = 0
  if (data && data.orderArr) {
    for (var key in data.orderArr) {
      console.log(key, "------", data.orderArr[key])
      total += (data.orderArr[key].price * data.orderArr[key].quantity)
    }

  }
  console.log(total,"totaltotaltotal")
  return (
    <View style={{ flexDirection: "row" }}>
      {goBack ?
        <TouchableOpacity onPress={() => goBack()}>
          <Image source={buttonBack} style={styles.img} />
        
        </TouchableOpacity> : null
      }

      {(Basket) ?
        (<TouchableOpacity onPress={func ? () => func() : route ? () => navigate(route, { data }) : null}>
          <ImageBackground  source={price} style={{width: 110, height: 110}} >
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
     <Text style={{color:"#fff",fontSize:18}}>£{total}</Text>
   </View>
         
         
          {/* <Text>
            {total}
          </Text> */}
          </ImageBackground >
          
        </TouchableOpacity>)
        : (

          <TouchableOpacity onPress={func ? () => func() : route ? () => navigate(route, { data }) : null}>
            <Image source={button} style={styles.img} />
          

          </TouchableOpacity>
        )}

    </View>
  );
}


const styles = StyleSheet.create({
  hexagonBtn: {
    position: 'absolute',
    top: -40,
    right: 10
  },
});