import React,{
  Component,
  ActivityIndicatorIOS,
  View,
  StyleSheet
} from 'react-native'

import TimerMixin from 'react-timer-mixin';
import mixins from 'es6-mixins';

class MyActivityIndicator extends Component{
  constructor(){
    super();
    this.state={animating:true};
    mixins(TimerMixin,this);
  }

  render(){
    return(
      <View style={styles.container}>
        <ActivityIndicatorIOS color="#0000ff" />
        <ActivityIndicatorIOS color="#aa00aa" />
        <ActivityIndicatorIOS color="#aa3300" />
        <ActivityIndicatorIOS color="#00aa00"
        animating={this.state.animating} />
      </View>
    )
  }

  componentDidMount(){
    this.setTimeout(()=>{
      this.setState({animating: !this.state.animating});
    },
    2000)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default MyActivityIndicator
