'use client';
import React, { useState, useRef, useEffect } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths } from 'date-fns';
import Heading from '@/components/Heading';

const CalenderEdit = () => {
    const [months, setMonths] = useState<Date[]>([new Date(), addMonths(new Date(), 1)]); // Danh sách tháng
    const [currentMonthTitle, setCurrentMonthTitle] = useState<string>(format(new Date(), 'MMMM yyyy')); // Tiêu đề Heading
    const containerRef = useRef<HTMLDivElement | null>(null); // Ref của container
    const monthRefs = useRef<(HTMLDivElement | null)[]>([]); // Danh sách ref cho từng tháng

    const getDaysInMonth = (month: Date) => {
        const start = startOfMonth(month);
        const end = endOfMonth(month);
        return eachDayOfInterval({ start, end });
    };
    console.log(months);

    const handleScroll = () => {
        if (!containerRef.current) return;

        const containerTop = containerRef.current.getBoundingClientRect().top;

        for (let i = 0; i < monthRefs.current.length; i++) {
            const monthRef = monthRefs.current[i];
            if (monthRef) {
                const monthTop = monthRef.getBoundingClientRect().top;

                if (monthTop - containerTop >= 0) {
                    setCurrentMonthTitle(format(months[i], 'MMMM yyyy'));
                    break;
                }
            }
        }
    };

    const handleLoadMoreMonths = () => {
        if (!containerRef.current) return;
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

        if (scrollTop + clientHeight >= scrollHeight - 50) {
            const nextMonth = addMonths(months[months.length - 1], 1);
            setMonths((prev) => [...prev, nextMonth]);
        }

        if (scrollTop <= 50) {
            const prevMonth = subMonths(months[0], 1);
            setMonths((prev) => [prevMonth, ...prev]);
        }
    };

    const handleCombinedScroll = () => {
        handleScroll();
        handleLoadMoreMonths();
    };

    useEffect(() => {
        monthRefs.current = monthRefs.current.slice(0, months.length);
    }, [months]);

    return (
        <div className="flex flex-col h-full relative bg-white">
            <div className="p-6 flex items-center bg-white border-t border-gray-300">
                <div className="flex-1 min-w-[0]">
                    <Heading
                        title={`Tháng: ${currentMonthTitle}`}
                        subtitle="Xem lịch và ưu đãi"
                        className="text-gray-800"
                    />
                </div>
            </div>

            <ul className="pl-0 m-0 border-b border-[#EBEBEB] border-solid text-xs">
                {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((day) => (
                    <li key={day} className="float-left pl-6 text-[#6A6A6A] w-[calc(100%/7)]">
                        <span>{day}</span>
                    </li>
                ))}
            </ul>
            <div
                ref={containerRef}
                onScroll={handleCombinedScroll}
                className="flex-grow h-[600px] relative overflow-y-scroll z-[1] border border-gray-200"
            >
                {months.map((month, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            monthRefs.current[index] = el;
                        }}
                        className=" border-b border-gray-300"
                    >
                        <h2 className="ml-6 my-6 text-xl font-semibold text-gray-800 mb-4">
                            {format(month, 'MMMM yyyy')}
                        </h2>
                        <div className="grid grid-cols-7 gap-4  py-4">
                            {getDaysInMonth(month).map((date, i) => (
                                <div
                                    key={i}
                                    className="border border-gray-200 h-[146px] bg-white rounded-lg p-4 text-center text-sm text-gray-800"
                                >
                                    <div className="px-6 pb-4 pt-[26px] transition-transform relative w-full h-full">
                                        <div className="flex flex-col w-full h-full justify-between">
                                            <div className="flex text-base border-spacing-1 tracking-normal items-center justify-between w-full font-medium">
                                                <div className="text-[#222222] font-bold px-1 whitespace-nowrap overflow-hidden overflow-ellipsis z-[3] flex items-center min-w-[0] justify-between gap-2">
                                                    {format(date, 'dd')}
                                                </div>
                                            </div>
                                            <div className="text-base flex items-center max-w-full font-semibold">
                                                ₫380.852
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalenderEdit;
