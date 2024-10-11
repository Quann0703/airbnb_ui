'use client';

import { Range } from 'react-date-range';
import Heading from '../Heading';
import { CalenderIcon, CheckIcon, CleanIcon, HomeIcon, NextArrowIcon } from '../Icon';
import ListingDetail from './ListingDetail';
import ListingOffer from './ListingOffer';
import Calender from '../inputs/Calender';
import KeyboardAltRoundedIcon from '@mui/icons-material/KeyboardAltRounded';
import { format } from 'date-fns';

interface ListingInfoProps {
    guests?: number;
    bedroom?: number;
    bathroom?: number;
    description?: string;
    category?: SafeCategory;
    address?: string;
    dateRange: Range;
    disabledDates?: Date[];
    onChangeDate: (value: Range) => void;
    dayCount?: number;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
    dateRange,
    guests,
    bathroom,
    bedroom,
    description,
    category,
    address,
    disabledDates,
    onChangeDate,
    dayCount,
}) => {
    const formattedStartDate = dateRange.startDate ? format(dateRange.startDate, 'MMM d, yyyy') : 'N/A';
    const formattedEndDate = dateRange.endDate ? format(dateRange.endDate, 'MMM d, yyyy') : 'N/A';
    return (
        <div className="col-span-4 flex flex-col gap-8">
            {/* Heading */}
            <div className="flex flex-col gap-2 items-start">
                <Heading title={`Toàn bộ ${category?.name} tại ${address}`} font />
                <div className="flex items-center gap-2">
                    <span className="text-black text-lg font-normal">{guests} guests</span>
                    <span className="w-0.5 h-0.5 bg-black rounded-full"></span>
                    <span className="text-black text-lg font-normal">{bedroom} bedroom</span>
                    <span className="w-0.5 h-0.5 bg-black rounded-full"></span>
                    <span className="text-black text-lg font-normal">1 bed</span>
                    <span className="w-0.5 h-0.5 bg-black rounded-full"></span>
                    <span className="text-black text-lg font-normal">{bathroom} bath</span>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-gray-200 my-7"></div>

                {/* Listing Details */}
                <div className="flex flex-col gap-4">
                    <ListingDetail
                        icon={<HomeIcon className="w-8 h-8" />}
                        title="Toàn bộ căn hộ"
                        description="Bạn sẽ có 1 căn hộ cho bản thân bạn"
                    />
                    <ListingDetail
                        icon={<CleanIcon className="w-8 h-8" />}
                        title="Dọn dẹp nâng cao"
                        description="Chủ nhà này cam kết tuân thủ quy trình dọn dẹp nâng cao 5 bước của Airbnb."
                    />
                    <ListingDetail
                        icon={<CheckIcon className="w-8 h-8" />}
                        title="Tự nhận phòng"
                        description="Tự nhận phòng bằng cách nhập mã số vào cửa."
                    />
                    <ListingDetail icon={<CalenderIcon className="w-8 h-8" />} title="Hủy phòng miễn phí" />
                </div>

                {/* Divider */}
                <div className="w-full border-t border-gray-200 my-7"></div>

                {/* Description */}
                <p className="text-lg font-normal text-black leading-normal w-full">
                    {description}
                    <br />
                    ...
                </p>
                <div className="flex items-center gap-1 cursor-pointer">
                    <span className="text-black text-base font-medium underline">Show more</span>
                    <NextArrowIcon className="w-4 h-4" />
                </div>

                {/* Divider */}
                <div className="w-full border-t border-gray-200 my-7"></div>

                {/* Listing Offers */}
                <ListingOffer />

                {/* Divider */}
                <div className="w-full border-t border-gray-200 my-7"></div>

                {/* Calendar Section */}
                <div className="flex flex-col gap-8 w-full">
                    <div className="text-2xl font-medium">
                        {dayCount} đêm tại {address}
                    </div>
                    <div className="text-gray-500 text-sm">
                        {formattedStartDate} - {formattedEndDate}
                    </div>

                    {/* Calendar */}
                    <Calender
                        value={dateRange}
                        disabledDates={disabledDates}
                        onChange={(value) => onChangeDate(value.selection)}
                    />

                    {/* Actions */}
                    <div className="flex justify-between items-center w-full px-5">
                        <div className="flex items-center px-2 rounded-full hover:bg-gray-300 cursor-pointer">
                            <KeyboardAltRoundedIcon fontSize="medium" />
                        </div>
                        <div className="text-black text-sm font-medium underline hover:bg-gray-300 px-2 rounded-md cursor-pointer">
                            Clear dates
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingInfo;
