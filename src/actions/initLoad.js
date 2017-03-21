export default function initLoad(){
  return function(dispatch){
    dispatch({type: "INIT_LOAD"})
  }
}
