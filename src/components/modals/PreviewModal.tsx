'use client';

import usePreviewModal from '@/hooks/usePreviewModal';
import React from 'react';
import Modal from './Modal';
import Image from 'next/image';

interface PreviewModalProps {
    image: string;
    title?: string;
    userName?: string;
    maxGuests?: number;
    numBedrooms?: number;
    numBathrooms?: number;
    imageUser?: string;
    city?: string;
    country?: string;
    address?: string;
}

const PreviewModal: React.FC<PreviewModalProps> = ({
    image,
    title = 'Không có tiêu đề',
    userName = 'Chủ nhà không xác định',
    maxGuests = 0,
    numBedrooms = 0,
    numBathrooms = 0,
    imageUser = 'https://a0.muscache.com/im/Portrait/Avatars/messaging/b3e03835-ade9-4eb7-a0bb-2466ab9a534d.jpg?im_policy=medq_w_text&im_t=Q&im_w=240&im_f=airbnb-cereal-medium.ttf&im_c=ffffff',
    address,
    country,
    city,
}) => {
    const previewModal = usePreviewModal();

    const bodyContent = (
        <div className="p-6 flex-auto text-[#222222] outline-none overflow-auto">
            <div className="flex relative">
                {/* Hình ảnh chính */}
                <div className="w-1/2 p-5">
                    <div className="relative rounded-lg pt-[95%]">
                        <Image src={image} alt="Preview Image" fill className="object-cover rounded-lg" />
                    </div>
                </div>
                {/* Nội dung */}
                <div
                    className="absolute left-1/2 right-0 top-0 h-full mt-0 pt-12 pb-2 px-6 overflow-y-scroll "
                    style={{ scrollbarWidth: 'none' }}
                >
                    <div className="text-[#222222]">
                        <h1 className="font-bold text-4xl break-words">{title}</h1>
                        <div className="flex justify-between items-center py-8 border-b border-solid border-[#ebebeb]">
                            <div className="max-w-[70%]">
                                <h2 className="font-bold text-lg">Toàn bộ căn hộ cho thuê. Chủ nhà {userName}</h2>
                                <div className="mt-2 font-normal text-base">
                                    {maxGuests} khách <span className="font-bold text-base">.</span> {numBedrooms} phòng
                                    ngủ <span className="font-bold text-base">.</span> {numBathrooms} phòng tắm
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Image
                                    src={imageUser}
                                    alt="User Avatar"
                                    width={56}
                                    height={56}
                                    className="object-cover rounded-full"
                                />
                            </div>
                        </div>
                        <div className="font-normal text-base py-8 border-b border-solid border-[#ebebeb]">
                            Bạn sẽ có một khoảng thời gian tuyệt vời tại nơi ở thoải mái này.
                        </div>
                        <div className="md:pb-[40px] md:mx-0 pt-8">
                            <h2 className="text-base font-medium">Vị trí</h2>
                            <h3 className="text-base font-medium mt-6 text-[#222222]">
                                <span>
                                    {address} , {city} , {country}
                                </span>
                            </h3>
                        </div>
                        <div className="mt-4 text-xs text-[#6a6a6a]">
                            Chúng tôi sẽ chỉ chia sẻ địa chỉ của bạn với những khách đã đặt phòng theo quy định trong
                            chính sách quyền riêng tư của chúng tôi.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <Modal
            isOpen={previewModal.isOpen}
            title="Bản xem trước đầy đủ"
            onClose={previewModal.onClose}
            onSubmit={() => {}}
            noSubmit
            rent
            body={bodyContent}
        />
    );
};

export default PreviewModal;
