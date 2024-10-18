'use client';
import { formatCurrency } from '@/utils/formatCurrency';
import { Box, Card, CardContent, CardMedia, Divider, Grid2, Link, Typography } from '@mui/material';

interface BookDetailsProps {
    dayCount: number;
    priceNight: number;
    totalPrice: number;
    title?: string;
    rating?: number;
    img?: string;
    view?: string;
}
const BookDetails: React.FC<BookDetailsProps> = ({ dayCount, priceNight, totalPrice, title, rating, img, view }) => {
    return (
        <Card
            sx={{
                maxWidth: 465,
                marginLeft: 10,
                marginTop: '95px',
                borderRadius: 4,
                boxShadow: 3,
                position: 'sticky', // Cố định phần tử
                top: '80px', // Đặt khoảng cách từ phần trên cùng của trang
                padding: 1,
            }}
        >
            {/* Ảnh và thông tin */}
            <Grid2 container display={'flex'} alignItems={'center'} justifyContent={'space-between'} padding={1}>
                <Grid2 size={{ xs: 3 }} display={'flex'} justifyContent={'center'}>
                    <CardMedia
                        component="img"
                        image={img}
                        alt="Phòng khách sạn"
                        sx={{
                            borderRadius: '8px',
                            height: '95px',
                            width: '110px',
                        }}
                    />
                </Grid2>
                <Grid2
                    size={{ xs: 9 }}
                    // sx={{
                    //     marginTop: '7px',
                    // }}
                >
                    <CardContent sx={{ paddingBottom: 0 }}>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            sx={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 2, // Giới hạn tối đa 2 dòng
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {view}
                        </Typography>
                        <Typography variant="body2">⭐ {rating} (53 đánh giá) • Chủ nhà siêu cấp</Typography>
                    </CardContent>
                </Grid2>
            </Grid2>

            <Divider sx={{ my: 2 }} />
            <CardContent>
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                        fontSize: '22px',
                    }}
                >
                    Chi tiết giá
                </Typography>
                <Grid2 container justifyContent="space-between">
                    <Grid2>
                        <Link color="primary" sx={{ textDecoration: 'underline', color: '#000', cursor: 'pointer' }}>
                            ₫{formatCurrency(priceNight)} x {dayCount} đêm
                        </Link>
                    </Grid2>
                    <Grid2>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: '16px',
                            }}
                        >
                            ₫{formatCurrency(totalPrice)}
                        </Typography>
                    </Grid2>
                </Grid2>
                {/* <Grid2 container justifyContent="space-between" mt={1}>
                    <Grid2>
                        <Link color="primary" sx={{ textDecoration: 'underline', color: '#000', cursor: 'pointer' }}>
                            Ưu đãi đặc biệt
                        </Link>
                    </Grid2>
                    <Grid2>
                        <Typography
                            variant="body2"
                            color="green"
                            sx={{
                                fontSize: '16px',
                            }}
                        >
                            -₫501.124
                        </Typography>
                    </Grid2>
                </Grid2> */}

                <Divider sx={{ my: 2 }} />

                <Box sx={{ marginTop: 2 }}>
                    <Grid2 container justifyContent="space-between">
                        <Grid2>
                            <Typography variant="body1" fontWeight="bold">
                                Tổng (VND)
                            </Typography>
                        </Grid2>
                        <Grid2>
                            <Typography variant="body1" fontWeight="bold">
                                ₫{formatCurrency(totalPrice)}
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Box>
            </CardContent>
        </Card>
    );
};

export default BookDetails;
