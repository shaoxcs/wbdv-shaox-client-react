import React, {useState} from 'react'
import EditingWidget from "./editing-widget";

const ImageWidget = (
    {widget,
      deleteWidget,
      updateWidget
    }) => {

  const [editing, setEditing] = useState(false)

  return (
    <div>
      {!editing &&
        <>
          <div className="col">
            <img src={widget.src} alt={widget.src} width={widget.width} height={widget.height}/>
          </div>
          <div className="col">
            <i onClick={() => setEditing(true)}
               className="fas fa-2x fa-cog float-right"/>
          </div>
        </>
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

export default ImageWidget