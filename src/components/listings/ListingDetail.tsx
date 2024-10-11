'use client';

import { ReactNode } from 'react';

interface Props {
    title?: string;
    description?: string;
    icon?: ReactNode;
}
const ListingDetail: React.FC<Props> = ({ icon, title, description }) => {
    return (
        <div className="w-[670px] justify-start items-start gap-4 inline-flex">
            {icon}
            <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="self-stretch text-black text-base font-medium font-inter leading-normal">{title}</div>
                <div className="self-stretch text-gray-500 text-sm font-normal font-inter leading-tight">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default ListingDetail;
