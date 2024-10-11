'use client';

import { ReactNode } from 'react';

interface OfferProps {
    icon?: ReactNode;
    title?: string;
}
const OfferItem: React.FC<OfferProps> = ({ icon, title }) => {
    return (
        <div className="h-8 justify-start items-center gap-4 inline-flex">
            {icon}
            <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="self-stretch text-black text-lg font-normal font-inter leading-normal">{title}</div>
            </div>
        </div>
    );
};

export default OfferItem;
