import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Link, useParams} from "react-router-dom";
import TopicService from "../../services/topic-service";
import EditableItem from "../editable-item";

const TopicPill = ({
  topics = [],
  updateTopic,
  deleteTopic,
  createTopic,
  findTopicsForLesson,
  resetTopics
}) => {
  const {layout, courseId, moduleId, lessonId, topicId} = useParams();

  useEffect(() => {
    if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
      findTopicsForLesson(lessonId);
    } else {
      resetTopics([]);
    }
  }, [lessonId]);

  useEffect(() => {
    console.log("called")
    if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
      findTopicsForLesson(lessonId);
    } else {
      resetTopics([]);
    }
  }, [moduleId]);

  return (<ul className="nav nav-fill nav-pills">
    {
      topics.map(t =>
          <li className="nav-item">
            <Link className="nav-link"
                  data-toggle="tab"
                  role="tab"
                  key={t._id}
                  to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${t._id}`}
            >
              <EditableItem
                  to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${t._id}`}
                  item={t}
                  updateItem={updateTopic}
                  deleteItem={deleteTopic}
              />
            </Link>
          </li>
      )
    }
    <button
        className="btn btn-outline-dark "
        type="button"
        onClick={() => {
          createTopic(lessonId)
        }}>
      <i className="fas fa-plus"></i>
    </button>
  </ul>)
}

const stpm = (state) => {
  return {
    topics: state.topicReducer.topics
  }
}

const dtpm = (dispatch) => {
  return {
    findTopicsForLesson: (lessonId) => {
      TopicService.findTopicsForLesson(lessonId)
      .then(topics => {
        dispatch({
          type: "FIND_TOPICS_FOR_LESSON",
          topics
        });
      });
    },
    updateTopic: (topic) => {
      TopicService.updateTopic(topic._id, topic)
      .then(status => {
        dispatch({
          type: "UPDATE_TOPIC",
          topic
        });
      });
    },
    deleteTopic: (topic) => {
      TopicService.deleteTopic(topic._id)
      .then(status => {
        dispatch({
          type: "DELETE_TOPIC",
          topicToDelete: topic
        });
      });
    },
    createTopic: (lessonId) => {
      if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
        TopicService.createTopic(lessonId, {title: "New Topic"})
        .then(data => {
          dispatch({
            type: "CREATE_TOPIC",
            topic: data
          });
        });
      } else {
        alert("Please select a lesson");
      }
    },
    resetTopics: (topics) => {
      dispatch({
        type: "FIND_TOPICS_FOR_LESSON",
        topics
      });
    }
  }
}

export default connect(stpm, dtpm)(TopicPill);