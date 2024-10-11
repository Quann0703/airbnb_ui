'use client';
import { Box, Stack, Typography, Button, Divider, IconButton, TextField, Input } from '@mui/material';

import { Range } from 'react-date-range';
import Calender from './Calender';
import { format } from 'date-fns';

interface DateSelectionProps {
    onClose?: () => void;
    dateRange: Range;
    disabledDates?: Date[];
    onChangeDate: (value: Range) => void;
    dayCount?: number;
}

const DateSelector: React.FC<DateSelectionProps> = ({ onClose, dateRange, disabledDates, onChangeDate, dayCount }) => {
    const deleteDay = () => {
        onChangeDate({ startDate: new Date(), endDate: new Date(), key: 'selection' });
    };

    return (
        <Box className="p-4 max-w-xl w-[600px] md:w-[661px] px-8 mx-auto bg-white rounded-lg shadow-md">
            <Stack direction="row" justifyContent="space-between" alignItems="center" mt={2}>
                <Typography variant="h6" fontWeight="bold">
                    {dayCount} đêm
                </Typography>
                <Stack direction="row" justifyContent="space-between" spacing={2}>
                    <Input
                        placeholder="NHẬN PHÒNG"
                        value={dateRange?.startDate?.toLocaleDateString()}
                        onClick={() => {}}
                        fullWidth
                        sx={{ maxWidth: '150px' }}
                    />
                    <Input
                        placeholder="TRẢ PHÒNG"
                        value={dateRange?.endDate?.toLocaleDateString()}
                        onClick={() => {}}
                        fullWidth
                        sx={{ maxWidth: '150px' }}
                    />
                </Stack>
            </Stack>

            <Calender
                value={dateRange}
                onChange={(value) => onChangeDate(value.selection)}
                disabledDates={disabledDates}
            />
            <Stack direction="row" spacing={2} justifyContent="space-between" mt={2}>
                <Button variant="text" color="inherit" className="underline" onClick={() => deleteDay()}>
                    Xóa ngày
                </Button>
                <Button
                    variant="contained"
                    onClick={onClose}
                    sx={{
                        backgroundColor: '#000',
                    }}
                >
                    Đóng
                </Button>
            </Stack>
        </Box>
    );
};

export default DateSelector;
