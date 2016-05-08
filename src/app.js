
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Navigator
} from 'react-native';

import { connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { searchBook, ebookDetail, setSettings } from './reducer.js'
import SearchResultList2 from './searchResultList'
import SearchBox from './searchBox'
import BookDetail from './bookDetail'
import TabNavigator from 'react-native-tab-navigator'
import Settings from './settings'

const sceneConfigs=[Navigator.SceneConfigs.PushFromRight,
Navigator.SceneConfigs.FloatFromRight,
Navigator.SceneConfigs.FloatFromLeft,
Navigator.SceneConfigs.FloatFromBottom,
Navigator.SceneConfigs.FloatFromBottomAndroid,
Navigator.SceneConfigs.FadeAndroid,
Navigator.SceneConfigs.HorizontalSwipeJump,
Navigator.SceneConfigs.HorizontalSwipeJumpFromRight,
Navigator.SceneConfigs.VerticalUpSwipeJump,
Navigator.SceneConfigs.VerticalDownSwipeJump]


var App=({renderScene, currentFormIndex})=>{
  return (
    <Navigator initialRoute={{id:1, title:'首页'}}
        configureScene={(route,routeStack) =>{
      return  sceneConfigs[currentFormIndex]
     }}
        renderScene={(r, n)=>{
          return(
            <View style={styles.container}>
                <View style={styles.routeHeader}>
                  <View style={styles.routeHeaderSection}>
                    <TouchableHighlight onPress={()=>{
                        n.pop();
                      }}>
                      <Text style={styles.routeHeaderText}>返回</Text>
                    </TouchableHighlight>
                  </View>
                  <View style={[styles.routeHeaderSection,{flex:1}]}>
                    <Text style={styles.routeHeaderText}>{r.title}</Text>
                  </View>
                  <View style={styles.routeHeaderSection}>
                    <TouchableHighlight onPress={()=>{
                        n.push({id:4,title:'设置'});
                      }}>
                    <Text style={styles.routeHeaderText}>设置</Text>
                    </TouchableHighlight>
                  </View>
                </View>
                {renderScene(r,n)}

            </View>
          )
        }} />
    )}

function mapStateToProps(state){
  var { formIndex, ...source} = state.setSettings
  return{
    currentFormIndex: formIndex,
    availableSource:{
      ...source
    }
  }
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    renderScene:(r,n)=>_renderScene(r,n)
  }
}

function _renderScene(r,n){
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

var Result=connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

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


export default Result
