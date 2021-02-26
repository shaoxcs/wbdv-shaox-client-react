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
            <Route path="/courses/table">
              <CourseManager />
            </Route>
            <Route path="/courses/grid">
              <CourseManager />
            </Route>
            <Route path="/courses/editor">
              <CourseEditor />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;