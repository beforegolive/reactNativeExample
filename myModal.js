import React, {
  Component,
  StyleSheet,
  Modal,
  View,
  Text,
  TouchableHighlight,
  Switch
} from 'react-native'

import TimerMixin from 'react-timer-mixin';
import mixins from 'es6-mixins';

const Button=React.createClass({
  getInitialState(){
    return {
      active: false,
    }
  },
  _onHighLight(){
    this.setState({active: true});
    console.log('On Show Underlay');
  },
  _onUnhighlight(){
    this.setState({active: false});
    console.log('On Hide Underlay');
  },

  render(){
    var colorStyle={
      color: this.state.active? '#f00':'#333',
    };

    return(
      <TouchableHighlight
        onHideUnderlay={this._onUnhighlight}
        onPress={this.props.onPress}
        onShowUnderlay={this._onHighLight}
        style={[styles.button, this.props.style]}
        onPressIn={()=>{console.log('On Press In')}}
        onPressOut={()=>{console.log('On Press Out')}}
        delayPressIn={100}
        delayPressIn={100}
        underlayColor='#a9d9d4'
        activeOpacity={0.7}>
          <Text style={[styles.buttonText, colorStyle]}>{this.props.children}</Text>
      </TouchableHighlight>
    )
  }
})

class MyModal extends Component {
  constructor() {
    super()
    this.state = {
      animated: true,
      modalVisible: false,
      transparent: false,
    };
    mixins(TimerMixin, this);
  }

  _setModalVisible(visible){
    this.setState({ modalVisible: visible});
  }

  _toggleAnimated(){
    this.setState({animated : !this.state.animated});
  }

  _toggleTransparent(){
    this.setState({ transparent: !this.state.transparent});
  }

  render(){
    var modalBackgroundStyle={
      backgroundColor: this.state.transparent?'rgba(0,0,0,0.5)' :'#f5fcff'
    }

    var innerContainerTransparentStyle= this.state.transparent ?
    {backgroundColor: '#fff', padding: 20} :
    null;

    return(
      <View style={{marginVertical:30}}>
        <Modal
          animated={this.state.animated}
          transparent={this.state.transparent}
          visible={this.state.modalVisible}
          onRequestClose={() => this._setModalVisible(false)}
          >
          <View style={[styles.container, modalBackgroundStyle]}>
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
              <Text>This modal was presented {this.state.animated?'with': 'without'} animations.</Text>
              <Button
                onPress={this._setModalVisible.bind(this, false)}
                style={styles.modalButton} >
                Close
              </Button>
            </View>
          </View>
        </Modal>

        <View style={styles.row}>
          <Text style={styles.rowTitle}> Animated </Text>
          <Switch value={this.state.animated} onValueChange={this._toggleAnimated.bind(this)} />
        </View>

        <View style={styles.row}>
          <Text style={styles.rowTitle}> Transparent </Text>
          <Switch value={this.state.transparent} onValueChange={this._toggleTransparent.bind(this)} />
        </View>

        <Button onPress={this._setModalVisible.bind(this, true)} >
          Present
        </Button>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  rowTitle: {
    flex: 1,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 5,
    flex: 1,
    height: 44,
    alignSelf: 'stretch',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 10,
  },
});

export default MyModal
