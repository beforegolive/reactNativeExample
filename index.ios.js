/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Navigator
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { searchBook, ebookDetail } from './src/reducer.js'
import SearchResultList2 from './src/searchResultList'
import SearchBox from './src/searchBox'
import BookDetail from './src/bookDetail'
import TabNavigator from 'react-native-tab-navigator'
import Settings from './src/settings'

var reducers = combineReducers({searchBook, ebookDetail})
var store = createStore(reducers)

class ebookFinder extends Component {
  _renderScene(r,n){
    switch (r.id) {
      case 1:
        return <SearchBox navigator={n}/>
      case 2:
        return <SearchResultList2 navigator={n}/>
      case 3:
        return <BookDetail navigator={n} />
      case 4:
        return <Settings navigator={n} />
      default:
        return <SearchBox navigator={n}/>
    }
  }

  render() {
    return (
    <Provider store={store}>
      <Navigator initialRoute={{id:1}}
          configureScene={(route,routeStack) =>
         Navigator.SceneConfigs.FloatFromRight
        }
          renderScene={(r, n)=>{
            return(
              <View style={styles.container}>
                  <View style={styles.routeHeader}>
                    <View style={styles.routeHeaderSection}>
                      <TouchableHighlight onPress={()=>{
                          n.pop();
                        }}>
                        <Text style={styles.routeHeaderText}>Back</Text>
                      </TouchableHighlight>
                    </View>
                    <View style={[styles.routeHeaderSection,{flex:1}]}>
                      <Text style={styles.routeHeaderText}>ebookFinder</Text>
                    </View>
                    <View style={styles.routeHeaderSection}>
                      <TouchableHighlight onPress={()=>{
                          n.push({id:4});
                        }}>
                      <Text style={styles.routeHeaderText}>Setting</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                  {this._renderScene(r,n)}

              </View>
            )
          }} />
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  routeHeader:{
    backgroundColor:'#4285f4',
    borderColor:'#aaa',
    borderTopWidth:1,
    borderRadius:1,
    borderLeftWidth:0,
    height:40,
    alignSelf: 'stretch',
    flexDirection:'row'
  },
  routeHeaderText:{
    color:'white',
    paddingLeft:8,
    paddingTop:8,
    fontSize:17,
  },
  routeFooter:{
    backgroundColor:'#def4fc',
    borderColor:'#eee',
    borderTopWidth:1,
    borderRadius:1,
    borderLeftWidth:0,
    height:40,
    alignSelf: 'stretch',
    flexDirection:'row',
  },
  badgeView:{
    position:'relative',
    backgroundColor:'red',
    borderRadius:10,
    borderWidth:3,
    borderColor:'red',
    left:40,
    top:-25,
  },
  routeHeaderSection:{
    flex:0.3,
    alignItems:'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop:21,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput:{
    textAlign:'left',
    height:50,
    width:200,
    borderColor:'#aaa',
    borderWidth:1,
    borderRightWidth:0,
    borderRadius:2,
    paddingLeft:6,
  },
  centerContainer:{
    flexDirection:'row'
  },
  button:{
    backgroundColor:'#4285f4',
    padding:14,
    borderColor:'#aaa',
    borderWidth:1,
    borderRadius:2,
    borderLeftWidth:0,
  },
  buttonText:{
    color:'white',
  }
});

AppRegistry.registerComponent('AwesomeProject', () => ebookFinder);
