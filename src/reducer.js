 // import React from 'react';
 // import { Navigator} from 'react-native';
import BookList from './mockedData'
var mockBooks= BookList

export function searchBook(state={keyword:'',bookList:[]}, action){
  switch (action.type) {
    case 'SEARCHBOOK':
      var newState = {
        ...state,
        keyword:action.keyword,
        bookList: action.keyword===''?[]:
        mockBooks.filter((e)=>e.title.indexOf(action.keyword) > -1)
      }
      return newState;
    default:
      return state;

  }
}

export function ebookDetail(state={ bookDetail:null }, action){
  switch (action.type) {
    case 'GETEBOOKDETAIL':
    var book=mockBooks.filter((e)=>e.id===action.id)[0]
    var newState={
      ...book
    };
      return newState;
    default:
      return state;
  }
}

var defaultSetting={
  formIndex: 1,
  amazon: true,
  dangdang:true,
  tuling: true,
  douban:true
}

export function setSettings(state = defaultSetting, action){
  switch (action.type) {
    case 'SETANIMATEDFORM':
     var newState={
       ...state,
       formIndex: action.formIndex
     }

    return newState;
      break;
    case 'SETDATASOURCE':
    var newState={
      ...state,
      [action.name]: action.value
    }
    return newState;
    default:
      return state;
  }
}
