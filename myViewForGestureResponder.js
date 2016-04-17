import React,{
  Component,
  StyleSheet,
  View,
  Text,
  Switch
} from 'react-native'

class MyViewForGestureResponder extends Component {
  constructor() {
    super()
    this.state={
      parentOnStart: false,
      parentOnStartCapture: false,
      parentOnMove: false,
      parentOnMoveCapture: false,
      parentAllowReject: false,
      childrenOnStart: false,
      childrenOnStartCapture: false,
      childrenOnMove: false,
      childrenOnMoveCapture: false,
      childrenAllowTernimationRequest: false,
      isParentMoving: false,
      isChildrenMoving: false,
    }
    this._eventLoggerChildren=this._eventLoggerChildren.bind(this);
    this._eventLoggerChildrenCapture=this._eventLoggerChildrenCapture.bind(this);
    this._eventLoggerParent=this._eventLoggerParent.bind(this);
    this._eventLoggerParentCapture=this._eventLoggerParentCapture.bind(this);
    this._parentResponderMove=this._parentResponderMove.bind(this);
    this._parentResponderRelease=this._parentResponderRelease.bind(this);
    this._parentResponderMove=this._parentResponderMove.bind(this);
    this._parentMoveShouldSetResponder=this._parentMoveShouldSetResponder.bind(this);
    this._parentMoveShouldSetResponderCapture=this._parentMoveShouldSetResponderCapture.bind(this);
    this._childrenResponderMove=this._childrenResponderMove.bind(this);
    this._childrenResponderRelease=this._childrenResponderRelease.bind(this);
    this._childrenMoveShouldSetResponder=this._childrenMoveShouldSetResponder.bind(this);
    this._childrenMoveShouldSetResponderCapture=this._childrenMoveShouldSetResponderCapture.bind(this);
    this._childrenResponderTerminationRequest=this._childrenResponderTerminationRequest.bind(this);
    this._parentResponderReject=this._parentResponderReject.bind(this);
  }

  _eventLoggerChildren(e){
    console.log('Children --- ' + e.dispatchConfig.phasedRegistrationNames.bubbled);
    return this.state.childrenOnStart;
  }

  _eventLoggerChildrenCapture(e){
    console.log('Children --- ' + e.dispatchConfig.phasedRegistrationNames.captured);
    return this.state.childrenOnStartCapture;
  }

  _eventLoggerParent(e){
    console.log('Parent --- ' + e.dispatchConfig.phasedRegistrationNames.bubbled);
    return this.state.parentOnStart;
  }

  _eventLoggerParentCapture(e){
    console.log('Parent --- ' + e.dispatchConfig.phasedRegistrationNames.captured);
    return this.state.parentOnStartCapture;
  }

  _parentResponderMove(){
    if(true||!this.state.isParentMoving){
    console.log('Parent --- OnResponderMove');
    this.setState({isParentMoving:true})
    }
  }

  _parentResponderRelease(){
    console.log('Parent --- OnResponderRelease');
    this.setState({isParentMoving:false});
  }

  _childrenResponderMove(){
    if(true||!this.state.isChildrenMoving){
    console.log('Children --- OnResponderMove');
    this.setState({isChildrenMoving: true});
    }
  }

  _childrenResponderRelease(){
    console.log('Children --- OnResponderRelease');
    this.setState({isChildrenMoving:false})
  }

  _parentMoveShouldSetResponder(e){
    console.log('Parent --- ' + e.dispatchConfig.phasedRegistrationNames.bubbled);
    return this.state.parentOnMove;
  }

  _parentMoveShouldSetResponderCapture(e){
    console.log('Parent --- ' + e.dispatchConfig.phasedRegistrationNames.captured);
    return this.state.parentOnMoveCapture;
  }

  _childrenMoveShouldSetResponder(e){
    console.log('Children --- ' + e.dispatchConfig.phasedRegistrationNames.bubbled);
    return this.state.childrenOnMove;
  }

  _childrenMoveShouldSetResponderCapture(e){
    console.log('Children --- ' + e.dispatchConfig.phasedRegistrationNames.captured);
    return this.state.childrenOnMoveCapture;
  }

  _parentResponderReject(){
    console.log('----------------------------');
    console.log('Parent --- onResponderReject');
    console.log('----------------------------');
    return this.state.parentAllowReject;
  }

  _childrenResponderTerminationRequest(){
    console.log('------------------------------------------')
    console.log('Children --- onResponderTerminationRequest')
    console.log('------------------------------------------')
    return this.state.childrenAllowTernimationRequest;
  }

