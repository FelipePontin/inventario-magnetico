"use client";

import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Slot from "./Slot";
import { itemsMinecraft } from "./itemsMinecraft";
import DragAndDrop from "../../images/drag_and_drop.png";
import "./Inventory.css";

export interface Item {
  id: string;
  name: string;
  icon: string;
}

const Inventory = () => {
  const [slots, setSlots] = useState<(Item | null)[]>(Array(45).fill(null));

  useEffect(() => {
    setSlots(() => {
      const newSlots = Array(45).fill(null);
      const usedItemIds = new Set<string>();

      let count = 0;
      while (count < 10 && usedItemIds.size < itemsMinecraft.length) {
        const randomItem =
          itemsMinecraft[Math.floor(Math.random() * itemsMinecraft.length)];

        if (!usedItemIds.has(randomItem.id)) {
          usedItemIds.add(randomItem.id);

          const emptyIndices = [];
          for (let i = 9; i < 45; i++) {
            if (!newSlots[i]) emptyIndices.push(i);
          }
          if (emptyIndices.length === 0) break;

          const randomIndex =
            emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
          newSlots[randomIndex] = { ...randomItem };
          count++;
        }
      }

      return newSlots;
    });
  }, []);

  const handleDrop = (from: number, to: number) => {
    const updated = [...slots];
    const temp = updated[from];
    updated[from] = updated[to];
    updated[to] = temp;
    setSlots(updated);
  };

  return (
    <section className="inventory">
      <DndProvider backend={HTML5Backend}>
        <div className="inventory-container">
          <img src={DragAndDrop.src} className="inventory__dragAndDrop" />
          <div className="crafting-section">
            <div className="grid-3x3">
              {slots.slice(0, 9).map((item, index) => (
                <Slot
                  key={index}
                  index={index}
                  item={item}
                  onDrop={handleDrop}
                />
              ))}
            </div>

            <div className="grid-1x1">
              <Slot key={9} index={9} item={slots[9]} onDrop={handleDrop} />
            </div>
          </div>

          <div className="grid-9x3">
            {slots.slice(10, 37).map((item, index) => (
              <Slot
                key={index + 10}
                index={index + 10}
                item={item}
                onDrop={handleDrop}
              />
            ))}
          </div>

          <div className="hotbar">
            {slots.slice(36, 45).map((item, index) => (
              <Slot
                key={index + 36}
                index={index + 36}
                item={item}
                onDrop={handleDrop}
              />
            ))}
          </div>
        </div>
      </DndProvider>
    </section>
  );
};

export default Inventory;
