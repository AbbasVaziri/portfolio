import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface MyApproachProps {
    id: string;
    style?: React.CSSProperties;
}


const MyApproach = ({ id, style }: MyApproachProps) => {
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
            {...attributes}
            {...listeners}
            style={combinedStyle}
            className="absolute w-[400px] min-h-[200px] h-auto bg-[#00068f] p-8 rounded-2xl text-white cursor-grab active:cursor-grabbing flex flex-col gap-6"
        >
            <h2 className="text-4xl font-bold">My Approach</h2>
            <div className="flex gap-4 flex-wrap">
                <span className="bg-white/20 px-6 py-2 rounded-full text-lg font-medium backdrop-blur-sm">Honesty</span>
                <span className="bg-white/20 px-6 py-2 rounded-full text-lg font-medium backdrop-blur-sm">Quality</span>
                <span className="bg-white/20 px-6 py-2 rounded-full text-lg font-medium backdrop-blur-sm">Creativity</span>
                <span className="bg-white/20 px-6 py-2 rounded-full text-lg font-medium backdrop-blur-sm">Design</span>
            </div>
        </div>
    )
}

export default MyApproach