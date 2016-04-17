import React,{
  Component,
  DatePickerIOS,
  StyleSheet,
  View
} from 'react-native'

class MyDatePicker extends Component {
  constructor() {
    super()
    this.state= {
      date:new Date(),
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60
    }
  }

  _onDateChange(date){
    this.setState({date});
  }

  render(){
    return(
      <View style={styles.container}>
        <DatePickerIOS
          date= {this.state.date}
          mode='date'
          timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
          onDateChange={this._onDateChange.bind(this)}
          minuteInterval={10} />
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
  }

});

export default MyDatePicker
