
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

interface HanilDashCardProps {
    id: string;
    style?: React.CSSProperties;
}

const HanilDashCard = ({ id, style }: HanilDashCardProps) => {
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
            className='bg-[#a1264a] p-6 rounded-[32px] w-[500px] absolute cursor-grab active:cursor-grabbing flex flex-col gap-6 shadow-xl'
        >
            <h6 className='text-2xl font-medium text-white'>
                Hanil Admin Panel
            </h6>

            <div className='flex items-center gap-2'>
                <span className='px-4 py-1.5 rounded-full border border-white/10 text-sm md:text-base text-white bg-white/50 backdrop-blur-sm'>
                    Front End Developer
                </span>
                <span className='px-4 py-1.5 rounded-full border border-white/10 text-sm md:text-base text-white bg-white/50 backdrop-blur-sm'>
                    Admin Panel
                </span>
            </div>

            <div className='w-full rounded-2xl overflow-hidden aspect-video bg-black/5'>
                <video
                    src="/hanillllll.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    
                />
            </div>
        </div>
    )
}

export default HanilDashCard
