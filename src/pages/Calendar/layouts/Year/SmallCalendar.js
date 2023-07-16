import React from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames/bind';

import styles from '~/components/PickerCalendar/PickerCalendar.module.scss';
import { getMonth } from '~/utils/day';

const cx = classNames.bind(styles);

function SmallCalendar({ monthIdx, year }) {
    const currentMonth = getMonth(monthIdx, year);

    const getWeekendClass = (day) => {
        if (day.format('dddd') === 'Sunday') return 'sunday';
        if (day.format('dddd') === 'Saturday') return 'saturday';
    };

    const getDayOfCurrentMonthClass = (day) => {
        if (day.format('DD-MM-YYYY') === dayjs().format('DD-MM-YYYY')) {
            return 'today';
        }

        if (day.format('MMM') === dayjs().month(monthIdx).format('MMM')) {
            return 'day-of-current-month';
        }
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('calendar-time')}>{dayjs().month(monthIdx).format('MMMM')}</span>
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
                            <span className={cx('date', getDayOfCurrentMonthClass(day))} key={i}>
                                {day.format('D')}
                            </span>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default SmallCalendar;
