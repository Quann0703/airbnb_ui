'use client';
import { formatCurrency } from '@/utils/formatCurrency';
import { Switch } from '@mui/material';
import { count } from 'console';
import Link from 'next/link';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { divIcon } from 'leaflet';

interface PriceOptionsProps {
    active?: boolean;
    toggle?: boolean;
    text?: boolean;
    subTitle?: string;
    title: string;
    price?: number;
    count?: number;
    fullText?: boolean;
    activeTitle?: string;
    coupon?: boolean;
    subCount?: string;
    dayCount?: number;
    maxDay?: number;
    day?: boolean;
    titleDay?: string;
}
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const PriceOptions: React.FC<PriceOptionsProps> = ({
    active,
    title,
    text,
    toggle,
    count,
    fullText,
    price,
    activeTitle,
    coupon,
    subTitle,
    subCount,
    dayCount,
    maxDay,
    day,
    titleDay,
}) => {
    return (
        <>
            {text && (
                <Link
                    href={'/hosting/multicalender'}
                    className="border-[1px] border-solid transition-box-shadow-transform bg-transparent border-none rounded-none m-0 p-0 text-inherit cursor-pointer text-inherit block no-underline h-full w-full font-inherit outline-none"
                >
                    <div className="p-6 rounded-2xl border-[1px] border-solid border-gray-400">
                        <div className="mb-2 mr-1 text-sm font-semibold">{title}</div>
                        <div className="h-auto visible w-full text-[30.6px] leading-[41.9421px] tracking-[0px] m-0 font-bold">
                            {price ? <div> {formatCurrency(price)}</div> : <div>{dayCount}</div>}
                        </div>
                    </div>
                </Link>
            )}
            {active && (
                <div className="p-6 rounded-2xl border-[1px] border-solid border-gray-400 flex items-center justify-between gap-3">
                    <Link
                        href={'/hosting/multicalender'}
                        className="border-[1px]  transition-box-shadow-transform bg-transparent border-none rounded-none m-0 p-0 text-inherit text-base cursor-pointer  block no-underline h-full w-full font-inherit outline-none"
                    >
                        <div>{title}</div>
                    </Link>
                    <div className="whitespace-nowrap">
                        <Link
                            href={'/hosting/multicalender'}
                            className="border-[1px]  transition-box-shadow-transform bg-transparent border-none rounded-lg font-semibold  p-[10px] text-inherit cursor-pointer  hover:bg-gray-100 underline decoration-solid"
                        >
                            {activeTitle}
                        </Link>
                    </div>
                </div>
            )}
            {toggle && (
                <div className="p-6 rounded-2xl border-[1px] border-solid border-gray-400 flex items-center justify-between gap-3">
                    <Link
                        href={'/hosting/multicalender'}
                        className="border-[1px]  transition-box-shadow-transform bg-transparent border-none rounded-none m-0 p-0 text-inherit text-base cursor-pointer  block no-underline h-full w-full font-inherit outline-none"
                    >
                        <div>{title}</div>
                    </Link>
                    <Switch {...label} />
                </div>
            )}
            {coupon && (
                <div className="relative">
                    <Link
                        href={''}
                        className="border-[1px]  transition-box-shadow-transform bg-transparent border-none rounded-none m-0 p-0  cursor-pointer  block  text-inherit "
                    >
                        <div className="p-6 rounded-2xl border-[1px] border-solid border-gray-400 flex items-center justify-between ">
                            <div className="flex-grow">
                                <div className="mb-2 mr-1 text-sm font-semibold">{title}</div>
                                <div className="mt-1 text-gray-400 text-xs">{subTitle}</div>
                                <div className="mt-[10px] flex justify-between gap-4">
                                    <div className="text-[2rem] leading-9 font-bold">{count}%</div>
                                    <div className="text-right pb-[2px] text-xs">{subCount}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
            {fullText && (
                <div className="relative">
                    <Link
                        href={''}
                        className="border-[1px]  transition-box-shadow-transform bg-transparent border-none rounded-none m-0 p-0  cursor-pointer  block  text-inherit "
                    >
                        <div className="p-6 rounded-2xl border-[1px] border-solid border-gray-400 flex items-center justify-between ">
                            <div className="flex-auto w-[calc(100%-24px)]">
                                <div className="mb-2 mr-1 text-sm font-semibold">{title}</div>
                                <div className="mt-1 text-gray-400 text-xs">{subTitle}</div>
                            </div>
                            <div className="ml-1">
                                <ArrowForwardIosIcon fontSize="small" />
                            </div>
                        </div>
                    </Link>
                </div>
            )}
            {day && (
                <div className="rounded-2xl border-[1px] border-solid overflow-hidden">
                    <Link
                        href={''}
                        className="border-[1px]  transition-box-shadow-transform bg-transparent border-none rounded-none m-0 p-0  cursor-pointer  block  text-inherit "
                    >
                        <div className="py-4  px-6   border-solid border-gray-400">
                            <div className="mb-2 mr-1 text-sm font-semibold">{title}</div>
                            <div className="h-auto visible w-full text-[30.6px] leading-[41.9421px] tracking-[0px] m-0 font-bold">
                                <div>{dayCount}</div>
                            </div>
                        </div>
                    </Link>
                    <Link
                        href={''}
                        className="border-[1px]  transition-box-shadow-transform bg-transparent border-none rounded-none m-0 p-0  cursor-pointer  block  text-inherit "
                    >
                        <div className="py-4  px-6  border-t-[1px] border-solid border-inherit">
                            <div className="mb-2 mr-1 text-sm font-semibold">{titleDay}</div>
                            <div className="h-auto visible w-full text-[30.6px] leading-[41.9421px] tracking-[0px] m-0 font-bold">
                                <div>{maxDay}</div>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
        </>
    );
};
export default PriceOptions;
