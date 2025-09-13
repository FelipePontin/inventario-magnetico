import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

export interface Item {
  id: string;
  name: string;
  icon: string;
}

export interface SlotProps {
  item: Item | null;
  index: number;
  onDrop: (from: number, to: number) => void;
}

const Slot: React.FC<SlotProps> = ({ item, index, onDrop }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: "ITEM",
    item: { index },
    canDrag: !!item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "ITEM",
    drop: (dragged: { index: number }) => {
      onDrop(dragged.index, index);
    },
  });

  drag(drop(ref));

  return (
    <div ref={ref} className="slot" style={{ opacity: isDragging ? 0.5 : 1 }}>
      {item && <img src={item.icon} alt={item.name} className="item-icon" />}
    </div>
  );
};

export default Slot;
