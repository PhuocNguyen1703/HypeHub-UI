import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setSmallCalendarSelectedDay } from '~/redux/Slice/calendarSlice';
import { getMonth } from '~/utils/day';
import styles from './PickerCalendar.module.scss';

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
        setCurrentMonthIdx((currentMonthIdx) => currentMonthIdx - 1);
    };

    const handleNextMonth = () => {
        setCurrentMonthIdx((currentMonthIdx) => currentMonthIdx + 1);
    };

    const handleSelectedDay = (day) => {
        dispatch(setSmallCalendarSelectedDay(day.format('MMM DD, YYYY')));
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('calendar-time')}>
                    {dayjs(new Date(dayjs().year(), currentMonthIdx)).format('MMMM YYYY')}
                </span>
                {
                    <div className={cx('action-btn')}>
                        <button className={cx('icon-prev')} onClick={handlePrevMonth}>
                            <FaAngleLeft />
                        </button>
                        <button className={cx('icon-next')} onClick={handleNextMonth}>
                            <FaAngleRight />
                        </button>
                    </div>
                }
            </header>
            <div className={cx('calendar')}>
                {currentMonth[0].map((day, index) => (
                    <span className={cx('day', getWeekendClass(day))} key={index}>
                        {day.format('dd').charAt(0)}
                    </span>
                ))}
                {currentMonth.map((row, idx) => (
                    <React.Fragment key={idx}>
                        {row.map((day, i) => (
                            <span
                                className={cx('date', getDayOfCurrentMonthClass(day), getSelectedDayClass(day))}
                                key={i}
                                onClick={() => handleSelectedDay(day)}
                            >
                                {day.format('D')}
                            </span>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default PickerCalendar;
