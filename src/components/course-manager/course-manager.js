import "./course-manager.style.client.css"
import React, {useState, useEffect} from 'react'
import CourseTable from "../course-table/course-table"
import CourseGrid from "../course-grid/course-grid"
import CourseService from "../../services/course-service"
import {Link, Switch, Route} from "react-router-dom"

const CourseManager = (props) => {
  const [courseService, setCourseSevice] = useState(new CourseService());
  let [courses, setCourses] = useState([]);
  let [newCourseTitle, setNewCourseTitle] = useState("Web Dev");
  const [date, setDate] = useState(new Date());

  // fetch all courses (on first render)
  useEffect(() => {
    courseService.findAllCourses()
    .then(data => {
      setCourses([...data.reverse()]);
    });
  }, []);

  const handleCourseTitleChange = (event) => setNewCourseTitle(event.target.value);

  const deleteCourse = (courseId) => {
    courseService.deleteCourse(courseId)
    .then(status => {
      setCourses(courses.filter(c => c._id !== courseId));
    });
  }

  const createCourse = () => {
    let course = {
      title : newCourseTitle,
      lastModified : date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate(),
      owner : "me"
    }
    courseService.createCourse(course)
    .then(data => {
      setNewCourseTitle("");
      const temp = courses.slice();
      temp.splice(0,0, data);
      setCourses(temp);
    });
  }

  const updateCourse = (course) => {
    courseService.updateCourse(course._id, course)
    .then(status => {
      let temp = courses.slice();
      temp = temp.map(c => c._id === course._id ? course : c);
      setCourses(temp);
    });
  }

  return(
      <div>
        <nav className="navbar navbar-dark bg-primary justify-content-start fixed-top">
                    <span className="navbar-brand w-auto">
                        <button className="btn btn-link btn-sm" type="button">
                            <i className="fas fa-align-justify fa-2x"></i>
                        </button>
                        <span className="d-none d-lg-inline">Course Manager</span>
                    </span>
          <span className="input-group w-75">
                        <input type="text"
                               className="mx-2 form-control rounded"
                               placeholder="New Course Title"
                               id="new-course-title"
                               value={newCourseTitle}
                               onChange={handleCourseTitleChange}
                        />
                        <span className="input-group-append">
                            <button className="mx-2 btn btn-danger rounded-circle"
                                    onClick={createCourse}
                                    type="button">
                            <i className="fas fa-plus"></i>
                            </button>
                        </span>
                    </span>
        </nav>

        <div className="wbdv-padding-80px">
          <Route path="/courses/grid">
            <CourseGrid courses={courses} deleteCourse={deleteCourse} updateCourse={updateCourse} />
          </Route>
          <Route path="/courses/table">
            <CourseTable courses={courses} deleteCourse={deleteCourse} updateCourse={updateCourse} />
          </Route>
        </div>
      </div>
  )
}

export default CourseManager