'use client';
import React, { useState, useMemo } from 'react';
import { Box, Typography, Collapse, Switch, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DoneIcon from '@mui/icons-material/Done';

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    options: Option[];
    title?: string;
    rules?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ rules, title = 'Thông báo trước', options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]?.value || '');
    const [allowRequests, setAllowRequests] = useState(false);

    const selectedLabel = useMemo(() => {
        return options.find((opt) => opt.value === selectedOption)?.label || 'Không có lựa chọn';
    }, [selectedOption, options]);

    const handleToggleDropdown = () => setIsOpen((prev) => !prev);

    const handleOptionClick = (value: string) => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    return (
        <Box
            sx={{
                border: '1px solid #DDDDDD',
                borderRadius: '16px',
                maxWidth: 400,
                p: 2,
                '&:hover': { boxShadow: '0 2px 10px rgba(0,0,0,0.1)' },
            }}
        >
            {/* Header */}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                onClick={handleToggleDropdown}
                sx={{ cursor: 'pointer' }}
                aria-expanded={isOpen}
            >
                <Box>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                            fontSize: '0.875rem',
                            lineHeight: '1.25rem',
                            fontWeight: '400',
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        gutterBottom
                        sx={{
                            fontWeight: '500',
                            fontSize: '0.875rem',
                            lineHeight: '1.125rem',
                            letterSpacing: 'normal',
                        }}
                    >
                        {selectedLabel}
                    </Typography>
                </Box>
                {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Box>

            {/* Dropdown */}
            <Collapse in={isOpen}>
                <Box
                    sx={{
                        transition: 'max-height 0.25s ease-in-out',
                        maxHeight: '175px',
                        overflowY: 'auto',
                        position: 'relative',
                        borderTop: '1px solid #DDDDDD',
                        borderBottom: '1px solid #DDDDDD',
                    }}
                >
                    {options.length ? (
                        options.map((option) => (
                            <Box
                                key={option.value}
                                onClick={() => handleOptionClick(option.value)}
                                sx={{
                                    padding: '16px 24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    '&:hover': { backgroundColor: '#f0f0f0' },
                                }}
                                role="option"
                                aria-selected={selectedOption === option.value}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: '600',
                                        fontSize: '0.875rem',
                                        flex: 1,
                                    }}
                                >
                                    {option.label}
                                </Typography>
                                {selectedOption === option.value && (
                                    <DoneIcon sx={{ color: 'green', marginLeft: '16px' }} />
                                )}
                            </Box>
                        ))
                    ) : (
                        <Typography sx={{ padding: '16px', textAlign: 'center', color: 'gray' }}>
                            Không có lựa chọn
                        </Typography>
                    )}
                </Box>

                {rules && (
                    <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                        <Box>
                            <Typography variant="body2" sx={{ fontWeight: '500' }}>
                                Cho phép các yêu cầu đặt phòng trước
                            </Typography>
                            <Typography variant="caption" color="textSecondary" display="block" sx={{ mb: 2 }}>
                                Bạn sẽ xem xét và chấp thuận từng yêu cầu đặt phòng.
                            </Typography>
                        </Box>
                        <Switch checked={allowRequests} onChange={() => setAllowRequests((prev) => !prev)} />
                    </Box>
                )}

                <Button
                    variant="contained"
                    sx={{
                        color: '#fff',
                        backgroundColor: '#222222',
                        marginTop: '20px',
                        '&:hover': { backgroundColor: '#444444' },
                    }}
                    fullWidth
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    Lưu
                </Button>
            </Collapse>
        </Box>
    );
};

export default CustomSelect;
