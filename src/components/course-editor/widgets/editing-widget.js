import React, {useState, useEffect} from 'react';

const EditingWidget = (
    {widget,
      setEditing,
      deleteWidget,
      updateWidget
    }) => {

  const [cachedItem, setCachedItem] = useState(widget)

  useEffect(() => {
    if (cachedItem.type === "LIST")
      setCachedItem({...cachedItem, ordered:false})
  }, []);

  return (
    <div className="row">
      <div className="col-9">
        <select className="form-control"
                onChange={(e) => {
                  setCachedItem({
                    ...cachedItem,
                    type: e.target.value})
                }}
                value={cachedItem.type}>
          <option value="HEADING">Heading</option>
          <option value="PARAGRAPH">Paragraph</option>
          <option value="LIST">LIST</option>
          <option value="IMAGE">IMAGE</option>
        </select>

        {
          cachedItem.type === "HEADING" &&
          <>
          <input
              onChange={(e) =>
                  setCachedItem({
                    ...cachedItem,
                    text: e.target.value
                  })}
              value={cachedItem.text}
              className="form-control"/>

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
          </select>
          </>
        }

        {cachedItem.type === "PARAGRAPH" &&
          <>
            <textarea
                onChange={(e) =>
                    setCachedItem({
                      ...cachedItem,
                      text: e.target.value
                    })}
                value={cachedItem.text}
                className="form-control"/>
          </>
        }
        {cachedItem.type === "LIST" &&
          <>
            <input
                onChange={(e) =>
                    setCachedItem(
                        {...cachedItem, ordered: !cachedItem.ordered})}
                type="checkbox"
                id="order"/>
            <label htmlFor="order">Ordered</label>
            <br/>
            <textarea
                rows={10}
                className="form-control"
                value={cachedItem.text}
                onChange={(e) => {
                  setCachedItem({...cachedItem, text: e.target.value})
                }}/>
          </>
        }
        {cachedItem.type === "IMAGE" &&
          <>
            <input
                className="form-control"
                placeholder={`Image URL`}
                value={cachedItem.src}
                onChange={(e) => {
                  setCachedItem({...cachedItem, src: e.target.value})
                }} />
            <input className="form-control"
                   placeholder={`Image Width`}
                   value={cachedItem.width}
                   onChange={(e) => {
                     setCachedItem({...cachedItem, width: e.target.value})
                   }} />
            <input className="form-control"
                   placeholder={`Image Height`}
                   value={cachedItem.height}
                   onChange={(e) => {
                     setCachedItem({...cachedItem, height: e.target.value})
                   }} />
          </>
        }
      </div>

      <div className="col-3 float-right">
        <i onClick={() => {
          updateWidget(cachedItem)
          setEditing(false)}}
           className="fas fa-2x fa-check float-right"/>
        <i onClick={() => deleteWidget(widget)}
           className="fas fa-2x fa-trash float-right"/>
      </div>
      }
    </div>
  )
}

export default EditingWidget;