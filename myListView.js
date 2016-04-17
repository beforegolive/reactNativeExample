import React,{
  Component,
  View,
  StyleSheet,
  ListView,
  Text
} from 'react-native'

class MyListView extends Component {
  constructor() {
    super()
    let ds=new ListView.DataSource({rowHasChanged:(r1, r2) => r1!== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2','Row 3','Row 3','Row 4'])
    }
  }

  render(){
    return(
      <View style={styles.container} >
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
          initialListSize={3}
          onEndReached={()=>console.log('onEndReached')}
          onEndReachedThreshold={2}
          pageSize={3}
          renderHeader={(e) => <Text>Header</Text>}
          renderFooter={(e) => <Text>Footer</Text>}
          renderSeparator={(e)=> <Text>-------</Text>}
          renderSectionHeader={(e)=><Text>SectionHeader</Text>}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop:50,
  }
});

export default MyListView
