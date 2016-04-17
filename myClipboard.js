import React,{
  Component,
  Clipboard,
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native'

class MyClipboard extends Component {
  constructor() {
    super()
    this.state={
      content: 'Content will appear here'
    }
  }

  async _setClipboardContent(){
    Clipboard.setString('Hello World');
    try{
      var content=await Clipboard.getString();
      this.setState({content});
    } catch(e){
      this.setState({content: e.message})
    }
  }

  render(){
    return(
      <View style={styles.content}>
        <Text onPress={this._setClipboardContent.bind(this)}
        style={{color:'blue'}} >
          Tap to put "Hello World" in the Clipboard
        </Text>
        <Text style={{color:'red', marginTop: 20}}>
          {this.state.content}
        </Text>
        <TextInput style={[styles.inputBox]} defaultValue={'paste after Tapping'}/>
      </View>
    )
  }
}

var styles=StyleSheet.create({
  content:{
    padding:30,
    backgroundColor:'#eee',
    flex:1
  },
  inputBox:{
    backgroundColor:'white',
    borderColor:'#222',
    borderWidth:1,
    borderRadius:3,
    height:30,
    marginTop:20
  }
})

export default MyClipboard
