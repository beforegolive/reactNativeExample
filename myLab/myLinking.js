import React,{
  Component,
  Linking,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

class MyLinking extends Component {
  constructor() {
    super()
  }

  handleClick(){
    var url = this.props.url;
    Linking.canOpenURL(url).then(supported =>{
      if(supported){
        Linking.openURL(url);
      } else{
        console.log(`Don't know how to open URI:` + url);
      }
    })
  }

  render(){
    return(
        <TouchableOpacity
          onPress={this.handleClick.bind(this)}>
          <View style={styles.button}>
            <Text style={styles.text}>Open {this.props.url} </Text>
          </View>
        </TouchableOpacity>
    )
  }
}

var styles=StyleSheet.create({
  container:{
    paddingTop:30
  },
  button:{
    padding: 10,
    backgroundColor: '#3B5998',
    marginBottom: 10,
  },
  text: {
    color: 'white',
  },
})

var IntentExample= React.createClass({
    render(){
      return(
      <View style={styles.container}>
        <MyLinking url={'http://www.facebook.com'} ></MyLinking>
        <MyLinking url={'https://www.facebook.com'} ></MyLinking>
        <MyLinking url={'tel:182736123'} ></MyLinking>
        <MyLinking url={'fb://notifications'} />
        <MyLinking url={'geo:37.484847,-122.148386'} />
      </View>
    )
    }
})

export default IntentExample
