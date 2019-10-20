import React, { Component } from 'react';
import { Router, Scene, Actions, Tabs } from 'react-native-router-flux'
import SplashScreen from '../Containers/SplashScreen/index'
import Walkthrough from '../Containers/Authentication/index'
import Signin from '../Containers/Authentication/signin'
import Forgotyourpassword from '../Containers/Authentication/forgotyourpassword'
import Signup from '../Containers/Authentication/signup'
import Phoneverification from '../Containers/Authentication/phoneveryfication'
import Veryfiyournumber from '../Containers/Authentication/verifyyournumber'
import Allowaccesslocation from '../Containers/Authentication/allowaccesslocation'
import AppContainer from '../Containers/App/appcontainer'
import Filters from '../Containers/App/nearby/filters'
import SearchResults from '../Containers/App/nearby/searchResult'

class Route extends Component {
  render() {
    return (
      <Router navigationBarStyle={{ backgroundColor: "#f27500" }}
        titleStyle={{ color: "white" }}
        tintColor="white">
        <Scene >
          <Scene key='SplashScreen' component={SplashScreen} hideNavBar={true} />
          <Scene key='Walkthrough' component={Walkthrough} hideNavBar={true} />
          <Scene key='Signin' component={Signin} hideNavBar={true} />
          <Scene key='Forgotyourpassword' component={Forgotyourpassword} hideNavBar={true} />
          <Scene key='Signup' component={Signup} hideNavBar={true} />
          <Scene key='Phoneverification' component={Phoneverification} hideNavBar={true} />
          <Scene key='Veryfiyournumber' component={Veryfiyournumber} hideNavBar={true} />
          <Scene key='Allowaccesslocation' component={Allowaccesslocation} hideNavBar={true} />
          <Scene key='AppContainer' component={AppContainer} hideNavBar={true} />
          <Scene key='Filters' component={Filters} hideNavBar={true} initial />
          <Scene key='SearchResults' component={SearchResults} hideNavBar={true} />
        </Scene>
      </Router>
    )
  }
}

export default Route;