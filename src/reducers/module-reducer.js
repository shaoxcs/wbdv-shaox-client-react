const initialState = {
  modules: []
}

const moduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIND_MODULES_FOR_COURSE":
      return {
        ...state,
        modules: action.modules
      }
    case "CREATE_MODULE":
      return {
        ...state,
        modules: [
          ...state.modules,
          action.module
        ]
      }
    case "DELETE_MODULE":
      return {
        ...state,
        modules: state.modules.filter(
            m => (m._id !== action.moduleToDelete._id))
      }
    case "UPDATE_MODULE":
      return {
        ...state,
        modules: state.modules.map(
            m => ((m._id === action.module._id) ? action.module : m))
      }
    default:
      return state;
  }
}

export default moduleReducer;