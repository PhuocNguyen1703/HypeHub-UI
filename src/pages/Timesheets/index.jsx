import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './TimeSheets.module.scss';
import Table from '~/components/Table';
import {
    BsCalendarWeek,
    BsCaretLeftFill,
    BsCaretRightFill,
    BsClipboardMinus,
    BsDownload,
    BsFillCaretDownFill,
    BsPatchCheck,
    BsTrash,
} from 'react-icons/bs';

const cx = classNames.bind(styles);

function TimeSheets() {
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

    const timeList = [
        {
            id: 'M#117956789',
            name: 'victoria',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
        },
        {
            id: 'M#117152789',
            name: 'victoria',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
        },
        {
            id: 'M#117918789',
            name: 'victoria',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
        },
        {
            id: 'M#117109789',
            name: 'victoria',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
        },
        {
            id: 'M#111026789',
            name: 'victoria',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('header-left')}>
                    <span className={cx('calendar-icon')}>
                        <BsCalendarWeek />
                    </span>
                    <span className={cx('display-date')}>12/04/2023</span>
                    <button className={cx('apply-btn')}>Apply</button>
                </div>
                <span className={cx('export-btn')}>
                    <BsDownload />
                    Export
                </span>
            </header>
            <div className={cx('table')}>
                <div className={cx('table-head')}>
                    <span className={cx('identify')}>ID</span>
                    <span className={cx('name')}>Name</span>
                    <span className={cx('time-in')}>Time In</span>
                    <span className={cx('time-out')}>Time Out</span>
                    <span className={cx('total')}>Total Hrs</span>
                    <span className={cx('overtime')}>Overtime Hrs</span>
                    <span className={cx('online')}>Online</span>
                    <span className={cx('status')}>Status</span>
                    <span className={cx('action')}>Action</span>
                </div>
                {timeList.map((item) => (
                    <div key={item.id} className={cx('table-row')}>
                        <span className={cx('identify')}>{item.id}</span>
                        <span className={cx('name')}>{item.name}</span>
                        <span className={cx('time-in')}>{item.timeIn}</span>
                        <span className={cx('time-out')}>{item.timeOut}</span>
                        <span className={cx('total')}>{item.totalHrs}</span>
                        <span className={cx('overtime')}>{item.overtimeHrs}</span>
                        <span className={cx('online')}>
                            <span className={cx('dot-online')}></span>
                        </span>
                        <span className={cx('status')}>
                            <span className={cx('pending')}>{item.status}</span>
                        </span>
                        <div className={cx('action')}>
                            <button className={cx('detail-icon')}>
                                <BsClipboardMinus />
                            </button>
                            <button className={cx('confirm-icon')}>
                                <BsPatchCheck />
                            </button>
                        </div>
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
