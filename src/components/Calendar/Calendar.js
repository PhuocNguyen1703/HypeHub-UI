import React, { useState } from 'react';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import range from 'lodash-es/range';

import styles from './Calendar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const todayObj = dayjs();

function Calendar() {
    const [dayObj, setDayObj] = useState(dayjs());

    const thisYear = dayObj.year();
    const thisMonth = dayObj.month(); // (January as 0, December as 11)
    const daysInMonth = dayObj.daysInMonth();
    // console.log(thisYear, thisMonth, daysInMonth);

    const dayObjOf1 = dayjs(`${thisYear}-${thisMonth + 1}-1`);
    const weekDayOf1 = dayObjOf1.day(); // (Sunday as 0, Saturday as 6)
    // console.log(weekDayOf1);

    const dayObjOfLast = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`);
    const weekDayOfLast = dayObjOfLast.day();
    // console.log(weekDayOfLast);

    const handlePrev = () => {
        setDayObj(dayObj.subtract(1, 'month'));
    };

    const handleNext = () => {
        setDayObj(dayObj.add(1, 'month'));
    };

    return (
        <div className={cx('calendar')}>
            <div className={cx('header')}>
                <button className={cx('prev-btn')} onClick={handlePrev}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <div className={cx('date')}>{dayObj.format('MMMM YYYY')}</div>
                <button className={cx('next-btn')} onClick={handleNext}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
            <div className={cx('week-container')}>
                {weekDays.map((day) => (
                    <div key={day} className={cx('week-cell')}>
                        {day}
                    </div>
                ))}
            </div>
            <div className={cx('day-container')}>
                {range(weekDayOf1).map((i) => (
                    <div key={i} className={cx('day-cell', 'faded')}>
                        {dayObjOf1.subtract(weekDayOf1 - i, 'day').date()}
                    </div>
                ))}

                {range(daysInMonth).map((i) => (
                    <div
                        key={i}
                        className={cx(
                            'day-cell',
                            `${
                                i + 1 === todayObj.date() &&
                                thisMonth === todayObj.month() &&
                                thisYear === todayObj.year()
                                    ? 'today'
                                    : ''
                            }`,
                        )}
                    >
                        {i + 1}
                    </div>
                ))}

                {range(6 - weekDayOfLast).map((i) => (
                    <div key={i} className={cx('day-cell', 'faded')}>
                        {dayObjOfLast.add(i + 1, 'day').date()}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Calendar;
