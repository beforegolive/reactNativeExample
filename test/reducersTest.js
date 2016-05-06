import expect from 'expect'
import * as Reducers from '../src/reducer.js'

// var Navigator = require('react-native')
// import React, { Navigator } from 'react-native'

// Navigator.SceneConfigs.PushFromRight (default)
// Navigator.SceneConfigs.FloatFromRight
// Navigator.SceneConfigs.FloatFromLeft
// Navigator.SceneConfigs.FloatFromBottom
// Navigator.SceneConfigs.FloatFromBottomAndroid
// Navigator.SceneConfigs.FadeAndroid
// Navigator.SceneConfigs.HorizontalSwipeJump
// Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
// Navigator.SceneConfigs.VerticalUpSwipeJump
// Navigator.SceneConfigs.VerticalDownSwipeJump

describe('reducers', ()=>{
  it('should return the bookDetail with specific bookId',()=>{
    var mockedAction={
      type:'GETEBOOKDETAIL',
      id: 1
    }
    var expectedBook={ id:1,
      title:'深入浅出Node.js',
      author:'朴灵',
      publishedDate:'2013-12-1'};

    var targetState=Reducers.ebookDetail(undefined, mockedAction)
    expect(targetState).toEqual(expectedBook)
  });

  // it('should return specific animated form', ()=>{
  //   let mockedAction={
  //     type:'SETANIMATEDFORM',
  //     form: Navigator.SceneConfigs.FloatFromRight
  //   }
  //
  //   let expectedResult={
  //     form: Navigator.SceneConfigs.FloatFromRight,
  //     amazon: true,
  //     dangdang:true,
  //     tuling: true,
  //     douban:true
  //   }
  //
  //   var targetState = Reducers.setSettings(undefined, mockedAction )
  //
  //   expect(targetState).toEqual(expectedResult);
  })
})
