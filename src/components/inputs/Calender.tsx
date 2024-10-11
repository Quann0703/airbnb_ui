'use client';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange, Range, RangeKeyDict } from 'react-date-range';

interface CalenderProps {
    value: Range;
    onChange?: (value: RangeKeyDict) => void;
    disabledDates?: Date[];
}
const Calender: React.FC<CalenderProps> = ({ value, onChange, disabledDates }) => {
    return (
        <DateRange
            rangeColors={['#262626']}
            ranges={[value]}
            date={new Date()}
            onChange={onChange}
            direction="horizontal"
            showDateDisplay={false}
            minDate={new Date()}
            disabledDates={disabledDates}
            months={2}
        />
    );
};

export default Calender;
