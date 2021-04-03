import ModuleService from "../services/module-service";

export const CREATE_MODULE = "CREATE_MODULE"
export const DELETE_MODULE = "DELETE_MODULE"
export const UPDATE_MODULE = "UPDATE_MODULE"
export const CLEAR_LESSONS = "CLEAR_LESSONS"
export const CLEAR_TOPICS = "CLEAR_TOPICS"
export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE"

const findModulesForCourse = (dispatch, courseId) => {
  ModuleService.findModulesForCourse(courseId)
  .then(data => {
    dispatch({
      type : "FIND_MODULES_FOR_COURSE",
      modules : data
    })
  })
}

const updateModule = (dispatch, module) => {
  ModuleService.updateModule(module._id, module)
  .then(status => {
    dispatch({
      type : "UPDATE_MODULE",
      module
    })
  })
}

const deleteModule = (dispatch, module) => {
  ModuleService.deleteModule(module._id)
  .then(status => {
    dispatch({
      type : "DELETE_MODULE",
      moduleToDelete : module
    })
  })
}

const createModule = (dispatch, courseId) => {
  if (courseId !== "undefined" && typeof courseId !== "undefined") {
    ModuleService.createModule(courseId, {title : "New Module"})
    .then(data => {
      dispatch({
        type : "CREATE_MODULE",
        module : data
      })
    })
  }
}
//
// export const clear = (dispatch) => {
//   dispatch({
//     type: CLEAR_LESSONS
//   })
//   dispatch({
//     type: CLEAR_TOPICS
//   })
//   return Promise.resolve()
// }

const moduleActions = {
  createModule,
  deleteModule,
  updateModule,
  findModulesForCourse
}

export default moduleActions;