import React,{
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native'

import { connect } from 'react-redux'
import commonStyles from './styles/commonStyles'

var bookDetail=({detail, setting, pressToBuy})=>{
  var {Amazon, Dangdang, Tuling, Douban, Duokan}= detail
  Amazon=setting.amazon && Amazon
  Dangdang=setting.dangdang && Dangdang
  Tuling=setting.tuling && Tuling
  Douban=setting.douban && Douban
  Duokan=setting.duokan && Duokan
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
          { Amazon!==undefined && Amazon!== false?
          <TouchableHighlight style={styles.sourceSection} onPress={()=>pressToBuy()}>
            <View style={[styles.link_Style,styles.bgColor_Amazon]}>
              <Text style={styles.link_Text}>亚马逊：{Amazon}元</Text>
            </View>
          </TouchableHighlight> :
          <Text></Text>
        }
        { Tuling!==undefined && Tuling!== false?
          <TouchableHighlight style={styles.sourceSection} onPress={()=>pressToBuy()}>
            <View style={[styles.link_Style,styles.bgColor_Tuling]}>
              <Text style={styles.link_Text}>图灵： {Tuling}元</Text>
            </View>
          </TouchableHighlight>:
          <Text></Text>
        }
        { Douban!==undefined && Douban!== false?
          <TouchableHighlight style={styles.sourceSection} onPress={()=>alert(2)}>
            <View style={[styles.link_Style,styles.bgColor_Douban]}>
              <Text style={styles.link_Text}>豆瓣： {Douban}元</Text>
            </View>
          </TouchableHighlight>:
          <Text></Text>
        }

        { Dangdang!==undefined && Dangdang!== false?
          <TouchableHighlight style={styles.sourceSection} onPress={()=>alert(2)}>
            <View style={[styles.link_Style,styles.bgColor_Dangdang]}>
              <Text style={styles.link_Text}>当当：{Dangdang}元</Text>
            </View>
          </TouchableHighlight>:
          <Text></Text>
        }

        { Duokan!==undefined && Duokan!== false?
          <TouchableHighlight style={styles.sourceSection} onPress={()=>alert(2)}>
            <View style={[styles.link_Style,styles.bgColor_Duokan]}>
              <Text style={styles.link_Text}>多看：{Duokan}元</Text>
            </View>
          </TouchableHighlight>:
          <Text></Text>
        }
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
      borderColor:'#ddd',
      borderWidth:2,
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
    bgColor_Duokan:{
      backgroundColor:'#FA7A20'
    },
    link_Text:{
      color:'white',
      fontSize: 18
    },
    routeFooter:{
      backgroundColor:'#ccc',
      borderColor:'#aaa',
      borderTopWidth:1,
      borderRadius:1,
      borderLeftWidth:0,
      height:40,
      alignSelf: 'stretch',
    },
    routeFooterText:{
      color:'#ccc',
      paddingLeft:8,
      paddingTop:8,
      fontSize:17,
    },
    routeHeaderSection:{
      alignSelf:'center'
    }
})

function mapStateToProps(state){
  let { ebookDetail } = state
  let { setSettings} = state
  return {
    detail: ebookDetail,
    setting: setSettings
  }
}

function mapDispatchToProps(dispatch){
  return {
    pressToBuy:()=>{
      alert('跳转到购买页面或调用对应API进行购买，此处未完成，仅做demo演示。 ^_^')
    }
  }
}

var Result=connect(
  mapStateToProps,
  mapDispatchToProps)(bookDetail)

export default Result
