'use client';

import {
    Box,
    Button,
    FormControl,
    Grid2,
    InputAdornment,
    InputLabel,
    Link,
    ListItemIcon,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';

const PaymentInfo = () => {
    return (
        <Box
            sx={{
                marginLeft: '50px',
                maxWidth: '530px',
                p: 2,
                borderTop: '1px solid rgb(211,211,211)',
                borderBottom: '1px solid rgb(211,211,211)',
            }}
        >
            <Box sx={{ backgroundColor: '#fff' }} mt={3}>
                <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '22px',
                    }}
                    mb={3}
                >
                    Bắt buộc cho chuyến đi của bạn
                </Typography>
                <Box sx={{ marginBottom: 2 }} display="flex" justifyContent="space-between" alignItems="center">
                    <Box paddingRight={2}>
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            mt={3}
                            sx={{
                                fontWeight: 'bold',
                            }}
                        >
                            Số điện thoại
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                fontSize: '14px',
                            }}
                        >
                            Thêm và xác nhận số điện thoại của bạn để nhận thông tin cập nhật về chuyến đi.
                        </Typography>
                    </Box>
                    <Button variant="outlined" sx={{ color: '#000', borderColor: '#000', marginTop: '20px' }}>
                        Thêm
                    </Button>
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        mt={3}
                        mb={3}
                        sx={{
                            fontWeight: 'bold',
                        }}
                    >
                        Chính sách hủy
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            fontSize: '14px',
                        }}
                    >
                        Bạn được hoàn tiền một phần nếu hủy trước khi nhận phòng lúc 17 thg 10. Sau ngày đó, bạn không
                        được hoàn tiền cho đặt phòng này.
                        <Link
                            variant="body2"
                            color="primary"
                            sx={{ textDecoration: 'underline', color: '#000', fontWeight: 'bold', cursor: 'pointer' }}
                        >
                            Tìm hiểu thêm
                        </Link>
                    </Typography>
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                        }}
                        mb={3}
                    >
                        Quy chuẩn chung
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Chúng tôi yêu cầu tất cả khách phải ghi nhớ một số quy chuẩn đơn giản để làm một vị khách tuyệt
                        vời.
                    </Typography>
                    <ul className="mt-2 text-[#00000099]">
                        <li>Tuân thủ nội quy nhà</li>
                        <li>Giữ gìn ngôi nhà như thể đó là nhà bạn</li>
                    </ul>
                </Box>
            </Box>
        </Box>
    );
};

export default PaymentInfo;
