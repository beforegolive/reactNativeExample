import React,{
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native'

class MyNativeMethods extends Component {
  constructor() {
    super()
  }

  componentDidMount(){
    this._view.measureInWindow((x,y,w,h)=>{
        alert(`x:${x},y:${y}, width:${w},height:${h}`)
    })
  }

  _handlePress(){
    this._view.measure((x,y,w,h)=>{
        alert(`measure - x:${x},y:${y}, width:${w},height:${h}`)
    })

    this._view.measureInWindow((x,y,w,h)=>{
        alert(`measureInWIndow - x:${x},y:${y}, width:${w},height:${h}`)
    })
  }

  render(){
    return(
      <View style={styles.container} ref={c=>this._view=c}>
        <Text onPress={this._handlePress.bind(this)}>Tap on this</Text>
      </View>
    )
  }
}

var styles=StyleSheet.create({
  container:{
    width:200,
    height:200,
    backgroundColor:'#eee',
    marginTop:120,
    marginLeft:120
  }
})

export default MyNativeMethods
