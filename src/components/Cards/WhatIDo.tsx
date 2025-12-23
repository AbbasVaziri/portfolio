import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface WhatIDoProps {
    id: string;
    style?: React.CSSProperties;
}

const WhatIDo = ({ id, style }: WhatIDoProps) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id,
    });

    const combinedStyle = {
        ...style,
        transform: CSS.Translate.toString(transform),
    };

    const items = [
        { title: "Landing pages", number: "01" },
        { title: "Business websites", number: "02" },
        { title: "E-commerce websites", number: "03" },
    ];

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={combinedStyle}
            className="absolute w-[500px] bg-[#3E2723] p-8 rounded-2xl text-white cursor-grab active:cursor-grabbing flex flex-col gap-4"
        >
            {/* The user specifically asked for a brown color. Using a deep brown #3E2723 */}
            <div className="name-block">
                <p className="text-xl opacity-70">what I do</p>
            </div>

            <div className="flex flex-col gap-4">
                {items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-white/20 pb-4 last:border-0 last:pb-0">
                        <p className="text-2xl">{item.title}</p>
                        <p className="text-2xl opacity-50">{item.number}</p>
                    </div>
                ))}
                <p className="text-base mt-2">But I am up to the new challenges!</p>
            </div>
        </div>
    )
}

export default WhatIDo
