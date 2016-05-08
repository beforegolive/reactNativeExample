import React,{
  Component,
  StyleSheet,
  View,
  Text,
  Animated,
  Image
} from 'react-native'

class FadeInView extends Component {
  constructor() {
    super()
    this.state={
      fadeAnim: new Animated.Value(0),
    }
  }

  componentDidMount(){
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 2000,
        delay:0
      }
    ).start(e=>{
      console.log(e);
    });
  }

  render(){
    return(
      <Animated.View
        style={{opacity: this.state.fadeAnim}}>
        {this.props.children}
      </Animated.View>
    )
  }
}

let fadeInView=React.createClass({
  getInitialState(){
    return { animValue: new Animated.Value(0)};
  },
  componentDidMount(){
    Animated.timing(
      this.state.animValue,
      {
        toValue:1,
        duration:2000
      }
    ).start();
  },
  render(){
    return(
      <View>
        <View style={{flexDirection:'row'}}>
          <FadeInView>
            <View style={styles.block}>
              <Text style={styles.viewText}>Block in FadeView</Text>
            </View>
          </FadeInView>
          <Animated.View style={[
            styles.block,
            {
              opacity: this.state.animValue,
              transform:[
                {
                  translateY: this.state.animValue.interpolate({
                  inputRange: [0,1],
                  outputRange: [100, 0]
                })
              }]
            }
          ]
          }>
            <Text style={styles.viewText}>Block in FadeTransformView</Text>
          </Animated.View>
          <View style={styles.block}>
            <Text style={styles.viewText}>Block in View</Text>
          </View>
        </View>
        <View>
          <Playground />
        </View>
      </View>
    )
  }
})

class Playground extends Component {
  constructor() {
    super()
    this.state={
      bouncedValue: new Animated.Value(0),
    }
  }

  render(){
    return(
      <View style={{ flexDirection:'row'}}>
        <Animated.Image
          source={{uri:'http://i.imgur.com/XMKOH81.jpg'}}
          style={[styles.image, {
            transform:[
              {scale: this.state.bouncedValue}
            ]
          }]}
        />
        <Image source={{uri:'http://i.imgur.com/XMKOH81.jpg'}}
        style={styles.image}
         />
      </View>
    )
  }

  componentDidMount(){
    this.state.bouncedValue.setValue(1.5);
    Animated.spring(
      this.state.bouncedValue,
      {
        toValue:0.8,
        friction:2,
      }
    ).start();
  }
}

var styles=StyleSheet.create({
  block:{
    width:80,
    height:80,
    backgroundColor:'blue',
    margin:20,
    padding:5
  },
  viewText:{
    color:'white'
  },
  image:{
    width:100,
    height:100,
    margin:5
  }
})

export default fadeInView
