import React from 'react'
import {useHistory, Link} from "react-router-dom"

const CourseEditor = ({props}) => {
  let history = useHistory()

  return (<div>
    <div className="container">
      <div className="row">
        <div className="col-4">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link">
                <i onClick={() => history.goBack()} className="fa fa-times"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">CS5610 - WebDev</a>
            </li>
          </ul>
        </div>

        <div className="col-8">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link" href="#">Build</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Pages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Theme</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Store</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Apps</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Settings</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-plus"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <br/>

        <div className="row">
          <div className="col-4">
            <ul className="list-group">
              <li className="list-group-item">
                Module 1 - jQuery
                <i className="pull-right fa fa-times"></i>
              </li>
              <li className="list-group-item">
                Module 2 - React
                <i className="pull-right fa fa-times"></i>
              </li>
              <li className="list-group-item">
                Module 3 - Redux
                <i className="pull-right fa fa-times"></i>
              </li>
              <li className="list-group-item">
                Module 4 - Native
                <i className="pull-right fa fa-times"></i>
              </li>
              <li className="list-group-item">
                Module 5 - Angular
                <i className="pull-right fa fa-times"></i>
              </li>
              <li className="list-group-item">
                Module 6 - Node
                <i className="pull-right fa fa-times"></i>
              </li>
              <li className="list-group-item">
                Module 7 - Mongo
                <i className="pull-right fa fa-times"></i>
              </li>
            </ul>
          </div>

          <div className="col-8">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link" href="#">Topic 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Topic 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Topic 3</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Topic 4</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-plus"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  </div>)
}
export default CourseEditor