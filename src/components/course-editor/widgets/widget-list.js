import React, {useEffect, useState} from 'react'
import {connect} from "react-redux"
import EditableItem from "../../editable-item"
import {useParams} from "react-router-dom"
import widgetService from '../../../services/widget-service'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";

const WidgetList = (
    {
      widgets=[],
      findWidgetsForTopic,
      createWidgetForTopic,
      updateWidget,
      deleteWidget,
      clear
    }) => {

  const {layout, topicId, lessonId, widgetId} = useParams();

  useEffect(() => {
    if(topicId !== "undefined" && typeof topicId !== "undefined") {
      findWidgetsForTopic(topicId)
    } else {
      clear()
    }
  }, [topicId])


  return(
    <div>
      <div>
        <i onClick={() => createWidgetForTopic(topicId)}
           className="fas fa-plus fa-2x float-right"/>
      </div>
      <div>
        <ul className="list-group">
          {widgets.map(widget =>
              <li className="list-group-item" key={widget.id}>
                {widget.type === "HEADING" &&
                  <HeadingWidget
                      updateWidget={updateWidget}
                      deleteWidget={deleteWidget}
                      widget={widget}/>}
                {widget.type === "PARAGRAPH" &&
                  <ParagraphWidget
                      updateWidget={updateWidget}
                      deleteWidget={deleteWidget}
                      widget={widget}/>}
              </li>)
          }
        </ul>
      </div>
    </div>
  )
}

const stpm = (state) => ({
  widgets: state.widgetReducer.widgets
})

const dtpm = (dispatch) => ({
  createWidgetForTopic: (topicId) => {
    if (topicId !== "undefined" && typeof topicId !== "undefined") {
      widgetService
      .createWidgetForTopic(topicId, {type: "HEADING", size: 1, text: "New Widget"})
      .then(widget => dispatch({
        type: "CREATE_WIDGET",
        widget
      }))
    } else {
      alert("Please select a topic");
    }
  },
  deleteWidget: (item) =>
      widgetService.deleteWidget(item.id)
      .then(status => dispatch({
        type: "DELETE_WIDGET",
        widgetToDelete: item
      })),

  updateWidget: (widget) => {
    widgetService.updateWidget(widget.id, widget)
    .then(status => dispatch({
      type: "UPDATE_WIDGET",
      widget
    }))
  },
  clear: () => {
    dispatch({
      type: "CLEAR_WIDGET"
    })
    return Promise.resolve()
  },
  findWidgetsForTopic: (topicId) => {
    widgetService.findWidgetsForTopic(topicId)
    .then(widgets => {
      dispatch({
        type: "FIND_WIDGETS",
        widgets
      })
    })
  }
})

export default connect(stpm, dtpm)(WidgetList)