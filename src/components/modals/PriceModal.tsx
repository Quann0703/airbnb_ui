'use client';

import qs from 'query-string';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

import Modal from './Modal';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Heading from '../Heading';
import usePriceModal from '@/hooks/usePriceModal';
import { formatCurrency } from '@/utils/formatCurrency';

const PriceModal = () => {
    const priceModal = usePriceModal();
    const router = useRouter();
    const params = useSearchParams();

    const [priceRange, setPriceRange] = useState<number[]>([250000, 540000]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setPriceRange(newValue);
        }
    };

    const onSubmit = useCallback(async () => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString());
        }
        const updatedQuery = {
            ...currentQuery,
            minPrice: priceRange[0],
            maxPrice: priceRange[1],
        };

        const url = qs.stringifyUrl(
            {
                url: '/search',
                query: updatedQuery,
            },
            { skipNull: true },
        );

        priceModal.onClose();
        router.push(url);
    }, [params, priceModal, router, priceRange]);

    return (
        <Modal
            isOpen={priceModal.isOpen}
            onClose={priceModal.onClose}
            onSubmit={onSubmit}
            title="Khoảng giá"
            actionLabel="Xác nhận"
            body={
                <div className="flex flex-col gap-8">
                    <Heading title="Khoảng giá?" subtitle="Giá theo đêm chưa bao gồm phí và thuế" />
                    <Box padding={4}>
                        <Box sx={{ position: 'relative', margin: '16px 0' }}>
                            <Slider
                                sx={{ color: '#ff385c', height: 4 }}
                                value={priceRange}
                                onChange={handleChange}
                                min={0}
                                max={5400000}
                                step={1000}
                                valueLabelDisplay="auto"
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2">Tối thiểu: {formatCurrency(priceRange[0])}</Typography>
                        <Typography variant="body2">Tối đa: {formatCurrency(priceRange[1])}</Typography>
                    </Box>
                </div>
            }
        />
    );
};

export default PriceModal;
