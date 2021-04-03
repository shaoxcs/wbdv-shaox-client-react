import React, {useState} from 'react'
import EditingWidget from "./editing-widget";

const ListWidget = (
    {widget,
      deleteWidget,
      updateWidget
    }) => {

  const [editing, setEditing] = useState(false);
  const [items, setItems] = useState(widget.text.split("\n"));

  return (
    <div>
      {!editing &&
        <>
          <div className="col">
            {widget.ordered &&
            <ol>
              {items.map(i => <li>{i}</li>)}
            </ol>
            }
            {!widget.ordered &&
            <ul>
              {items.map(i => <li>{i}</li>)}
            </ul>
            }
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

export default ListWidget