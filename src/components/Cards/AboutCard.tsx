
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
            className='bg-[#7a5700] p-6 rounded-2xl w-[650px] h-auto text-white absolute cursor-grab active:cursor-grabbing'
        >
            {/* header */}
            <div className="flex justify-between">
                <span className='bg-black text-white p-2 rounded-full'>About</span>
                <span className='bg-gray-800 text-white p-2 rounded-full'>Available for freelance work</span>
            </div>
            {/* content */}
            <p className='mt-4 whitespace-pre-line leading-8 text-lg font-normal opacity-90'>
                Hi, I am Abbas. A 21 year old front end developer with two years of hands on web development experience.

                <br /> I build interfaces focused on clarity, speed, and usability. You see clean layouts, readable code, and consistent behavior across screens.

                <br /> I enjoy debugging. You benefit from fewer errors, faster fixes, and steady improvement across projects.

                <br /> You get work shaped by current tools, updated practices, and real project feedback.

                Outside development, I play and follow basketball. You work with someone who values teamwork, practice, and performance under pressure.

            </p>
        </div>
    )
}

export default Card 