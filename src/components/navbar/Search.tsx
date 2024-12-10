'use client';

import { differenceInDays } from 'date-fns';
import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import Button from '../Button';
import useSearchModal from '@/hooks/useSearchModal';

interface SearchProps {}
const Search: React.FC<SearchProps> = () => {
    const params = useSearchParams();
    const searchModal = useSearchModal();

    const locationValue = params?.get('city');
    const startDate = params?.get('startDate');
    const endDate = params?.get('endDate');
    const guestCount = params?.get('guestCount');

    const locationLabel = useMemo(() => {
        if (locationValue) {
            const decodedLocation = decodeURIComponent(locationValue);

            return decodedLocation;
        }
        return 'Anywhere';
    }, [locationValue]);

    const durationLabel = useMemo(() => {
        if (startDate && endDate) {
            const start = new Date(startDate as string);
            const end = new Date(endDate as string);

            let diff = differenceInDays(end, start);
            if (diff === 0) {
                diff = 1;
            }
            return `${diff} ngày`;
        }
        return 'Thời gian';
    }, [startDate, endDate]);

    const guestLabel = useMemo(() => {
        if (guestCount) {
            return `${guestCount} Khách`;
        }
        return 'Thêm khách';
    }, [guestCount]);

    return (
        <div className="flex flex-col relative px-6">
            <div
                className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer"
                onClick={searchModal.onOpen}
            >
                <div className="flex flex-row items-center justify-between">
                    <div className="text-sm font-semibold px-6">{locationLabel}</div>
                    <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
                        {durationLabel}
                    </div>
                    <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                        <div className="hidden sm:block ">{guestLabel}</div>
                        <div className="p-2 bg-rose-500 rounded-full text-white">
                            <BiSearch size={18} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
