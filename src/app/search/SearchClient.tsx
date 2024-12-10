'use client';
import { getProperties } from '@/actions/property/getProperties';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Heading from '@/components/Heading';

import SearchCard from '@/components/properties/SearchCard';
import { formatDate } from '@/utils/formatDate';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { LocationData } from '../listings/[listingId]/ListingClient';
import geocodeCity from '@/actions/getLoactionCity';
import MapSearch from '@/components/MapSearch';
import Modal from '@/components/modals/Modal';
import { searchProperties } from '@/actions/property/searchProperty';
import CategoryModal from '@/components/modals/CategoryModal';
import useCategoryModal from '@/hooks/useCategoryModal';
import useInfoModal from '@/hooks/useInfoModal';
import InfoModal from '@/components/modals/InfoModal';
import PriceModal from '@/components/modals/PriceModal';
import usePriceModal from '@/hooks/usePriceModal';

const SearchClient = () => {
    const categoryModal = useCategoryModal();
    const infoModal = useInfoModal();
    const priceModal = usePriceModal();

    const searchParams = useSearchParams();
    const bathroomCount = searchParams.get('numBathrooms');
    const guestCount = searchParams.get('maxGuests');
    const locationValue = searchParams.get('city');
    const roomCount = searchParams.get('numBedrooms');
    const endDateParams = searchParams.get('endDate');
    const startDateParams = searchParams.get('startDate');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');

    const startDate = startDateParams ? new Date(startDateParams) : null;
    const endDate = endDateParams ? new Date(endDateParams) : null;
    const range = `${startDate ? formatDate(startDate) : 'N/A'} - ${endDate ? formatDate(endDate) : 'N/A'}`;

    const [result, setResult] = useState<SafeProperty[]>([]);
    const [locationData, setLocationData] = useState<LocationData | null>(null);

    const fetchLocationDataByCity = async (cityName: string) => {
        try {
            if (!cityName) {
                console.warn('City name is undefined or empty.');
                return;
            }
            const data = await geocodeCity(cityName);
            setLocationData(data);
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu vị trí:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (locationValue) {
                    await fetchLocationDataByCity(locationValue);
                }

                const property = await searchProperties({
                    maxGuests: guestCount ? parseInt(guestCount, 10) : undefined,
                    numBedrooms: roomCount ? parseInt(roomCount, 10) : undefined,
                    numBathrooms: bathroomCount ? parseInt(bathroomCount, 10) : undefined,
                    startDate: startDateParams || undefined,
                    endDate: endDateParams || undefined,
                    city: locationValue || undefined,
                    minPrice: minPrice ? parseFloat(minPrice) : undefined,
                    maxPrice: maxPrice ? parseFloat(maxPrice) : undefined,
                });

                if (property) {
                    setResult(property);
                }
            } catch (error) {
                console.error('Có lỗi khi lấy dữ liệu:', error);
            }
        };

        fetchData();
    }, [locationValue, guestCount, roomCount, bathroomCount, startDateParams, endDateParams, maxPrice, minPrice]);

    return (
        <>
            <main className="flex pl-6 gap-5">
                <div className="w-full mx-auto pt-32 min-h-screen overflow-y-auto">
                    <p className="text-xs mb-2">
                        hơn 300 căn phòng từ ngày - {range} - dành cho {guestCount} khách
                    </p>
                    <Heading title={`Nơi ở tại ${locationValue}`} fontSize="text-3xl" />

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap mt-5">
                        <Button
                            label="Loại phòng"
                            rounded
                            outline
                            className="active:scale-95 hover:shadow-lg active:bg-gray-100 transition transform duration-100 ease-out"
                            onClick={categoryModal.onOpen}
                        />
                        <Button
                            label="Giá"
                            rounded
                            outline
                            className="active:scale-95 hover:shadow-lg min-w-[100px] active:bg-gray-100 transition transform duration-100 ease-out"
                            onClick={priceModal.onOpen}
                        />
                        <Button
                            label="Phòng và phòng tắm"
                            rounded
                            outline
                            className="active:scale-95 hover:shadow-lg active:bg-gray-100 transition transform duration-100 ease-out"
                            onClick={infoModal.onOpen}
                        />
                        <Button
                            label="Nhiều tùy chọn"
                            rounded
                            outline
                            className="active:scale-95 hover:shadow-lg active:bg-gray-100 transition transform duration-100 ease-out"
                        />
                    </div>
                    {result.map((item) => {
                        return (
                            <div key={item._id}>
                                <SearchCard property={item} />
                            </div>
                        );
                    })}
                </div>

                <div className="hidden xl:inline-flex xl:min-w-[600px] h-[1000px] pt-28 sticky top-0">
                    <MapSearch locationData={locationData} />
                </div>
            </main>
            <Modal onClose={() => {}} onSubmit={() => {}} secondaryActionLabel="Áp dụng" />
            <CategoryModal />
            <InfoModal />
            <PriceModal />
        </>
    );
};

export default SearchClient;
