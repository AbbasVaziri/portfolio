
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

interface EvasenceCardProps {
    id: string;
    style?: React.CSSProperties;
}

const EvasenceCard = ({ id, style }: EvasenceCardProps) => {
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
            className='bg-[#ff4f1e] p-6 rounded-[32px] w-[500px] absolute cursor-grab active:cursor-grabbing flex flex-col gap-6 shadow-xl'
        >
            <h6 className='text-2xl font-medium text-white'>
                Evasence - online perfume shop
            </h6>

            <div className='flex items-center gap-2'>
                <span className='px-4 py-1.5 rounded-full border border-white/10 text-sm md:text-base text-white bg-black backdrop-blur-sm'>
                    Remote Front End Developer
                </span>
            </div>

            <div className='w-full rounded-2xl overflow-hidden aspect-video bg-black/5'>
                <img
                    src="/evasance.gif"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className='flex justify-end'>
                <button className='group flex items-center gap-2 px-6 py-3 bg-black rounded-full text-white transition-all hover:scale-105'>
                    <span className="font-light">{`{`}</span>
                    <span className="font-medium"><a href='https://www.evasence.com' target="_blank" rel="noopener noreferrer">View case</a></span>
                    <span className="font-light">{`}`}</span>
                </button>
            </div>
        </div>
    )
}

export default EvasenceCard
