import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomText from "../CustomText";

class RenderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    }
  }

  setQuantity = (flag) => {
    console.log(this.props.data, "datadatadata")
    let serviceDataClone = this.props.data;
    if (flag == "+") {
      this.setState({ quantity: this.state.quantity + 1 }, () => {
        serviceDataClone.quantity = this.state.quantity

        this.props.func(serviceDataClone, this.state.quantity)
      }
      )
    } else if (flag == "-" && this.state.quantity != 0) {
      this.setState({ quantity: this.state.quantity - 1 }, () => {
        serviceDataClone.quantity = this.state.quantity
        this.props.func(serviceDataClone, this.state.quantity)

      })
    }

  }

  QuantityHandler = (text) => {
    return (
      <TouchableOpacity onPress={() => this.setQuantity(text)}>
        <View style={styles.quantityContainer}>
          <CustomText
            text={text}
            textSize={15}
          />
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { data, basket } = this.props;
    const { quantity } = this.state;
    return (
      <View >
        <View style={styles.container}>
          <View style={styles.imgFlex}>
            <Image
              resizeMode="cover"
              style={styles.img}
              source={data.image ? { uri: `http://laundary.debughands.com${data.image}` } : ''} />
          </View>
          <View style={styles.contentFlex}>
            <CustomText
              text={data.name}
              textSize={20}
              textWeight={"bold"}
            />
            <CustomText
              text={data.detail}
              textSize={12}
            />
            {(!basket) ? (
              <View style={styles.quantityHandler}>

                {this.QuantityHandler("-")}
                {this.QuantityHandler("+")}


                <View style={{ paddingHorizontal: '2%' }}>
                  <CustomText
                    text={quantity}
                    textSize={22}
                  />
                </View>
              </View>
            ) : (
                null
              )}

          </View>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    opacity: 0.9,
    width: "100%",
    backgroundColor: "#4C44AF",
    flex: 1,
    justifyContent: "center",
    flexDirection: 'row',
    paddingRight: '4%',
    paddingVertical: 20
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 8
  },
  contentFlex: { flex: 2 },
  imgFlex: { justifyContent: 'center', flex: 1, alignItems: 'center' },
  quantityContainer: { marginHorizontal: '5%', height: 23, width: 23, borderWidth: 1, borderColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  quantityHandler: {
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '50%'
  }
})
export default RenderList;