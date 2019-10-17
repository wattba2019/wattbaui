import React from 'react'
import DatePicker from 'react-native-datepicker'
import { View } from 'react-native'
import CustomText from '../CustomText'

export default CustomDatePicker = ({ getDate, label, value }) => (
  <View style={{ marginTop: '4%' }}>
    <CustomText text={label} textSize={13} textWeight="bold" paddingVertical={"2%"} />
    <DatePicker
      style={{ width: 80 }}
      customStyles={{
        dateText: { color: '#fff' },
        dateInput: {
          borderColor: '#fff',
        },
        placeholderText: {
          fontWeight: 'bold',
          color: '#fff',
          fontSize: 19
        }
      }}
      mode="date"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      placeholder={`  ${"/"}   `}
      showIcon={false}
      onDateChange={getDate}
      date={value}
    />
  </View>
)