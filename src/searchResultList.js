import React, {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  ScrollView,
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './actionCreator'

var SearchResult= ({keyword, bookList, setting, goToDetail})=>{
  console.log(setting);
  return(
    <View style={styles.container}>
      <View style={styles.bookContainer}>
        <ScrollView style={styles.scrollableView}>
      {
        bookList.length===0?
        <View style={styles.emptyResult}>
          <Text style={styles.emptyResultText}>
            没有搜索到任何结果,请使用关键字node或react进行搜索。
          </Text>
        </View>
        :
        bookList.map((item,i)=>{
        var {Amazon, Dangdang, Tuling, Douban, Duokan}= item
        Amazon=setting.amazon && Amazon
        Dangdang=setting.dangdang && Dangdang
        Tuling=setting.tuling && Tuling
        Douban=setting.douban && Douban
        Duokan=setting.duokan && Duokan
         return <TouchableHighlight key={i} onPress={()=>goToDetail(item.id)}>
         <View style={styles.bookDetail} >
            <View style={styles.bookItem}>
              <Text style={styles.bookTitle}>{item.title}</Text>
            </View>
            <View style={styles.bookItem}>
              <View style={styles.bookSubTitle} >
                <Text style={styles.bookAuthor}>作者：{item.author}</Text>
                <Text style={styles.bookAuthor}>出版于：{item.publishedDate}</Text>
              </View>
            </View>
            <View style={styles.bookItem}>
              <View style={styles.bookAvailableSource} >
                <Text>可购买来源: </Text>
                { Amazon!==undefined && Amazon!==false?
                  <Text style={[styles.sourceText,styles.source_Amazon]}>亚马逊</Text>:
                  <Text></Text> }

                { Dangdang!==undefined&& Dangdang!==false?
                      <Text style={[styles.sourceText,styles.source_Dangdang]}>当当</Text>:
                      <Text></Text> }

                { Douban!==undefined&& Douban!==false?
                      <Text style={[styles.sourceText,styles.source_Douban]}>豆瓣</Text>:
                      <Text></Text> }

                { Tuling!==undefined&& Tuling!==false?
                      <Text style={[styles.sourceText,styles.source_Tuling]}>图灵</Text>:
                      <Text></Text> }

                { Duokan!==undefined&& Duokan!==false?
                      <Text style={[styles.sourceText,styles.source_Duokan]}>多看</Text>:
                      <Text></Text> }
              </View>
            </View>
          </View>
        </TouchableHighlight>
       })
      }
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    alignSelf: 'stretch',
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
  },
  bookContainer:{
    flex:1,
    alignSelf: 'stretch',
  },
  bookDetail:{
    borderBottomWidth:1,
    marginLeft:8,
    marginRight:8,
    marginBottom:8,
    padding:2,
    borderColor:'#eee',
    alignSelf: 'stretch',
  },
  bookItem:{
    margin:2,
  },
  bookSubTitle:{
    flexDirection:'row'
  },
  bookTitle:{
    fontWeight:'bold',
    fontSize:17
  },
  bookAuthor:{
    color:'#999',
    marginRight:16
  },
  bookAvailableSource:{
    flexDirection:'row',
    paddingTop:8,
    paddingBottom:8
  },
  sourceText:{
    fontSize:18,
    fontWeight:'bold',
    paddingLeft: 4
  },
  source_Amazon:{
    color:'orange'
  },
  source_Douban:{
    color:'green'
  },
  source_Dangdang:{
    color:'#CC3333'
  },
  source_Tuling:{
    color:'blue'
  },
  source_Duokan:{
    color:'#FA7A20'
  },
  emptyResult:{
    margin:20,
    marginTop:70,
  },
  emptyResultText:{
    fontSize:17
  },
  scrollableView:{
    flex:1
  }
});



function mapStateToProps(state){
  let {searchBook} = state
  let {setSettings} = state
  return{
    keyword:searchBook.keyword,
    bookList:searchBook.bookList,
    setting:setSettings
  }
}

function mapDispatchToProps(dispatch, ownProps){
  var boundActionCreators = bindActionCreators(Actions, dispatch)
  return {
    goToDetail: (bookId)=>{
      boundActionCreators.geteBookDetail(bookId);
      ownProps.navigator.push({id:3});
    }
  }
}

var Result=connect(mapStateToProps,mapDispatchToProps)(SearchResult)
export default Result
