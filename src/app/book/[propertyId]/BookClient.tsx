'use client';

import Container from '@/components/Container';
import Heading from '@/components/Heading';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Box, Button, Grid2, IconButton, Link, Typography } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import useBookingStore from '@/hooks/useBookingStore';
import PaymentMethod from '@/components/Book/PaymentMethod';
import PaymentInfo from '@/components/Book/PaymentInfo';
import BookDetails from '../../../components/Book/BookDetail';
import { useRouter } from 'next/navigation';
// import PayPalButton from '@/components/Paypal/PaypalButton';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { createPayment } from '@/actions/payment/createPayment';
import { capturePayment } from '@/actions/payment/capturePayment';
import { createReservation } from '@/actions/reservation/createReservation';
import toast from 'react-hot-toast';

interface BookClientProps {
    currentUser?: SafeUser;
    propertyId?: string;
}

const BookClient: React.FC<BookClientProps> = ({ currentUser, propertyId }) => {
    const storeBooking = useBookingStore();
    const router = useRouter();
    console.log(propertyId);

    const handleBack = () => {
        router.back();
    };
    const getDay = (date: Date | null) => {
        if (!date) return '';
        return date.getDate();
    };

    const initialOptions = {
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
        currency: 'USD',
        intent: 'capture',
    };

    return (
        <Container>
            <div className="w-full mx-auto mb-20 pt-20 ">
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 6 }}>
                        <div className="flex flex-row items-center ">
                            <IconButton onClick={handleBack}>
                                <KeyboardArrowLeftIcon fontSize="large" />
                            </IconButton>
                            <Heading title="Xác nhận và thanh toán" className="p-2 " fontSize="text-3xl" />
                        </div>
                        <Box
                            sx={{
                                backgroundColor: '#fff',
                                p: 3,
                                borderRadius: 3,
                                mb: 3,
                                border: '1px solid rgb(211,211,211)',
                                display: 'flex',
                                flexDirection: 'row',
                                marginLeft: '50px',
                                marginTop: '40px',
                                maxWidth: '530px',
                            }}
                        >
                            <Box>
                                <Typography
                                    variant="body1"
                                    sx={{ fontWeight: 'bold', marginBottom: '5px', fontSize: '16px' }}
                                >
                                    Đặt ngay để tiết kiệm 20%.
                                </Typography>
                                <Typography variant="body2" sx={{ fontSize: '16px' }}>
                                    Mình đang áp dụng giảm giá 1 lần cho các ngày trong chuyến đi của bạn. Hãy đặt phòng
                                    sớm để nhận ưu đãi đặc biệt này.
                                </Typography>
                            </Box>
                            <Box>
                                <AccessAlarmIcon fontSize="large" sx={{ color: '#FF385C' }} />
                            </Box>
                        </Box>

                        <Box
                            mb={3}
                            sx={{
                                marginLeft: '50px',
                                maxWidth: '530px',
                                p: 2,
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 'bold',
                                    marginBottom: '20px',
                                    fontSize: '22px',
                                }}
                            >
                                Chuyến đi của bạn
                            </Typography>
                            <Grid2 container spacing={2} sx={{ marginBottom: '20px' }}>
                                <Grid2 size={{ xs: 10 }}>
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Ngày
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                        }}
                                    >
                                        {storeBooking.startDate && storeBooking.endDate ? (
                                            <>
                                                Ngày {getDay(storeBooking.startDate)} - Ngày{' '}
                                                {getDay(storeBooking.endDate)} tháng{' '}
                                                {storeBooking.startDate.getMonth() + 1}
                                            </>
                                        ) : (
                                            <Typography variant="body2">Chưa chọn đủ ngày</Typography>
                                        )}
                                    </Typography>
                                </Grid2>
                                <Grid2 size={{ xs: 2 }}>
                                    <Button
                                        variant="text"
                                        size="small"
                                        sx={{
                                            minWidth: '100px',
                                            textDecoration: 'underline',
                                            color: '#000',
                                            fontSize: '15px',
                                            textTransform: 'none',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Chỉnh sửa
                                    </Button>
                                </Grid2>
                            </Grid2>
                            <Grid2 container spacing={2}>
                                <Grid2 size={{ xs: 10 }}>
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Khách
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                        }}
                                    >
                                        {storeBooking.numberGuests} khách
                                    </Typography>
                                </Grid2>
                                <Grid2 size={{ xs: 2 }}>
                                    <Button
                                        variant="text"
                                        size="small"
                                        sx={{
                                            minWidth: '100px',
                                            textDecoration: 'underline',
                                            color: '#000',
                                            fontSize: '15px',
                                            textTransform: 'none',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Chỉnh sửa
                                    </Button>
                                </Grid2>
                            </Grid2>
                        </Box>
                        <PaymentMethod />

                        <PaymentInfo />
                        <Box
                            mb={3}
                            sx={{
                                marginLeft: '50px',
                                p: 2,
                            }}
                        >
                            <Box sx={{ textAlign: 'start' }}>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ marginBottom: 2, fontSize: '12px' }}
                                >
                                    Bằng việc chọn nút bên dưới, tôi đồng ý với
                                    <Link
                                        href="#"
                                        underline="hover"
                                        sx={{ color: '#000', textDecoration: 'underline', fontWeight: 'bold' }}
                                    >
                                        {' '}
                                        Nội quy nhà của Chủ nhà
                                    </Link>
                                    ,{' '}
                                    <Link
                                        href="#"
                                        underline="hover"
                                        sx={{ color: '#000', textDecoration: 'underline', fontWeight: 'bold' }}
                                    >
                                        Quy chuẩn chung đối với khách
                                    </Link>
                                    ,{' '}
                                    <Link
                                        href="#"
                                        underline="hover"
                                        sx={{ color: '#000', textDecoration: 'underline', fontWeight: 'bold' }}
                                    >
                                        Chính sách đặt lại và hoàn tiền của Airbnb
                                    </Link>
                                    , và đồng ý rằng Airbnb có thể{' '}
                                    <Link
                                        href="#"
                                        underline="hover"
                                        sx={{ color: '#000', textDecoration: 'underline', fontWeight: 'bold' }}
                                    >
                                        tính phí vào phương thức thanh toán của tôi
                                    </Link>
                                    nếu tôi phải chịu trách nhiệm về thiệt hại.
                                </Typography>

                                {/* <PayPalButton /> */}
                                <PayPalScriptProvider options={initialOptions}>
                                    <Box
                                        sx={{
                                            p: 2,
                                            maxWidth: '50%',
                                        }}
                                    >
                                        <PayPalButtons
                                            fundingSource="paypal"
                                            style={{ color: 'blue', layout: 'horizontal' }}
                                            createOrder={async (data, actions) => {
                                                try {
                                                    const paymentData = {
                                                        propertyId: propertyId,
                                                        night: storeBooking.numberOfDays,
                                                    };

                                                    const paymentResponse = await createPayment(paymentData);
                                                    console.log('Payment Response:', paymentResponse.order.id);

                                                    if (!paymentResponse.order.id) {
                                                        throw new Error('Order ID not found in payment response');
                                                    }

                                                    return paymentResponse.order.id;
                                                } catch (error) {
                                                    console.error('Error creating order:', error);
                                                    throw error;
                                                }
                                            }}
                                            onCancel={(data) => {
                                                console.log('Payment cancelled', data);
                                            }}
                                            onApprove={async (data, actions) => {
                                                try {
                                                    console.log(data.orderID);
                                                    const captureResponse = await capturePayment(data.orderID);
                                                    console.log('Payment capture response:', captureResponse);
                                                    if (captureResponse.status === 'COMPLETED') {
                                                        const data = {
                                                            userId: currentUser?._id,
                                                            propertyId: propertyId,
                                                            startDate: storeBooking.startDate,
                                                            endDate: storeBooking.endDate,
                                                            guestsCount: storeBooking.numberGuests,
                                                            totalPrice: storeBooking.calculateTotal,
                                                        };
                                                        const reservation = await createReservation(data);
                                                        if (reservation) {
                                                            toast.success('bạn vừa đặt phòng thành công');
                                                            router.back();
                                                        }
                                                    }
                                                } catch (error) {
                                                    console.error('Error capturing payment:', error);
                                                }
                                            }}
                                        />
                                    </Box>
                                </PayPalScriptProvider>
                                {/* <Button onClick={handleClick}>ok</Button> */}
                            </Box>
                        </Box>
                    </Grid2>
                    <Grid2 size={{ xs: 6 }} position={'relative'}>
                        <BookDetails
                            dayCount={storeBooking.numberOfDays}
                            priceNight={storeBooking.dailyRate}
                            totalPrice={storeBooking.totalAmount}
                            title={storeBooking.title}
                            rating={storeBooking.rate}
                            img={storeBooking.imageBooking}
                            view={storeBooking.bookingView}
                        />
                    </Grid2>
                </Grid2>
            </div>
        </Container>
    );
};

export default BookClient;
