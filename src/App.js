import './App.css';
import CourseManager from "./components/course-manager/course-manager"
import CourseEditor from "./components/course-editor/course-editor"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/home"

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path={[
              "/courses/edit",
              "/courses/:layout/edit/:courseId",
              "/courses/:layout/edit/:courseId/modules/:moduleId",
              "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
              "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
            ]}
                   exact={true}
                   render={(props) => <CourseEditor {...props}/>}/>
            <Route path="/courses/table" exact={true}>
              <CourseManager/>
            </Route>
            <Route path="/courses/grid" exact={true}>
              <CourseManager/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;