export default function initReducer(state = {}, action){
  switch (action.type) {
    case "INIT_LOAD":
      return Object.assign({}, state, { photos: null })
    case "FORMAT_PHOTOS":
      return Object.assign({}, state, { album: action.payload })
    default:
      return state
  }
}
