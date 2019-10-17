import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import HorizontalDatePicker from '@logisticinfotech/react-native-horizontal-date-picker'
import { weekday } from '../TimePicker/data'
import CustomText from '../../Components/CustomText'
var screenHeight = Dimensions.get('window').height * 0.27;

export default CustomHorizontalDatePicker = ({ id, onDateSelected, dateRange, that,isSelected, item}) => {

  const [bg, setBg] = useState(false)
  const [selectedDate, setDate] = useState("")
  var today = dateRange ? new Date(dateRange) : new Date();
  var tomorrow = dateRange ? new Date(dateRange) : new Date();
  var dateToSet = dateRange ? today.getDate() + 1 : today.getDate();
  tomorrow.setDate(dateToSet + Number(id));
  console.log(dateRange, "dateRange in DatePicker",item, today, tomorrow, dateToSet)
  let date = tomorrow.getDate();

  const setDateFunc = () => {
    that.setState({ selectedDateId: id })
    setBg(!bg)
    setDate(tomorrow.toLocaleDateString())
    onDateSelected(tomorrow.toISOString())
  }

  const nth = (n) => { return ["st", "nd", "rd"][((n + 90) % 100 - 10) % 10 - 1] || "th" }

  return (
    <TouchableOpacity onPress={setDateFunc}>
      <View
        style={[styles.containerStyle,
          isSelected ? { backgroundColor: '#1FFFFF' } : { backgroundColor: '#4C44AF' }]}>
        <View style={styles.subContainer}>
          <View style={{ marginTop: '40%' }}>
            <CustomText
              text={date + nth(date)}
              textSize={30}
              textWeight="bold" />
          </View>
          <View style={{ paddingTop: 20, alignItems: 'center' }}>
            <CustomText
              text={weekday[tomorrow.getDay()]}
              textSize={19}
              textWeight="bold" />
            <CustomText
              text={tomorrow.toLocaleDateString()}
              textSize={12}
              textWeight="bold" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
    // <HorizontalDatePicker
    //   pickerType={'date'}
    //   dayFormat={'Do'}
    //   isShowYear={false}
    //   datePickerContainerStyle={{
    //     backgroundColor: '#4C44AF',
    //     height: screenHeight,
    //     marginHorizontal: 5,
    //     borderRadius: 12,
    //   }}
    //   unSelectedTextStyle={{
    //     color: '#fff',
    //     fontSize: 30,
    //     fontWeight: 'bold'
    //   }}
    //   selectedTextStyle={{
    //     color: '#1FFFFF',
    //     fontSize: 30,
    //     fontWeight: 'bold'
    //   }}
    //   onDateSelected={this.onDateSelected}
    // />
  );
}

const styles = StyleSheet.create({
  containerStyle: { height: screenHeight, width: 100, borderRadius: 12, marginRight: 10 },
  subContainer: { alignItems: 'center', paddingTop: '25%', }

})