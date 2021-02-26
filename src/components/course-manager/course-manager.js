import React from 'react'
import CourseTable from "../course-table/course-table";
import CourseGrid from "../course-grid/course-grid";
import CourseEditor from "../course-editor/course-editor";
import "./course-manager.css"
import {Link, Route} from "react-router-dom";
import courseService from "../../services/course-service";

export default class CourseManager
    extends React.Component {
  state = {
    title: "some title",
    courses: []
  }

  componentDidMount() {
    courseService.findAllCourses()
    .then(courses => this.setState({courses}))
  }

  updateCourse = (course) => {
    courseService.updateCourse(course._id, course)
    .then(status => {
      this.setState((prevState) => {
        let nextState = {...prevState}
        nextState.courses = prevState.courses.map(c =>
            c._id === course._id ? course : c)
        return nextState
      })
    })
  }

  deleteCourse = (course) => {
    // alert("delete course " + course._id)
    courseService.deleteCourse(course._id)
    .then(status => {
      this.setState((prevState) => ({
        courses: prevState.courses.filter(c => c._id !== course._id)
      }))
    })
  }

  addCourse = () => {
    // alert('add course')
    const newCourse = {
      title: this.state.title,
      owner: "me",
      lastModified: "2/10/2021"
    }
    courseService.createCourse(newCourse)
    .then(actualCourse => {
      this.state.courses.push(actualCourse)
      this.setState(this.state)
    })
  }

  updateInputValue = (evt) => {
    this.setState({
      title: evt.target.value
    });
  }

  render() {
    return(
        <div>
          <Link to="/">
            <i className="fas fa-2x fa-home float-right"/>
          </Link>
          <nav className="navbar navbar-dark bg-secondary justify-content-start fixed-top">
                <span className="navbar-brand w-auto">
                    <button className="btn btn-link btn-sm" type="button">
                        <i className="fas fa-align-justify fa-2x"/>
                    </button>
                    <span className="d-none d-lg-inline">Course Manager</span>
                </span>
            <span className="input-group w-75">
                    <input type="text"
                           className="mx-2 form-control rounded"
                           placeholder="New Course Title"
                           id="new-course-title"
                           value={this.title}
                           onChange={this.updateInputValue}/>
                    <span className="input-group-append">
                        <button className="mx-2 btn btn-primary rounded-circle"
                                onClick={this.addCourse}
                                type="button">
                        <i className="fas fa-plus"/>
                        </button>
                    </span>
                </span>
          </nav>

          <button className="wbdv-bottom-right-button mx-2 btn btn-lg btn-danger rounded-circle" type="button"
                  onClick={this.addCourse}>
            <i className="fas fa-plus"/>
          </button>

          <div className="course-content">
            <Route path="/courses/table" exact={true} >
              <CourseTable
                  updateCourse={this.updateCourse}
                  deleteCourse={this.deleteCourse}
                  courses={this.state.courses}/>
            </Route>
            <Route path="/courses/grid" exact={true} >
              <CourseGrid updateCourse={this.updateCourse}
                          deleteCourse={this.deleteCourse}
                          courses={this.state.courses}/>
            </Route>
          </div>

        </div>
    )
  }
}
// export default CourseManager