import { useState } from "react";
import { Popup, ListIcon } from "../index";

const Item = ({
  item,
  dragHandleProps,
  isActive,
  onPopupClick,
  onMoveToTop,
  onMoveToBottom,
  onRemove
}) => {
  const { onMouseDown } = dragHandleProps;

  const dragItem = (e) => {
    document.body.style.overflow = "hidden";
    onMouseDown(e);
  };

  return (
    <div className="disable-select flex justify-between rounded-lg drop-shadow-lg bg-[#F7F7F7] w-[725px] h-[93px] p-3">
      <div className="flex justify-center items-center gap-3">
        <div
          className="disable-select dragHandle hover:cursor-pointer"
          onMouseDown={dragItem}
          onMouseUp={() => {
            document.body.style.overflow = "visible";
          }}
        >
          <img src="src/components/Drag Drop Card/Frame.png" />
        </div>
        <img src={item.thumbnails.url} className="w-28 h-20" />
        <p>{item.title}</p>
      </div>

      <div className="flex justify-center items-center gap-3">
        <p className="w-[80px] ">{item.cost}</p>
        <div className="bg-[#DBFFCE] w-[82px] h-[26px] border-[0.2px] rounded text-center">
          <p className="font-[14px]">{item.kind}</p>
        </div>
        <ul className="" onClick={onPopupClick}>
          <ListIcon />
          <ListIcon />
          <ListIcon />
          {isActive && (
            <Popup
              anchorEl={document.querySelector("ul")}
              open={isActive}
              onMoveToTop={onMoveToTop}
              onMoveToBottom={onMoveToBottom}
              onRemove={onRemove}
            />
          )}
        </ul>
      </div>
    </div>
  );
};

export default Item;
