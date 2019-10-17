import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, FlatList,Text } from 'react-native';
import CustomText from "../CustomText";
import { connect } from 'react-redux';
import { error } from "../../Store/Action/authAction";
import BasicList from '../BasicList'
const url = `http://laundary.debughands.com/api/get-service/`
class RenderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false, serviceData: [], quantity: {},errFlage:true
    }
  }
  selectedItem = () => {
    this.setState({ selected: !this.state.selected,errFlage:false })
    categoryId = this.props.data.id;
    console.log(categoryId, 'category id')
    fetch(url + categoryId, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => {
      return res.json()
    }).then(response => {
      let serveResponse = response.results
      if(serveResponse.length>0){
        this.setState({ serviceData: serveResponse,})
      }
      else{
        this.setState({ serviceData: [], errFlage:true})
      }
      console.log(response, "111response from backend")
    })
  }
  quantity(serviceDataSelected, quantity) {
    console.log(serviceDataSelected, quantity, 'serviceData***')
    this.props.func(serviceDataSelected)
  }
  err(error) {
      setTimeout(()=>{
        this.setState({
          errFlage:false,selected:false
        })
      },3000)
      return (
        <View>
          <Text style={{color:error[1]==="err"?"red":"yellow"}}>
            {error[0]}
          </Text>
        </View>
      )
   
  }
  orderHistoryDetails = (data)=>{
    this.props.navigation.navigate("HistoryDetails", {data:data})
  }
  render() {
    const { data, OrderImg, } = this.props;
    const { selected, serviceData,errFlage } = this.state;
    return (
      <View>
        <TouchableOpacity onPress={() => OrderImg ? this.orderHistoryDetails(data) : this.selectedItem()}>
          <View style={[styles.container, selected ? { backgroundColor: "#1FFFFF" } : null]}>
            
            {(OrderImg) ? (
              <>
                <View style={styles.imgFlex}>
                  {OrderImg ?
                    <Image
                      resizeMode="cover"
                      style={styles.img}
                      source={OrderImg} />
                    : null
                  }
                </View>
                <View style={{ marginTop: '4%', flex: 2 }}>
                  <CustomText
                    text={"#Laundry " + data.id}
                    textSize={20}
                    textWeight={"bold"}
                  />
                  <CustomText
                    text={"Price: " + data.total + " Status: " + data.order_status}
                  />
                  <CustomText
                    text={"Pick up: " + data.pick_up_time}
                  />
                  <CustomText
                    text={"Drop off: " + data.drop_off_time}
                  />
                </View>
              </>
            ) : (
                <>
                  <View style={styles.imgFlex}>
                    {data.mob_image ?
                      <Image
                        resizeMode="cover"
                        style={styles.img}
                        source={{ uri: `http://laundary.debughands.com${data.mob_image}` }} />
                      : null
                    }
                  </View>
                  <View style={{ marginTop: '4%', flex: 2 }}>
                    <CustomText
                      text={data.name}
                      textSize={20}
                      textWeight={"bold"}
                    />
                    <CustomText
                      text={data.created_at}
                    />
                  </View>
                </>
              )}
          </View>
        </TouchableOpacity>

        {selected &&  serviceData.length>0 ?
          <View style={{ backgroundColor: '#4C44AF', flex: 1, paddingBottom: 10 }}>
            <FlatList
              data={serviceData}
              renderItem={({ item, index }) => <BasicList func={(serviceDataSelected, quantity) => this.quantity(serviceDataSelected, quantity)} data={item} key={JSON.stringify(item.id)} />}
            />
          </View>
          : 
          (selected&&errFlage)?this.err(["this catogery has no service","err"]):console.log(selected,errFlage,"selected&&errFlageselected&&errFlage")
        
        }
    
        
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#4C44AF",
    height: 115,
    borderRadius: 12,
    justifyContent: "center",
    flexDirection: 'row',
    flex: 1,
    marginTop: 7.5,
    marginBottom: 7.5,
  },
  imgFlex: { justifyContent: 'center', flex: 1, alignItems: 'center' },
  img: {
    height: 70,
    width: 70,
    borderRadius: 8
  }
})
// export default RenderList;


let mapStateToProps = state => {
  return {
    loader: state.root.loader,
    error: state.root.error,

  };
};
function mapDispatchToProps(dispatch) {
  return ({
    error: (message,errNNotify) => {
      dispatch(error(message,errNNotify))
    },
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderList);