class CourseService {
  constructor() {
    this.url = "https://wbdv-generic-server.herokuapp.com/api/001300329/courses"
  }

  /**
   * A method to create a new course
   * @param {object} course - new course to create
   */
  createCourse(course) {
    return fetch(this.url, {
      method : "POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(course)
    }).then(res => res.json())
  }

  /**
   * Retrieves a course instance that matches the id parameter
   * @param {string} id - id of the course we want to get
   */
  findCourseById(id) {
    return fetch(`${this.url}/${id}`, {
      method : "GET"
    }).then(res => res.json())
  }

  /**
   * Fetch all courses from the service
   */
  findAllCourses() {
    return fetch(this.url)
    .then(res => res.json())
  }

  /**
   * Update a course with courseId
   * @param {string} id - course id
   * @param {object} course - new course content
   */
  updateCourse(id, course) {
    return fetch(`${this.url}/${id}`, {
      method : "PUT",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(course)
    }).then(res => res.json())
  }

  /**
   *  A method to delete a course with specific course id
   * @param {stirng} id - the id of the course to delete
   */
  deleteCourse(id) {
    return fetch(`${this.url}/${id}`, {
      method : "DELETE"
    }).then(res => res.json())
  }

}

export default CourseService