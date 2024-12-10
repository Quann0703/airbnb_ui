'use client';

import Image from 'next/image';

import HeartButton from '../HeartButton';
import { StarIcon } from '../Icon';
import { formatCurrency } from '@/utils/formatCurrency';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

interface PropertyCardProps {
    property: SafeProperty;
    key?: string;
    currentUser?: SafeUser | null;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, key, currentUser }) => {
    const router = useRouter();
    const [image, setImage] = useState('');
    useEffect(() => {
        const featuredImage = property?.images?.imageGroup?.find((item) => item.isFeatured && item.imageSrc);
        if (featuredImage) {
            setImage(
                featuredImage?.imageSrc ??
                    'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzNTA4NjAxNDk3NDg1NTQ2MQ%3D%3D/original/b692ae8e-a118-4906-bf40-16855d715c02.jpeg?im_w=720',
            );
        } else {
            setImage(
                'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzNTA4NjAxNDk3NDg1NTQ2MQ%3D%3D/original/b692ae8e-a118-4906-bf40-16855d715c02.jpeg?im_w=720',
            );
        }
    }, [property]);

    return (
        <div
            className="
              col-span-1 cursor-pointer group
              "
            onClick={() => router.push(`/listings/${property._id}`)}
            key={key}
        >
            <div className="flex flex-col gap-2 w-full items-start">
                <div className="aspect-square flex justify-center items-center relative overflow-hidden rounded-lg  w-[19.5625rem] h-[18.5625rem]">
                    <Image
                        src={image}
                        alt="Listing"
                        className="object-cover w-[588.84px] h-[19.625rem] group-hover:scale-110transition lightgray 50% / cover no-repeat] flex-shrink-0"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 right-3 ">
                        <HeartButton listing={property._id} currentUser={currentUser} />
                    </div>
                </div>
                <div className="gap-[100px] flex justify-end items-start w-[19.5625rem]">
                    <div className="flex flex-col items-start gap-1 flex-[1_0_0]">
                        <div className="Sans text-[#222222] font-bold font-messina leading-normal">
                            {property.address},{property.country}
                        </div>
                        <div className="Sans text-[#6A6A6A] font-medium font-messina text-sm leading-normal">
                            {property.view}
                        </div>
                        {/* <div className="Sans text-[#6A6A6A] font-medium font-messina text-sm leading-normal">
                            23-28 June
                        </div> */}
                        <div className="Sans text-[#222222] font-bold font-messina text-sm leading-normal">
                            đ {formatCurrency(property.pricePerNight)} đêm
                        </div>
                    </div>
                    <div className="flex items-center gap-1 py-0 px-0">
                        <div className="Sans text-[#6A6A6A] font-messina leading-normal">{property?.rating}</div>
                        <StarIcon />
                    </div>
                </div>
                {/* {onAction && actionLabel && ( */}
                {/* <Button
          //   disabled={disabled}
          small
          //   label={actionLabel}
          //   onClick={handleCancel}
        /> */}
                {/* )} */}
            </div>
        </div>
    );
};

export default PropertyCard;
