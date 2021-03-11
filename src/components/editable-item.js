import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = ({
  to,
  item,
  updateItem,
  deleteItem
}) => {
  const [editing, setEditing] = useState(false);
  const [itemCache, setItemCache] = useState(item);

  return (
    <span>
      {
        !editing &&
        <div className="row">
          <div className="col-8 align-self-center">{item.title}</div>
          <div className="col-4">
            <button className="btn h-100 btn-outline-dark pull-right float-right"
                    onClick={() => setEditing(true)}>
              <i className="fas fa-edit"/>
            </button>
          </div>
        </div>
      }
      {
        editing &&
        <div className="row">
          <div className="col-8 align-self-center">
            <input
                onChange={(e) => setItemCache(
                    {...itemCache, title: e.target.value})}
                value={itemCache.title}/>
          </div>
          <div className="col-4">
            <button className="btn btn-outline-dark float-right"
                    onClick={() => deleteItem(item)}>
              <i o className="fas fa-times"
                 style={{color: 'red'}}/>
            </button>
            <button className="btn btn-outline-dark float-right"
                    onClick={() => {
                      setEditing(false);
                      updateItem(itemCache);
                    }}>
              <i className="fas fa-check" style={{color: 'green'}}/>
            </button>
          </div>
        </div>
      }
    </span>
  )
}

export default EditableItem