'use client';

import Image from 'next/image';

interface Props {
    className: any;
    frame: string;
}

const ShowMoreBtn: React.FC<Props> = ({ className, frame = 'https://c.animaapp.com/qVcaJdtn/img/frame.svg' }) => {
    return (
        <div
            className={`inline-flex items-center gap-1.5 p-2 relative bg-white rounded-lg border border-solid border-black-800 ${className}`}
        >
            <Image className="relative w-4 h-4" alt="Frame" width={4} height={4} src={frame} />
            <div className="relative w-fit [font-family:'Messina_Sans-SemiBold',Helvetica] font-semibold text-black-800 text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                Hiển thị tất cả ảnh
            </div>
        </div>
    );
};

export default ShowMoreBtn;
