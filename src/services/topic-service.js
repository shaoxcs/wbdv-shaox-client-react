const urlWithLessonId = "https://wbdv-generic-server.herokuapp.com/api/001372438/lessons";
const urlWithTopicId = " https://wbdv-generic-server.herokuapp.com/api/001372438/topics";

const TopicService = {
  createTopic: (lessonId, topic) => {
    return fetch(`${urlWithLessonId}/${lessonId}/topics`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(topic)
    }).then(res => res.json());
  },
  findTopicsForLesson: (lessonId) => {
    return fetch(`${urlWithLessonId}/${lessonId}/topics`, {
      method: "GET"
    }).then(res => res.json());
  },
  findTopic: (topicId) => {
    return fetch(`${urlWithTopicId}/${topicId}`, {
      method: "GET"
    }).then(res => res.json());
  },
  updateTopic: (topicId, topic) => {
    return fetch(`${urlWithTopicId}/${topicId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(topic)
    }).then(res => res.json());
  },
  deleteTopic: (topicId) => {
    return fetch(`${urlWithTopicId}/${topicId}`, {
      method: "DELETE"
    }).then(res => res.json());
  }
}

export default TopicService