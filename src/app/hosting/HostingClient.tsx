'use client';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import React from 'react';
import { Box, Typography, Paper, Grid2 } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Image from 'next/image';
import { ContactHelpIcon, SuperHostIcon } from '@/components/Icon';

const steps = [
    'Đã kiểm tra tùy chọn Đặt ngay',
    'Đã kiểm tra lịch',
    'Đã kiểm tra chính sách hủy',
    'Đã kiểm tra nội quy nhà',
    'Đã kiểm tra khuyến mãi',
    'Đã xem lại hướng dẫn trả phòng',
];
const stepss = [
    {
        title: 'Tạo báo cáo tùy chỉnh trong bảng điều khiển thu nhập',
        image: 'https://a0.muscache.com/im/pictures/ddedd562-a86a-43c6-a4ea-eddd593a740b.jpg?im_w=720',
    },
    {
        title: 'Tiết kiệm thời gian trả lời khách nhờ cải tiến trong tính năng nhắn tin',
        image: 'https://a0.muscache.com/im/pictures/d7d5da32-471d-41a4-a524-ca4748931ff0.jpg?im_w=720',
    },
    {
        title: 'Tìm đồng chủ nhà phù hợp trên Airbnb',
        image: 'https://a0.muscache.com/im/pictures/8128b9f7-ff89-4399-aa27-4b51f487444c.jpg?im_w=320',
    },
    {
        title: 'Bản phát hành mùa đông 2024: Điểm mới giúp bạn đón tiếp khách và du lịch',
        image: 'https://a0.muscache.com/im/pictures/6932d3dc-e527-48d1-bd67-a4fb59935c9c.jpg?im_w=320',
    },
];

interface HosingClientProps {
    currentUser?: SafeUser;
}

export const HostingClient: React.FC<HosingClientProps> = ({ currentUser }) => {
    return (
        <>
            <Container>
                <div className="w-full mx-auto mb-20 pt-32 ">
                    <Heading
                        title={`Hân hạnh chào đón ${currentUser?.name}`}
                        fontSize="text-3xl"
                        subtitle="Khách có thể đặt phòng tại chỗ ở của bạn sau 24 giờ kể từ thời điểm bạn đăng mục cho thuê. Sau đây là cách chuẩn bị."
                    />
                </div>
            </Container>
            <Box
                sx={{
                    paddingTop: 4,
                    backgroundImage: 'url("https://a0.muscache.com/pictures/d9658c67-530c-4631-89ac-3afe5fb8abff.jpg")', // Đường dẫn đến hình nền của bạn
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '510px',
                }}
            >
                <Container>
                    <Heading title=" Các bước tiếp theo" subtitle="Đã đến lúc rà soát một số cài đặt hiện tại." />

                    <Grid2 container spacing={2} mt={18} justifyContent="center" component={'div'}>
                        {steps.map((step, index) => (
                            <Grid2
                                size={{ xs: 12, sm: 6, md: 2 }}
                                key={index}
                                component={'div'}
                                sx={{
                                    maxWidth: '200px',
                                    height: '172px',
                                }}
                            >
                                <Paper
                                    elevation={1}
                                    sx={{
                                        padding: 2,
                                        borderRadius: 2,
                                        backgroundColor: '#F0FFF4', // Màu nền xanh nhạt cho thẻ
                                        display: 'flex',
                                        alignItems: 'start',
                                        flexDirection: 'column',
                                        gap: 2,
                                        height: '172px',
                                    }}
                                >
                                    <CheckCircleIcon sx={{ color: 'green', fontSize: 30 }} />
                                    <Typography variant="body1" fontWeight="bold">
                                        {step}
                                    </Typography>
                                </Paper>
                            </Grid2>
                        ))}
                    </Grid2>
                </Container>
            </Box>
            <Container>
                <div className="w-full mx-auto mb-4  mt-20 ">
                    <Heading title={`Chúng tôi sẵn luôn sẵn sàng trợ giúp`} fontSize="text-2xl" />
                </div>
                <Grid2 container spacing={2}>
                    <Grid2 size={4}>
                        <Box
                            sx={{
                                display: 'flex',
                                padding: 2,
                                gap: 2,
                                border: '1px solid #EBEBEB',
                                borderRadius: '10px',
                                cursor: 'pointer',
                            }}
                        >
                            <SuperHostIcon />
                            <Heading
                                title="Hướng dẫn từ 1 chủ nhà siêu cấp"
                                subtitle="Chúng tôi sẽ kết nối bạn với một chủ nhà giàu kinh nghiệm để giúp bạn bắt đầu"
                                fontSize="text-base"
                                fontSizeSubTitle="text-sm"
                            />
                        </Box>
                    </Grid2>
                    <Grid2 size={4}>
                        <Box
                            sx={{
                                display: 'flex',
                                padding: 2,
                                gap: 2,
                                border: '1px solid #EBEBEB',
                                borderRadius: '10px',
                                cursor: 'pointer',
                            }}
                        >
                            <ContactHelpIcon />
                            <Heading
                                title="Liên hệ bộ phận hỗ trợ đặc biệt"
                                subtitle="Là Chủ nhà mới, bạn có thể liên hệ với nhóm hỗ trợ đã được đào tạo đặc biệt chỉ với một thao tác nhấn."
                                fontSize="text-base"
                                fontSizeSubTitle="text-sm"
                            />
                        </Box>
                    </Grid2>
                </Grid2>
                <div className="w-full mx-auto mb-16  mt-16 ">
                    <Heading title={`Tài nguyên và mẹo`} fontSize="text-2xl" />
                    <Grid2 container spacing={2} mt={2}>
                        {stepss.map((step, index) => (
                            <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={index} component={'div'}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        border: '1px solid #EBEBEB',
                                        borderRadius: '10px',
                                        cursor: 'pointer',
                                        overflow: 'hidden',
                                        minHeight: '337px',
                                    }}
                                >
                                    <Box sx={{ width: '100%', height: '200px', position: 'relative' }}>
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            layout="fill"
                                            objectFit="cover"
                                            quality={100}
                                        />
                                    </Box>
                                    <Box sx={{ padding: 4 }}>
                                        <Typography variant="body1" fontWeight="bold">
                                            {step.title}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid2>
                        ))}
                    </Grid2>
                </div>
            </Container>
        </>
    );
};
