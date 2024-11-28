'use client';
import React, { useState } from 'react';
import Heading from '../Heading';
import { Checkbox } from '@mui/material';

interface DiscountInputProps {
    discountPresent?: number;
    title?: string;
    subTitle?: string;
    input?: boolean;
}

const DiscountInput: React.FC<DiscountInputProps> = ({ discountPresent = 0, title, subTitle, input }) => {
    const [currentDiscount, setCurrentDiscount] = useState<number>(discountPresent);

    // Hàm xử lý khi giá trị input thay đổi
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        if (!isNaN(value) && value >= 0) {
            setCurrentDiscount(value);
        } else if (event.target.value === '') {
            setCurrentDiscount(0); // Trường hợp xóa input về rỗng, mặc định là 0
        }
    };

    return (
        <div className="rounded-xl bg-[#F7F7F7] border border-inherit p-6">
            <div className="flex items-center justify-between">
                {/* Discount Input or Display */}
                <div className="basis-[54px] mx-4 md:mx-6">
                    {input ? (
                        <div className="relative flex min-h-[40px] max-w-[54px] text-center bg-white rounded-lg shadow-md">
                            <input
                                type="text"
                                placeholder="0"
                                value={currentDiscount}
                                onChange={handleInputChange}
                                className="w-full text-center border-none m-0 focus:outline-none"
                                min="0"
                            />
                        </div>
                    ) : (
                        <div className="text-center text-lg font-bold">{currentDiscount}%</div>
                    )}
                </div>

                {/* Title and Subtitle */}
                <div className="flex-1">
                    <Heading title={title} subtitle={subTitle} fontSize="text-lg" fontSizeSubTitle="text-sm" />
                </div>

                {/* Checkbox */}
                <Checkbox inputProps={{ 'aria-label': 'Checkbox demo' }} defaultChecked color="default" />
            </div>
        </div>
    );
};

export default DiscountInput;
