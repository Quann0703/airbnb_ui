'use client';

import { LocationData } from '@/app/listings/[listingId]/ListingClient';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import AsyncSelect from 'react-select/async';

interface CountrySelectProps {
    selectedCountry?: LocationData | null;
    onCountrySelect: (data: LocationData) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ onCountrySelect, selectedCountry }) => {
    const [countries, setCountries] = useState<any[]>([]);

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
        menu: (provided: any) => ({
            ...provided,
            zIndex: 20, // Đảm bảo dropdown hiển thị trên các thành phần khác
        }),
    };

    const fetchCountries = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            const countryList = data.map((country: any) => ({
                value: country.cca2,
                label: country.name.common,
                flag: country.flags.png,
                region: country.region || 'Unknown',
                latlng: country.latlng, // Tọa độ [latitude, longitude]
                code: country.cca3,
            }));
            setCountries(countryList);
            return countryList;
        } catch (error) {
            console.error('Lỗi khi tải danh sách quốc gia:', error);
            return [];
        }
    };

    const loadOptions = async (inputValue: string) => {
        if (countries.length === 0) {
            const data = await fetchCountries();
            return filterCountries(data, inputValue);
        }
        return filterCountries(countries, inputValue);
    };

    const filterCountries = (countries: any[], inputValue: string) => {
        return countries.filter((country) => country.label.toLowerCase().includes(inputValue.toLowerCase()));
    };

    const handleChange = (selectedOption: any) => {
        if (selectedOption) {
            const countryData: LocationData = {
                value: selectedOption.value,
                label: selectedOption.label,
                flag: selectedOption.flag,
                latlng: selectedOption.latlng,
                region: selectedOption.region,
            };

            onCountrySelect(countryData);
        }
    };

    return (
        <div className="w-full max-w-xl z-10">
            <AsyncSelect
                loadOptions={loadOptions}
                onChange={handleChange}
                value={selectedCountry ? { label: selectedCountry.label, value: selectedCountry.value } : null}
                placeholder="Chọn quốc gia..."
                className="shadow rounded"
                cacheOptions
                defaultOptions
                styles={customStyles}
                formatOptionLabel={(option: any) => (
                    <div className="flex items-center gap-2">
                        <Image src={option.flag} alt={option.label} width={24} height={16} className="w-6 h-4" />
                        {option.label}
                    </div>
                )}
            />
        </div>
    );
};

export default CountrySelect;
