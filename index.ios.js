/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  NavigatorIOS,
  TextInput,
  Switch,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
  Picker,
  Navigator
} from 'react-native';

import MyView from './myFirstView';
import MyNavigator from './myNavigator';

class AwesomeProject extends Component {
  // var MOCKED_MOVIES_DATA=[
  //   {title:'Title', year:'2015', posters: {thumbnail:'
  //     http://i.imgur.com/UePbdph.jpg'}}
  // ];
  constructor(){
    super();
    this.state={
      secondSwitchValue:false,
      firstSwitchValue:true,
      language:'js'
    };
  }
  LoadImage(e){
    console.log('Hello World From Jacky!');
    console.log(e.nativeEvents);
    console.log(Image);
  }
  textLayout(e){
    console.log('In TextLayout');
    console.log(e);
  }
  textPress(e){
    console.log('In textPress');
    console.log(e);
    alert(e);
  }
  render() {
    return (
      <MyNavigator />
    );
  }
}

  // <MyNavigator />

// <Picker selectedValue={this.state.language} style={{width:100,height:30}}
//   onValueChange={(lang) => this.setState({language: lang})} >
//   <Picker.Item label='Java' value='java'/>
//   <Picker.Item label='JavaScript' value='js'/>
// </Picker>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
