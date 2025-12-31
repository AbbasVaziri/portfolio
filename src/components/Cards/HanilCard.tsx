
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

interface HanilCardProps {
    id: string;
    style?: React.CSSProperties;
}

const HanilCard = ({ id, style }: HanilCardProps) => {
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
            className='bg-[#E0E0E0] p-6 rounded-[32px] w-[500px] absolute cursor-grab active:cursor-grabbing flex flex-col gap-6 shadow-xl'
        >
            <h6 className='text-2xl font-medium text-black'>
                Hanil - platform for women
            </h6>

            <div className='flex items-center gap-2'>
                <span className='px-4 py-1.5 rounded-full border border-black/10 text-sm md:text-base text-black bg-white/50 backdrop-blur-sm'>
                    Front End Developer
                </span>
            </div>

            <div className='w-full rounded-2xl overflow-hidden aspect-video bg-black/5'>
                <img
                    src="/Hanil.gif"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className='flex justify-end'>
                <button className='group flex items-center gap-2 px-6 py-3 bg-black rounded-full text-white transition-all hover:scale-105'>
                    <span className="font-light">{`{`}</span>
                    <span className="font-medium"><a href='https://hanil.life'>View case</a></span>
                    <span className="font-light">{`}`}</span>
                </button>
            </div>
        </div>
    )
}

export default HanilCard
