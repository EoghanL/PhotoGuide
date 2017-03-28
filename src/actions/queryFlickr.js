import React from 'react'

import $ from 'jquery'

import Photo from '../components/Photo'

function formatPhotos(photos){
  let photoAlbum = photos.map(function(img) {
    let imgUrl = `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`
    return <Photo key={img.id} url={imgUrl} />
  })
  return photoAlbum
}

function formatUrl(tags){
  let root="https://api.flickr.com/services/rest/?&method=flickr.photos.search"
  let staticTags = "&format=json&has_geo=1&accuracy=14&sort=interestingness-desc"
  let dynamicTags = `&tags=${tags}`
  return `${root}${dynamicTags}${staticTags}&api_key=c9a915838f46c00d25dbdbf28614f240`
}

export default function queryFlickr(term){
  return function(dispatch){
    $.ajax({
      url: formatUrl(term),
      method: "GET",
      success: function(data){
        let photos = formatPhotos(JSON.parse(data.slice(14, -1)).photos.photo)
        debugger
        dispatch({type: "FORMAT_PHOTOS", payload: photos })
      },
      error: function(data){
        dispatch({type: "LOAD_ERROR", payload: data})
      }
    })
  }
}
