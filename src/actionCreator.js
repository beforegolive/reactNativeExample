export function searchBookAction(keyword){
  return { type:'SEARCHBOOK', keyword}
}

export function geteBookDetail(id){
  return { type:'GETEBOOKDETAIL', id}
}

export function setAnimatedFormAction(form){
  return { type: 'SETANIMATEDFORM', form}
}

export function setDataSourceAction(name, value){
  return { type: 'SETDATASOURCE', name, value}
}
