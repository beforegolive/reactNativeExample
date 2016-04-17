import React,{
  Component,
  View,
  Text,
  StyleSheet,
  PanResponder
} from 'react-native'

class MyPanResponder extends Component {
  constructor() {
    super();
    this._previousLeft=150;
    this._previousTop=200;
  }

  componentWillMount(){
    this._panResponder=PanResponder.create({
      onStartShouldSetPanResponder:(evt, gestureState)=>true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder:(evt, gestureState)=>true,
      onMoveShouldSetPanResponderCapture:(evt, gestureState)=> true,

      onPanResponderGrant:(evt, gestureState)=>{
      //  alert('Responder Now!');
      },
      onPanResponderMove:(evt,gestureState)=>{
        let tempLeft=this._previousLeft;
        let tempTop =this._previousTop;
        tempLeft+=gestureState.dx;
        tempTop+=gestureState.dy;
        this._updatePosition(tempLeft, tempTop);
      },
      onPanResponderTerminationRequest:(evt, gestureState)=> true,
      onPanResponderRelease:(evt, gestureState)=>{
        this._updatePosition();
      },
      onPanResponderTerminate:(evt, gestureState)=>{

      },
      onShouldBlockNativeResponder:(evt, gestureState)=>{
        return true;
      }
    });
  }

  _updatePosition(left= this._previousLeft, top= this._previousTop){
    this._view && this._view.setNativeProps({
      style:{
        left,
        top
      }
    })
  }

  componentDidMount(){
    console.log(this._view.style);
    this._updatePosition();
  }

  render(){
    return(
      <View ref={(c)=> this._view=c}
      style={styles.panContainer} {...this._panResponder.panHandlers}>
        <Text style={{color:'white',padding:8}}>Hold and Move this!</Text>
      </View>
    );
  }
}

var styles=StyleSheet.create({
  panContainer:{
    backgroundColor:'blue',
    height:100,
    width:100,
  }
})

export default MyPanResponder
