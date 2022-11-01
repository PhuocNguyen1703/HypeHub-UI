import React from 'react';
import classNames from 'classnames/bind';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import styles from './DatePicker.module.scss';
import { useState } from 'react';
import dayjs from 'dayjs';
import { BsCalendarWeek } from 'react-icons/bs';
import { useRef } from 'react';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function DatePicker() {
    const [showDateRangePicker, setShowDateRangePicker] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const calendarRef = useRef(null);

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    useEffect(() => {
        document.addEventListener('click', hideOnClickOutside, true);
    }, []);

    // Hide on outside click
    const hideOnClickOutside = (e) => {
        // console.log(refOne.current)
        // console.log(e.target)
        if (calendarRef.current && !calendarRef.current.contains(e.target)) {
            setShowDateRangePicker(false);
        }
    };

    const handleShowDatePicker = () => {
        setShowDateRangePicker((prevState) => !prevState);
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    return (
        <div className={cx('wrapper')}>
            <span className={cx('date-picker')} onClick={handleShowDatePicker}>
                <BsCalendarWeek />
                <input
                    value={`${dayjs(startDate).format('DD/MM/YYYY')} - ${dayjs(endDate).format('DD/MM/YYYY')}`}
                    className={cx('date-ipt')}
                    readOnly
                />
            </span>
            <div ref={calendarRef}>
                {showDateRangePicker && (
                    <DateRange
                        ranges={[selectionRange]}
                        showMonthAndYearPickers={false}
                        editableDateInputs={true}
                        moveRangeOnFirstSelection={false}
                        months={1}
                        // direction="horizontal"
                        onChange={handleSelect}
                        className={cx('calendar-picker')}
                    />
                )}
            </div>
        </div>
    );
}

export default DatePicker;
