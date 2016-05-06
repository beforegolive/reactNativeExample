import React, {
  View,
  Text,
  StyleSheet,
  Switch,
  Navigator,
} from 'react-native'

import { connect } from 'react-redux'
import commonStyles from './styles/commonStyles'
import Radio from 'react-native-simple-radio-button'

var radio_props=[
  // {label:'从右飘入', value: Navigator.SceneConfigs.FloatFromRight},
  // {label:'从左飘入', value: Navigator.SceneConfigs.FloatFromLeft},
  {label:'从右侧飘入', value:0},
  {label:'从左侧飘入', value:1}
];

var Settings=()=>{
 return(<View style={commonStyles.container}>
      <View style={styles.halfContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>搜索来源</Text>
      </View>
        <View>
          <Text>亚马逊</Text>
          <Switch />
        </View>
        <View>
          <Text>当当</Text>
          <Switch />
        </View>
      </View>
      <View style={styles.halfContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>动画效果</Text>
      </View>
        <View>
          <Radio radio_props={radio_props}
          initial={0}
          onPress={(value)=>alert(value)} />
        </View>
      </View>
    </View>
  )
}

var styles= StyleSheet.create({
  halfContainer:{
    flex:1,
    borderColor:'red',
  },
  headerContainer:{
    padding:8
  },
  headerText:{
    fontWeight:'bold',
    fontSize:15
  }
})

var Result= connect()(Settings)

export default Result
