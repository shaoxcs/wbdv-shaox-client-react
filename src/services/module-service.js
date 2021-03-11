const urlWithCourseId = "https://wbdv-generic-server.herokuapp.com/api/001372438/courses";
const urlWithModuleId =  "https://wbdv-generic-server.herokuapp.com/api/001372438/modules";

const ModuleService = {
  createModule: (courseId, module) => {
    return fetch(`${urlWithCourseId}/${courseId}/modules`, {
      method : "POST",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(module)
    }).then(res => res.json());
  },
  findModulesForCourse : (courseId) => {
    return fetch(`${urlWithCourseId}/${courseId}/modules`, {
      method : "GET"
    }).then(res => res.json());
  },
  findModule: (moduleId) => {
    return fetch(`${urlWithModuleId}/${moduleId}`, {
      method : "GET"
    }).then(res => res.json());
  },
  updateModule : (moduleId, module) => {
    return fetch(`${urlWithModuleId}/${moduleId}`, {
      method : "PUT",
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(module)
    }).then(res => res.json());
  },
  deleteModule : (moduleId) => {
    return fetch(`${urlWithModuleId}/${moduleId}`, {
      method : "DELETE"
    }).then(res => res.json());
  }
}

export default ModuleService;