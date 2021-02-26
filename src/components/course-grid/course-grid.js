import React from 'react'
import {Link} from "react-router-dom"
import CourseCard from "./course-card";

const CourseGrid = ({courses, updateCourse, deleteCourse}) =>
    <div className="container-fluid wbdv-course-grid">
      <div className="row justify-content-end">
        <div className="col-4 align-self-center d-none d-md-block">
          Recent Courses
        </div>
        <div className="col-4 align-self-center d-none d-md-block">
          Owned by me
          &nbsp;&nbsp;&nbsp;
          <i className="fas fa-caret-down"/>
        </div>
        <div className="col-auto align-self-center">
          <button type="button" className="btn">
            <i className="fas fa-2x fa-folder"/>
          </button>
          <button type="button" className="btn">
            <i className="fas fa-2x fa-sort-alpha-down"/>
          </button>
          <button type="button" className="btn">
            <Link to="/courses/table">
              <i className="fas fa-2x fa-list float-right"/>
            </Link>
          </button>
        </div>
      </div>

      <div className="row">
        {courses.map((course) =>
              <CourseCard key={course._id}
                          course={course}
                          deleteCourse={deleteCourse}
                          updateCourse={updateCourse}/>)}
      </div>

    </div>

export default CourseGrid