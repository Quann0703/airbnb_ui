'use client';

import {
    Box,
    FormControl,
    Grid2,
    InputAdornment,
    InputLabel,
    ListItemIcon,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import { AccountBalance, CreditCard, Payment } from '@mui/icons-material'; // Thêm import này

import Image from 'next/image';
import { useState } from 'react';

const PaymentMethod = () => {
    const [paymentMethods, setPaymentMethods] = useState<string>('credit');

    const handleChange = (event: any) => {
        setPaymentMethods(event.target.value as string);
    };
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
            <Box mt={3} mb={3} display="flex" justifyContent="space-between" alignItems="center">
                <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                    }}
                >
                    Thanh toán bằng
                </Typography>
                {paymentMethods === 'paypal' ? (
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                        alt="PayPal"
                        width={40}
                        height={40}
                        style={{ marginRight: '10px' }} // Khoảng cách giữa icon và text
                    />
                ) : (
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" // Hình ảnh MasterCard
                        alt="MasterCard"
                        width={40}
                        height={40}
                    />
                )}
            </Box>
            <Box component="form" noValidate autoComplete="off">
                <FormControl fullWidth sx={{ mb: 3 }}>
                    <InputLabel>Phương thức thanh toán</InputLabel>
                    <Select
                        value={paymentMethods}
                        onChange={handleChange}
                        label="Phương thức thanh toán"
                        sx={{
                            borderRadius: '10px', // Làm bo góc đẹp hơn
                            backgroundColor: '#f9f9f9', // Nền màu nhạt
                            padding: '10px', // Tăng khoảng đệm
                            '& .MuiSvgIcon-root': {
                                // Tùy chỉnh icon mũi tên
                                color: '#1976d2', // Màu icon
                                fontSize: '30px', // Kích thước icon
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#1976d2', // Màu viền
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#42a5f5', // Màu viền khi hover
                            },
                        }}
                    >
                        <MenuItem value="credit">
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <ListItemIcon>
                                    <CreditCard sx={{ color: '#1976d2', fontSize: '20px' }} /> {/* Tùy chỉnh icon */}
                                </ListItemIcon>
                                Thẻ tín dụng hoặc thẻ ghi nợ
                            </Box>
                        </MenuItem>
                        <MenuItem value="paypal">
                            <ListItemIcon>
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                    alt="PayPal"
                                    width={40}
                                    height={40}
                                    style={{ marginRight: '10px' }} // Khoảng cách giữa icon và text
                                />
                            </ListItemIcon>
                            PayPal
                        </MenuItem>
                    </Select>
                </FormControl>

                {paymentMethods === 'credit' && (
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12 }}>
                            <TextField
                                label="Số thẻ"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CreditCard />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid2>
                        <Grid2 size={{ xs: 6 }}>
                            <TextField label="Ngày hết hạn" fullWidth />
                        </Grid2>
                        <Grid2 size={{ xs: 6 }}>
                            <TextField label="CVV" fullWidth />
                        </Grid2>
                    </Grid2>
                )}
            </Box>
        </Box>
    );
};

export default PaymentMethod;
