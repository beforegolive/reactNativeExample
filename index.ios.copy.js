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
import MyText from './myTextView';

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
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! 22 haha
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>

      <Text onLayout={this.textLayout} style={styles.redborder}
            onPress={this.textPress} suppressHighlighting={true}
        >This is my TextControl</Text>
        <TextInput
          style={styles.inputBox} autoFocus={false} keyboardType={'email-address'}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder={'input something.'}
          autoCapitalize={'none'}
          />
        <Switch value={this.state.firstSwitchValue}
                onValueChange={(value)=> this.setState({firstSwitchValue:value})}
          />
        <Switch value={this.state.secondSwitchValue}
              onValueChange={(value) => this.setState({secondSwitchValue:value})}/>
            <StatusBar animated={true} backgroudColor='blue' barStyle='light-content' hidden={false} />
          <TouchableHighlight style={{width:60,height:60}} onPress={(e)=>{console.log(e);alert('onPress')}} >
            <Image style={{width:40,height:40}} activeOpacity={0.1} underlayColor="red"
              source={{uri:'http://i.imgur.com/UePbdph.jpg'}}
              />
          </TouchableHighlight>
          <Image style={{width:40,height:40}}
            source={{uri:'http://i.imgur.com/UePbdph.jpg'}}
            />
          <TouchableOpacity activeOpacity={0.1}>
            <Image style={{width:40,height:40}}
              source={{uri:'http://i.imgur.com/UePbdph.jpg'}}
              />
          </TouchableOpacity>

           <MyText/>
      </View>
    );
  }
}

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
