'use client';

import qs from 'query-string';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import Modal from './Modal';

import { LocationData } from '@/app/listings/[listingId]/ListingClient';

import useCategoryModal from '@/hooks/useCategoryModal';
import Heading from '../Heading';
import CategoryInput from '../inputs/CategoryInput';
import { getIcon } from '../navbar/Categories';
import { getCategory } from '@/actions/categories/getCategories';
import Counter from '../inputs/Counter';
import useInfoModal from '@/hooks/useInfoModal';

const InfoModal = () => {
    const infoModal = useInfoModal();
    const router = useRouter();
    const params = useSearchParams();

    const [maxGuests, setMaxGuests] = useState<number>(1);
    const [numBedrooms, setNumBedrooms] = useState<number>(1);
    const [numBathrooms, setNumBathrooms] = useState<number>(1);

    const onSubmit = useCallback(async () => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString());
        }
        const updateQuery: any = {
            ...currentQuery,
            maxGuests,
            numBedrooms,
            numBathrooms,
        };

        const url = qs.stringifyUrl(
            {
                url: '/search',
                query: updateQuery,
            },
            { skipNull: true },
        );

        infoModal.onClose();
        router.push(url);
    }, [params, infoModal, router, maxGuests, numBathrooms, numBedrooms]);

    let bodyContent = (
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

    return (
        <Modal
            isOpen={infoModal.isOpen}
            onClose={infoModal.onClose}
            onSubmit={onSubmit}
            title="Filters"
            actionLabel={'xác nhận'}
            body={bodyContent}
        ></Modal>
    );
};

export default InfoModal;
