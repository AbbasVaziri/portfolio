
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

interface AboutCardProps {
    id: string;
    style?: React.CSSProperties;
}

const Card = ({ id, style }: AboutCardProps) => {
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
            className='bg-[#7a5700] p-4 rounded-2xl w-[800px] h-[400px] text-white absolute cursor-grab active:cursor-grabbing'
        >
            {/* header */}
            <div className="flex justify-between">
                <span className='bg-black text-white  p-1 rounded-2xl'>About</span>
                <span>Available for freelance work</span>
            </div>
            {/* content */}
            <p className='mt-4'>Hi, I'm a frontend developer with a passion for creating beautiful and functional websites. I have experience working with a variety of technologies and frameworks, and I'm always looking for new challenges to take on.</p>
        </div>
    )
}

export default Card 