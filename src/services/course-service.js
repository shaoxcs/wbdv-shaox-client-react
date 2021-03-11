class CourseService {
  constructor() {
    this.url = "https://wbdv-generic-server.herokuapp.com/api/001372438/courses"
  }

  createCourse(course) {
    return fetch(this.url, {
      method : "POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(course)
    }).then(res => res.json())
  }

  findCourseById(id) {
    return fetch(`${this.url}/${id}`, {
      method : "GET"
    }).then(res => res.json())
  }

  findAllCourses() {
    return fetch(this.url)
    .then(res => res.json())
  }

  updateCourse(id, course) {
    return fetch(`${this.url}/${id}`, {
      method : "PUT",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(course)
    }).then(res => res.json())
  }

  deleteCourse(id) {
    return fetch(`${this.url}/${id}`, {
      method : "DELETE"
    }).then(res => res.json())
  }

}

export default CourseService