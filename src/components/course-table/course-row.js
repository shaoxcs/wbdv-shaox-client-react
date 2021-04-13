import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = ({course, deleteCourse, updateCourse}) => {
  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(course.title)

  const localDeleteCourse = () => {
    setEditing(false)
    deleteCourse(course)
  }

  const saveCourse = () => {
    setEditing(false)
    const newCourse = {
      ...course,
      title: newTitle
    }
    updateCourse(newCourse)
  }

  const editCourse = () => {
    setEditing(true)
    setNewTitle(course.title)
  }

  return (
    <tr>
      <td>
        {!editing &&
          <Link to={`/courses/table/edit/${course._id}`}>{course.title}</Link>}
        {editing && <input
            className="form-control"
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}/>}
      </td>
      <td className ="d-none d-md-table-cell">{course.owner}</td>
      <td className ="d-none d-lg-table-cell">{course.lastModified}</td>
      <td>
        <Link to={`/courses/${course._id}/quizzes`}>
          Quizzes
        </Link>
      </td>
      <td>
        {editing && <i onClick={() => localDeleteCourse()} className="fas fa-trash"></i>}
        {editing && <i onClick={() => saveCourse()} className="fas fa-check"></i>}
        {!editing && <i onClick={() => editCourse()} className="fas fa-edit"></i>}
      </td>
    </tr>)
}

export default CourseRow