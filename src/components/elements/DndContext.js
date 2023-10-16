import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Row } from "antd";
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
import SortableItem from "./SortableItem";
import Item from "./Item";
import { editDashboard } from "../../redux/slices/dashboardsSlice";

const DragNDrop = ({ dashboard }) => {
  const [items, setItems] = useState(dashboard.widgets);
  const [activeId, setActiveId] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const dispatch = useDispatch();
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragStart = useCallback((event) => {
    setActiveId(event.active.id);
    const item = items.find((item) => item.id === event.active.id);
    setActiveItem(item);
  }, []);

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);

      const orderedItems = arrayMove(items, oldIndex, newIndex);
      setItems(orderedItems);
      dispatch(
        editDashboard({
          values: orderedItems,
          id: dashboard.id,
          type: "widgets",
        })
      );
    }
    setActiveId(null);
    setActiveItem(null);
  }, []);

  const handleDragCancel = useCallback(() => {
    setActiveId(null);
    setActiveItem(null);
  }, []);

  useEffect(() => {
    setItems(dashboard.widgets);
  }, [dashboard.widgets]);

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
          <Row gutter={[30, 30]}>
            {items.map((item) => (
              <SortableItem
                key={item.id}
                id={item.id}
                item={item}
                removable="true"
                handle="true"
              />
            ))}
          </Row>
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
