import React, {
  Component,
  View,
  ScrollView,
  Text,
  StyleSheet,
  RefreshControl
} from 'react-native'

let counter=0;

class MyScrollView extends Component {
  constructor() {
    super()
    this.state = {
      refreshing: false,
      data:['aaa','bbb','ccc','ddd','eee','fff','ggg','hhh']
    };
  }

  render(){
    return(
      <ScrollView contentContainerStyle={styles.container}
        onScroll={()=>console.log('onScroll')}
        scrollEventThrottle={1000}
        removeClippedSubviews={true}
        scrollEnabled={true}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={this.state.refreshing}
            onRefresh={()=>{
                this.setState({refreshing:true});
                setTimeout(()=>{
                  this.setState({
                    refreshing:false,
                    data:['New Item ' + counter++ , ...this.state.data]
                  });
                },500)
              }
            }
            />
        }
      >
        {this.state.data.map((d)=>{
          return <View key={d} style={styles.filler} ><Text>{d}</Text></View>
        })}

        <View style={styles.filler} ><Text>abc</Text></View>
        <View style={styles.filler} ><Text>abc</Text></View>
        <View style={styles.filler} ></View>
        <View style={styles.filler} ></View>
        <View style={styles.filler} ></View>
        <View style={styles.filler} ></View>
        <View style={styles.filler} ></View>
        <View style={styles.filler} ></View>
        <View style={styles.filler} ></View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  //  flex: 13,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    overflow:'visible',
  },
  filler:{
    borderWidth:2,
    borderColor:'green',
    height: 100,
    width: 100,
    backgroundColor: 'red',
    margin:30,
  },
})

export default MyScrollView
