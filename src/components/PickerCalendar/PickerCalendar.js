import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './PickerCalendar.module.scss';
import { getMonth } from '~/utils/day';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setSmallCalendarSelectedDay } from '~/redux/Slice/calendarSlice';

const cx = classNames.bind(styles);

function PickerCalendar() {
    const { smallCalendarSelectedDay } = useSelector((state) => state.calendar);
    const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const dispatch = useDispatch();

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx));
    }, [currentMonthIdx]);

    const getWeekendClass = (day) => {
        if (day.format('dddd') === 'Sunday') return 'sunday';
        if (day.format('dddd') === 'Saturday') return 'saturday';
    };

    const getDayOfCurrentMonthClass = (day) => {
        if (day.format('DD-MM-YYYY') === dayjs().format('DD-MM-YYYY')) {
            return 'today';
        }

        if (day.format('MMM') === dayjs().month(currentMonthIdx).format('MMM')) {
            return 'day-of-current-month';
        }
    };

    const getSelectedDayClass = (day) => {
        if (smallCalendarSelectedDay === null) return;

        if (smallCalendarSelectedDay === day.format('MMM DD, YYYY')) {
            return 'selected';
        }
    };

    const handlePrevMonth = () => {
        setCurrentMonthIdx(currentMonthIdx - 1);
    };

    const handleNextMonth = () => {
        setCurrentMonthIdx(currentMonthIdx + 1);
    };

    const handleSelectedDay = (day) => {
        dispatch(setSmallCalendarSelectedDay(day.format('MMM DD, YYYY')));
        // dispatch(setCalendarEventModalIsOpen(true));
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('calendar-time')}>
                    {dayjs(new Date(dayjs().year(), currentMonthIdx)).format('MMMM YYYY')}
                </span>
                <div className={cx('action-btn')}>
                    <button className={cx('icon-prev')} onClick={handlePrevMonth}>
                        <BsChevronLeft />
                    </button>
                    <button className={cx('icon-next')} onClick={handleNextMonth}>
                        <BsChevronRight />
                    </button>
                </div>
            </header>
            <div className={cx('body')}>
                {currentMonth[0].map((day, index) => (
                    <span className={cx('day', getWeekendClass(day))} key={index}>
                        {day.format('dd').charAt(0)}
                    </span>
                ))}
                {currentMonth.map((row, idx) => (
                    <React.Fragment key={idx}>
                        {row.map((day, i) => (
                            <button
                                className={cx('date', getDayOfCurrentMonthClass(day), getSelectedDayClass(day))}
                                key={i}
                                onClick={() => handleSelectedDay(day)}
                            >
                                {day.format('D')}
                            </button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default PickerCalendar;