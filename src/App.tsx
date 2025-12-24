import AboutCard from "./components/Cards/AboutCard";
import { DndContext, type DragEndEvent, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import { useState } from 'react';
import MyApproach from "./components/Cards/MyApproach";
import HowIWork from "./components/Cards/HowIWork";
import WhatIDo from "./components/Cards/WhatIDo";
import YouAsk from "./components/Cards/YouAsk";
import WhyNot from "./components/Cards/WhyNot";
import Lenis from 'lenis';
import { useRef, useEffect } from 'react';

function App() {
  const [coordinates, setCoordinates] = useState<Record<string, { x: number; y: number }>>({
    'about-card': { x: 570, y: 50 },
    'my-approach-card': { x: 1500, y: 25 },
    'how-i-work-card': { x: 150, y: 600 },
    'what-i-do-card': { x: 900, y: 1000 },
    'you-ask-card': { x: 1500, y: 300 },
    'why-not-card': { x: 100, y: 1500 },  
  });

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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

  const maxY = Math.max(...Object.values(coordinates).map(c => c.y));
  const pageHeight = Math.max(window.innerHeight, maxY + 500);

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div
        ref={containerRef}
        className="w-full relative bg-stone-800"
        style={{ height: pageHeight, minHeight: '100vh' }}
      >
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
          <h1 className="text-[14vw] font-black text-white uppercase tracking-tighter select-none">
            Web Developer
          </h1>
        </div>
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
        <YouAsk
          id="you-ask-card"
          style={{
            left: coordinates['you-ask-card'].x,
            top: coordinates['you-ask-card'].y,
          }}
        />
        <WhyNot
          id="why-not-card"
          style={{
            left: coordinates['why-not-card'].x,
            top: coordinates['why-not-card'].y,
          }}
        />
      </div>
    </DndContext>
  );
}

export default App;
