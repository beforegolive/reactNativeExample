import React,{
  Component,
  Text,
  View,
  StyleSheet,
  AsyncStorage,
  Picker
} from 'react-native'

var STORAGE_KEY='jacky'
var colors=['red', 'orange','yellow','green','blue'];

class MyAsyncStorage extends Component {
  constructor() {
    super()
    this.state={
      selectedValue:'red',
      messages:[],
    }
  }

  componentDidMount(){
    this._loadInitialState().done();
  }

  render(){
    var color=this.state.selectedValue;
    return(
      <View>
        <Picker  selectedValue={color}
            onValueChange={this._onValueChange.bind(this)}
        >
          {colors.map((value)=>(
            <Picker.Item key={value} label={value} value={value} />
          ))}
        </Picker>
        <Text>
          {'Selected: '}
          <Text style={{color}} >
            {this.state.selectedValue}
          </Text>
        </Text>
        <Text onPress={this._removeStorage.bind(this)}>
          Press here to remove from storage.
        </Text>
        <View>
          <Text>Messages:</Text>
          {this.state.messages.map((m)=> <Text key={m}>{m}</Text>)}
        </View>
      </View>
    )
  }

  async _onValueChange(selectedValue){
    this.setState({selectedValue});
    try{
      await AsyncStorage.setItem(STORAGE_KEY, selectedValue);
      this._appendMessage('Saved selection to disk: ' +selectedValue);
    }
    catch(error){
      this._appendMessage('AsyncStorage error:' + error.message);
    }
  }

  async _removeStorage(){
    try{
      await AsyncStorage.removeItem(STORAGE_KEY);
      this._appendMessage('Selection removed from disk.');
    } catch(error){
      this._appendMessage('AsyncStorage error: ' + error.message);
    }
  }

  _appendMessage(message){
    this.setState({
      messages: this.state.messages.concat(message)
    })
  }

  async _loadInitialState(){
    try{
      var value= await AsyncStorage.getItem(STORAGE_KEY);
      if(value!==null){
        this.setState({selectedValue: value})
        this._appendMessage('recovered Selection from disk:' + value);
      } else{
        this._appendMessage('Initialized with no selection on disk.');
      }
    }
    catch(error){
      this._appendMessage('AsyncStorage error:' + error.message);
    }
  }
}

export default MyAsyncStorage
