import React, {
  View,
  Text,
  StyleSheet,
  Switch,
  Navigator,
  TouchableHighlight
} from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import commonStyles from './styles/commonStyles'
import * as Actions from './actionCreator'
import Radio from 'react-native-simple-radio-button'

var radio_props=[
  {label:'从右侧推入', value: 0},
  {label:'从右侧飘入', value: 1},
  {label:'从左侧飘入', value: 2},
  {label:'从下方飘入', value:3},
  // {label:'从下方飘入（Android）', value:4},
  {label:'渐隐（Android）', value:5},
  // {label:'水平跳跃', value:6},
  // {label:'从右侧水平跳跃', value:7},
  {label:'竖直向上跳跃', value:8},
  {label:'竖直向下跳跃', value:9},
];

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

var Settings=({currentFormIndex, availableSource, setAnimatedForm, setDataSource, backToHome})=>{
 return(<View style={[commonStyles.container, {alignSelf:'stretch'}]}>
      <View style={styles.halfContainer}>
      <View style={[styles.headerContainer, styles.settingHeaderContainer]}>
        <Text style={styles.settingHeaderText}>搜索数据来源</Text>
      </View>
      <View style={styles.settingContentContainer}>
        <View style={[styles.rowContainer]}>
          <Text style={styles.lineText}>亚马逊</Text>
          <Switch value={availableSource.amazon} onValueChange={(e)=>setDataSource('amazon',e)} />
        </View>
        <View style={[styles.rowContainer]}>
          <Text style={styles.lineText}>当当</Text>
          <Switch value={availableSource.dangdang} onValueChange={(e)=>setDataSource('dangdang',e)} />
        </View>
        <View style={[styles.rowContainer]}>
          <Text style={styles.lineText}>豆瓣</Text>
          <Switch value={availableSource.douban} onValueChange={(e)=>setDataSource('douban',e)} />
        </View>
        <View style={[styles.rowContainer]}>
          <Text style={styles.lineText}>图灵</Text>
          <Switch value={availableSource.tuling} onValueChange={(e)=>setDataSource('tuling',e)} />
        </View>
        <View style={[styles.rowContainer]}>
          <Text style={styles.lineText}>多看</Text>
          <Switch value={availableSource.duokan} onValueChange={(e)=>setDataSource('duokan',e)} />
        </View>
      </View>
    </View>
      <View style={styles.halfContainer}>
        <View style={styles.settingHeaderContainer}>
          <Text style={styles.settingHeaderText}>切换动画效果</Text>
        </View>
        <View style={styles.animatedSettingContainer}>
          <Radio radio_props={radio_props}
          initial={currentFormIndex}
          onPress={(value)=>setAnimatedForm(value)} />
        </View>
      </View>
      <View style={styles.routeFooter}>
        <View style={styles.routeHeaderSection}>
          <TouchableHighlight onPress={()=>{
            backToHome();
            }}>
            <Text style={[styles.routeFooterText,styles.redborder]}>回到首页</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  )
}

var styles= StyleSheet.create({
  lineText:{
    flex:1,
    fontSize:18,
    paddingTop:6
  },
  rowContainer:{
    flexDirection:'row',
    borderColor:'red',
    margin:4
  },
  settingContentContainer:{
    padding:10,
    // alignItems:'flex-start',
    alignSelf:'stretch',
  },
  animatedSettingContainer:{
    alignItems:'flex-start',
    padding:10,
  },
  settingHeaderContainer:{
    backgroundColor:'#8cbbf7',
    alignSelf:'stretch',
    padding:8,
  },
  settingHeaderText:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
  },
  halfContainer:{
    flex:1,
    alignSelf:'stretch',
    margin:10
  },
  headerContainer:{
    padding:8
  },
  headerText:{
    fontWeight:'bold',
    fontSize:15
  },
  redBorder:{
    borderColor:'red',
    borderWidth:1,
  },
  routeFooter:{
    backgroundColor:'#4285f4',
    borderColor:'#aaa',
    borderTopWidth:1,
    borderRadius:1,
    borderLeftWidth:0,
    height:40,
    alignSelf: 'stretch',
  },
  routeFooterText:{
    color:'white',
    paddingLeft:8,
    paddingTop:8,
    fontSize:17,
  },
  routeHeaderSection:{
    alignSelf:'center'
  }
})

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
  var boundActionCreators = bindActionCreators(Actions, dispatch)
  return {
    setAnimatedForm: (value)=>{
      console.log(value)
      boundActionCreators.setAnimatedFormAction(value);
    },
    setDataSource:(name,value)=>{
      boundActionCreators.setDataSourceAction(name,value);
    },
    backToHome:()=>{
      ownProps.navigator.push({id:1})
    }
  }
}

var Result= connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)

export default Result
