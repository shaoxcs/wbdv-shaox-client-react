import React, {useState} from 'react'
import EditingWidget from "./editing-widget";

const ParagraphWidget = ({widget, deleteWidget, updateWidget}) => {

  const [editing, setEditing] = useState(false)

  return (
    <div>
      {editing &&
        <EditingWidget
            widget={widget}
            setEditing={setEditing}
            updateWidget={updateWidget}
            deleteWidget={deleteWidget}/>
      }
      {!editing &&
        <><div className="col"><p>{widget.text}</p></div>
          <div className="col">
            <i onClick={() => setEditing(true)}
               className="fas fa-2x fa-cog float-right"/>
          </div></>
      }
    </div>
  )
}

export default ParagraphWidget