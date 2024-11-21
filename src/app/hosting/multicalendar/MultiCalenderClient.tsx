'use client';
import { useState } from 'react';
import Button from '@/components/Button';
import PriceOptions from '@/components/inputs/PriceOptions';
import Heading from '@/components/Heading';
import SelectRoom from '@/components/selects/selectRoom';
import CustomSelect from '@/components/selects/selectRoom';
import CalenderEdit from './CalenderEdit';
const options = [
    { label: 'Cùng ngày', value: 'same_day' },
    { label: 'Ít nhất là 1 ngày', value: 'one_day' },
    { label: 'Ít nhất là 2 ngày', value: 'two_days' },
    { label: 'Ít nhất là 3 ngày', value: 'three_days' },
];
const optionTimes = [
    { label: '06:00', value: '6' },
    { label: '07:00', value: '7' },
    { label: '08:00', value: '8' },
    { label: '09:00', value: '9' },
    { label: '10:00', value: '10' },
    { label: '11:00', value: '11' },
    { label: '12:00', value: '12' },
    { label: '13:00', value: '13' },
    { label: '14:00', value: '14' },
    { label: '15:00', value: '15' },
    { label: '16:00', value: '16' },
    { label: '17:00', value: '17' },
    { label: '18:00', value: '18' },
    { label: '19:00', value: '19' },
    { label: '20:00', value: '20' },
    { label: '21:00', value: '21' },
    { label: '22:00', value: '22' },
    { label: '23:00', value: '23' },
    { label: '00:00', value: '24' },
];
const optionPrepare = [
    {
        label: 'Không có',
        value: '1',
    },
    {
        label: '1 đêm trước và sau mỗi kỳ ở',
        value: '2',
    },
    {
        label: '2 đêm trước và sau mỗi kỳ ở',
        value: '3',
    },
];
const optionAvailableRoom = [
    {
        label: 'Trước 24 tháng',
        value: '1',
    },
    {
        label: 'Trước 12 tháng',
        value: '2',
    },
    {
        label: 'Trước 9 tháng',
        value: '3',
    },
    {
        label: 'Trước 6 tháng',
        value: '3',
    },
    {
        label: 'Trước 3 tháng',
        value: '3',
    },
    {
        label: 'Ngày mặc định không nhận khách',
        value: '3',
    },
];
const MultiCalenderClient = () => {
    const [activeButton, setActiveButton] = useState('pricing');

    return (
        <div className="w-full mx-auto pt-[89px] flex h-screen overflow-hidden">
            <main
                className=" relative flex-grow w-full before:-mb-[1px]
                            before:block
                            before:h-[1px]"
            >
                <CalenderEdit />
            </main>
            <section className="border-l border-gray-300 w-[370px] min-w-[370px] z-[1] hidden lg:block xl:block overflow-y-auto">
                <div
                    className="
                            bg-white h-[100vh]
                            relative before:content-[''] 
                            before:-mb-[1px]
                            before:block
                            before:h-[1px]
                            custom-scrollbar-gutter"
                >
                    <div className="p-6 lg:py-8">
                        <div className="mb-4 text-[1.625rem] leading-7 font-bold">
                            <span>Cài đặt</span>
                        </div>
                        <div className="mb-8 text-lg text-gray-500">
                            Các tùy chọn này áp dụng cho tất cả các đêm, trừ khi bạn tùy chỉnh theo ngày.
                        </div>
                        <div>
                            <div className="-mx-3 py-3">
                                <div className="flex whitespace-nowrap overflow-visible gap-1">
                                    <div className="relative mr-[6px]">
                                        <Button
                                            label="Định giá"
                                            text
                                            className={`relative ${
                                                activeButton === 'pricing'
                                                    ? "after:content-[''] after:absolute after:-bottom-[6px] after:w-[calc(100%)] after:h-[2px] after:left-[0px] after:bg-gray-900"
                                                    : ''
                                            }`}
                                            onClick={() => setActiveButton('pricing')}
                                        />
                                    </div>

                                    <div className="relative mr-[6px]">
                                        <Button
                                            label="Tình trạng còn phòng"
                                            text
                                            className={`relative ${
                                                activeButton === 'availability'
                                                    ? "after:content-[''] after:absolute after:-bottom-[6px] after:w-[calc(100%)] after:h-[2px] after:left-[0px] after:bg-gray-900"
                                                    : ''
                                            }`}
                                            onClick={() => setActiveButton('availability')}
                                        />
                                    </div>
                                </div>
                                <div className="bg-gray-300 h-[1px] mt-1"></div>
                            </div>
                        </div>
                        {activeButton === 'pricing' && (
                            <div>
                                <div className="my-8 lg:mb-4">
                                    <div className="flex items-baseline justify-between mb-6">
                                        <section>
                                            <h2 className="p-0 m-0">
                                                <div className="text-xl font-bold">Giá cơ sở</div>
                                            </h2>
                                        </section>
                                        <div>
                                            <Button small text label="VND" className="!font-bold" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 relative">
                                        <PriceOptions title="Mỗi đêm" price={380852} text />
                                        <PriceOptions title="Giá tùy chỉnh cho cuối tuần" active activeTitle="Thêm" />
                                        <PriceOptions title="Định giá thông minh" toggle />
                                    </div>
                                </div>
                                <div className="my-8 lg:mb-4">
                                    <Heading
                                        title="Giảm giá"
                                        subtitle="Điều chỉnh giá để thu hút thêm khách"
                                        fontSize="text-xl"
                                        fontSizeSubTitle="text-sm"
                                    />
                                    <div className="flex flex-col gap-4 relative mt-6">
                                        <PriceOptions
                                            title="Theo tuần"
                                            subTitle="Cho 7 đêm trở lên"
                                            coupon
                                            count={5}
                                            subCount="Trung bình theo tuần là ₫2.532.666 "
                                        />
                                        <PriceOptions
                                            title="Theo tháng"
                                            subTitle="Cho 28 đêm trở lên"
                                            coupon
                                            count={15}
                                            subCount="Trung bình theo tháng là ₫9.532.666 "
                                        />
                                        <PriceOptions
                                            title="Ưu đãi giảm giá khác"
                                            subTitle="Ưu đãi cho khách đặt sớm"
                                            fullText
                                        />
                                    </div>
                                </div>
                                <div className="my-8 lg:mb-4">
                                    <Heading
                                        title="Khuyến mãi"
                                        subtitle="Đưa ra các mức giảm giá cho kỳ ở ngắn hạn để thu hút lượt đặt phòng mới"
                                        fontSize="text-xl"
                                        fontSizeSubTitle="text-sm"
                                    />
                                    <div className="flex flex-col gap-4 relative mt-6">
                                        <PriceOptions
                                            title="Khuyến mãi cho nhà/phòng cho thuê mới"
                                            subTitle="Đón những vị khách đầu tiên đến nhà của bạn"
                                            fullText
                                        />
                                    </div>
                                </div>
                                <div className="my-8 lg:mb-4">
                                    <Heading title="Phụ phí" fontSize="text-xl" />
                                    <div className="flex flex-col gap-4 relative mt-6">
                                        <PriceOptions title="Phí" subTitle="Vệ sinh, thú cưng,khách bổ sung" fullText />
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeButton === 'availability' && (
                            <div>
                                <div className="my-8 lg:mb-4">
                                    <div className="flex items-baseline justify-between mb-6">
                                        <section>
                                            <h2 className="p-0 m-0">
                                                <div className="text-xl font-bold">Thời gian ở</div>
                                            </h2>
                                        </section>
                                    </div>
                                    <div className="flex flex-col gap-4 relative">
                                        <PriceOptions
                                            title="Số đêm tối thiểu"
                                            titleDay="Số đêm tối đa"
                                            day
                                            dayCount={2}
                                            maxDay={365}
                                        />
                                        <PriceOptions title="Thời gian của chuyến đi tùy chỉnh" fullText />
                                    </div>
                                </div>
                                <div className="my-8 lg:mb-4">
                                    <div className="flex items-baseline justify-between mb-6">
                                        <section>
                                            <h2 className="p-0 m-0">
                                                <div className="text-xl font-bold">Tình trạng còn phòng</div>
                                            </h2>
                                        </section>
                                    </div>
                                    <div className="flex flex-col gap-4 relative">
                                        <CustomSelect rules options={options} />
                                        <CustomSelect options={optionTimes} title="Đặt phòng vào ngày đến" />
                                        <CustomSelect options={optionPrepare} title="Thời gian chuẩn bị" />
                                        <CustomSelect
                                            options={optionAvailableRoom}
                                            title="Khoảng thời gian còn phòng"
                                        />
                                    </div>
                                </div>
                                <div className="my-8 lg:mb-4">
                                    <Heading
                                        title="Kết nối lịch"
                                        subtitle="Đồng bộ hóa tất cả lịch đón tiếp khách của bạn để lịch tự động cập nhập"
                                        fontSize="text-xl"
                                        fontSizeSubTitle="text-sm"
                                    />

                                    <div className="flex flex-col gap-4 relative mt-6">
                                        <PriceOptions title="Liên kết với trang web khác" fullText />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MultiCalenderClient;
