'use client';

import { formatCurrency } from '@/utils/formatCurrency';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

interface PropertyCardPreviewProps {
    title?: string;
    pricePerNight?: number;
    image: string;
    onClick?: () => void;
}
const PropertyCardPreview: React.FC<PropertyCardPreviewProps> = ({ title, pricePerNight, image, onClick }) => {
    return (
        <div
            className="bg-white mt-4 rounded-2xl shadow-custom border-solid border-[1px] border-gray-200 max-w-[500px] relative md:w-[358px] md:max-w-[40vw]"
            onClick={onClick}
        >
            <button className="bg-transparent border-none text-inherit cursor-pointer block m-0 p-0 text-left no-underline h-full w-full touch-manipulation absolute top-0 left-0 z-[1]"></button>
            <div className="flex flex-col-reverse p-4">
                <div className="flex flex-row w-full">
                    <div className="flex-1 max-w-[calc(100%-80px)] break-words">
                        <div className="md:mb-1 mb-[2px] text-base font-bold whitespace-normal overflow-hidden text-ellipsis">
                            {title}
                        </div>
                        <div className="flex text-base">
                            {/* <div className='mr-4 text-[#6A6A6A] line-through'>499</div> */}
                            <div>
                                <b>{formatCurrency(pricePerNight)}</b> đêm
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <div className="ml-4 text-base flex gap-1 items-center">
                            Mới <FaStar />
                        </div>
                    </div>
                </div>
                <div className="mb-4 relative w-full">
                    <div className=" absolute z-[1] font-medium text-sm top-2 left-2 md:left-4 md:top-4 shadow-shadowCard border-solid border-[1px] border-gray-200 bg-white py-[2px] px-2">
                        Hiển thị bản xem trước
                    </div>
                    <div className="relative rounded-lg pt-[95%] w-auto h-auto bg-center bg-no-repeat">
                        <div className=" absolute left-0 right-0 bottom-0 h-full flex justify-center items-center">
                            <Image src={image} alt="" fill className="object-cover rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PropertyCardPreview;
