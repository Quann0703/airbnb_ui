'use client';

import qs from 'query-string';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';
import { Range } from 'react-date-range';
import dynamic from 'next/dynamic';

import Modal from './Modal';

import { formatISO } from 'date-fns';
import Heading from '../Heading';
import Calender from '../inputs/Calender';
import Counter from '../inputs/Counter';
import useSearchModal from '@/hooks/useSearchModal';
import { LocationData } from '@/app/listings/[listingId]/ListingClient';
import SearchBar from '../inputs/SearchBar';
import { Divider } from '@mui/material';
import CalenderSearch from '../inputs/CalenderSearch';

enum STEPS {
    LOCATION = 0,
    DATE = 1,
    INFO = 2,
}

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
};

const SearchModal = () => {
    const searchModal = useSearchModal();
    const router = useRouter();
    const params = useSearchParams();
    const [step, setStep] = useState(STEPS.LOCATION);
    const [maxGuests, setMaxGuests] = useState(1);
    const [numBedrooms, setNumBedrooms] = useState(1);
    const [numBathrooms, setNumBathrooms] = useState(1);
    const [locationData, setLocationData] = useState<LocationData | null>(null);

    const [dateRange, setDateRange] = useState<Range>(initialDateRange);

    const Map = useMemo(() => dynamic(() => import('../Map'), { ssr: false }), []);

    const onBack = useCallback(() => {
        setStep((value) => value - 1);
    }, []);
    const onNext = useCallback(() => {
        setStep((value) => value + 1);
    }, []);

    const onSubmit = useCallback(async () => {
        if (step !== STEPS.INFO) {
            return onNext();
        }

        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString());
        }
        const updateQuery: any = {
            ...currentQuery,
            city: locationData?.value,
            maxGuests,
            numBedrooms,
            numBathrooms,
        };
        if (dateRange.startDate) {
            updateQuery.startDate = formatISO(dateRange.startDate);
        }
        if (dateRange.endDate) {
            updateQuery.endDate = formatISO(dateRange.endDate);
        }
        const url = qs.stringifyUrl(
            {
                url: '/search',
                query: updateQuery,
            },
            { skipNull: true },
        );

        setStep(STEPS.LOCATION);
        searchModal.onClose();
        router.push(url);
    }, [
        locationData?.value,
        dateRange,
        params,
        step,
        searchModal,
        router,
        onNext,
        maxGuests,
        numBathrooms,
        numBedrooms,
    ]);

    const actionLabel = useMemo(() => {
        if (step === STEPS.INFO) {
            return 'Search';
        }
        return 'Next';
    }, [step]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.INFO) {
            return undefined;
        }
        return 'Back';
    }, []);
    const handleCitySelect = (data: LocationData) => {
        setLocationData(data);
    };

    let bodyContent = (
        <div className="flex flex-col justify-center items-center gap-4 h-[60vh]">
            <SearchBar onCitySelect={handleCitySelect} />

            <Divider />
            <div className="w-full h-full">
                <Map locationData={locationData} />
            </div>
        </div>
    );
    const onChangeDate = (value: any) => {
        setDateRange(value.selection);
    };

    if (step === STEPS.DATE) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading title="When do you plan to go?" subtitle="Make sure everyone is free" />
                <CalenderSearch value={dateRange} onChange={(value) => onChangeDate(value)} />
            </div>
        );
    }

    if (step === STEPS.INFO) {
        bodyContent = (
            <div>
                <div className="flex flex-col gap-8">
                    <Heading title="Hãy bắt đầu với những điều cơ bản" subtitle="Bao nhiêu người có thể ở tại đây" />
                    <Counter
                        value={maxGuests}
                        title="Khách"
                        subtitle="Sô khách tối đa có thể ở"
                        onChange={(value) => setMaxGuests(value)}
                    />
                    <hr />
                    <Counter
                        value={numBedrooms}
                        title="Phòng"
                        subtitle="Số phòng có thể ngủ"
                        onChange={(value) => setNumBedrooms(value)}
                    />
                    <hr />
                    <Counter
                        value={numBathrooms}
                        title="Phòng tắm"
                        subtitle="Số phòng tắm"
                        onChange={(value) => setNumBathrooms(value)}
                    />
                </div>
            </div>
        );
    }
    return (
        <Modal
            isOpen={searchModal.isOpen}
            onClose={searchModal.onClose}
            onSubmit={onSubmit}
            title="Filters"
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
            actionLabel={actionLabel}
            body={bodyContent}
        ></Modal>
    );
};

export default SearchModal;
