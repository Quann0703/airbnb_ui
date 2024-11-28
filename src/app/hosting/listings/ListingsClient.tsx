'use client';
import Button from '@/components/Button';
import ClientOnly from '@/components/ClientOnly';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import RentModal from '@/components/modals/RentModal';
import HostingPropertyCard from '@/components/properties/HostingPropertyCard';
import useRentModal from '@/hooks/useRentModal';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaEquals } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa6';
import { IoSearchSharp } from 'react-icons/io5';

interface ListingClientProps {
    currentUser?: SafeUser;
}

const ListingsClient: React.FC<ListingClientProps> = ({ currentUser }) => {
    const [isTable, setIsTable] = useState(false);
    const rentModal = useRentModal();
    const toggleTable = () => {
        setIsTable((prev) => {
            return !prev;
        });
    };

    return (
        <>
            <Container>
                <div className="w-full mx-auto pt-40 h-[1000px]">
                    <div className="flex justify-between items-center">
                        <Heading title="Nhà/phòng cho thuê của bạn" fontSize="text-3xl" />
                        <div className="flex gap-4">
                            <Button icon={IoSearchSharp} rounded base />
                            <Button icon={FaEquals} rounded base onClick={toggleTable} />
                            <Button icon={FaPlus} rounded base onClick={rentModal.onOpen} />
                        </div>
                    </div>

                    {isTable ? (
                        <div className="mt-4 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                            <HostingPropertyCard />
                        </div>
                    ) : (
                        <section>
                            <div className=" mr-0 mt-3 mb-6">
                                <table className="m-0 p-0 bg-white border-spacing-3 w-full max-w-full border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="text-left p-3 align-bottom w-[50%] min-w-[335px]">
                                                <div className="-ml-2 rounded-2xl w-fit font-medium">
                                                    <Button label="Mục cho thuê" text />
                                                </div>
                                            </th>
                                            <th className="text-left p-3 align-bottom w-[27%] ">
                                                <div className="-ml-2 rounded-2xl w-fit font-medium">
                                                    <Button label="Vị trí" text />
                                                </div>
                                            </th>
                                            <th className="text-left p-3 align-bottom w-[19%] ">
                                                <div className="-ml-2 rounded-2xl w-fit font-medium">
                                                    <Button label="Trạng thái" text />
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-spacing-3 border-collapse w-full max-w-full">
                                            <td className="text-left  align-middle ">
                                                <div
                                                    className="flex gap-6 items-center font-medium break-words"
                                                    role="button"
                                                >
                                                    <div className="min-w-16">
                                                        <div className="w-16 h-16 rounded-[4px] relative">
                                                            <Image
                                                                src={
                                                                    'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzNTA4NjAxNDk3NDg1NTQ2MQ%3D%3D/original/b692ae8e-a118-4906-bf40-16855d715c02.jpeg?im_w=1920'
                                                                }
                                                                alt=""
                                                                fill
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h2 className="m-0 p-0 text-inherit text-base ">can ho 1</h2>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-left  align-middle">
                                                <div className="text-gray-500">Hanoi, Hanoi</div>
                                            </td>
                                            <td className="text-left  align-middle">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 min-h-2 min-w-2 bg-orange-500 rounded-full"></div>
                                                    <span>Yêu cầu hành động</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    )}
                </div>
            </Container>
            <ClientOnly>
                <RentModal currentUser={currentUser} />
            </ClientOnly>
        </>
    );
};
export default ListingsClient;
