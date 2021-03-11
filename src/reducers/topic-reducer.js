const initialState = {
  topics: []
}

const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIND_TOPICS_FOR_LESSON":
      return {
        ...state,
        topics: action.topics
      }
    case "CREATE_TOPIC":
      return {
        ...state,
        topics: [
          ...state.topics,
          action.topic
        ]
      }
    case "UPDATE_TOPIC":
      return {
        ...state,
        topics: state.topics.map(
            t => (t._id === action.topic._id) ? action.topic : t)
      }
    case "DELETE_TOPIC":
      return {
        ...state,
        topics: state.topics.filter(t => (t._id !== action.topicToDelete._id))
      }
    default:
      return state;
  }
}

export default topicReducer;