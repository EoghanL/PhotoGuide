import $ from 'jquery'

export default function queryFlickr(){
  return function(dispatch){
    let rootURL = "https://api.flickr.com/services/rest/?&method=flickr.photos.search&tag=nyc&format=json&has_geo=1&accuracy=14&api_key=c9a915838f46c00d25dbdbf28614f240"
    $.ajax({
      url: rootURL,
      method: "GET",
      success: function(data){
        debugger
        dispatch({type: "LOAD_SUCCESS", payload: data})
      },
      error: function(data){
        debugger
        dispatch({type: "LOAD_ERROR", payload: data})
      }
    })
  }
}
