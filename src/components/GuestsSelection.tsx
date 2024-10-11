'use client';
import { Box, Typography, IconButton, Button, Link, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

interface GuestsSelectionProps {
    onClose?: () => void;
    onGuestsChange?: (adults: number, children: number, infants: number) => void;
}
const GuestSelector: React.FC<GuestsSelectionProps> = ({ onClose, onGuestsChange }) => {
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [pets, setPets] = useState(0);

    const handleGuestsChange = (newAdults: number, newChildren: number, newInfants: number) => {
        setAdults(newAdults);
        setChildren(newChildren);
        setInfants(newInfants);
        if (onGuestsChange) {
            onGuestsChange(newAdults, newChildren, newInfants);
        }
    };

    return (
        <Box padding={2} boxShadow={2} borderRadius={2}>
            <Typography
                sx={{
                    fontFamily: 'Inter',
                    fontWeight: 'bold',
                }}
                variant="h6"
            >
                KHÁCH
            </Typography>
            <Box mt={2}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                    sx={{
                        fontFamily: 'Inter',
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                            }}
                        >
                            Người lớn
                        </Typography>
                        <Typography variant="body2">Từ 13 tuổi trở lên</Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <IconButton onClick={() => handleGuestsChange(Math.max(1, adults - 1), children, infants)}>
                            <RemoveIcon />
                        </IconButton>
                        <Typography>{adults}</Typography>
                        <IconButton onClick={() => handleGuestsChange(adults + 1, children, infants)}>
                            <AddIcon />
                        </IconButton>
                    </Box>
                </Stack>

                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                    sx={{
                        fontFamily: 'Inter',
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                            }}
                        >
                            Trẻ em
                        </Typography>
                        <Typography variant="body2">Độ tuổi 2 – 12</Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <IconButton onClick={() => handleGuestsChange(adults, Math.max(0, children - 1), infants)}>
                            <RemoveIcon />
                        </IconButton>
                        <Typography>{children}</Typography>
                        <IconButton onClick={() => handleGuestsChange(adults, children + 1, infants)}>
                            <AddIcon />
                        </IconButton>
                    </Box>
                </Stack>

                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                    sx={{
                        fontFamily: 'Inter',
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                            }}
                        >
                            Em bé
                        </Typography>
                        <Typography variant="body2">Dưới 2 tuổi</Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <IconButton onClick={() => handleGuestsChange(adults, children, Math.max(0, infants - 1))}>
                            <RemoveIcon />
                        </IconButton>
                        <Typography>{infants}</Typography>
                        <IconButton onClick={() => handleGuestsChange(adults, children, infants + 1)}>
                            <AddIcon />
                        </IconButton>
                    </Box>
                </Stack>

                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                    sx={{
                        fontFamily: 'Inter',
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                            }}
                        >
                            Thú cưng
                        </Typography>
                        <Link
                            href="#"
                            variant="body2"
                            sx={{
                                color: '#000',
                                textDecoration: 'underline',
                            }}
                        >
                            Bạn sẽ mang theo động vật phục vụ?
                        </Link>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <IconButton disabled>
                            <RemoveIcon />
                        </IconButton>
                        <Typography>{pets}</Typography>
                        <IconButton disabled>
                            <AddIcon />
                        </IconButton>
                    </Box>
                </Stack>

                <Typography
                    mt={2}
                    variant="body2"
                    sx={{
                        fontFamily: 'Inter',
                    }}
                >
                    Chỗ ở này cho phép tối đa 3 khách, không tính em bé. Không được phép mang theo thú cưng.
                </Typography>

                <Stack mt={2} className="font-inter">
                    <Button
                        variant="text"
                        sx={{
                            textDecoration: 'underline',
                            color: '#000',
                        }}
                        onClick={onClose}
                    >
                        Đóng
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default GuestSelector;
