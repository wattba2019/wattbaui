import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation'
import account from '../../../assets/Home/account.png'
import place_order from '../../../assets/Home/place_order.png'
import active_order from '../../../assets/Home/active_order.png'
import refer_friend from '../../../assets/Home/refer_friend.png'
import order_history from '../../../assets/Home/order_history.png'
import prices from '../../../assets/Home/prices.png'
import help from '../../../assets/Home/help.png'
import privacy from '../../../assets/Home/privacypolicy.png'
import changePas from '../../../assets/Home/reset-password.png'

var screenWidth = Dimensions.get('window').width * 0.3;
var screenHeight = Dimensions.get('window').height - 150;

const Gridmenu = ({ navigation }) => (
  <View style={styles.GridmenuMain}>
    <View style={{ alignItems: 'center', flex: 1 }} >
      <View style={styles.row}>
        {returnBtn(place_order, "Welcome", navigation)}
        {returnBtn(order_history, "OrderHistory", navigation)}

        {/* {returnBtn(active_order, "OrderStatus", navigation)} */}
      </View>
      <View style={styles.row}>
        {returnBtn(changePas, "ChangePassword", navigation)}
        {returnBtn(account, "UserAccount", navigation)}
      </View>
      <View style={styles.row}>
        {/* {returnBtn(prices, "", navigation)} */}
        {returnBtn(privacy, "Privacy", navigation)}
      </View>
    </View>
  </View>
);

const router = (route, navigation) => {
  console.log(route , 'route')
  if (route != "") {
    navigation.navigate(route, { active: true })
  }
}


returnBtn = (img, route, navigation) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => router(route, navigation)}>
      <Image
        source={img}
        resizeMode="contain"
        style={styles.img} />
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
  GridmenuMain: {
    position: 'relative',
    top: '15%',
    width: '100%',
    // flex: 2
    height: screenHeight
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 6
  },
  img: {
    width: screenWidth,
    height: screenWidth
  },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }
});

export default withNavigation(Gridmenu)