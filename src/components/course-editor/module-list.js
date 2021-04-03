import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link, useParams} from "react-router-dom";
import EditableItem from "../editable-item";
import ListWidget from "./widgets/list-widget";
import moduleActions from "../../actions/module-actions";

const ModuleList = ({
  modules = [],
  findModulesForCourse,
  updateModule,
  deleteModule,
  createModule
}) => {
  const {layout, courseId, moduleId} = useParams();
  useEffect(() => {
    findModulesForCourse(courseId);
  }, []);

  return (
    <div className="list">
      {
        modules.map(m =>
            <Link className="list-group-item list-group-item-action rounded-0"
                  role="tab"
                  key={m._id}
                  to={`/courses/${layout}/edit/${courseId}/modules/${m._id}`}>
              <EditableItem
                  to={`/courses/${layout}/edit/${courseId}/modules/${m._id}`}
                  item={m}
                  updateItem={updateModule}
                  deleteItem={deleteModule}/>
            </Link>
        )
      }
      <button
          className="btn btn-primary list-group-item list-group-item-action d-flex justify-content-end"
          type="button"
          onClick = {() => {createModule(courseId)}}>
        <i className="fas fa-plus"/>
      </button>
    </div>
  )
}

const stpm = (state) => {
  return {
    modules : state.moduleReducer.modules
  }
}

const dtpm = (dispatch) => {
  return {
    findModulesForCourse : (courseId) =>
        moduleActions.findModulesForCourse(dispatch, courseId),
    updateModule : (module) => moduleActions.updateModule(dispatch, module),
    deleteModule : (module) => moduleActions.deleteModule(dispatch, module),
    createModule : (courseId) => moduleActions.createModule(dispatch, courseId)
  }
}

export default connect(stpm, dtpm)(ModuleList);