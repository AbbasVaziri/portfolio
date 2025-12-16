import AboutCard from "./components/Cards/AboutCard";
import { DndContext, type DragEndEvent, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import { useState } from 'react';

function App() {
  const [coordinates, setCoordinates] = useState({ x: 50, y: 50 });

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { delta } = event;
    setCoordinates(({ x, y }) => ({
      x: x + delta.x,
      y: y + delta.y,
    }));
  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="w-screen h-screen relative bg-gray-100 overflow-hidden">
        <AboutCard
          id="about-card"
          style={{
            left: coordinates.x,
            top: coordinates.y,
          }}
        />
      </div>
    </DndContext>
  );
}

export default App;
