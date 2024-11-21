'use client';

import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from './MenuItem';

export const navigates = [
    {
        label: 'Hôm nay',
        link: '/hosting',
    },
    {
        label: 'Lịch',
        link: '/hosting/multicalendar',
    },
    {
        label: 'Nhà/phòng cho thuê',
        link: '/hosting/listings',
    },
    {
        label: 'Tin nhắn',
        link: '/hosting/messages',
    },
];

export const Navigates = () => {
    const router = useRouter();
    const [activeLink, setActiveLink] = useState<string>('');
    const [isOpen, setIsOpen] = useState(false);

    const handleNavigation = (link: string) => {
        setActiveLink(link); // Cập nhật link hiện tại là active
        router.push(link); // Điều hướng đến URL mới
    };

    const toggleOppen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-6">
                {navigates.map((navigate, index) => {
                    const isActive = activeLink === navigate.link;
                    return (
                        <div
                            key={index}
                            onClick={() => handleNavigation(navigate.link)}
                            className="hidden md:block text-sm font-semibold px-3 py-4 cursor-pointer transition text-center"
                        >
                            <span
                                className={`inline-block pb-1 ${
                                    isActive
                                        ? 'border-b-2 border-black text-black'
                                        : 'text-gray-500 hover:border-b-2 hover:border-black'
                                }`}
                            >
                                {navigate.label}
                            </span>
                        </div>
                    );
                })}

                <div
                    className="hidden md:block text-sm font-semibold px-3 py-4 cursor-pointer text-gray-500 hover:border-b-2 hover:border-black transition text-center relative"
                    onClick={toggleOppen}
                >
                    Menu
                    <KeyboardArrowDownIcon />
                    <div className="absolute flex flex-col items-start rounded-xl shadow-md w-[20vw]  bg-white overflow-hidden -right-[200px] top-12 text-sm z-10">
                        {isOpen && (
                            <>
                                <MenuItem label="Đặt phòng" onClick={() => {}} />
                                <MenuItem label="Thu thập" onClick={() => {}} />
                                <MenuItem label="Phân tích" onClick={() => {}} />
                                <MenuItem label="Tạo mục cho thuê mới" onClick={() => {}} />
                                <hr className="w-full" />
                                <MenuItem label="Sách hướng dẫn" onClick={() => {}} />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
