import React,{
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native'

import { connect } from 'react-redux'
import commonStyles from './styles/commonStyles'

var bookDetail=({detail})=>{
  return(
    <View style={styles.bookContainer}>
      <View style={[styles.section, styles.rowDirection]}>
        <View style={[styles.imageContainer]}>
          <Image source={require('./imgs/download.jpeg')}
           style={styles.bookCover}  />
        </View>
        <View style={[styles.bookDetailContainer]}>
          <Text style={styles.bookDetailSubTitle}>标题：</Text>
          <View>
            <Text style={styles.bookDetailTitle}>{detail.title}</Text>
          </View>
          <Text style={styles.bookDetailSubTitle}>作者：</Text>
          <View>
            <Text style={styles.bootDetailAuthor}>{detail.author}</Text>
          </View>
          <Text style={styles.bookDetailSubTitle}>出版时间：</Text>
          <View>
            <Text style={styles.bootDetailAuthor}> {detail.publishedDate}</Text>
          </View>
          <Text style={styles.bookDetailSubTitle}>简介：</Text>
            <View>
              <Text>本书描述了...</Text>
            </View>
        </View>
      </View>

      <View style={[styles.section, {flex:0.6}]}>
        <View style={[styles.settingHeaderContainer]}>
          <Text style={styles.settingHeaderText}>电子版可购买来源：</Text>
        </View>
        <View style={[styles.sourceSectionContainer, {flex:0.8}]}>

          <TouchableHighlight style={styles.sourceSection} onPress={()=>alert(2)}>
            <View style={[styles.link_Style,styles.bgColor_Amazon]}>
              <Text style={styles.link_Text}>亚马逊：6元</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.sourceSection} onPress={()=>alert(2)}>
            <View style={[styles.link_Style,styles.bgColor_Douban]}>
              <Text style={styles.link_Text}>豆瓣： 13.2元</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.sourceSection} onPress={()=>alert(2)}>
            <View style={[styles.link_Style,styles.bgColor_Dangdang]}>
              <Text style={styles.link_Text}>当当：10元</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight style={styles.sourceSection} onPress={()=>alert(2)}>
            <View style={[styles.link_Style,styles.bgColor_Tuling]}>
              <Text style={styles.link_Text}>图灵：22元</Text>
            </View>
          </TouchableHighlight>


          </View>
      </View>
    </View>
  )
}

var styles= StyleSheet.create({
    imageContainer:{
      paddingLeft:10,
      flex:0.4,
      alignSelf:'center',
      justifyContent:'center'
    },
    bookCover:{
      padding:2,
      margin:2,
      borderWidth:1,
      borderColor:'#ccc',
      width:160,
      height:210,
    },
    bookDetailContainer:{
      padding:8,
      flex:0.5
    },
    bookDetailSubTitle:{
      fontStyle: 'italic',
      marginBottom:6,
      color:'#999'
    },
    bookDetailTitle:{
      fontSize:17,
      fontWeight:'bold',
      marginBottom:8
    },
    bootDetailAuthor:{
      fontWeight:'bold',
      marginBottom:8,
      fontSize:14,
    },
    settingHeaderContainer:{
      backgroundColor:'#ddd',
      alignSelf:'stretch',
      padding:8,
      marginTop:4,
      marginBottom:4,
    },
    settingHeaderText:{
      color:'#333',
      fontSize:16,
      fontWeight:'bold',
    },
    rowDirection:{
      flexDirection:'row',
    },
    section:{
      flex:0.3,
      alignSelf: 'stretch',
    },
    bookContainer:{
      flexDirection:'column',
      flex:1,
      alignSelf:'stretch',
    },
    redBorder:{
      borderColor:'red',
      borderWidth:2,
    },
    blueBorder:{
      borderColor:'blue',
      borderWidth:2,
    },
    sourceSection:{
      width:150,
      borderColor:'red',
      borderWidth:1,
      height:100,
      margin:15,
      borderRadius:2
    },
    sourceSectionContainer:{
      flexDirection:'row',
      flexWrap: 'wrap',
      justifyContent:'center'
    },
    link_Style:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    bgColor_Amazon:{
      backgroundColor:'orange',
    },
    bgColor_Douban:{
      backgroundColor:'green'
    },
    bgColor_Dangdang:{
      backgroundColor:'#CC3333'
    },
    bgColor_Tuling:{
      backgroundColor:'blue'
    },
    link_Text:{
      color:'white',
      fontSize: 18
    }
})

function mapStateToProps(state){
  let { ebookDetail } = state
  return {
    detail: ebookDetail
  }
}

var Result=connect(mapStateToProps)(bookDetail)

export default Result
