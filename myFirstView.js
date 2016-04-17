import React,{View, Text,TouchableOpacity,Navigator, Component, StyleSheet} from 'react-native';

var BaseConfig = Navigator.SceneConfigs.FloatFromRight;

var SCREEN_WIDTH= require('Dimensions').get('window').width;
var CustomLeftToRightGesture=Object.assign({}, BaseConfig.gestures.pop,{
  snapVelocity: 8,
  edgeHitWidth: SCREEN_WIDTH,
});

var CustomSceneConfig= Object.assign({}, BaseConfig,{
  springTension: 100,
  springFriction: 1,
  gestures:{
    pop: CustomLeftToRightGesture
  }
});

var PageOne=React.createClass({
  _handlePress(){
    this.props.navigator.push({id:2});
  },

  render(){
    return(
      <View style={styles.viewContainer}>
        <Text style={styles.welcome}>Greetings!</Text>
        <TouchableOpacity onPress={this._handlePress} >
          <View>
            <Text style={styles.welcome}>Go to page two</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
});

var PageTwo=React.createClass({
  _handlePress(){
    this.props.navigator.pop();
  },

  render(){
    return(
      <View style={styles.viewContainer}>
        <Text style={styles.welcome}>This is page two!</Text>
        <TouchableOpacity onPress={this._handlePress}>
          <View>
            <Text style={styles.welcome}>Go back</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
})

class MyFirstView extends Component{
  _renderScene(route, navigator){
    if(route.id === 1){
      return <PageOne navigator={navigator} />
    } else if(route.id===2){
      return <PageTwo navigator={navigator} />
    }
  }

  _configureScene(route){
    return CustomSceneConfig;
  }

  render(){
    return(
      <Navigator initialRoute={{id:1}}
                 renderScene={this._renderScene}
                 configureScene={this._configureScene} />
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    width:100,
    height:100,
    borderWidth:2,
    borderColor:'black'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'blue',
    width:40,
    height:40,
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

export default MyFirstView
