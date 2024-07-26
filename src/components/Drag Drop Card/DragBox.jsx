import DraggableList from "react-draggable-list";
import { useEffect, useRef, useState } from "react";
import { Item } from "../index";

function DragBox() {
  const [list, setList] = useState([]);
  const [activePopup, setActivePopup] = useState(null);

  useEffect(() => {
    fetch("src/components/Drag Drop Card/data.json")
      .then((response) => response.json())
      .then((data) => {
        setList(data.data);
      });
  }, []);

  const containerRef = useRef();

  const _onListChange = (newList) => {
    setList(newList);
  };

  const handlePopupClick = (id) => {
    setActivePopup((prev) => (prev === id ? null : id));
  };

  const moveToTop = (id) => {
    setList((prevList) => {
      const index = prevList.findIndex((item) => item.id === id);
      if (index > 0) {
        const newList = [...prevList];
        const [movedItem] = newList.splice(index, 1);
        newList.unshift(movedItem);
        return newList;
      }
      return prevList;
    });
    setActivePopup(null);
  };

  const moveToBottom = (id) => {
    setList((prevList) => {
      const index = prevList.findIndex((item) => item.id === id);
      if (index > -1 && index < prevList.length - 1) {
        const newList = [...prevList];
        const [movedItem] = newList.splice(index, 1);
        newList.push(movedItem);
        return newList;
      }
      return prevList;
    });
    setActivePopup(null);
  };

  const removeItem = (id) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
    setActivePopup(null);
  };

  return (
    <div>
      <div ref={containerRef} style={{ touchAction: "pan-y" }} className="mt-3">
        <DraggableList
          itemKey="id"
          template={(props) => (
            <Item
              {...props}
              isActive={activePopup === props.item.id}
              onPopupClick={() => handlePopupClick(props.item.id)}
              onMoveToTop={() => moveToTop(props.item.id)}
              onMoveToBottom={() => moveToBottom(props.item.id)}
              onRemove={() => removeItem(props.item.id)}
            />
          )}
          list={list}
          onMoveEnd={(newList) => _onListChange(newList)}
          container={() => containerRef.current}
        />
      </div>
    </div>
  );
}

export default DragBox;
