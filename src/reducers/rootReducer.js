export default function initReducer(state = {}, action){
  switch (action.type) {
    case "INIT_LOAD":
      debugger
      return Object.assign({}, state, { photos: [] })
    default:
      return state
  }
}
