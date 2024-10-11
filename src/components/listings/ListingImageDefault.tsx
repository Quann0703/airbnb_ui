'use client';

import Image from 'next/image';

interface Props {
    image: string;
}

const ListingImageDefault: React.FC<Props> = ({ image = 'https://c.animaapp.com/qVcaJdtn/img/image-7-2@2x.png' }) => {
    return (
        <div className="relative w-[325px] h-[190px] rounded-lg overflow-hidden group">
            <Image
                className="absolute w-full h-full top-0 left-0 object-cover transition-opacity duration-300 ease-in-out"
                width={312}
                height={220}
                alt="Image"
                src={image}
            />
            {/* Lớp phủ khi hover */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out" />
        </div>
    );
};

export default ListingImageDefault;
