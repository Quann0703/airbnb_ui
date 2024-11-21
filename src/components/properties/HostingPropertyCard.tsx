'use client';

import Image from 'next/image';
import HeartButton from '../HeartButton';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

interface HostingPropertyCardProps {
    property?: SafeProperty;
    key?: string;
}

const HostingPropertyCard: React.FC<HostingPropertyCardProps> = ({ property, key }) => {
    const [image, setImage] = useState('');
    const router = useRouter();
    useEffect(() => {
        const featuredImage = property?.images?.imageGroup?.find((item) => item.isFeatured && item.imageSrc);
        if (featuredImage) {
            setImage(featuredImage.imageSrc);
        } else {
            setImage(
                'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzNTA4NjAxNDk3NDg1NTQ2MQ%3D%3D/original/b692ae8e-a118-4906-bf40-16855d715c02.jpeg?im_w=1920',
            );
        }
    }, [property]);
    return (
        <div
            className="
              col-span-1 cursor-pointer group
              "
            onClick={() => router.push(`/listings/editor/${property?._id}`)}
            key={key}
        >
            <div className="flex flex-col gap-2 w-full items-start">
                <div className="aspect-square flex justify-center items-center relative overflow-hidden rounded-lg  w-[423px] h-[403px]">
                    <Image
                        src={image}
                        alt="Listing"
                        className="object-cover  group-hover:scale-110 transition-all lightgray 50% / cover no-repeat] flex-shrink-0"
                        fill
                        priority
                        quality={100}
                    />
                    <div className="absolute top-3 left-4 rounded-2xl bg-white  p-3">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 min-h-2 min-w-2 bg-orange-500 rounded-full"></div>
                            <span className="text-[14px] font-bold leading-3">Yêu cầu hành động</span>
                        </div>
                    </div>
                </div>
                <div className="gap-[100px] flex justify-end items-start w-[19.5625rem]">
                    <div className="flex flex-col items-start gap-1 flex-[1_0_0]">
                        {/* tên căn hộ */}
                        <div className="Sans text-[#222222] font-bold font-messina leading-normal">căn hộ 1 </div>
                        {/* địa điểm */}
                        <div className="Sans text-[#6A6A6A] font-medium font-messina text-sm leading-normal">
                            ha noi,ha noi
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HostingPropertyCard;
