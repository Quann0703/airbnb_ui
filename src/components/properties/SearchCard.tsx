'use Client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import HeartButton from '../HeartButton';
import { StarIcon } from '@heroicons/react/24/solid';
import { formatCurrency } from '@/utils/formatCurrency';
import { useRouter } from 'next/navigation';

interface SearchCardProps {
    property?: SafeProperty;
}
const SearchCard: React.FC<SearchCardProps> = ({ property }) => {
    const [image, setImage] = useState('');
    const router = useRouter();
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
            className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t"
            onClick={() => router.push(`/listings/${property?._id}`)}
        >
            <div className=" relative h-24 w-40 flex-shrink-0 md:h-52 md:w-80">
                <Image src={image} alt="" fill objectFit="cover" />
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p>
                        {property?.address}-{property?.city}
                    </p>
                    <HeartButton />
                </div>
                <h4 className="text-xl">{property?.title}</h4>
                <div className="border-b w-10 pt-2" />
                <p className="pt-2 text-sm text-gray-500 flex-grow ">
                    {property?.maxGuests} khách - {property?.numBedrooms} phòng - {property?.numBathrooms} phòng tắm
                </p>
                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-100 mr-2" />
                        {`${property?.rating ? property.rating : 1}`}
                    </p>
                    <div>
                        <p className="text-lg font-semibold pb-2 lg:text-2xl">
                            {formatCurrency(property?.pricePerNight)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchCard;
