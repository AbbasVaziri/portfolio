import AboutCard from "./components/Cards/AboutCard";
import { DndContext, type DragEndEvent, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import { useState } from 'react';
import MyApproach from "./components/Cards/MyApproach";

function App() {
  const [coordinates, setCoordinates] = useState<Record<string, { x: number; y: number }>>({
    'about-card': { x: 50, y: 50 },
    'my-approach-card': { x: 1500, y: 280 },
  });

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, delta } = event;
    const id = active.id as string;

    setCoordinates((prev) => ({
      ...prev,
      [id]: {
        x: (prev[id]?.x ?? 0) + delta.x,
        y: (prev[id]?.y ?? 0) + delta.y,
      },
    }));
  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div className="w-screen h-screen relative bg-gray-100 overflow-hidden">
        <AboutCard
          id="about-card"
          style={{
            left: coordinates['about-card'].x,
            top: coordinates['about-card'].y,
          }}
        />
        <MyApproach
          id="my-approach-card"
          style={{
            left: coordinates['my-approach-card'].x,
            top: coordinates['my-approach-card'].y,
          }}
        />
      </div>
    </DndContext>
  );
}

export default App;
