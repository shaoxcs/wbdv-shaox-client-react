const initialState = {widgets: []}

const widgetReducer = (state=initialState, action) => {
  switch (action.type) {
    case "CREATE_WIDGET":
      return {
        ...state,
        widgets: [
          ...state.widgets,
          action.widget
        ]
      }
    case "FIND_WIDGETS":
      return {
        ...state,
        widgets: action.widgets
      }
    case "DELETE_WIDGET":
      const newState1 = {
        widgets: state.widgets.filter(widget => widget.id !== action.widgetToDelete.id)
      }
      return newState1
    case "UPDATE_WIDGET":
      return {
        widgets: state.widgets.map(w => w.id !== action.widget.id ? w : action.widget)
      }
    case "CLEAR_WIDGET":
      return {
        ...state,
        widgets: []
      }
    default:
      return state
  }
}

export default widgetReducer