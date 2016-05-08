import React, {
  Component,
  StyleSheet,
  StatusBar,
  TouchableHighlight,
  View
} from 'react-native';

class MyStatusBar extends Component{
  render(){
    return(
      <View>
      {Object.keys(StatusBar.barStyle).map((key)=>
        <TouchableHighlight style={styles.wrapper}
        onPress={()=>StatusBar.setStyle(StatusBar.Style[key])} >
          <View style={styles.button}>
            <Text>setStyle(StatusBar.Style.{key})</Text>
          </View>
        </TouchableHighlight>
      )}
      </View>
    )
  }
}

var styles=StyleSheet.create({
  wrapper:{
    borderRadius: 5,
    marginBottom: 5,
  },
  button:{
    backgroundColor: '#eeeeee',
    padding: 10,
  },
});

export default MyStatusBar
