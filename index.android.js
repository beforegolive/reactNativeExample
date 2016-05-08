/**
 * Sample React Native App
 * https://github.com/facebook/react-native
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
 import { searchBook, ebookDetail, setSettings } from './src/reducer.js'
 import SearchResultList2 from './src/searchResultList'
 import SearchBox from './src/searchBox'
 import BookDetail from './src/bookDetail'
 import TabNavigator from 'react-native-tab-navigator'
 import Settings from './src/settings'
 import App from './src/app'

 var reducers = combineReducers({searchBook, ebookDetail, setSettings})
 var store = createStore(reducers)

 class ebookFinder extends Component {
   render() {
     return (
     <Provider store={store}>
       <App />
     </Provider>
     );
   }
 }

AppRegistry.registerComponent('AwesomeProject', () => ebookFinder);
