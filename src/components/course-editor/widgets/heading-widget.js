import React, {useState} from 'react'
import EditingWidget from "./editing-widget";

const HeadingWidget = ({widget, deleteWidget, updateWidget}) => {
  const [editing, setEditing] = useState(false)

  return (
    <div className="row">
      {!editing &&
        <><div className="col">
            {widget.size === 1 && <h1>{widget.text}</h1>}
            {widget.size === 2 && <h2>{widget.text}</h2>}
            {widget.size === 3 && <h3>{widget.text}</h3>}
            {widget.size === 4 && <h4>{widget.text}</h4>}
            {widget.size === 5 && <h5>{widget.text}</h5>}
            {widget.size === 6 && <h6>{widget.text}</h6>}
          </div>
          <div className="col">
            <i onClick={() => setEditing(true)}
               className="fas fa-2x fa-cog float-right"/>
          </div></>
      }
      {editing &&
        <EditingWidget
            widget={widget}
            setEditing={setEditing}
            updateWidget={updateWidget}
            deleteWidget={deleteWidget}/>
      }
    </div>
  )
}

export default HeadingWidget