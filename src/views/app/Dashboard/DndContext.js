import React, { useState, useCallback } from "react";

import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import Grid from "./Grid";
import SortableItem from "./SortableItem";
import Item from "./Item";

const DragNDrop = () => {
  const [items, setItems] = useState([
    {
      title: "Total Users",
      value: 1000,
      id: "1",
      width: 6,
    },
    {
      title: "Total Sales",
      value: 1000,
      id: "2",
      width: 6,
    },
    {
      title: "Total Orders",
      value: 1000,
      id: "3",
      width: 12,
    },
    {
      title: "Total Users",
      value: 1000,
      id: "4",
      width: 6,
    },
    {
      title: "Total Sales",
      value: 1000,
      id: "5",
      width: 6,
    },
    {
      title: "Total Orders",
      value: 1000,
      id: "6",
      width: 6,
    },
  ]);
  const [activeId, setActiveId] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragStart = useCallback((event) => {
    setActiveId(event.active.id);
    const item = items.find((item) => item.id === event.active.id);
    setActiveItem(item);
  }, []);

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
    setActiveId(null);
    setActiveItem(null);
  }, []);

  const handleDragCancel = useCallback(() => {
    setActiveId(null);
    setActiveItem(null);
  }, []);

  return (
    <div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <Grid columns={5}>
            {items.map((item) => (
              <SortableItem key={item.id} id={item.id} item={item} />
            ))}
          </Grid>
        </SortableContext>
        <DragOverlay adjustScale style={{ transformOrigin: "0 0 " }}>
          {activeId ? (
            <Item id={activeId} item={activeItem} isDragging />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default DragNDrop;
