const urlWithModuleId = "https://wbdv-generic-server.herokuapp.com/api/001372438/modules";
const urlWithLessonId = " https://wbdv-generic-server.herokuapp.com/api/001372438/lessons";

const LessonService = {

  createLesson: (moduleId, lesson) => {
    return fetch(`${urlWithModuleId}/${moduleId}/lessons`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(lesson)
    }).then(res => res.json());
  },
  findLessonsForModule: (moduleId) => {
    return fetch(`${urlWithModuleId}/${moduleId}/lessons`, {
      method: "GET",
    }).then(res => res.json());
  },
  findLesson: (lessonId) => {
    return fetch(`${urlWithLessonId}/${lessonId}`, {
      method: "GET"
    }).then(res => res.json());
  },
  updateLesson: (lessonId, lesson) => {
    return fetch(`${urlWithLessonId}/${lessonId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(lesson)
    }).then(res => res.json());
  },
  deleteLesson: (lessonId) => {
    return fetch(`${urlWithLessonId}/${lessonId}`, {
      method: "DELETE"
    }).then(res => res.json());
  }
}

export default LessonService