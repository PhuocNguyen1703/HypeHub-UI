import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import DatePicker from 'react-datepicker';

import styles from './TimeSheets.module.scss';
import {
    BsCalendarEvent,
    BsCaretLeftFill,
    BsCaretRightFill,
    BsClipboardMinus,
    BsFillCaretDownFill,
} from 'react-icons/bs';

const cx = classNames.bind(styles);

function TimeSheets() {
    const [startDate, setStartDate] = useState(new Date());

    const [isOpenOption, setIsOpenOption] = useState(false);
    const optionRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', hideOnClickOutside, true);
    }, []);

    // Hide on outside click
    const hideOnClickOutside = (e) => {
        setIsOpenOption(false);
    };

    const handleToggleOption = () => {
        setIsOpenOption(true);
    };

    const timeSheets = [
        {
            date: '01',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
        {
            date: '02',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
        {
            date: '03',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
        {
            date: '04',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
        {
            date: '05',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
        {
            date: '06',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
        {
            date: '07',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
        {
            date: '08',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
        {
            date: '09',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
        {
            date: '10',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('title')}>Time Sheets</span>
                <div className={cx('calendar')}>
                    <BsCalendarEvent className={cx('calendar-icon')} />
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        showFourColumnMonthYearPicker
                    />
                </div>
            </header>

            <div className={cx('table')}>
                <div className={cx('table-head')}>
                    <span className={cx('date')}>Date</span>
                    <span className={cx('time-in')}>Time In</span>
                    <span className={cx('time-out')}>Time Out</span>
                    <span className={cx('total')}>Total Hrs</span>
                    <span className={cx('overtime')}>OT Hrs</span>
                    <span className={cx('status')}>Status</span>
                    <span className={cx('note')}>Note</span>
                    <span className={cx('action')}>Action</span>
                </div>
                {timeSheets.map((item, idx) => (
                    <div key={idx} className={cx('table-row')}>
                        <span className={cx('date')}>{item.date}</span>
                        <span className={cx('time-in')}>{item.timeIn}</span>
                        <span className={cx('time-out')}>{item.timeOut}</span>
                        <span className={cx('total')}>{item.totalHrs}</span>
                        <span className={cx('overtime')}>{item.overtimeHrs}</span>
                        <span className={cx('status')}>{item.status}</span>
                        <span className={cx('note')}>{item.note}</span>
                        <span className={cx('action')}>
                            <BsClipboardMinus />
                        </span>
                    </div>
                ))}
                <div className={cx('pagination')}>
                    <div className={cx('pagination-left')}>
                        <div className={cx('select')}>
                            <span className={cx('selected')} onClick={handleToggleOption}>
                                10
                                <span className={cx('dropdown-icon')}>
                                    <BsFillCaretDownFill />
                                </span>
                            </span>
                            <span className={cx('text-per-page')}>Entries per page</span>
                            {isOpenOption && (
                                <ul ref={optionRef} className={cx('option')}>
                                    <li className={cx('select-option')}>10</li>
                                    <li className={cx('select-option')}>15</li>
                                    <li className={cx('select-option')}>20</li>
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className={cx('pagination-right')}>
                        <button className={cx('prev-btn')}>
                            <BsCaretLeftFill />
                        </button>
                        <div className={cx('page')}>
                            Page
                            <span className={cx('number')}>1</span>
                            of 12
                        </div>
                        <button className={cx('next-btn')}>
                            <BsCaretRightFill />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimeSheets;
