import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';

interface WhyNotProps {
    id: string;
    style?: React.CSSProperties;
}

const WhyNot = ({ id, style }: WhyNotProps) => {
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
            className='absolute cursor-grab active:cursor-grabbing group'
        >
            <div className="relative overflow-hidden rounded-3xl w-80 sm:w-96 bg-white/5 p-2 backdrop-blur-sm border border-white/10">
                {/* Image Container */}
                <div className="w-full h-64 sm:h-72 overflow-hidden rounded-2xl">
                    <img
                        src="https://cdn.prod.website-files.com/645d1fb65d428e1c8c1a62da/64822a7e12fd6e0c40cbd957_gif2.gif"
                        loading="lazy"
                        alt="why not work with me gif"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Button Overlay/Bottom */}
                <div className="mt-4 mb-2 flex justify-center">
                    <button className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-200 transition-colors">
                        <span className="text-gray-400">{`{`}</span>
                        why not work with me
                        <span className="text-gray-400">{`}`}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhyNot;
