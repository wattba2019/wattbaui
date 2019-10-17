import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import CustomText from "../CustomText";
var screenHeight = Dimensions.get('window').height * 0.27;

class TimeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTime: false
    }
  }

  getStart = (openTime) => {
    let indexStart = openTime.indexOf("-")
    let startTime = openTime.slice(0, indexStart)
    return startTime;
  }
  getEnd = (openTime) => {
    let indexStart = openTime.indexOf("-")
    let startTime = openTime.slice(indexStart + 1)
    return startTime;
  }
  getDate = (openTime) => {
    let indexStart = openTime.indexOf(" ")
    let startTime = openTime.slice(0, indexStart + 1)
    return startTime;
  }

  onSelect = (item) => {
    this.setState({ selectedTime: !this.state.selectedTime })
    this.props.onTimeSelected(item.pick_up_range ? item.pick_up_time_to : item.drop_off_time_from, item)
  }

  render() {
    const { item, isSelected } = this.props;
    return (
      <TouchableOpacity onPress={() => this.onSelect(item)}>
        <View
          style={[
            styles.mainContainer,
            isSelected ?
              { backgroundColor: '#1FFFFF' } :
              { backgroundColor: '#4C44AF' }
          ]}>
          <View style={styles.subContainer}>
            <CustomText
              text={this.getStart(item.pick_up_range ? item.pick_up_range : item.drop_off_range)}
              textSize={20}
              textWeight="bold"
            />
            <CustomText
              text={'-'}
              textSize={25}
              textWeight="bold" />
            <CustomText
              text={this.getEnd(item.pick_up_range ? item.pick_up_range : item.drop_off_range)}
              textSize={20}
              textWeight="bold" />
            <View style={{ paddingTop: 20 }}>
              <CustomText
                text={this.getDate(item.pick_up_time_from ? item.pick_up_time_from : item.drop_off_time_from)}
                textSize={12}
                textWeight="bold" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: { height: screenHeight, width: 100, borderRadius: 12, marginRight: 10 },
  subContainer: { alignItems: 'center', paddingTop: '40%', }
});

export default TimeComponent;


