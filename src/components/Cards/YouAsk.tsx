import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';

interface YouAskProps {
    id: string;
    style?: React.CSSProperties;
}

const YouAsk = ({ id, style }: YouAskProps) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id,
    });

    const combinedStyle = {
        ...style,
        transform: CSS.Translate.toString(transform),
    };

    return (
        <div
            ref={setNodeRef}
            style={combinedStyle}
            {...listeners}
            {...attributes}
            // Using a white background card, similar to typical cards, or transparent if implied by the design.
            // User asked for "background color should be dark" generally for the app, but cards usually have their own look.
            // The HTML provided has "answer-block". I will make it a bounded card.
            className='absolute cursor-grab active:cursor-grabbing group'
        >
            <div className="relative overflow-hidden rounded-3xl w-80 sm:w-96 bg-white/5 p-2 backdrop-blur-sm border border-white/10">
                {/* Image Container */}
                <div className="w-full h-64 sm:h-72 overflow-hidden rounded-2xl">
                    <img
                        src="https://cdn.prod.website-files.com/645d1fb65d428e1c8c1a62da/6482287b9ed68f04ba54574a_gif1.gif"
                        loading="lazy"
                        alt="question gif"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Button Overlay/Bottom */}
                <div className="mt-4 mb-2 flex justify-center">
                    <button className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-200 transition-colors">
                        <span className="text-gray-400">{`{`}</span>
                        you ask - I answer
                        <span className="text-gray-400">{`}`}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default YouAsk;
