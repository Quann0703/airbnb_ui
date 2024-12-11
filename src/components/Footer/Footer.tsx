'use client';

import ColumFooter from './ColumFooter';
import SubFooter from './SubFooter';

const supports = [
    {
        title: 'Trung tâm hỗ trợ',
        link: './',
    },
    {
        title: 'Yêu cầu trợ giúp về vấn đề an toàn',
        link: './',
    },
    {
        title: 'AirCover',
        link: './',
    },
    {
        title: 'Chống phân biệt đối xử',
        link: './',
    },
    {
        title: 'Các tùy chọn hủy',
        link: './',
    },
    {
        title: 'Báo cáo lo ngại của khu dân cư',
        link: './',
    },
];

const community = [
    {
        title: 'Cho thuê nhà trên Airbnb',
        link: './',
    },
    {
        title: 'AirCover cho Chủ nhà',
        link: './',
    },
    {
        title: 'Tài nguyên về đón tiếp khách',
        link: './',
    },
    {
        title: 'Diễn đàn cộng đồng',
        link: './',
    },
];

const about = [
    {
        title: 'Trang tin tức',
        link: './',
    },
    {
        title: 'Tính năng mới',
        link: './',
    },
    {
        title: 'Cơ hội nghề nghiệp',
        link: './',
    },
    {
        title: 'Nhà đầu tư',
        link: './',
    },
    {
        title: 'Chỗ ở khẩn cấp Airbnb.org',
        link: './',
    },
    {
        title: 'Chỗ ở xa hoa',
        link: './',
    },
];
const hosting = [
    {
        title: 'Hãy thử liện hệ',
        link: './',
    },
    {
        title: 'AirCover: bảo vệ máy chủ',
        link: './',
    },
    {
        title: 'Khám phá tài nguyên lưu trữ',
        link: './',
    },
    {
        title: 'Ghé thăm diễn đàn cộng đồng của chúng tôi',
        link: './',
    },
    {
        title: 'Học cách có tổ chức trách nghiệm',
        link: './',
    },
];
const Footer = () => {
    return (
        <div className="flex flex-col ">
            <div className="flex flex-col items-start gap-12 self-stretch pt-16 pb-6 px-20 bg-gray-50 mt-32">
                <div className="flex items-start gap-6 self-stretch">
                    <ColumFooter title="Hỗ trợ" rows={supports} />
                    <ColumFooter title="Cộng đồng" rows={community} />
                    <ColumFooter title="Liên hệ" rows={hosting} />
                    <ColumFooter title="Về chúng tôi" rows={about} />
                </div>
                <SubFooter />
            </div>
        </div>
    );
};

export default Footer;
