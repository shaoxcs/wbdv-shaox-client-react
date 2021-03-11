import React, {useEffect}from "react";
import {connect} from "react-redux";
import {Link, useParams} from "react-router-dom";
import LessonService from "../../services/lesson-service";
import EditableItem from "../editable-item";

const LessonTab = ({
  lessons = [],
  findLessonsForModule,
  updateLesson,
  deleteLesson,
  createLesson,
  resetLessons
}) => {
  const {layout, courseId, moduleId, lessonId} = useParams();

  useEffect(() => {
    if (moduleId !== "undefined" && typeof moduleId !== "undefined")
      findLessonsForModule(moduleId);
    else
      resetLessons([]);
  }, [moduleId]);

  useEffect(() => {
    if (moduleId !== "undefined" && typeof moduleId !== "undefined")
      findLessonsForModule(moduleId);
    else
      resetLessons([]);
  }, [courseId]);

  return (<ul className="nav nav-fill nav-tabs">
    {
      lessons.map(l =>
          <li className="nav-item" >
            <Link className="nav-link"
                  data-toggle="tab"
                  role="tab"
                  key={l._id}
                  to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${l._id}`}
            >
              <EditableItem
                  to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${l._id}`}
                  item={l}
                  updateItem={updateLesson}
                  deleteItem={deleteLesson}
              />
            </Link>
          </li>
      )
    }
    <button
        className="btn"
        type="button"
        onClick = {() => {createLesson(moduleId)}}>
      <i className="fas fa-plus"></i>
    </button>
  </ul>)
}

const stpm = (state) => {
  return {
    lessons : state.lessonReducer.lessons
  }
}

const dtpm = (dispatch) => {
  return {
    findLessonsForModule : (moduleId) => {
      LessonService.findLessonsForModule(moduleId)
      .then(lessons => {
        // console.log(lessons)
        dispatch({
          type : "FIND_LESSONS_FOR_MODULE",
          lessons
        });
      });
    },
    updateLesson : (lesson) => {
      LessonService.updateLesson(lesson._id, lesson)
      .then(status => {
        dispatch({
          type : "UPDATE_LESSON",
          lesson
        });
      });
    },
    deleteLesson : (lesson) => {
      LessonService.deleteLesson(lesson._id)
      .then(status => {
        dispatch({
          type : "DELETE_LESSON",
          lessonToDelete : lesson
        });
      });
    },
    createLesson : (moduleId) => {
      if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
        LessonService.createLesson(moduleId, {title : "New Lesson"})
        .then(data => {
          dispatch({
            type : "CREATE_LESSON",
            lesson : data
          });
        });
      };
    },
    resetLessons : (lessons) => {
      dispatch({
        type : "FIND_LESSONS_FOR_MODULE",
        lessons
      });
    }
  }
}

export default connect(stpm, dtpm)(LessonTab);