import React,{
  Component,
  Text,
  Navigator,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import MyStatusBar from './myStatusBar';
import MyActivityIndicator from './myActivityIndicator';
import MyDatePicker from './myDatePicker'
import MyListView from './myListView'
import MyScrollView from './myScrollView'
import MyTabBarIOS from './myTabBarIOS'
import MyModal from './myModal'
import MyViewForGestureResponder from './myViewForGestureResponder'
import MyPanResponder from './myPanResponder'
import MyWebViewSimple, { MyWebView } from './myWebView'
import MyAnimated from './myAnimated.js'
import MyDraggerView from './myAnimatedEvent'
import MyAppState from './myAppState'
import MyAsyncStorage from './myAsyncStorage'
import MyClipboard from './myClipboard'
import MyLinking from './myLinking'
import MyNativeMethods from './myNativeMethodMixin'

const MyCustomText=React.createClass({
  _handlePress(){
    this.props.navigator.push({id:2});
  },
  _handlePressToStatusBar(){
    this.props.navigator.push({id:4});
  },
  _handlePressUniversal(id){
    this.props.navigator.push({id});
  },
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <StatusBar animated={true}
            networkActivityIndicatorVisible={true}
            hidden={this.props.statusBarHidden}/>
          <Text style={styles.welcome}>
          Components
          </Text>
          <TouchableOpacity onPress={this._handlePress} >
            <Text>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressToStatusBar} >
            <Text>Go to StatusBar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressUniversal.bind(this,5)} >
            <Text>ActivityIndicatorIOS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressUniversal.bind(this,6)} >
            <Text>DatePickerIOS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressUniversal.bind(this,7)} >
            <Text>ListView</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressUniversal.bind(this,8)} >
            <Text>MyScrollView</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressUniversal.bind(this,9)} >
            <Text>MyTabBarIOS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressUniversal.bind(this,10)} >
            <Text>MyModal</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressUniversal.bind(this,11)} >
            <Text>MyViewForGesture</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressUniversal.bind(this,12)} >
            <Text>MyPanResponder</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressUniversal.bind(this,13)} >
            <Text>MyWebViewSimple</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressUniversal.bind(this,14)} >
            <Text>MyWebView</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.leftColumn}>
          <Text style={styles.welcome}>
          APIs
          </Text>
          <TouchableOpacity onPress={this._handlePressUniversal.bind(this,15)} >
            <Text>Animated</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressUniversal.bind(this,16)} >
            <Text>DraggableView</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressUniversal.bind(this,17)} >
            <Text>AppState</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressUniversal.bind(this,18)} >
            <Text>AsyncStorage</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressUniversal.bind(this,19)} >
            <Text>Clipboard</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressUniversal.bind(this,20)} >
            <Text>MyLinking</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handlePressUniversal.bind(this,21)} >
            <Text>MyNativeMethods</Text>
          </TouchableOpacity>
        </View>
     </View>
  )
  }
})

const MyCustomNextText=React.createClass({
  _handlePressGoBack(){
    this.props.navigator.pop();
  },
  _handlePressNext(){
    this.props.navigator.push({id:3});
  },
  render(){
    return (
    <View style={styles.container}>
      <StatusBar animated={true}
        networkActivityIndicatorVisible={true}
        hidden={this.props.statusBarHidden}/>
      <Text style={styles.welcome}>
      My Custom Second Text!
      </Text>
      <TouchableOpacity onPress={this._handlePressGoBack} >
        <Text>Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this._handlePressNext} >
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  )
  }
})

const MyThirdText= React.createClass({
  _handlePressGoBack(){
    this.props.navigator.pop();
  },
  render(){
    return(
      <View style={styles.container}>
        <StatusBar animated={true}
          networkActivityIndicatorVisible={true}
          hidden={this.props.statusBarHidden}/>
        <Text style={styles.welcome}>
        My Custom Third Text!
        </Text>
        <TouchableOpacity onPress={this._handlePressGoBack} >
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    )
  }
})


class MyText extends Component{
  _renderScene(route, navigator){
    switch (route.id) {
      case 1:
        return <MyCustomText navigator={navigator} statusBarHidden={route.statusBarHidden} />
      case 2:
        return <MyCustomNextText navigator={navigator} statusBarHidden={route.statusBarHidden}/>
      case 3:
        return <MyThirdText navigator={navigator} statusBarHidden={route.statusBarHidden}/>
      case 4:
        return <MyStatusBar navigator={navigator}/>
      case 5:
        return <MyActivityIndicator />
      case 6:
        return <MyDatePicker />
      case 7:
        return <MyListView />
      case 8:
        return <MyScrollView />
      case 9:
        return <MyTabBarIOS />
      case 10:
        return <MyModal />
      case 11:
        return <MyViewForGestureResponder />
      case 12:
        return <MyPanResponder />
      case 13:
        return <MyWebViewSimple />
      case 14:
        return <MyWebView />
      case 15:
        return <MyAnimated />
      case 16:
        return <MyDraggerView />
      case 17:
        return <MyAppState />
      case 18:
        return <MyAsyncStorage />
      case 19:
        return <MyClipboard />
      case 20:
        return <MyLinking />
      case 21:
        return <MyNativeMethods />
      default:
        return;
    }
  }
  render(){
    return(
      <Navigator initialRoute={{id:1, }}
        renderScene={this._renderScene}
        configureScene={(route) => Navigator.SceneConfigs.FloatFromRight}
        />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection:'row'
  },
  leftColumn:{
    flex:0.5,
    alignItems:'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  icon: {
    width:100,
    height:100
  },
  redborder: {
    borderWidth: 1,
    borderColor:'#ff0000',
  },
  inputBox:{
    width:200,
    height:20,
    borderColor:'gray',
    borderWidth:1,
    // marginHorizontal: 100
    alignSelf:'center'
  }
});

export default MyText
