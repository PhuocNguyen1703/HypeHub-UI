import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Calendar.module.scss';
import { getMonth } from '~/utils/day';
import dayjs from 'dayjs';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import GlobalContext from '~/Context/GlobalContext';

const cx = classNames.bind(styles);

function Calendar() {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex, setMonthIndex } = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    const getCurrentDayClass = (day) => {
        return day.format('DD-MM-YYYY') === dayjs().format('DD-MM-YYYY') && 'today';
    };

    const handleReset = () => {
        setMonthIndex(dayjs().month());
    };

    const handlePrevMonth = () => {
        setMonthIndex(monthIndex - 1);
    };

    const handleNextMonth = () => {
        setMonthIndex(monthIndex + 1);
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('header-left')}>
                    <h1>Calendar</h1>
                    <button className={cx('today-btn')} onClick={handleReset}>
                        Today
                    </button>
                </div>
                <div className={cx('header-center')}>
                    <button className={cx('icon-prev')} onClick={handlePrevMonth}>
                        <BsChevronLeft />
                    </button>
                    <h3>{dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}</h3>
                    <button className={cx('icon-next')} onClick={handleNextMonth}>
                        <BsChevronRight />
                    </button>
                </div>
                <p className={cx('header-right')}></p>
            </header>
            <div className={cx('container')}>
                <div className={cx('sidebar')}></div>
                <div className={cx('content')}>
                    {currentMonth.map((row, idx) => (
                        <React.Fragment key={idx}>
                            {row.map((day, i) => (
                                <div key={i} className={cx('row-day')}>
                                    <header className={cx('day-box')}>
                                        {idx === 0 && (
                                            <p
                                                className={cx('day')}
                                                style={{ color: `${(i === 0 && 'red') || (i === 6 && 'blue')}` }}
                                            >
                                                {day.format('ddd')}
                                            </p>
                                        )}
                                        <p
                                            className={cx('date', getCurrentDayClass(day))}
                                            style={{ color: `${(i === 0 && 'red') || (i === 6 && 'blue')}` }}
                                        >
                                            {day.format('DD')}
                                        </p>
                                    </header>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calendar;
