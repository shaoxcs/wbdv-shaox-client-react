import React, {useState} from 'react'

const HeadingWidget = ({widget, deleteWidget, updateWidget}) => {
  const [editing, setEditing] = useState(false)
  const [cachedItem, setCachedItem] = useState(widget)
  return (
    <div className="row">
      {
        editing &&
        <><div className="col-9">
          <select className="form-control"
                  onChange={(e) => {
                    setCachedItem({
                      ...cachedItem,
                      type: e.target.value})
                  }}
                  value={cachedItem.type}>
            <option value="HEADING">Heading</option>
            <option value="PARAGRAPH">Paragraph</option>
          </select>
          <input
              onChange={(e) =>
                  setCachedItem({
                    ...cachedItem,
                    text: e.target.value
                  })}
              value={cachedItem.text}
              className="form-control"/>
          {cachedItem.type === "HEADING" &&
          <select
              onChange={(e) =>
                  setCachedItem({
                    ...cachedItem,
                    size: parseInt(e.target.value)
                  })}
              value={cachedItem.size}
              className="form-control">
            <option value={1}>Heading1</option>
            <option value={2}>Heading2</option>
            <option value={3}>Heading3</option>
            <option value={4}>Heading4</option>
            <option value={5}>Heading5</option>
            <option value={6}>Heading6</option>
          </select>}
          </div>
          <div className="col-3">
            <i onClick={() => {
              updateWidget(cachedItem)
              setEditing(false)}}
               className="fas fa-2x fa-check float-right"/>
            <i onClick={() => deleteWidget(widget)}
               className="fas fa-2x fa-trash float-right"/>
          </div></>
      }
      {!editing &&
        <><div className="col-9">
            {widget.size === 1 && <h1>{widget.text}</h1>}
            {widget.size === 2 && <h2>{widget.text}</h2>}
            {widget.size === 3 && <h3>{widget.text}</h3>}
            {widget.size === 4 && <h4>{widget.text}</h4>}
            {widget.size === 5 && <h5>{widget.text}</h5>}
            {widget.size === 6 && <h6>{widget.text}</h6>}
          </div>
          <div className="col-3">
            <i onClick={() => setEditing(true)}
               className="fas fa-2x fa-cog float-right"/>
          </div></>
      }
    </div>
  )
}

export default HeadingWidget