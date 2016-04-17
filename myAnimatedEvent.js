import React, {
  Component,
  View,
  Animated,
  Text,
  PanResponder,
  StyleSheet
} from 'react-native'

class DraggableView extends Component {
  constructor() {
    super()
    this.state={
      pan: new Animated.ValueXY({x:0,y:0}),
    }
    this.state.panResponder= PanResponder.create({
      onStartShouldSetPanResponder:()=>true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan.x,
          dy: this.state.pan.y
        }
      ]),
      onPanResponderRelease: ()=>{
        Animated.spring(
          this.state.pan,
          {toValue: {x: 0, y: 0}}
        ).start();
      }
    })
  }

  render(){
    return(
      <Animated.View
        {...this.state.panResponder.panHandlers}
        style={[styles.container, this.state.pan.getLayout()]}>
        {this.props.children}
      </Animated.View>
    )
  }
}

var myAnimated=React.createClass({
  render(){
    return(
      <DraggableView>
        <Text style={styles.containerText}>this is DraggableView</Text>
      </DraggableView>
    )
  }
})

var styles=StyleSheet.create({
    container:{
      width:120,
      height:120,
      backgroundColor:'blue',
      marginLeft:100,
      marginTop:100,
      padding:10
    },
    containerText:{
      color: 'white'
    }
})

export default myAnimated
