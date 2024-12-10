'use client';

import { LocationData } from '@/app/listings/[listingId]/ListingClient';
import React from 'react';
import AsyncSelect from 'react-select/async';

interface SearchBarProps {
    onCitySelect: (data: LocationData) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onCitySelect }) => {
    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            padding: '8px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px',
            boxShadow: 'none',
            '&:hover': {
                borderColor: '#aaa',
            },
        }),
    };
    const loadOptions = async (inputValue: string) => {
        if (!inputValue) return [];
        try {
            const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(inputValue)}.json`;

            const response = await fetch(`${url}?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}&limit=5`);
            const data = await response.json();

            return data.features.map((feature: any) => ({
                value: feature.geometry.coordinates,
                label: feature.place_name,
                region: feature.context?.find((ctx: any) => ctx.id.includes('region'))?.text || 'Không rõ',
            }));
        } catch (error) {
            console.error('Lỗi khi tải gợi ý:', error);
            return [];
        }
    };

    const handleChange = (selectedOption: any) => {
        if (selectedOption && selectedOption.value) {
            const [longitude, latitude] = selectedOption.value;

            const locationData: LocationData = {
                value: selectedOption.label.toLowerCase().replace(/\s+/g, '-'),
                label: selectedOption.label,
                flag: `https://flagcdn.com/w320/vn.png`,
                latlng: [latitude, longitude],
                region: selectedOption.region || 'Không rõ',
            };

            onCitySelect(locationData);
        }
    };

    return (
        <div className="w-full max-w-xl ">
            <AsyncSelect
                loadOptions={loadOptions}
                onChange={handleChange}
                placeholder="Nhập tên thành phố..."
                className="shadow rounded"
                cacheOptions
                defaultOptions
                styles={customStyles}
            />
        </div>
    );
};

export default SearchBar;
