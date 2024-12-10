'use client';

import Image from 'next/image';
import PersonIcon from '@mui/icons-material/Person';
import { GardenIcon, NextArrowIcon, PolicyIcon, SafeIcon } from '../Icon';

interface ListingInfoHostProps {
    host?: SafeUser;
}
const ListingInfoHost: React.FC<ListingInfoHostProps> = ({ host }) => {
    const image = host?.image ? host?.image : 'https://i.pinimg.com/564x/6a/40/17/6a4017db63f7f8e7c56e406f829e6be2.jpg';
    return (
        <div className="w-full h-[250px]   rounded-2xl flex justify-center items-start">
            <div className="flex flex-col items-start w-full">
                <div className="flex justify-start items-start gap-16 w-full">
                    <div className="flex flex-col items-center gap-8 w-[395px]">
                        <div className="bg-white shadow-[0px_6px_20px_rgba(0,0,0,0.20)] justify-end  rounded-3xl border border-[#DDDDDD] p-8 flex flex-row gap-16 w-full">
                            <div className="flex flex-col items-center gap-2">
                                <div className="relative w-[104px] h-[104px]">
                                    <Image
                                        className="w-[104px] h-[104px] rounded-full object-cover"
                                        src={image}
                                        alt="Profile"
                                        fill
                                    />
                                    <div className="absolute top-[68px] left-[70px] flex flex-col items-start">
                                        <SafeIcon className="w-10 h-10 relative" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="flex flex-col items-start">
                                        <div className="text-center text-[#222222] text-2xl font-medium leading-[36.28px]">
                                            {host?.name}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <PersonIcon fontSize="medium" />
                                        <div className="flex flex-col items-center">
                                            <div className="text-center text-[#222222] text-[14px] font-medium leading-[18px]">
                                                Superhost
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 w-[96px]">
                                {[
                                    { label: '3947', desc: 'Reviews' },
                                    { label: '4.87', desc: 'Rating' },
                                    { label: '7', desc: 'Years hosting' },
                                ].map((item, index) => (
                                    <div key={index} className="flex flex-col justify-center items-start">
                                        <div className="flex items-center gap-1">
                                            <div className="text-[#222222] text-[21.83px] font-medium">
                                                {item.label}
                                            </div>
                                        </div>
                                        <div className="text-[#222222] text-[10px] font-medium">{item.desc}</div>
                                        {index < 2 && <div className="w-full h-[1px] border-t border-[#DDDDDD]"></div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 w-full h-[175.50px]">
                            <div className="flex flex-col gap-8 h-[144px]">
                                <div className="flex flex-col gap-4 h-[64px]">
                                    {['Công việc của tôi: Giáo viên, hướng dẫn viên địa phương', 'Nói Tiếng Anh'].map(
                                        (text, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <GardenIcon className="w-6 h-6 relative" />
                                                <div className="flex flex-col items-start">
                                                    <div className="text-[#222222] text-[16px] font-normal leading-[20px]">
                                                        {text}
                                                    </div>
                                                </div>
                                            </div>
                                        ),
                                    )}
                                </div>
                                <div className="flex flex-col h-[48px]">
                                    <div className="text-[#222222]  text-base font-normal leading-[24px]">
                                        Chúng tôi đã lớn lên ở đây
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-end">
                                <div className="flex items-center">
                                    <div className="text-[#222222] text-[16px] font-medium underline leading-[20px]">
                                        Show more
                                    </div>
                                    <NextArrowIcon className="w-6 h-6 relative" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 w-[565px] self-stretch pb-[89px]">
                        {/* <div className="flex flex-col gap-4 h-[79.75px]">
                            <div className="text-[#222222] font-bold text-[25px]  leading-[24px]">
                                Beverly is a Superhost
                            </div>
                            <div className="text-[#222222] text-[16px] font-normal leading-[20px]">
                                Superhosts are experienced, highly rated Hosts who are committed to providing great
                                stays for guests.
                            </div>
                        </div> */}
                        <div className="flex flex-col gap-4 h-[80px]">
                            <div className="text-[#222222] text-[25px] font-bold  leading-[24px]">
                                Thông tin chủ nhà
                            </div>
                            <div className="flex flex-col gap-1 h-[40px]">
                                {['Tỉ lệ phản hồi: 100%', 'Phản hồi trong vòng 1 giờ'].map((text, index) => (
                                    <div key={index} className="text-[#222222] text-[16px] font-normal leading-[20px]">
                                        {text}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-start items-start h-[48px]">
                            <div className="bg-[#222222] rounded-lg py-3 px-6 flex justify-center items-start">
                                <div className="text-white text-[16px] font-medium leading-[20px]">
                                    Nhắn tin chủ nhà
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch pt-[25px] border-t border-[#dddddd] justify-start items-center gap-3 inline-flex">
                            <div className="w-6 h-6 flex-col justify-start items-start inline-flex">
                                <PolicyIcon className="w-6 h-6 relative" />
                            </div>
                            <div className="text-[#222222] text-xs  font-semibold leading-none">
                                To protect your payment, never transfer money or communicate outside of the Airbnb
                                website
                                <br />
                                or app.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingInfoHost;
