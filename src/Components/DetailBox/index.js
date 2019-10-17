import React from 'react'
import { View } from 'react-native'
import CustomText from '../CustomText'
import { TouchableOpacity } from 'react-native-gesture-handler';
const appInput = { width: '80%', paddingTop: '3%' }


export default DetailBox = ({ heading, content1, content2, contentSize,hideEdit,data,navigation }) => (
  <View style={appInput}>
    <CustomText
      text={heading}
      textSize={12}
      textWeight="bold"
      align="center"
    />
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
      <CustomText
        text={content1}
        textSize={contentSize}
        textWeight="bold"
      />
      {content2 ?
        <CustomText
          text={content2}
          textSize={contentSize}
          textWeight="bold"
        /> : null}
    </View>
    {(hideEdit)?(null):(

    <TouchableOpacity 
    onPress={()=> 
      navigation.navigate("Checkout", {data:data})
    }
    style={[{ flexDirection: 'row', justifyContent: 'flex-end' }, heading != 'Address' ? { marginTop: '8%' } : {}]}>
      <CustomText
        text={`EDIT`}
        textSize={12}
        textWeight="bold"
      />
    </TouchableOpacity>
    )}
  </View>
)