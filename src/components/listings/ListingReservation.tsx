'use client';
import useDebounce from '@/hooks/useDebounce';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';
import { useEffect, useMemo, useState } from 'react';
import GuestSelector from '../GuestsSelection';
import { Range } from 'react-date-range';
import { formatCurrency } from '@/utils/formatCurrency';
import { Guest } from '@/app/listings/[listingId]/ListingClient';
import DateSelector from '../inputs/DateSelection';
import { useRouter } from 'next/navigation';
import useBookingStore from '@/hooks/useBookingStore';

interface ListingReserVationProps {
    price?: number;
    totalPrice?: number;
    disabled?: boolean;
    disabledDates?: Date[];
    dateRange: Range;
    guests: Guest;
    onGuestsChange?: (adults: number, children: number, infants: number) => void;
    onChangeDate: (value: Range) => void;
    dayCount?: number;
    propertyId?: string;
}

const ListingReservation: React.FC<ListingReserVationProps> = ({
    price,
    totalPrice,
    disabled,
    disabledDates,
    dateRange,
    guests,
    onGuestsChange,
    onChangeDate,
    dayCount,
    propertyId,
}) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isFixed, setIsFixed] = useState(false);
    const [isGuestsSelectionOpen, setIsGuestsSelectionOpen] = useState(false);
    const [isDateSelectionOpen, setIsDateSelectionOpen] = useState(false);
    const { adults, children, infants } = guests;
    const router = useRouter();
    const storeBooking = useBookingStore();

    const onReservation = () => {
        if (dateRange.startDate && dateRange.endDate && price !== undefined) {
            // Chuyển trang trước khi đặt các giá trị
            router.push(`/book/${propertyId}`);

            // Đặt ngày bắt đầu và kết thúc
            storeBooking.setDates(dateRange.startDate, dateRange.endDate);

            // Đặt giá mỗi ngày
            storeBooking.setDailyRate(price);

            storeBooking.setNumberGuests(guestsCount);

            // Tính tổng tiền
            storeBooking.calculateTotal();
        } else {
            console.error('Ngày bắt đầu hoặc ngày kết thúc không hợp lệ');
        }
    };
    const handleGuestsSelectionToggle = () => {
        setIsGuestsSelectionOpen((prev) => !prev);
    };

    const handleDateSelectionToggle = () => {
        setIsDateSelectionOpen((prev) => !prev);
    };

    const handleCloseDate = () => {
        setIsDateSelectionOpen(false);
    };

    const handleClose = () => {
        setIsGuestsSelectionOpen(false);
    };
    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    const handleClickInput = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsDateSelectionOpen((prev) => !prev);
    };

    const debouncedScrollPosition = useDebounce(scrollPosition, 300);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (debouncedScrollPosition > 700 && debouncedScrollPosition <= 2000) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    }, [debouncedScrollPosition]);

    const guestsCount = useMemo(() => {
        let guest = 1;
        if (adults > 1 || children > 1 || infants > 1) {
            guest = adults + children + infants;
        }
        return guest;
    }, [adults, children, infants]);
    return (
        <>
            <div
                className={`bg-white rounded-xl  border-neutral-200  md:w-[400px] 
                    ${isFixed ? 'sticky top-[100px] w-[400px] fixed-transition' : ''}
                `}
            >
                <div className="h-auto p-6 bg-white rounded-lg shadow-md border border-gray-200 flex flex-col gap-4">
                    {/* Price & Reviews */}
                    <div className="flex justify-start  items-center">
                        <div className="flex items-center gap-1">
                            <div className="text-2xl font-semibold">đ{formatCurrency(price as number)}</div>
                            <div className="text-base font-light text-gray-500">/ night</div>
                        </div>
                    </div>

                    {/* Date Selection */}
                    <div className="border border-gray-300 rounded-lg divide-y">
                        <div className="flex relative" onClick={handleDateSelectionToggle}>
                            <div className="flex-1 p-4 border-r border-gray-300" onClick={handleClickInput}>
                                <div className="text-xs font-semibold">CHECK-IN</div>
                                <div className="text-gray-500">{dateRange?.startDate?.toLocaleDateString()}</div>
                            </div>
                            <div className="flex-1 p-4" onClick={handleClickInput}>
                                <div className="text-xs font-semibold">CHECKOUT</div>
                                <div className="text-gray-500">{dateRange?.endDate?.toLocaleDateString()}</div>
                            </div>

                            {isDateSelectionOpen && (
                                <div
                                    className="absolute top-[-15%] mt-2 left-[-60%] bg-white shadow-sm z-50"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <DateSelector
                                        onClose={handleCloseDate}
                                        dateRange={dateRange}
                                        onChangeDate={onChangeDate}
                                        dayCount={dayCount}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="p-4 relative">
                            <div className="text-xs font-semibold">GUESTS</div>
                            <div className="text-gray-500 cursor-pointer" onClick={handleGuestsSelectionToggle}>
                                {guestsCount} guests
                            </div>
                            <div className="absolute top-full mt-2 left-0 bg-white   shadow-sm z-50">
                                {isGuestsSelectionOpen && (
                                    <GuestSelector onClose={handleClose} onGuestsChange={onGuestsChange} />
                                )}
                            </div>
                        </div>
                    </div>
                    {/* Reserve Button */}
                    <button
                        className="w-full bg-red-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition"
                        onClick={onReservation}
                    >
                        Reserve
                    </button>

                    {/* Notice */}
                    <div className="text-center text-gray-500 text-sm">You won’t be charged yet</div>

                    {/* Pricing Breakdown */}
                    {/* <div className="space-y-2">
                        <div className="flex justify-between">
                            <div>$79 x 7 nights</div>
                            <div>$555</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Weekly discount</div>
                            <div className="text-emerald-500">-$28</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Cleaning fee</div>
                            <div>$62</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Service fee</div>
                            <div>$83</div>
                        </div>
                        <div className="flex justify-between">
                            <div>Occupancy taxes and fees</div>
                            <div>$29</div>
                        </div>
                    </div> */}

                    {/* Divider */}
                    <div className="border-t border-gray-200"></div>

                    {/* Total */}
                    <div className="flex justify-between font-semibold text-lg">
                        <div>Total</div>
                        <div>đ{formatCurrency(totalPrice as number)}</div>
                    </div>
                </div>
                <div className="h-5 w-[400px] mt-5 justify-center items-center gap-2 inline-flex">
                    <EmojiFlagsOutlinedIcon />
                    <div className="text-gray-500 text-sm font-normal font-inter underline leading-tight">
                        Report this listing
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListingReservation;