  render(){
    return(
      <View style={styles.rootContainer}>
        <View style={styles.settingContainer}>
          <Text style={styles.settingText}> Parent onStart Event</Text>
          <Switch value={this.state.parentOnStart}
           onValueChange={(e)=> this.setState({parentOnStart:e})} />
        </View>
        <View style={styles.settingContainer}>
          <Text style={styles.settingText}> Parent onStart Capture Event</Text>
          <Switch value={this.state.parentOnStartCapture}
          onValueChange={(e)=> this.setState({parentOnStartCapture:e})} />
        </View>
        <View style={styles.settingContainer}>
          <Text style={styles.settingText}> Parent onMove Event</Text>
          <Switch value={this.state.parentOnMove}
           onValueChange={(e)=> this.setState({parentOnMove:e})} />
        </View>
        <View style={styles.settingContainer}>
          <Text style={styles.settingText}> Parent onMove Capture Event</Text>
          <Switch value={this.state.parentOnMoveCapture}
          onValueChange={(e)=> this.setState({parentOnMoveCapture:e})} />
        </View>

        <View style={styles.settingContainer}>
          <Text style={styles.settingText}> Children onStart Event</Text>
          <Switch value={this.state.childrenOnStart}
          onValueChange={(e)=> this.setState({childrenOnStart:e})} />
        </View>
        <View style={styles.settingContainer}>
          <Text style={styles.settingText}> Children onStart Capture Event</Text>
          <Switch value={this.state.childrenOnStartCapture}
          onValueChange={(e)=> this.setState({childrenOnStartCapture:e})} />
        </View>

        <View style={styles.settingContainer}>
          <Text style={styles.settingText}> Children onMove Event</Text>
          <Switch value={this.state.childrenOnMove}
          onValueChange={(e)=> this.setState({childrenOnMove:e})} />
        </View>
        <View style={styles.settingContainer}>
          <Text style={styles.settingText}> Children onMove Capture Event</Text>
          <Switch value={this.state.childrenOnMoveCapture}
          onValueChange={(e)=> this.setState({childrenOnMoveCapture:e})} />
        </View>

        <View style={styles.settingContainer}>
          <Text style={styles.settingText}> Children Allow Ternimation Request</Text>
          <Switch value={this.state.childrenAllowTernimationRequest}
          onValueChange={(e)=> this.setState({childrenAllowTernimationRequest:e})} />
        </View>

        <View style={styles.parentContainer}
            onMoveShouldSetResponder={this._parentMoveShouldSetResponder}
            onMoveShouldSetResponderCapture={this._parentMoveShouldSetResponderCapture}
            onStartShouldSetResponder={this._eventLoggerParent}
            onStartShouldSetResponderCapture={this._eventLoggerParentCapture}
            onResponderMove={this._parentResponderMove}
            onResponderReject={(e)=> {
              console.log('--------------------------------------------')
              console.log('Parent --- onResponderReject')
              console.log('--------------------------------------------')
            }}
            onResponderTerminate={(e)=> {
              console.log('--------------------------------------------')
              console.log('Parent --- onResponderTerminate')
              console.log('--------------------------------------------')
            }}
            onResponderTerminationRequest={(e)=> {
              console.log('--------------------------------------------')
              console.log('Parent --- onResponderTerminatationRequest')
              console.log('--------------------------------------------')
            }}
            onResponderRelease={this._parentResponderRelease}
            onResponderGrant={(e)=> {console.log('Parent --- onResponderGrant')}}
            onLayout={(e)=> {console.log('Parent --- onLayout')}}
        >
          <Text>Parent View</Text>
          <View style={styles.childContainer}
                onMoveShouldSetResponder={this._childrenMoveShouldSetResponder}
                onMoveShouldSetResponderCapture={this._childrenMoveShouldSetResponderCapture}
                onStartShouldSetResponder={this._eventLoggerChildren}
                onStartShouldSetResponderCapture={this._eventLoggerChildrenCapture}
                onResponderMove={this._childrenResponderMove}
                onResponderReject={(e)=> {
                  console.log('------------------------------')
                  console.log('Children --- onResponderReject')
                  console.log('------------------------------')
                }}
                onResponderTerminate={(e)=> {
                  console.log('---------------------------------')
                  console.log('Children --- onResponderTerminate')
                  console.log('---------------------------------')
                }}
                onResponderTerminationRequest={this._childrenResponderTerminationRequest}
                onResponderRelease={this._childrenResponderRelease}
                onResponderGrant={(e)=> {console.log('Children --- onResponderGrant')}}
                onLayout={(e)=> {console.log('Children --- onLayout')}}
          ><Text>Child View</Text></View>
        </View>
      </View>
    )
  }
}

var styles=StyleSheet.create({
  rootContainer:{
    flex:1,
    backgroundColor:'#F5FCFF',
    paddingTop:30,
  },
  parentContainer:{
    backgroundColor:'green',
    flex:1,
    paddingTop:30,
    marginVertical:100
  },
  childContainer:{
    backgroundColor:'blue',
    flex:1,
    margin:50,
  },
  settingContainer:{
    flexDirection:'row'
  },
  settingText:{
    flex:1,
  }
})

export default MyViewForGestureResponder
