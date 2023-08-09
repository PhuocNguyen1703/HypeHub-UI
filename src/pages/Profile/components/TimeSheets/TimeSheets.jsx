import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import dayjs from 'dayjs';
import { BsCalendarEvent, BsClipboardMinus } from 'react-icons/bs';
import { FaAngleRight } from 'react-icons/fa';
import MonthYearPicker from '~/components/MonthYearPicker/MonthYearPicker';
import Table from '~/components/Table/Table';
import TimeSheetDetail from './Note/NoteInTimeSheet';
import styles from './TimeSheets.module.scss';

const cx = classNames.bind(styles);

function TimeSheets() {
    const [calendarValue, setCalendarValue] = useState(dayjs().format('MM/YYYY'));
    const [showMonthYearPicker, setShowMonthYearPicker] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [item, setItem] = useState({});

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

    const timeSheetsData = [
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
        {
            date: '11',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
        {
            date: '12',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
        {
            date: '13',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
        {
            date: '14',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
        {
            date: '15',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
        {
            date: '16',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
        {
            date: '17',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
        {
            date: '18',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
        {
            date: '19',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
        {
            date: '20',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
        {
            date: '21',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
        {
            date: '22',
            timeIn: '12:15',
            timeOut: '16:45',
            totalHrs: 12.15,
            overtimeHrs: 1.0,
            status: 'pending',
            note: 'no note',
        },
    ];

    const timeSheetsTableHead = ['date', 'time in', 'time out', 'totalHrs', 'OT', 'status', 'note', 'action'];

    const renderHead = (item, idx) => {
        return (
            <th key={idx}>
                <span>{item}</span>
            </th>
        );
    };

    const renderBody = (item, idx) => {
        return (
            <tr key={idx}>
                <td>{item.date}</td>
                <td>{item.timeIn}</td>
                <td>{item.timeOut}</td>
                <td>{item.totalHrs}</td>
                <td>{item.overtimeHrs}</td>
                <td>{item.status}</td>
                <td>{item.note}</td>
                <td>
                    <button className={cx('detail-btn')} onClick={() => handleToggleDetail(item)}>
                        <BsClipboardMinus />
                    </button>
                </td>
            </tr>
        );
    };

    const handleShowMonthYearPicker = () => {
        setShowMonthYearPicker(true);
    };

    const handleSelectMonthYear = (selected) => {
        setCalendarValue(selected);
    };

    const handleToggleDetail = (item) => {
        console.log(item);
        setShowDetailModal(true);
    };

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <span className={cx('title')}>Time Sheets</span>
                <div className={cx('calendar')}>
                    <span
                        className={cx('select-calendar', showMonthYearPicker && 'open-calendar')}
                        onClick={handleShowMonthYearPicker}
                    >
                        <span className={cx('icon-calendar')}>
                            <BsCalendarEvent />
                        </span>
                        {calendarValue}
                        <span className={cx('icon-dropdown')}>
                            <FaAngleRight />
                        </span>
                    </span>
                    <MonthYearPicker
                        showMonthYearPicker={showMonthYearPicker}
                        isHide={setShowMonthYearPicker}
                        onChange={handleSelectMonthYear}
                    />
                </div>
            </header>

            <div className={cx('table')}>
                <Table
                    limit={10}
                    headData={timeSheetsTableHead}
                    renderHead={renderHead}
                    bodyData={timeSheetsData}
                    renderBody={renderBody}
                />
            </div>
            <TimeSheetDetail show={showDetailModal} setShowDetailModal={setShowDetailModal} />
        </div>
    );
}

export default TimeSheets;
