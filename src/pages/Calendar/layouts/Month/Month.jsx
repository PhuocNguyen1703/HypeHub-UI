import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import { getMonth } from '~/utils/day';
import styles from './Month.module.scss';

const cx = classNames.bind(styles);

function Month() {
    const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx));
    }, [currentMonthIdx]);

    const checkFirstDateOfNextMonth = (day) => {
        const firstDateOfNextMonth = dayjs()
            .month(currentMonthIdx + 1)
            .date(1);
        if (day.format('DD/MM/YYYY') === firstDateOfNextMonth.format('DD/MM/YYYY'))
            return firstDateOfNextMonth.format('MMM');
    };

    const getDayOfCurrentMonthClass = (day) => {
        if (day.format('DD/MM/YYYY') === dayjs().format('DD/MM/YYYY')) {
            return 'today';
        }

        if (day.format('MMM') === dayjs().month(currentMonthIdx).format('MMM')) {
            return 'day-of-current-month';
        }
    };

    const getWeekendClass = (day) => {
        if (day.format('dddd') === 'Sunday') return 'sunday';
        if (day.format('dddd') === 'Saturday') return 'saturday';
    };

    return (
        <div className={cx('wrapper')}>
            {currentMonth.map((row, idx) => (
                <React.Fragment key={idx}>
                    {row.map((day, i) => (
                        <div key={i} className={cx('row-day')}>
                            <header className={cx('day-box')}>
                                {idx === 0 && <p className={cx('day', getWeekendClass(day))}>{day.format('ddd')}</p>}
                                {checkFirstDateOfNextMonth(day)}
                                <p className={cx('date', getDayOfCurrentMonthClass(day), getWeekendClass(day))}>
                                    {day.format('DD')}
                                </p>
                            </header>
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Month;
