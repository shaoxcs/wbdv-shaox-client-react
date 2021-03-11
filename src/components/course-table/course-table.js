import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

export default class CourseTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Course Title</th>
                <th scope="col" className="d-none d-md-table-cell">Owned By</th>
                <th scope="col" className="d-none d-lg-table-cell">Last Modified</th>
                <th scope="col" className="float-right">
                  <button type="button" className="btn">
                    <i className="fas fa-2x fa-folder"/>
                  </button>
                  <button type="button" className="btn">
                    <i className="fas fa-2x fa-sort-alpha-down"/>
                  </button>
                  <button type="button" className="btn">
                    <Link to="/courses/grid">
                      <i className="fas fa-2x fa-th float-right"/>
                    </Link>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
            {this.props.courses.map(course =>
                  <CourseRow key={course._id}
                      deleteCourse={this.props.deleteCourse}
                      updateCourse={this.props.updateCourse}
                      course={course}
                      title={course.title}
                      lastModified={course.lastModified}
                      owner={course.owner}/>)}
            </tbody>
          </table>
        </div>)
  }
}