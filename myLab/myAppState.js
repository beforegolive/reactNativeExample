import React,{
  Component,
  AppState,
  Text,
  View,
  StyleSheet
} from 'react-native'

class MyAppState extends Component {
  constructor() {
    super()
    this.state={
      currentAppState: AppState.currentState
    }
  }

  componentDidMount(){
    AppState.addEventListener('change', this._handleAppStateChange)
  }

  _handleAppStateChange(currentAppState){
    this.setState({currentAppState})
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Current state is: { this.state.currentAppState}</Text>
      </View>
    )
  }
}

var styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#eee',
    paddingTop:100,
    paddingLeft:20
  }
})

export default MyAppState
