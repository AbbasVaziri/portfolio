import AboutCard from "./components/Cards/AboutCard";
import { DndContext, type DragEndEvent, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import { useState } from 'react';
import MyApproach from "./components/Cards/MyApproach";
import HowIWork from "./components/Cards/HowIWork";
import WhatIDo from "./components/Cards/WhatIDo";

function App() {
  const [coordinates, setCoordinates] = useState<Record<string, { x: number; y: number }>>({
    'about-card': { x: 50, y: 50 },
    'my-approach-card': { x: 1500, y: 280 },
    'how-i-work-card': { x: 90, y: 500 },
    'what-i-do-card': { x: 800, y: 100 },
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
        <HowIWork
          id="how-i-work-card"
          style={{
            left: coordinates['how-i-work-card'].x,
            top: coordinates['how-i-work-card'].y,
          }}
        />
        <WhatIDo
          id="what-i-do-card"
          style={{
            left: coordinates['what-i-do-card'].x,
            top: coordinates['what-i-do-card'].y,
          }}
        />
      </div>
    </DndContext>
  );
}

export default App;
