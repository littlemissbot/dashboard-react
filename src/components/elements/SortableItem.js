import React, { useEffect, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Item from "./Item";

const SortableItem = (props) => {
  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: props.id });
  const [item, setItem] = useState(props.item);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
  };

  useEffect(() => {
    setItem(props.item);
    console.log(props);
  }, [props.item]);

  return (
    <Item
      ref={setNodeRef}
      style={style}
      withOpacity={isDragging}
      item={item}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
};

export default SortableItem;
