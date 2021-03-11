import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link, useParams} from "react-router-dom";
import ModuleService from "../../services/module-service";
import EditableItem from "../editable-item";

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
    <div className="list-group wbdv-course-module" role="tablist">
      {
        modules.map(m =>
          <Link className="list-group-item list-group-item-action rounded-0"
                data-toggle="list"
                role="tab"
                key={m._id}
                to={`/courses/${layout}/edit/${courseId}/modules/${m._id}`}>
            <EditableItem
                to={`/courses/${layout}/edit/${courseId}/modules/${m._id}`}
                item={m}
                updateItem={updateModule}
                deleteItem={deleteModule}
            />
          </Link>
        )
      }
      <button
        className="btn btn-primary list-group-item list-group-item-action d-flex justify-content-end my-2"
        type="button"
        onClick={() => {
          createModule(courseId)
        }}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  )
}

const stpm = (state) => {
  return {
    modules: state.moduleReducer.modules
  }
}

const dtpm = (dispatch) => {
  return {
    findModulesForCourse: (courseId) => {
      ModuleService.findModulesForCourse(courseId)
      .then(data => {
        dispatch({
          type: "FIND_MODULES_FOR_COURSE",
          modules: data
        })
      })
    },
    updateModule: (module) => {
      ModuleService.updateModule(module._id, module)
      .then(status => {
        dispatch({
          type: "UPDATE_MODULE",
          module
        })
      })
    },
    deleteModule: (module) => {
      ModuleService.deleteModule(module._id)
      .then(status => {
        dispatch({
          type: "DELETE_MODULE",
          moduleToDelete: module
        })
      })
    },
    createModule: (courseId) => {
      if (courseId !== "undefined" && typeof courseId !== "undefined") {
        ModuleService.createModule(courseId, {title: "New Module"})
        .then(data => {
          dispatch({
            type: "CREATE_MODULE",
            module: data
          })
        })
      } else {
        alert("Please select a course");
      }
    }
  }
}

export default connect(stpm, dtpm)(ModuleList);