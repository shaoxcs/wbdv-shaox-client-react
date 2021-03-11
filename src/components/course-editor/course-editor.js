import React, {useState, useEffect} from 'react';
import {Link, useParams, useHistory} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import ModuleList from "./module-list";
import LessonTab from "./lesson-tabs";
import TopicPill from "./topic-pills";
import CourseService from "../../services/course-service";
import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import topicReducer from "../../reducers/topic-reducer";
import {Provider} from "react-redux";

const reducers = combineReducers({
  moduleReducer,
  lessonReducer,
  topicReducer
});

const store = createStore(reducers);

const CourseEditor = (props) => {
  const [courseService, setCourseSevice] = useState(new CourseService());
  const [course, setCourse] = useState({});
  const {layout} = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    courseService.findCourseById(props.match.params.courseId)
    .then(data => {
      setCourse(data);
    });
  }, []);

  return(
      <Provider store={store}>
        <div>
          <div className="row">
            <div className="col-3">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <Link className="m-2" to={`/courses/${layout}`}>
                    <i className="fas fa-2x fa-times"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/' className="nav-link disabled">{course.title}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="list-group">
                <ModuleList />
              </div>
            </div>

            <div className="col-8 mx-2">
              <div className="row d-inline">
                <LessonTab />
              </div>
              <div className="row d-inline">
                <TopicPill />
              </div>
            </div>
          </div>
        </div>
      </Provider>)
}

export default CourseEditor