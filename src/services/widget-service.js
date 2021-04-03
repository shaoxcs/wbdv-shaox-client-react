const TOPICS_URL = "https://wbdv-generic-server.herokuapp.com/api/shaox/topics";
const WIDGETS_URL = "http://localhost:8080/api";

export const createWidgetForTopic = (topicId, widget) =>
    fetch(`${WIDGETS_URL}/topics/${topicId}/widgets`, {
      method: "POST",
      body: JSON.stringify(widget),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findWidgetsForTopic = (topicId) =>
    fetch(`${WIDGETS_URL}/topics/${topicId}/widgets` )
    .then(response => response.json())

export const findWidget = (widgetId) =>
    fetch(`${WIDGETS_URL}/${widgetId}`)
    .then(response => response.json())

export const updateWidget = (widgetId, widget) => {
  return fetch(`${WIDGETS_URL}/widgets/${widgetId}`, {
    method: "PUT",
    body: JSON.stringify(widget),
    headers: {'content-type': 'application/json'}
  })
  .then(response => response.json())
}

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGETS_URL}/widgets/${widgetId}`, {
      method: "DELETE"
    })
    .then(response => response.json())

const api = {
  createWidgetForTopic,
  findWidgetsForTopic,
  findWidget,
  updateWidget,
  deleteWidget
}

export default api