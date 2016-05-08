import React, {
  Component,
  WebView,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput
} from 'react-native'

var DEFAULT_URL='http://m.google.com';

var Button=React.createClass({
  render(){
    return(
      <TouchableWithoutFeedback onPress={this._handlePress}>
        <View style={[styles.button, this.props.enabled?{}:styles.disabledButton]}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  },
  _handlePress(){
    if(this.props.enabled!==false && this.props.onPress){
      this.props.onPress();
    }
  }
})

export class MyWebView extends Component{
  constructor() {
    super()
    this.state={
      url: DEFAULT_URL,
      status: 'No Page Loaded',
      backButtonEnabled: false,
      forwardButtonEnabled: false,
      loading: true,
      scalesPageToFit: true,
    }

    this.inputText='';
    this.onNavigationStateChange=this.onNavigationStateChange.bind(this)
    this.pressGoButton=this.pressGoButton.bind(this)
    this.onSubmitEditing=this.onSubmitEditing.bind(this)
    this.goBack=this.goBack.bind(this)
    this.goForward=this.goForward.bind(this)
    this.handleTextInputChange=this.handleTextInputChange.bind(this)
  }

  handleTextInputChange(event){
    var url=event.nativeEvent.text;
    if(!/^[a-zA-Z-_]+:/.test(url)){
      url = 'http://' +url;
    }

    this.inputText=url;
    console.warn('first warn');
  }

  goBack(){
    this._webView.goBack();
  }

  goForward(){
    this._webView.goForward();
  }

  reload(){
    this._webView.reload();
  }

  onShouldStartLoadWithRequest(){
    return true;
  }

  onNavigationStateChange(navState){
    this.setState({
      backButtonEnabled: navState.canGoBack,
      forwardButtonEnabled: navState.canGoForward,
      url: navState.url,
      status: navState.title,
      loading: navState.loading,
      scalesPageToFit: true,
    })
  }

  onSubmitEditing(){
    this.pressGoButton();
  }

  pressGoButton(){
    var url = this.inputText;
    if(url === this.state.url){
      this.reload();
    } else {
      this.setState({
        url: url,
      })
    }

    this._textInput.blur();
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.addressBarRow}>
          <TouchableOpacity
            onPress={this.goBack}
            style={this.state.backButtonEnabled? styles.navButton :
            styles.disabledButton}>
            <Text>{'<'}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this.goForward}
            style={this.state.forwardButtonEnabled? styles.navButton:
            styles.disabledButton} >
            <Text>{'>'}</Text>
          </TouchableOpacity>

          <TextInput ref={(c)=>this._textInput=c}
            autoCapitalize="none"
            defaultValue={this.state.url}
            onSubmitEditing={this.onSubmitEditing}
            onChange={this.handleTextInputChange}
            clearButtonMode="while-editing"
            style={styles.addressBarTextInput}
            />

          <TouchableOpacity onPress={this.pressGoButton}>
            <View style={styles.goButton}>
              <Text>Go!</Text>
            </View>
          </TouchableOpacity>
        </View>

        <WebView
          ref={(c)=>this._webView=c}
          automaticallyAdjustContentInsets={false}
          style={styles.webView}
          source={{uri: this.state.url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          onNavigationStateChange={this.onNavigationStateChange}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
          scalesPageToFit={this.state.scalesPageToFit}
        />

        <View style={styles.statusBar}>
          <Text style={styles.statusbarText}>{this.state.status}</Text>
        </View>
      </View>
    )
  }
}

class MyWebViewSimple extends Component {
  constructor() {
    super()
    this.state={
      scalingEnabled: true,
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <WebView style={{
          backgroundColor:BGWASH,
          flex:1,
        }}
        source={{uri:'https://facebook.github.io/react/'}}
        scalesPageToFit={this.state.scalingEnabled}
        />
        <View style={styles.buttons}>
          {
            this.state.scalingEnabled?
            <Button text="Scaling:ON"
              enabled={true}
              onPress={()=>this.setState({scalingEnabled: false})}
              /> :
            <Button
              text="Scaling:OFF"
              enabled={true}
              onPress={()=> this.setState({scalingEnabled: true})}
              />
          }
        </View>
      </View>
    )
  }
}

var HEADER = '#3b5998';
var BGWASH = 'rgba(255,255,255,0.8)';
var DISABLED_WASH = 'rgba(255,255,255,0.25)';

var styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: HEADER,
    paddingTop:15,
  },
  addressBarRow:{
    flexDirection:'row',
    padding: 8,
  },
  webView:{
    backgroundColor: BGWASH,
    height: 350,
  },
  addressBarTextInput:{
    backgroundColor: BGWASH,
    borderColor:'transparent',
    borderRadius: 3,
    borderWidth: 1,
    height: 24,
    paddingLeft:10,
    paddingTop: 3,
    paddingBottom:3,
    flex: 1,
    fontSize: 14,
  },
  navButton:{
    width:20,
    padding:3,
    marginRight:3,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:BGWASH,
    borderColor:'transparent',
    borderRadius: 3,
  },
  disabledButton:{
    width:20,
    padding:3,
    marginRight:3,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: DISABLED_WASH,
    borderColor:'transparent',
    borderRadius:3,
  },
  goButton:{
    height:24,
    padding:3,
    marginLeft:8,
    alignItems:'center',
    backgroundColor:BGWASH,
    borderColor:'transparent',
    borderRadius: 3,
    alignSelf:'stretch',
  },
  statusBar:{
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:5,
    height:22,
  },
  statusBarText:{
    color:'white',
    fontSize:13,
  },
  spinner:{
    width:20,
    marginRight:6,
  },
  buttons:{
    flexDirection:'row',
    height:30,
    backgroundColor:'black',
    alignSelf:'center',
    justifyContent:'space-between',
    width:200,
    margin:10,
    borderRadius:10,
  },
  button:{
    flex:0.5,
    margin:5,
    borderColor:'gray',
    borderWidth:1,
    backgroundColor:'gray',
    borderRadius:10,
  }
})

export default MyWebViewSimple
